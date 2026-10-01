import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import vm from 'node:vm';
import { access, rm } from 'node:fs/promises';
import { projectRoutes, projectHtml } from './project-pages.mjs';

const root = new URL('..', import.meta.url).pathname;
const templatePath = join(root, 'src', 'template.html');
const origin = 'https://www.sukhmaniconstructions.com.au';
const logo = 'https://media.base44.com/images/public/694a06c6b1f794336cf2af4b/2094067a1_sukhmani__2_-removebg-preview.png';
const heroImage = 'https://media.base44.com/images/public/694a06c6b1f794336cf2af4b/39f25a1e0_ChatGPTImageSep14202608_28_49PM.png';

const cameraPages = JSON.parse(await readFile(join(root, 'src', 'camera-pages.json'), 'utf8'));
const insights = JSON.parse(await readFile(join(root, 'src', 'insights.json'), 'utf8'));
const projects = JSON.parse(await readFile(join(root, 'src', 'projects.json'), 'utf8'));
const approvedProjects = projectRoutes(projects);
for (const route of approvedProjects.filter(r=>r.project)) for (const photo of route.project.photos) await access(join(root, 'dist', photo.src.slice(1))); 
const serviceRoutes = [
  { key: 'cam', slug: 'Solar-Security-Cameras', name: 'Solar Security Cameras', title: 'Solar Security Cameras Sydney | Sukhmani Constructions', description: 'Solar-powered construction site security cameras with remote viewing, professional installation and support across Sydney, NSW.', image: 'https://media.base44.com/images/public/694a06c6b1f794336cf2af4b/4e22e3705_WhatsAppImage2026-07-07at13605PM.jpg' },
  { key: 'ins', slug: 'Insulation-Installation', name: 'Insulation Installation', title: 'Insulation Installation Sydney | Sukhmani Constructions', description: 'Professional wall, ceiling and underfloor insulation installation for new residential and commercial builds across Sydney, NSW.', image: 'https://media.base44.com/images/public/694a06c6b1f794336cf2af4b/f00a7a8c5_Untitled_design__4_.png' },
  { key: 'sark', slug: 'Sarking-Installation', name: 'Sarking Installation', title: 'Sarking Installation Sydney | Sukhmani Constructions', description: 'Professional roof and wall sarking installation for Sydney construction projects, providing weather protection and improved thermal performance.', image: 'https://media.base44.com/images/public/694a06c6b1f794336cf2af4b/24b9dcf83_WhatsApp_Image_2026-08-01_at_64840_PM.jpeg' },
  { key: 'term', slug: 'Termite-Protection', name: 'Termite Protection', title: 'Pre-Construction Termite Protection Sydney | Sukhmani', description: 'Pre-construction termite protection, pre-slab treatments and physical barrier systems for residential and commercial projects across Sydney.', image: 'https://media.base44.com/images/public/694a06c6b1f794336cf2af4b/6535e8dab_ChatGPT_Image_Aug_1__2026__06_54_32_PM.png' },
  { key: 'clean', slug: 'Construction-Site-Cleaning', name: 'Construction Site Cleaning', title: 'Construction Site Cleaning Sydney | Sukhmani', description: 'Professional builders cleans, handover cleans and construction site clean-up for residential and commercial projects across Sydney, NSW.', image: 'https://media.base44.com/images/public/694a06c6b1f794336cf2af4b/b0a0863fc_generated_image.png' },
];

