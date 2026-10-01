# Sukhmani Constructions — SEO implementation and rollout

Prepared 1 October 2026, Sydney time. This report distinguishes code changes from changes on the public custom domain. No rankings, indexed-page counts, traffic, leads or backlink totals were available from authenticated measurement systems.

## Audit of the existing public site

**CRITICAL:** All ten inspected existing pages returned canonicals on the old `sukhmani-constructions-sydney.karanvr81.chatgpt.site` origin. The live robots file and sitemap also referenced that origin. Structured data and social URLs had the same mismatch. The correct existing redirect destination is `https://www.sukhmaniconstructions.com.au/`; the bare HTTPS domain redirects there with 308.

**HIGH:** Static route HTML contained a short hero and service links; the complete page was constructed in JavaScript. The build now renders the complete content directly, which also serves systems that do not execute JavaScript. Google can render JavaScript; this finding does not establish that Google previously failed to index the site.

**HIGH:** Existing camera claims included 4K, 4G/5G, 48-hour installation, weekly/monthly terms and unsupported testimonials attributed to James W., Ahmed K. and Raj S. Statistics differed from other supplied business information. Those claims were not promoted into schema and unsupported camera claims, testimonials and counters were replaced. Generated before/after images were presented as completed work; they are now labelled illustrations.

**MEDIUM:** Large PNG assets, external motion-library requests, missing local favicon assets in the recovered source, form labels without explicit associations, JavaScript-only FAQ toggles and a mailto quote form that did not explain its delivery path.

Already working: meaningful HTML response, unique existing titles/descriptions, crawlable navigation, real text robots response, XML sitemap response, HTTPS redirect, privacy-page noindex directives and a real 404 for a random unknown path. Source has desktop/mobile CSS, reduced-motion handling and direct WhatsApp access.

Preserved: homepage hero wording, colours, typography, layout rules, header, animations, mobile navigation, contact paths and existing services. Visible changes address credibility, accessibility and camera discovery. No suburb doorway pages or extra near-duplicate camera pages were created.

## Implemented source changes

1. Canonical, hreflang, Open Graph URL, sitemap, robots reference and JSON-LD IDs consistently use the www custom domain.
2. Four distinct camera routes: `/solar-camera-hire-sydney/`, `/how-camera-hire-works/`, `/construction-camera-hire-cost/`, `/site-camera-no-wifi-power/`.
3. The old camera-service URL redirects to the new primary route through Vercel configuration and static-host redirects. A noindex HTML redirect fallback remains for hosts that do not process redirects.
4. Existing pages are fully rendered at build time. Runtime JavaScript enhances the HTML rather than replacing its content. Homepage inline JavaScript shrank from 35,015 to 3,948 bytes.
5. Organization with verified legal name and ABN, WebSite, page entities, Service, BreadcrumbList and ImageObject use connected IDs. Organization was chosen instead of inventing a visitor-facing address or assuming general-contractor licensing. No fake ratings, review markup or unverified social profiles were added.
6. FAQs remain visible native disclosures. FAQPage rich-result markup was removed: Google's current documentation says FAQ rich results are no longer displayed. Questions and direct answers are still useful content.
7. Contextual camera-guide links, a primary camera footer link and a hire-guide link. All important camera routes are reachable from the homepage or its linked primary page.
8. Self-hosted WebP versions of the existing images; dimensions prevent intrinsic image shifts. Total source-image bytes fell from 11,915,809 to 2,344,392 (about 80%). Original appearance is retained subject to lossy compression and a 1600px cap. Core Web Vitals improvements are not measured.
9. Local pinned Lenis files preserve existing smooth scrolling. Font loading remains as before. Hero preload, below-fold lazy loading and image decoding remain.
10. Existing official logo used for local favicons. Social image uses the existing camera photograph; no synthetic project evidence was created.
11. Accessible form labels, skip link, focus visibility, mobile-menu expanded state/Escape handling and native FAQ interactions. The quote form explicitly opens the email app; it does not claim to submit to a server or automatically attach plans.
12. Internal case-study template for future genuine installation evidence, excluded from public build output.
13. Static-host content types and Vercel build/redirect/cache configuration prepared. No private operational information, invoices, credentials or customer data added.

