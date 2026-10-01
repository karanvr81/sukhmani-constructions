const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function projectRoutes(records) {
  const live = records.filter(p => p.status === 'approved');
  const slugs = new Set();
  for (const p of live) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(p.slug || '') || slugs.has(p.slug)) throw new Error('Project needs a unique safe slug');
    slugs.add(p.slug);
    for (const key of ['title','projectType','generalLocation','customerType','challenge','solution','configuration','reason','installation','capabilities','outcome']) if (typeof p[key] !== 'string' || !p[key].trim()) throw new Error(`Project ${p.slug}: missing ${key}`);
    if (p.factsVerified !== true || p.publicationApproved !== true) throw new Error(`Project ${p.slug}: verified facts and publication approval required`);
    if (p.customerName && p.customerNameApproved !== true) throw new Error(`Project ${p.slug}: customer-name permission required`);
    if (!Array.isArray(p.photos) || !p.photos.length) throw new Error(`Project ${p.slug}: real photographs required`);
    for (const photo of p.photos) {
      if (photo.realSukhmaniPhoto !== true || photo.publicationApproved !== true || !photo.alt?.trim() || !photo.caption?.trim() || !/^\/assets\/[a-zA-Z0-9/_-]+\.(webp|jpe?g|png)$/.test(photo.src || '') || !Number.isInteger(photo.width) || !Number.isInteger(photo.height) || photo.width < 1 || photo.height < 1) throw new Error(`Project ${p.slug}: incomplete approved photograph`);
    }
    if (!['/solar-camera-hire-sydney/','/Services/Insulation-Installation/','/Services/Sarking-Installation/','/Services/Termite-Protection/','/Services/Construction-Site-Cleaning/'].includes(p.relatedService)) throw new Error(`Project ${p.slug}: invalid related service`);
  }
  if (!live.length) return [];
  return [{path:'/projects/',file:'dist/projects/index.html',title:'Sydney Project Work | Sukhmani Constructions',description:'Approved examples of Sukhmani Constructions work for Sydney building projects, with actual scope and installation photographs.',type:'CollectionPage',priority:'0.7',projectHub:live}, ...live.map(p=>({path:`/projects/${p.slug}/`,file:`dist/projects/${p.slug}/index.html`,title:`${p.title} | Sukhmani Constructions`,description:`${p.projectType} in ${p.generalLocation}: ${p.challenge}`.slice(0,160),type:'WebPage',priority:'0.6',project:p}))];
}
export function projectHtml(route) {
  if (route.projectHub) return `<section class="hero subhero"><div class="hero-bg"></div><div class="hero-inner"><h1>Sydney Project Work</h1><p>Approved examples of actual Sukhmani work.</p></div></section><section class="section dark"><div class="container service-text"><nav aria-label="Breadcrumb"><a href="/">Home</a> / Projects</nav>${route.projectHub.map(p=>`<article><h2><a href="/projects/${p.slug}/">${escape(p.title)}</a></h2><p>${escape(p.projectType)} · ${escape(p.generalLocation)}</p></article>`).join('')}</div></section>`;
  const p=route.project;
  return `<section class="hero subhero"><div class="hero-bg"></div><div class="hero-inner"><h1>${escape(p.title)}</h1><p>${escape(p.projectType)} · ${escape(p.generalLocation)} · ${escape(p.customerType)}</p></div></section><section class="section dark"><article class="container service-text"><nav aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/projects/">Projects</a> / ${escape(p.title)}</nav>${p.customerName?`<p>Customer: ${escape(p.customerName)}</p>`:''}${[['challenge','The Challenge'],['reason','Why the Service Was Needed'],['solution','Sukhmani’s Solution'],['configuration','Supplied Configuration'],['installation','Installation Details'],['capabilities','Relevant Capabilities'],['outcome','Documented Outcome']].map(([key,label])=>`<section><h2 style="font-size:32px;margin-top:40px">${label}</h2><p>${escape(p[key])}</p></section>`).join('')}<h2>Project Photographs</h2>${p.photos.map(photo=>`<figure><img src="${escape(photo.src)}" alt="${escape(photo.alt)}" width="${photo.width}" height="${photo.height}" loading="lazy" decoding="async" style="max-width:100%;height:auto"><figcaption>${escape(photo.caption)}</figcaption></figure>`).join('')}<nav class="service-directory" aria-label="Project actions"><a href="${p.relatedService}">Related Service</a><a href="/Contact/">Request a Quote</a></nav></article></section>`;
}