const serviceFaqs = {
  cam: [
    ['Do solar site cameras need mains power?', 'No. The systems are solar powered, making them suitable for sites where permanent electricity is not yet available.'],
    ['Can builders view cameras remotely?', 'Yes. Connected systems can provide remote viewing from a compatible phone or device.'],
    ['How do I request camera availability?', 'Send the site location, expected hire period and project details through the quote form or WhatsApp.'],
  ],
  ins: [
    ['What types of insulation do you install?', 'We install wall, ceiling and underfloor insulation for new residential and commercial construction.'],
    ['Can you work from project plans?', 'Yes. Send the relevant plans or specifications with your quote request so the required areas and ratings can be reviewed.'],
    ['When should insulation be installed?', 'Timing depends on the application and build sequence, so installation is coordinated with the builder before linings close the relevant areas.'],
  ],
  sark: [
    ['What does sarking do?', 'Sarking forms a protective layer within the roof or wall system that helps manage weather exposure and supports thermal performance.'],
    ['When is sarking installed?', 'It is installed during construction before the relevant roof or wall covering is completed.'],
    ['Do you install roof and wall sarking?', 'Project requirements vary. Send the plans or scope so the required areas and system can be reviewed.'],
  ],
  term: [
    ['When is pre-construction termite protection installed?', 'It is coordinated around the pre-slab and other relevant construction stages before those areas become inaccessible.'],
    ['What termite systems are available?', 'Services include pre-slab treatments and physical barrier systems selected for the project requirements.'],
    ['Is documentation provided?', 'Documentation is provided for applicable completed termite-protection work.'],
  ],
  clean: [
    ['What construction cleaning do you provide?', 'Services include builders cleans, final handover cleans, debris removal and general construction site clean-up.'],
    ['Can cleaning be scheduled before an inspection?', 'Yes, subject to availability. Include the inspection or handover date when requesting a quote.'],
    ['Do you clean residential and commercial sites?', 'We review both residential and commercial construction cleaning enquiries across Sydney.'],
  ],
};

await rm(join(root, 'dist', 'projects'), {recursive:true, force:true});
const routes = [
  ...approvedProjects,
  { path: '/', file: 'dist/index.html', title: 'Sukhmani Constructions | Sydney Building Services', description: 'Solar security cameras, insulation, sarking, termite protection and construction site cleaning for builders and developers across Sydney, NSW.', type: 'WebPage', priority: '1.0' },
  { path: '/Services/', file: 'dist/Services/index.html', title: 'Construction Services Sydney | Sukhmani Constructions', description: 'Solar site security cameras, insulation, sarking, termite protection and professional construction cleaning services across Sydney, NSW.', type: 'CollectionPage', priority: '0.9' },
  { path: '/HowItWorks/', file: 'dist/HowItWorks/index.html', title: 'How It Works | Sukhmani Constructions Sydney', description: 'See the simple five-step process Sukhmani Constructions uses to quote, plan, install and complete construction support services across Sydney.', type: 'WebPage', priority: '0.7' },
  { path: '/FAQ/', file: 'dist/FAQ/index.html', title: 'Construction Services FAQ | Sukhmani Constructions', description: 'Answers about solar security cameras, insulation, sarking, termite protection, site cleaning, quotes and bookings across Sydney.', type: 'WebPage', priority: '0.7' },
  { path: '/Contact/', file: 'dist/Contact/index.html', title: 'Free Construction Quote Sydney | Sukhmani Constructions', description: 'Request a free quote for solar security cameras, insulation, sarking, termite protection or construction site cleaning in Sydney, NSW.', type: 'ContactPage', priority: '0.9' },
  { path: '/About/', file: 'dist/About/index.html', title: 'About Sukhmani Constructions | Sydney', description: 'Learn about Sukhmani Constructions, a Sydney team supporting builders with reliable site security, insulation, sarking and protection services.', type: 'AboutPage', priority: '0.6' },
  { path: '/insights/', file: 'dist/insights/index.html', title: 'Sydney Construction Insights | Sukhmani Constructions', description: 'Practical site-security planning, shutdown preparation and camera-access guides for Sydney builders from Sukhmani Constructions.', type: 'CollectionPage', priority: '0.7', hub: true },
  ...insights.map(article => ({path: article.path, file: `dist${article.path}index.html`, title: article.title, description: article.description, type: 'WebPage', priority: '0.6', article})),
  ...cameraPages.map((camera) => ({path: camera.path, file: `dist${camera.path}index.html`, title: camera.title, description: camera.description, type: 'WebPage', priority: camera.path === '/solar-camera-hire-sydney/' ? '0.9' : '0.7', camera})),
  ...serviceRoutes.filter(s => s.key !== 'cam').map((service) => ({ path: `/Services/${service.slug}/`, file: `dist/Services/${service.slug}/index.html`, title: service.title, description: service.description, type: 'WebPage', priority: '0.9', service })),
  { path: '/PrivacyPolicy/', file: 'dist/PrivacyPolicy/index.html', title: 'Privacy Policy | Sukhmani Constructions', description: 'Read the Sukhmani Constructions privacy policy.', type: 'WebPage', noindex: true },
  { path: '/Terms/', file: 'dist/Terms/index.html', title: 'Terms & Conditions | Sukhmani Constructions', description: 'Read the terms and conditions for Sukhmani Constructions website and services.', type: 'WebPage', noindex: true },
  { path: '/CookiePolicy/', file: 'dist/CookiePolicy/index.html', title: 'Cookie Policy | Sukhmani Constructions', description: 'Read how the Sukhmani Constructions website uses cookies and local storage.', type: 'WebPage', noindex: true },
];