Key files: `src/template.html`, `src/camera-pages.json`, `src/assets.json`, `scripts/generate-routes.mjs`, `scripts/validate-seo.mjs`, `vercel.json`, generated `dist/**`, `docs/**`.

The topic cluster deliberately reuses the primary landing page for construction-site cameras, solar site cameras and builders. Separate pages for these closely overlapping phrases would add repetition without new intent.

## Evidence and validation

ABN Lookup was fetched directly: ABN 72 679 226 496 belongs to SUKHMANI CONSTRUCTIONS PTY LTD, active and GST-registered from 18 July 2024, main business location NSW 2765. This is not proof of four years' company operation or any trade licence. Source: https://abr.business.gov.au/ABN/View?abn=72679226496

Checks passed: 17 canonical pages (14 indexable and three legal pages excluded); unique metadata; one main H1 per page; nonempty content sections; valid JSON-LD syntax; sitemap parity; robots reference; 694 local links/assets resolved; 49 images have alt text; seven forms have associated labels; inline JavaScript parses across all output routes. The redirect fallback is an additional nonindexable HTML file, not an eighteenth canonical page.

**Not verified:** external schema.org validator / Google Rich Results Test, desktop/mobile rendered appearance, interaction delivery, visual before/after screenshots, actual email receipt, Core Web Vitals, field performance, deployed custom-domain redirects, Google/Bing indexing or search rankings. Browser binary download failed. Do not interpret static checks as browser acceptance.

## Publication status and required rollout

The recovered source belongs to the original ChatGPT Site. The custom domain is served by a separate Vercel deployment. Updating the former does not establish that the custom domain changed.

Vercel project/deployment details are readable when the optional team argument is omitted. The advertised deploy tool fails with `Tool deploy_to_vercel not found`. A CLI token is needed for a CLI rollout if no sufficient authenticated deployment operation is available. Do not create a new Vercel project or change DNS to work around this.

**CRITICAL:** Publish this exact source to the existing Vercel project that actually owns `www.sukhmaniconstructions.com.au`, first confirming the domain mapping. The readable project's alias list did not include the custom domain; do not assume the name alone establishes ownership. Use `vercel.json` in this package, build with Node, and deploy `dist` as output. For a static-file upload flow, use the generated dist and apply the legacy camera redirect in the host settings.

**HIGH:** Before promotion, run desktop/mobile browser acceptance and screenshots. Open Home, Services, Contact, FAQ and all four camera pages; test menu, keyboard controls, FAQ, phone and WhatsApp links. Send one controlled test quote and verify receipt. The form currently requires an email client and a final Send action; replacing it with a server-backed form needs a confirmed recipient/delivery provider.

**CRITICAL:** After custom-domain deployment, fetch robots.txt and sitemap.xml and verify their content types and www URLs. Inspect page source for full body content and canonical URLs. Check the old camera URL's permanent redirect, unknown-path 404, HTTP→HTTPS, bare→www and slash normalization. Remove or redirect public duplicate deployments where controllable; preserve private Site access.

## Competitor gap analysis — public-page evidence, not a ranking audit

Search retrieved these providers for the query family. Their position in this tool is not a stable Google rank. Backlink inventories, structured-data validation and speed scores were not available.

| Provider and inspected page | Public content observed | Response in this build |
|---|---|---|
| Sydney Site Cam / SiteLock — https://sydneysitecam.com.au/ | Explicit Sydney solar hire terminology, starting price, remote viewing, alerts and time-lapse | Clear service/location landing page and direct answers; no unsupported time-lapse or monitoring promise |
| JobCam — https://jobcam.com.au/locations/sydney | Sydney-specific construction-camera page, installation, solar/connectivity detail and regional links | Sydney service identity, distinct hire guide, placement/connectivity information; no copied suburb or regional pages |
| Oz Technologies — https://oztechnologiesgroup.com.au/cctv-rental-construction | Quote path, hire packages, process, FAQ, identity details | Quote inputs, process/cost guide and verified ABN; avoid copying potentially inconsistent package claims |
| Sitesec — https://sitesec.com.au/site-security-cameras-for-hire-nsw/ | NSW-specific hire, solar/4G and application detail | Local coverage and site constraints, without assuming equivalent supplied equipment |
| Hexagon Valley — https://hexagonvalley.com.au/services/security-cameras/construction-site-camera-hire/ | Package detail, installation/delivery process, FAQ, camera configurations | Useful setup/hire explanations and scope checklist; no claim that Sukhmani offers identical specs |
| Call 2 Hire — https://www.call2hire.com.au/equipment-hire/site-security-camera-hire | Sydney-specific camera page, equipment specifications, availability enquiry | Clear camera enquiry route and page architecture; specs await verification |

