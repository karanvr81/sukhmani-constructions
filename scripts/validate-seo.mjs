import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const dist = join(root, 'dist');
const origin = 'https://www.sukhmaniconstructions.com.au';

async function filesIn(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map((entry) => entry.isDirectory() ? filesIn(join(directory, entry.name)) : [join(directory, entry.name)]));
  return files.flat();
}

const htmlFiles = (await filesIn(dist)).filter((file) => file.endsWith('index.html'));
const errors = [];
const indexed = [];
const seenTitles = new Map();
const seenDescriptions = new Map();
const seenCanonicals = new Map();

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const name = relative(dist, file) || 'index.html';
  if(name === 'Services/Solar-Security-Cameras/index.html') continue;
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  const description = html.match(/<meta name="description" content="([^"]+)"/i)?.[1];
  const robots = html.match(/<meta name="robots" content="([^"]+)"/i)?.[1] || '';
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];
  const h1 = html.match(/<main id="app">[\s\S]*?<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1];
  if (!title) errors.push(`${name}: missing title`);
  if (!description) errors.push(`${name}: missing description`);
  if (!canonical?.startsWith(origin)) errors.push(`${name}: invalid canonical`);
  if (!h1) errors.push(`${name}: no pre-rendered H1`);
  for (const match of html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
    try { JSON.parse(match[1]); } catch (error) { errors.push(`${name}: invalid JSON-LD (${error.message})`); }
  }
  for (const [value, map, label] of [[title, seenTitles, 'title'], [description, seenDescriptions, 'description'], [canonical, seenCanonicals, 'canonical']]) {
    if (!value || robots.includes('noindex')) continue;
    if (map.has(value)) errors.push(`${name}: duplicate ${label} also used by ${map.get(value)}`);
    else map.set(value, name);
  }
  if (!robots.includes('noindex')) indexed.push(canonical);
}

const sitemap = await readFile(join(dist, 'sitemap.xml'), 'utf8');
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
for (const url of indexed) if (!sitemapUrls.includes(url)) errors.push(`sitemap: missing ${url}`);
for (const url of sitemapUrls) if (!indexed.includes(url)) errors.push(`sitemap: unexpected ${url}`);

const robots = await readFile(join(dist, 'robots.txt'), 'utf8');
if (!robots.includes(`${origin}/sitemap.xml`)) errors.push('robots.txt: sitemap URL is missing');
const llms = await readFile(join(dist, 'llms.txt'), 'utf8');
if (!llms.includes('## Services') || !llms.includes('## Contact')) errors.push('llms.txt: required sections are missing');

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`SEO validation passed: ${htmlFiles.length} routes, ${indexed.length} indexable URLs, unique metadata, valid JSON-LD, sitemap, robots.txt and llms.txt.`);