const serviceNames = [
  'Solar Security Cameras',
  'Insulation Installation',
  'Sarking Installation',
  'Termite Protection',
  'Construction Site Cleaning',
];

const faqItems = [
  ['What areas do you service?', 'We service Sydney and surrounding areas. Contact us to confirm availability for your project.'],
  ['Do you provide free quotes?', 'Yes. Quotes are free and carry no obligation.'],
  ['Who do you work with?', 'We work with builders, developers, contractors and homeowners.'],
  ['What insulation do you install?', 'We install wall, ceiling and underfloor insulation for new residential and commercial builds.'],
  ['Does insulation help reduce energy bills?', 'Correctly installed insulation can reduce heating and cooling demand and improve indoor comfort.'],
  ['When should termite protection be installed?', 'Pre-construction systems are coordinated around the slab and relevant build stages.'],
  ['Do you provide compliance certificates?', 'Documentation is provided for applicable termite-protection work.'],
  ['What termite systems do you install?', 'We install pre-slab treatments and physical barrier systems appropriate to the project.'],
  ['Why is sarking important?', 'Sarking forms a protective weather barrier and supports thermal performance.'],
  ['Do the cameras require mains power?', 'No. Our site-camera systems are solar powered.'],
  ['Can I view the cameras remotely?', 'Yes. Remote viewing is available through a connected device.'],
  ['What types of cleaning do you offer?', 'Builders cleans, final handover cleans and general construction site clean-up.'],
  ['How quickly can you start?', 'Timing depends on the service and location, but we typically respond within 24 hours.'],
  ['How do I request a quote?', 'Use the quote form or message us through WhatsApp.'],
];

const business = {
  '@type': 'Organization',
  '@id': `${origin}/#business`,
  name: 'Sukhmani Constructions Pty Ltd',
  legalName: 'Sukhmani Constructions Pty Ltd',
  identifier: {'@type':'PropertyValue',propertyID:'ABN',value:'72 679 226 496'},
  url: `${origin}/`,
  logo,
  image: heroImage,
  telephone: '+61 413 464 047',
  email: 'amjeetsachdeva@gmail.com',
  areaServed: { '@type': 'City', name: 'Sydney' },
  contactPoint: { '@type': 'ContactPoint', telephone: '+61 413 464 047', contactType: 'customer service', areaServed: 'AU', availableLanguage: 'English' },
  knowsAbout: serviceNames,
};