Remaining advantage to earn: real installation evidence, verified equipment specifications, customer reviews, authoritative third-party mentions and measurable lead performance. Metadata alone cannot supply these.

## Google Business Profile — manual owner access

**HIGH:** Confirm the genuine business name, public phone, hours, service area and custom-domain website. If customers do not visit the premises, use a service-area profile and keep the residential address hidden. Do not add camera keywords to the business name.

**HIGH:** Choose categories from the current Australian selector based on the actual main business. Camera hire may warrant an equipment-rental category if available and accurate; security-system supply and building services should be secondary only when true. The authenticated category selector was unavailable, so exact category names/availability have not been verified. Do not blindly switch a construction company's primary category for one SEO phrase.

Prepared description: “Sukhmani Constructions Pty Ltd supports builders and construction companies across Sydney with solar-powered construction-site camera hire and building support services. Our camera hire service includes site setup planning, installation and remote viewing arrangements. We also provide insulation, sarking, termite protection and construction site cleaning. Contact us with your site suburb, project requirements and expected hire period.” Confirm non-camera service scopes before using.

Prepared camera service description: “Solar-powered construction-site camera hire for Sydney builders. We review your site coverage needs, agree the hire setup and coordinate installation and remote viewing. Send your site suburb and expected hire period for a quote.”

**HIGH:** Upload real camera installations, equipment close-ups and installer/team photographs with permission. Avoid visible customer records, licence plates, credentials or site addresses. Add real captions and accurate locations only.

**HIGH:** Ask all genuine customers for feedback after service, without incentives or selecting only happy customers. Suggested request: “Pajji, we’ve recently launched our website. If you’ve used our service, could you leave us a Google review about your experience? It would help us a lot: https://g.page/r/CeC9OM2XR5B1ECE/review”. No requests were sent. Confirm that this supplied review link belongs to the intended company before sending.

## Search Console and Bing — manual owner access

**CRITICAL:** In Google Search Console, create/verify the domain property `sukhmaniconstructions.com.au` using the exact DNS TXT value supplied by Google. Add it at the current authoritative DNS provider, retaining existing records. No verification token has been fabricated or installed.

**HIGH:** After deployment, submit `https://www.sukhmaniconstructions.com.au/sitemap.xml`. Inspect the homepage and four camera pages; compare declared and Google-selected canonical, run Live Test and request indexing for key pages. Review Page Indexing, Crawl Stats and structured-data reports. Sitemap submission and robots access do not guarantee indexing.

**HIGH:** Verify in Bing Webmaster Tools, either with supported Search Console import or Bing's own verification procedure. Submit the same sitemap; use URL Inspection and site scan. Claim/update the business listing through Bing's current business listing portal. No credentials or integrations were available.

## External authority plan

