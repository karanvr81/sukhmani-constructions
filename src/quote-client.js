(() => {
 const consented=()=>{try{return localStorage.getItem('sukhmani-cookie-choice')==='accept';}catch{return false;}};
 const track=(event,service)=>{
  if(!consented())return;
  const data=service?{service}:{};
  // No identifiers or enquiry contents are sent to analytics. No tracker is loaded here.
  if(typeof window.gtag==='function')window.gtag('event',event,data);
  else if(Array.isArray(window.dataLayer))window.dataLayer.push({event,...data});
 };
 document.addEventListener('click',e=>{const a=e.target.closest('a');if(!a)return;const h=a.getAttribute('href')||'';if(h.startsWith('tel:'))track('phone_click');else if(h.startsWith('https://wa.me/'))track('whatsapp_click');else if(h.startsWith('/Contact/'))track('quote_cta_click');});
 const form=document.querySelector('#quoteForm');if(!form)return;
 const status=form.querySelector('.formStatus'),button=form.querySelector('[type="submit"]'),select=form.elements.service,camera=form.querySelector('.camera-fields');
 let requestId=crypto.randomUUID(),widget;
 const cameraFields=()=>{const show=select.value==='Solar Security Cameras';camera.hidden=!show;camera.querySelectorAll('input').forEach(i=>i.disabled=!show);};
 select.addEventListener('change',cameraFields);cameraFields();
 form.addEventListener('input',()=>{requestId=crypto.randomUUID();status.textContent='';});
 const captcha=form.querySelector('[data-sitekey]');
 window.sukhmaniCaptchaReady=()=>{if(captcha.dataset.sitekey)widget=window.turnstile.render(captcha,{sitekey:captcha.dataset.sitekey,action:'quote',theme:'dark',size:matchMedia('(max-width:380px)').matches?'compact':'flexible'});};
 if(captcha.dataset.sitekey){const script=document.createElement('script');script.src='https://challenges.cloudflare.com/turnstile/v0/api.js?onload=sukhmaniCaptchaReady&render=explicit';script.async=true;script.defer=true;script.onerror=()=>{status.textContent='The security check could not load. Please retry, call or WhatsApp us.';};document.head.append(script);}
 const resetCaptcha=()=>{if(widget!==undefined&&window.turnstile)window.turnstile.reset(widget);};
 form.addEventListener('submit',async e=>{
  e.preventDefault();if(!form.reportValidity())return;
  if(!captcha.dataset.sitekey){status.textContent='Online enquiries are temporarily unavailable. Your details remain here. Please call or WhatsApp us.';return;}
  const token=widget!==undefined?window.turnstile?.getResponse(widget):'';if(!token){status.textContent='Please complete the security check.';return;}
  const file=form.elements.plans.files[0];if(file&&(file.size>2097152||!['application/pdf','image/jpeg','image/png'].includes(file.type))){status.textContent='Attach a PDF, JPG or PNG up to 2 MB.';return;}
  const data=Object.fromEntries(new FormData(form));delete data.plans;delete data['cf-turnstile-response'];data.requestId=requestId;data.turnstileToken=token;
  const controls=[...form.querySelectorAll('input,textarea,select')].map(el=>[el,el.disabled]);controls.forEach(([el])=>el.disabled=true);
  button.disabled=true;button.textContent='Sending…';form.setAttribute('aria-busy','true');status.textContent='Sending your enquiry…';
  try{
   if(file){const content=await new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result.split(',')[1]);reader.onerror=reject;reader.readAsDataURL(file);});data.attachment={type:file.type,content};}
   const response=await fetch('/api/quote',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data),signal:AbortSignal.timeout(25000)});
   const result=await response.json();if(!response.ok||result.ok!==true)throw Error(result.error||'We could not confirm your enquiry was accepted. Retry or call us.');
   status.textContent='Your enquiry has been accepted for sending. Reference: '+result.reference+'. If you need an urgent answer, please call us.';
   track('quote_submission',select.value);button.textContent='Enquiry accepted';
   // Preserve a readable copy. A new input enables a new enquiry with a new ID.
   form.addEventListener('input',()=>{button.disabled=false;button.textContent='Request Quote';},{once:true});
  }catch(error){status.textContent=(error.name==='TimeoutError'||error.name==='AbortError')?'We could not confirm acceptance before the connection timed out. Your details remain here. Retry or call us.':error.message;button.disabled=false;button.textContent='Request Quote';}
  finally{controls.forEach(([el,disabled])=>el.disabled=disabled);form.removeAttribute('aria-busy');resetCaptcha();}
 });
})();