function schemaFor(route) {
  const url = `${origin}${route.path}`;
  const pageNode = { '@type': route.type, '@id': `${url}#webpage`, url, name: route.title, description: route.description, inLanguage: 'en-AU', isPartOf: { '@id': `${origin}/#website` }, about: { '@id': `${origin}/#business` }, primaryImageOfPage: { '@type': 'ImageObject', url: route.service?.image || heroImage } };

  const graph = [
    business,
    { '@type': 'WebSite', '@id': `${origin}/#website`, url: `${origin}/`, name: 'Sukhmani Constructions', inLanguage: 'en-AU', publisher: { '@id': `${origin}/#business` } },
    pageNode,
  ];

  if (route.path !== '/') {
    const breadcrumbItems = [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${origin}/` },
    ];
    if (route.service) breadcrumbItems.push({ '@type': 'ListItem', position: 2, name: 'Services', item: `${origin}/Services/` });
    breadcrumbItems.push({ '@type': 'ListItem', position: breadcrumbItems.length + 1, name: route.service?.name || route.title.split('|')[0].trim(), item: url });
    graph.push({ '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: breadcrumbItems });
  }

  if (route.path === '/Services/') {
    graph.push({ '@type': 'OfferCatalog', name: 'Construction Support Services', itemListElement: serviceNames.map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name, provider: { '@id': `${origin}/#business` }, areaServed: { '@type': 'City', name: 'Sydney' } } })) });
  }

  if (route.service) {
    const serviceId = `${url}#service`;
    pageNode.mainEntity = { '@id': serviceId };
    graph.push({
      '@type': 'Service',
      '@id': serviceId,
      name: route.service.name,
      serviceType: route.service.name,
      description: route.description,
      image: route.service.image,
      url,
      provider: { '@id': `${origin}/#business` },
      areaServed: { '@type': 'City', name: 'Sydney' },
      availableChannel: { '@type': 'ServiceChannel', serviceUrl: `${origin}/Contact/`, servicePhone: { '@type': 'ContactPoint', telephone: '+61 413 464 047', contactType: 'quotes' } },
    });

  }

  if (route.camera?.path === '/solar-camera-hire-sydney/') {
    const id = `${url}#service`;
    pageNode.mainEntity = { '@id': id };
    graph.push({'@type':'Service','@id':id,name:'Solar construction-site security camera hire',serviceType:'Solar camera hire',url,description:route.description,provider:{'@id':`${origin}/#business`},areaServed:{'@type':'City',name:'Sydney'},availableChannel:{'@type':'ServiceChannel',serviceUrl:`${origin}/Contact/`}});
  }
  if(route.article) graph.push({'@type':'Article','@id':`${url}#article`,headline:route.article.heading,description:route.description,mainEntityOfPage:{'@id':`${url}#webpage`},author:{'@id':`${origin}/#business`},publisher:{'@id':`${origin}/#business`},inLanguage:'en-AU',citation:route.article.sources.map(s=>s[1])});
  return { '@context': 'https://schema.org', '@graph': graph };
}

function cameraHtml(camera) {
  const faq = camera.faqs.map(([q,a])=>`<details class="faq-item"><summary class="faq-q">${q}<span aria-hidden="true">+</span></summary><div class="faq-a">${a}</div></details>`).join('');
  return `<section class="hero subhero"><div class="hero-bg"></div><div class="hero-reveal"></div><div class="hero-inner"><div class="eyebrow">SUKHMANI CONSTRUCTIONS · SYDNEY</div><h1>${camera.heading}</h1><p>${camera.intro}</p><div class="cta-row"><a class="btn btn-gold" href="/Contact/">Request a Camera Quote</a><a class="btn btn-outline" href="tel:+61413464047">Call 0413 464 047</a></div></div></section><section class="section dark"><div class="container service-text"><nav aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/solar-camera-hire-sydney/">Solar Camera Hire</a>${camera.path === '/solar-camera-hire-sydney/' ? '' : ' / ' + camera.heading}</nav>${camera.sections.map(([h,p])=>`<section><h2 style="font-size:clamp(28px,4vw,40px);letter-spacing:-.8px;margin-top:45px">${h}</h2>${p.startsWith('<ol') ? p : `<p>${p}</p>`}</section>`).join('')}<section class="faq-section"><h2 style="font-size:32px;letter-spacing:-.8px">Camera Hire Questions</h2>${faq}</section><h2 style="font-size:32px;letter-spacing:-.8px">Plan Your Camera Hire</h2><nav class="service-directory" aria-label="Camera hire guides">${cameraPages.filter(p=>p.path!==camera.path).map(p=>`<a href="${p.path}">${p.heading}</a>`).join('')}<a href="/Contact/">Request a Site Quote</a></nav></div></section>`;
}

function prerenderFor(route, template) {
  if (route.notFound) return `<main id="app"><section class="hero subhero"><div class="hero-bg"></div><div class="hero-inner"><h1>Page Not Found</h1><p>This page is unavailable. Browse our services or contact us about your site.</p><div class="cta-row"><a class="btn btn-gold" href="/Services/">Browse Services</a><a class="btn btn-outline" href="/Contact/">Contact Sukhmani</a></div></div></section></main>`;
  if (route.project || route.projectHub) return `<main id="app">${projectHtml(route)}</main>`;
  if (route.hub) return `<main id="app"><section class="hero subhero"><div class="hero-bg"></div><div class="hero-inner"><div class="eyebrow">SUKHMANI CONSTRUCTIONS · SYDNEY</div><h1>Sydney Construction Insights</h1><p>Practical planning guides for builders managing site security and camera access.</p></div></section><section class="section dark"><div class="container service-text"><h2>Site Planning Guides</h2>${insights.map(a=>`<article><h3><a href="${a.path}">${a.heading}</a></h3><p>${a.description}</p></article>`).join('')}<h2>Camera Hire Guides</h2><nav class="service-directory" aria-label="Camera hire guides">${cameraPages.map(a=>`<a href="${a.path}">${a.heading}</a>`).join('')}</nav></div></section></main>`;
  if (route.article) { const a=route.article; return `<main id="app"><section class="hero subhero"><div class="hero-bg"></div><div class="hero-inner"><div class="eyebrow">SYDNEY CONSTRUCTION INSIGHTS</div><h1>${a.heading}</h1><p>${a.intro}</p></div></section><section class="section dark"><article class="container service-text"><nav aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/insights/">Insights</a> / ${a.heading}</nav>${a.sections.map(([h,p])=>`<section><h2 style="font-size:32px;margin-top:40px">${h}</h2>${p.startsWith('<ol') ? p : `<p>${p}</p>`}</section>`).join('')}<h2>Further Reading</h2><ul>${a.sources.map(([n,u])=>`<li><a href="${u}">${n}</a></li>`).join('')}</ul><p>By Sukhmani Constructions Pty Ltd · Sydney, NSW</p><nav class="service-directory" aria-label="Related planning guides">${insights.filter(x=>x.path!==a.path).map(x=>`<a href="${x.path}">${x.heading}</a>`).join('')}<a href="/insights/">All Construction Insights</a><a href="/Contact/">Discuss Your Site</a></nav></article></section></main>`; }
  if (route.camera) return `<main id="app">${cameraHtml(route.camera)}</main>`;
  const script = template.match(/<script>\s*(const IMG=[\s\S]*?)<\/script>/)[1];
  const definitions = script.slice(0, script.indexOf('    let path=location.pathname'));
  const expression = route.service ? `singleServicePage(services.find(s=>s.key==='${route.service.key}'))` : ({'/':'home()', '/Services/':'servicesPage()', '/HowItWorks/':'how()', '/FAQ/':'faq()', '/Contact/':'contact()', '/About/':'about()', '/PrivacyPolicy/':"policy('privacy')", '/Terms/':"policy('terms')", '/CookiePolicy/':"policy('cookie')"})[route.path];
  const html = vm.runInNewContext(definitions + '\n' + expression, { document: { querySelectorAll: () => [] }, encodeURIComponent });
  return `<main id="app">${html}</main>`;
}

function replaceMeta(html, route) {
  const escapeMeta = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const safeTitle=escapeMeta(route.title), safeDescription=escapeMeta(route.description);
  const url = `${origin}${route.path}`;
  const robots = route.noindex ? 'noindex,follow' : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1';
  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${safeTitle}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${safeDescription}" />`)
    .replace(/<meta name="robots" content="[^"]*" \/>/, `<meta name="robots" content="${robots}" />`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`)
    .replace(/<link rel="alternate" hreflang="en-AU" href="[^"]*" \/>/, `<link rel="alternate" hreflang="en-AU" href="${url}" />`)
    .replace(/<link rel="alternate" hreflang="x-default" href="[^"]*" \/>/, `<link rel="alternate" hreflang="x-default" href="${url}" />`)
    .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${safeTitle}" />`)
    .replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${safeDescription}" />`)
    .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${safeTitle}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${safeDescription}" />`)
    .replace(/<script id="seo-jsonld" type="application\/ld\+json">[\s\S]*?<\/script>/, () => `<script id="seo-jsonld" type="application/ld+json">${JSON.stringify(schemaFor(route)).replaceAll('<', '\\u003c')}</script>`)
    .replace(/<main id="app">[\s\S]*?<\/main>/, () => prerenderFor(route, html));
}

const template = await readFile(templatePath, 'utf8');
const assets = JSON.parse(await readFile(join(root,'src','assets.json'),'utf8'));

const notFoundRoute = {path:'/404/', title:'Page Not Found | Sukhmani Constructions', description:'Find Sukhmani Constructions services or contact the team about your Sydney site.', type:'WebPage', noindex:true, notFound:true};
for (const route of [...routes, {...notFoundRoute, file:'dist/404.html'}]) {
  const output = join(root, route.file);
  await mkdir(dirname(output), { recursive: true });
  let result = replaceMeta(template, route);
  result = result.replace(/<script>\s*const IMG=[\s\S]*?    document.querySelectorAll\('\.wa'\)\.forEach\(a=>a.textContent/, `<script>\n    const WA='https://wa.me/61413464047?text='+encodeURIComponent("Hi Sukhmani Constructions, I'd like a quote.");document.querySelectorAll('.wa').forEach(a=>a.href=WA);\n    document.querySelectorAll('.wa').forEach(a=>a.textContent`);
  result = result.replace(/<meta name="twitter:card" content="summary" \/>/, `<meta name="twitter:card" content="summary_large_image" /><meta property="og:image" content="${origin}/assets/share-camera.jpg" /><meta property="og:image:alt" content="Sukhmani Constructions solar site camera" /><meta name="twitter:image" content="${origin}/assets/share-camera.jpg" />`);
  result = result.replace(/<img([^>]*?)>/g, (tag) => tag.includes('service-image') ? tag.replace('loading="lazy"', 'loading="eager" fetchpriority="high"') : tag);
  if (approvedProjects.length) result = result.replace('<a href="/insights/">Construction Insights</a>', '<a href="/insights/">Construction Insights</a><a href="/projects/">Projects</a>');
  result = result.replaceAll('href="/Services/Solar-Security-Cameras/"', 'href="/solar-camera-hire-sydney/"');
  for (const asset of assets.filter(a=>a.path)) {
    result = result.replaceAll(asset.url, asset.path);
    result = result.replaceAll(`"url":"${asset.path}"`, `"url":"${origin}${asset.path}"`).replaceAll(`"logo":"${asset.path}"`, `"logo":"${origin}${asset.path}"`).replaceAll(`"image":"${asset.path}"`, `"image":"${origin}${asset.path}"`);
    result = result.replace(/<img[^>]*>/g, tag => tag.includes(`src="${asset.path}"`) ? tag.replace('<img ', `<img width="${asset.width}" height="${asset.height}" `) : tag);
  }
  result = result.replace(/(<img[^>]*src="\/assets\/4e22e3705[^>]*alt=")[^"]*(")/g, '$1Pole-mounted solar camera beside construction scaffolding$2');
  result = result.replace(/(<img[^>]*src="\/assets\/(?:b0a0863fc|bb2d987bd|304573c8b|6535e8dab|f00a7a8c5)[^>]*alt=")[^"]*(")/g, '$1Construction service illustration$2');
  await writeFile(output, result);
}

const sitemapRoutes = routes.filter((route) => !route.noindex);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapRoutes.map((route) => `  <url><loc>${origin}${route.path}</loc><changefreq>monthly</changefreq><priority>${route.priority}</priority></url>`).join('\n')}\n</urlset>\n`;
await writeFile(join(root, 'dist', 'sitemap.xml'), sitemap);
await writeFile(join(root, 'dist', 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`);
await writeFile(join(root, 'dist', 'llms.txt'), `# Sukhmani Constructions

Sukhmani Constructions is a Sydney, NSW construction-services business supporting builders, developers and contractors with site security, insulation, sarking, termite protection and site cleaning.

## Services
${cameraPages.map(p=>`- ${p.heading}: ${origin}${p.path}`).join('\n')}
${serviceRoutes.filter(s=>s.key!=='cam').map((service) => `- ${service.name}: ${origin}${service.key === 'cam' ? '/solar-camera-hire-sydney/' : `/Services/${service.slug}/`}`).join('\n')}

## Contact
Website: ${origin}/
Phone: +61 413 464 047
Email: amjeetsachdeva@gmail.com
Service area: Sydney, NSW
`);

console.log(`Generated ${routes.length} SEO-ready routes, sitemap.xml and robots.txt`);