| Priority | Opportunity | Concrete action |
|---|---|---|
| HIGH | Google Business Profile and Bing business listing | Correct identity, website and service information; avoid duplicate profiles |
| HIGH | Existing builder/supplier relationships | Ask consenting partners to mention an actual installation or supplier relationship on their own website with a natural link; no messages sent |
| HIGH | Genuine installation case studies | Publish two or three documented sites using the internal template and original photography |
| MEDIUM | Yellow Pages — https://www.yellowpages.com.au/ | Search for existing listing before claiming/creating; homepage exposes a free-listing path. Keep company/phone/site consistent |
| MEDIUM | True Local — https://www.truelocal.com.au/ | Check existing record and listing options; same operator as Yellow Pages, so do not treat as two independent strong endorsements |
| MEDIUM | Apple Business — https://business.apple.com/ | Former Business Connect URL redirects here. Check current service-area eligibility and available presence options before applying |
| MEDIUM | Real business social profiles | Complete owned Facebook/Instagram/LinkedIn information consistently, then add verified sameAs URLs to schema |
| MEDIUM | NSW construction associations/local chambers | Check actual membership eligibility and directory benefit; do not buy membership solely for a backlink. Master Builders NSW membership endpoint could not be inspected |
| LOW | Local editorial coverage | Pitch a documented business/site story to a relevant local outlet; do not manufacture awards, press releases or endorsements |

No directory submissions, paid memberships, review requests or outreach messages were made. Competitor referring domains were not measured; there is no fabricated backlink comparison.

## Measurement and 30/60/90-day plan

No authenticated traffic baseline exists yet. Record unknown metrics as unavailable, not zero. Technical baseline files are included in `docs/live-baseline.json`, `docs/performance.json` and `docs/static-qa.json`.

**First 30 days:** CRITICAL rollout and domain verification; HIGH browser acceptance and indexing checks; HIGH weekly Search Console exports by page/query/device/country; HIGH GBP corrections and consistent customer review requests; MEDIUM first verified case study and directory cleanup.

**Days 31–60:** HIGH assess impressions and qualified leads for the primary camera page; improve answers using real customer questions; HIGH add genuine installation evidence and verified specifications; MEDIUM seek relevant partner mentions and complete a second case study. Do not expand into dozens of suburb pages.

**Days 61–90:** HIGH compare consecutive 28-day windows, accounting for low-volume noise; check Google-selected canonicals and indexed pages; HIGH evaluate lead quality and conversions before writing more pages; MEDIUM expand only where a distinct query intent and real information justify it.

Weekly metrics: indexed canonical pages, organic impressions/clicks/CTR/average position, branded vs nonbranded queries, quote enquiries, calls, WhatsApp enquiries, qualified builders and resulting hires. Attribute leads with a simple enquiry log or a verified analytics setup; a click is not a completed lead. No tracking provider or identifiers were invented.

Track these query families: solar camera hire Sydney; solar security camera hire Sydney; construction site camera hire Sydney; construction cameras Sydney; solar site cameras Sydney; site security camera hire Sydney; building site camera hire Sydney; temporary CCTV hire Sydney. Segment target pages rather than treating sitewide average position as a rank.

Monthly neutral AI discovery checks: “solar site camera hire Sydney”, “construction site camera companies Sydney”, “solar security camera hire for builders Sydney”. Record date, engine/model, location context, returned companies, URLs cited and query. Do not put Sukhmani's name in the discovery query. Search-engine snippets are not an actual ChatGPT answer-engine baseline; none was fabricated. No recurring automation was created.

## Claims to confirm

**HIGH:** Public phone/email and operating hours; camera model/specifications; connectivity and SIM/data inclusions; recording retention and recording mode; night vision/alerts/audio/siren features; supported app/device access; minimum hire and advance billing terms; support, collection and damage terms; price/GST/install inclusions; exact service coverage; published response-time commitments.

**MEDIUM:** Original testimonials and permission; audited camera/client/site totals; experience predating company registration; rights to all photos; trade documentation/warranties and non-camera services. Unsupported counters/testimonials/specs remain out of the new build until evidence is supplied.

**LOW:** Verified social profile links and association membership. Add only real owned profiles and memberships.

## Primary policy sources checked

- AI search visibility and content: https://developers.google.com/search/docs/appearance/ai-features
- Current FAQ feature changes: https://developers.google.com/search/updates
- Business representation/categories/service-area guidance: https://support.google.com/business/answer/3038177
- Local ranking principles: https://support.google.com/business/answer/7091
- Genuine reviews: https://support.google.com/business/answer/3474122
- Domain verification: https://support.google.com/webmasters/answer/9008080

Search visibility depends on relevance, evidence, authority and indexing over time. The build improves eligibility and clarity; it does not guarantee first place, rich results, AI citations or leads.
