import { createHash } from 'node:crypto';

const services = new Set(['Solar Security Cameras','Insulation Installation','Sarking Installation','Termite Protection','Construction Site Cleaning','Multiple Services']);
const maxBytes = 3000000;
const json = (status, body) => new Response(JSON.stringify(body), {status, headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'}});
const text = (value, limit) => typeof value === 'string' && value.length <= limit && !/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(value) ? value.trim() : null;

// Fail closed until delivery and bot protection have been connected in Vercel.
export function createQuoteHandler(env = process.env, send = fetch) {
 return async function handle(request) {
  if(request.method !== 'POST') return new Response(null,{status:405,headers:{Allow:'POST','Cache-Control':'no-store'}});
  const allowed = new Set(['https://www.sukhmaniconstructions.com.au','https://sukhmaniconstructions.com.au','https://sukhmani-constructions.vercel.app']);
  if(env.VERCEL_URL) allowed.add('https://' + env.VERCEL_URL);
  if(env.NODE_ENV !== 'production' && env.QUOTE_LOCAL_TEST === '1') allowed.add('http://127.0.0.1:4173');
  if(!allowed.has(request.headers.get('origin'))) return json(403,{error:'Please submit the form from our website.'});
  if(!request.headers.get('content-type')?.toLowerCase().startsWith('application/json')) return json(415,{error:'Unsupported submission format.'});
  if(Number(request.headers.get('content-length')) > maxBytes) return json(413,{error:'Please use a smaller attachment (maximum 2 MB).'});
  let body;
  try {
   const reader=request.body?.getReader(); if(!reader) throw Error();
   const chunks=[];let length=0;
   for(;;){const {value,done}=await reader.read();if(done)break;length+=value.length;if(length>maxBytes){await reader.cancel();return json(413,{error:'Please use a smaller attachment (maximum 2 MB).'});}chunks.push(Buffer.from(value));}
   body=JSON.parse(Buffer.concat(chunks).toString('utf8'));
  } catch {return json(400,{error:'We could not read the request. Please try again.'});}
  if(!body || typeof body !== 'object' || Array.isArray(body)) return json(400,{error:'Invalid quote request.'});
  if(body.website) return json(400,{error:'We could not accept this request. Please call or WhatsApp us.'});
  const limits={name:100,company:120,email:254,phone:30,service:80,site:120,details:3000,startDate:10,cameraQuantity:3,hireDuration:100};
  const data={};for(const [key,limit] of Object.entries(limits)){data[key]=text(body[key]??'',limit);if(data[key]===null)return json(400,{error:'Please check the length and format of your fields.'});}
  if(data.name.length<2 || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(data.email) || /[\r\n]/.test(data.email) || !/^[+()\d\s.-]{6,30}$/.test(data.phone) || !services.has(data.service) || data.site.length<2 || data.details.length<10) return json(400,{error:'Please enter your name, valid email and phone, service, site suburb/postcode and at least 10 characters of project details.'});
  if(data.startDate && (!/^\d{4}-\d{2}-\d{2}$/.test(data.startDate) || !Number.isFinite(Date.parse(data.startDate)) || new Date(data.startDate).toISOString().slice(0,10)!==data.startDate)) return json(400,{error:'Please check your preferred start date.'});
  if(data.service!=='Solar Security Cameras'){data.cameraQuantity='';data.hireDuration='';}
  if(data.cameraQuantity && !/^[1-9]\d{0,2}$/.test(data.cameraQuantity)) return json(400,{error:'Please enter a camera quantity between 1 and 999.'});
  if(!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(body.requestId??''))return json(400,{error:'Please refresh the page and try again.'});
  let attachments;
  if(body.attachment){
   const a=body.attachment;
   if(typeof a.content!=='string' || a.content.length>2800000 || !/^[A-Za-z0-9+/]*={0,2}$/.test(a.content))return json(400,{error:'Invalid attachment.'});
   const bytes=Buffer.from(a.content,'base64');
   const types={'application/pdf':bytes.subarray(0,5).toString()==='%PDF-','image/jpeg':bytes[0]===255&&bytes[1]===216&&bytes[2]===255,'image/png':bytes.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10]))};
   if(!Object.hasOwn(types,a.type) || !types[a.type] || bytes.length<8 || bytes.length>2097152)return json(400,{error:'Attach a PDF, JPG or PNG up to 2 MB.'});
   const extension={'application/pdf':'pdf','image/jpeg':'jpg','image/png':'png'}[a.type];
   // Fixed filename prevents unsafe names and MIME/header injection. Never execute uploads.
   attachments=[{filename:'project-plan.'+extension,content:bytes.toString('base64')}];
  }
  if(!env.RESEND_API_KEY || !env.QUOTE_FROM_EMAIL || !env.QUOTE_TO_EMAIL || !env.TURNSTILE_SECRET_KEY) return json(503,{error:'Online enquiries are temporarily unavailable. Your details remain in the form. Please call or WhatsApp us.'});
  if(typeof body.turnstileToken!=='string' || body.turnstileToken.length>2048 || !body.turnstileToken) return json(400,{error:'Please complete the security check.'});
  try{
   const verification=await send('https://challenges.cloudflare.com/turnstile/v0/siteverify',{method:'POST',body:new URLSearchParams({secret:env.TURNSTILE_SECRET_KEY,response:body.turnstileToken}),signal:AbortSignal.timeout(8000)});
   const check=await verification.json();
   const hostname=check.hostname;
   if(!verification.ok || !check.success || check.action!=='quote' || !allowed.has('https://'+hostname))return json(400,{error:'The security check expired or failed. Please complete it again.'});
   const message=Object.entries(data).map(([k,v])=>k+': '+v).join('\n\n');
   const hash=createHash('sha256').update(JSON.stringify({data,attachments})).digest('hex');
   const delivery=await send('https://api.resend.com/emails',{method:'POST',headers:{Authorization:'Bearer '+env.RESEND_API_KEY,'Content-Type':'application/json','Idempotency-Key':'quote/'+body.requestId+'/'+hash},body:JSON.stringify({from:env.QUOTE_FROM_EMAIL,to:[env.QUOTE_TO_EMAIL],reply_to:data.email,subject:'Website quote request — '+data.service,text:message,...(attachments?{attachments}:{})}),signal:AbortSignal.timeout(10000)});
   const receipt=await delivery.json();
   if(!delivery.ok || typeof receipt.id!=='string' || !receipt.id) return json(502,{error:'We could not confirm your enquiry was accepted. Your details remain in the form. Retry or call us.'});
   // This means the email provider accepted the message, not confirmed inbox delivery.
   return json(200,{ok:true,reference:body.requestId.slice(0,8)});
  }catch{return json(502,{error:'We could not confirm your enquiry was accepted. Your details remain in the form. Retry or call us.'});}
 };
}
export default {fetch:createQuoteHandler()};
