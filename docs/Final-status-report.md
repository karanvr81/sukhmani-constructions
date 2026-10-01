# Sukhmani Constructions — implementation-gap status

Audit: 1 October 2026 Sydney. This report supersedes assumptions about production in earlier reports. “Prepared” and “verified live” are separate throughout.

## 1. ACTUALLY DEPLOYED

**No new changes from this request are verified on www.sukhmaniconstructions.com.au.** Production deployment is blocked by missing CLI authentication, despite a signed-in dashboard. The correct existing project/domain binding was confirmed, the existing production deployment retained for rollback, and public snapshots saved. No DNS/email changes were made. See `Production-deployment.md` for the exact project, retained deployment and continuation commands.

Public HTTP audit (`phase3-public-audit.json`) checked 24 URLs plus three redirect entry points. Homepage/contact/existing services return 200, but all nine camera/Insights URLs added in the earlier passes still return 404. Raw source on existing pages still has old ChatGPT-domain canonicals and only about 300 characters in main before JavaScript. robots/sitemap/llms endpoints return 200, which alone does not establish that their contents are correct. HTTP redirects to HTTPS; apex HTTPS redirects to www with 308.

Desktop browser inspection confirmed the old homepage/contact render. An empty quote submission focused the required name field; no enquiry was sent. Browser errors observed were from the browser extension, not demonstrated site-code errors. Actual mobile-device testing, the mobile menu, and post-deployment checks remain unverified. A keyboard zoom attempt did not establish a mobile viewport. No performance score or Core Web Vitals metric was measured.

Prepared/source implementation completed this request: reusable consent-gated project hub/detail renderer, owner specification/pricing/project forms, photograph-provenance ledger, priority indexing list, improved metadata escaping and JSON-LD script safety, and a branded noindex 404 page. With zero approved projects, no projects hub/example is published. Existing design/content structure remains; no new articles or suburb pages were added. All changes still require the real-domain release. Local SEO validation passes for 22 canonical pages (19 indexable), with a legacy redirect fallback and separate 404 page. Tests verified empty/draft projects remain unpublished, approved records generate routes, unsafe text is escaped, and missing customer/photo permission blocks publication. No test fixture was saved as a real project.

## 2. INDEXING STATUS

Google/Bing account access and URL indexing reports were not inspected. No sitemap or indexing request was submitted. Existing-page indexation is unknown; the nine new URLs cannot be indexed as the intended pages while returning 404. No search snippet was treated as definitive indexing proof.

Exact owner sequence:

| Order | Tool | Exact action / URL |
|---|---|---|
| 1 | Vercel + public HTTP/browser | Release and verify `https://www.sukhmaniconstructions.com.au/` and every URL in `priority-indexing.csv` |
| 2 | Public sitemap | Confirm `https://www.sukhmaniconstructions.com.au/sitemap.xml` contains the 19 prepared canonical indexable URLs; no preview origin, legal noindex pages, 404 or draft projects |
| 3 | Google Search Console (`https://search.google.com/search-console`) | Select verified domain property `sukhmaniconstructions.com.au`; owner verifies property if unavailable |
| 4 | Search Console > Sitemaps | Submit the exact sitemap URL above, record Success/errors; submission is not indexing |
| 5 | Search Console > URL Inspection | Follow priorities in `priority-indexing.csv`; inspect stored status and live fetch, compare selected/declared canonical, request indexing where appropriate |
| 6 | Search Console > Page Indexing | Review excluded/failed URLs and actual reasons; record dates and statuses in the CSV |
| 7 | Bing Webmaster Tools (`https://www.bing.com/webmasters/`) | Select/verify this domain and submit the same sitemap |
| 8 | Bing URL Inspection / indexing reports | Inspect the same priority URLs, resolve actual fetch/canonical errors and record indexed status separately from submission |
| 9 | Host logs / firewall | Confirm actual verified bot access; a simulated user-agent request is not proof of Google/Bing crawling |

Prepared robots allows crawling. OpenAI search and training crawlers are different: https://developers.openai.com/api/docs/bots . No schema/llms.txt addition guarantees an AI recommendation. Google sitemap guidance: https://support.google.com/webmasters/answer/7451001 .

## 3. OWNER INPUT REQUIRED

Complete **one** `owner-input/Camera-specification-verification.md` and **one** `owner-input/Public-pricing-verification.md`. They cover every requested capability and public tariff decision, including exact supplied configuration, connection, viewing, storage/retention, audio/deterrents, detection, panel/battery, low-light operation, resolution/IP rating, relocation and support. Unknown answers remain unpublished. Supply manufacturer/model evidence for technical numbers. Camera facts from Barrier Solutions were not transferred to Sukhmani.

The cost page was audited: it currently explains quote inclusions, duration/billing, camera quantity, GST comparison and extensions. It publishes no unapproved numerical rate. Previously discussed operational/customer rates were not treated as the current advertised offer, and customer-specific pricing remains private. Approve the public rate basis/inclusions and whether “from” or quote-only applies before numerical pricing is added.

Also confirm trading name, contact email/phone/hours, actual coverage boundaries and any owned profile URLs. ABN Lookup supports the Australian legal entity and ABN 72 679 226 496: https://abr.business.gov.au/ABN/View?id=72679226496 . Search surfaced unrelated Indian businesses of the same name; they were not conflated. No definitive incorrect Australian listing was identified. Shared organizational IDs already connect website/services/articles; no guessed `sameAs` profile was added. Sydney/Greater Sydney page coverage is clear enough for the current scope, but actual suburb project evidence remains absent. No location expansion is justified yet.

## 4. REAL PHOTOS REQUIRED

See the exact 12-shot list in `owner-input/Photography-shot-list.md`: full pole, panel, fixed/PTZ where applicable, complete configuration, residential context, entrance/storage context, construction-stage changes, safe installation, permitted phone viewing and additional Sydney jobs.

All 11 source assets were visually reviewed in a contact sheet. `image-provenance-audit.csv` records classification and approval gaps. Two WhatsApp-source images look like actual site photographs (camera beside scaffolding and installed wall wrap), but that does not establish Sukhmani ownership, location or permission. Generated/ChatGPT-source assets are illustrations. Other edited/unknown-source images cannot reliably be called stock, AI or original; no stock source was conclusively established. No image is newly certified as REAL SUKHMANI PHOTO. Keep illustrations out of case-study evidence.

New approved images will need short descriptive filenames, accurate alt text/captions, dimensions, compression and appropriate responsive sizes/loading. Original-image upload and optimisation cannot be completed until files arrive.

## 5. REAL PROJECTS REQUIRED

Fill `owner-input/First-projects-intake.md` for 3–5 genuine projects, beginning with the best one. Required: project/service type, general location, customer type, challenge/reason, factual solution, supplied configuration, installation details, relevant capabilities, evidence-backed outcome, actual photographs/rights, related service and publication/naming consent.

`project-record-template.json` and `scripts/project-pages.mjs` now provide the reusable data/template infrastructure. Drafts create no public routes. Approved complete records generate `/projects/`, individual project pages, navigation links and sitemap entries in the current style. Photographs must exist and have dimensions, captions and permission. Private approval documents and internal references are not rendered. **Template implementation is complete; real-project evidence remains zero.**

## 6. GOOGLE BUSINESS PROFILE

**Completed profile changes: none.** Authenticated owner access and the exact existing profile were not established. Public search did not produce a reliable identity-matched profile audit; this does not prove the business has no profile. Current categories, review count, photos and ownership remain unverified.

OWNER ACTION REQUIRED: open the existing profile in Google Search/Maps while signed in as its owner. Check the actual business name, website `https://www.sukhmaniconstructions.com.au/`, phone `0413 464 047`, owner-approved email/hours, service area and address eligibility. Confirm the most accurate available primary category in the Australian selector; do not select a construction or security category solely for keywords. Add appropriate secondary categories only for genuine services. Add factual camera-hire services and original approved photos. Do not create a duplicate or a fake office. Category availability is not preverified.

Prepared description for owner review: “Sukhmani Constructions Pty Ltd provides solar-powered construction-site camera hire and construction support services for builders in Sydney, NSW. Camera hire includes installation planning and remote viewing for the supplied setup. The team also assists with insulation, sarking, termite protection and construction site cleaning. Contact us with your site suburb and project requirements to confirm availability and an itemised quote.” This is a draft; it has not been saved to GBP.

Review process: invite actual customers after completed work/handover, give the same opportunity regardless of expected rating, send one polite reminder where appropriate, and reply without exposing private project facts. Draft request: “Thanks for choosing Sukhmani Constructions. If you have a moment, please leave a Google review about your experience and the service we provided: [verified review link]. Your feedback helps other builders know what to expect.” The previously supplied review URL must be matched to this business before use. No messages sent; no incentive, dictated keywords, review gating or requirement for a positive rating. Google guidance: https://support.google.com/business/answer/3474122 .

## 7. CITATIONS

**Created/claimed this request: none.** Ten legitimate candidate platforms/associations are below; conditional eligibility and overlapping networks are explicit. This is a shortlist, not ten independently acquired endorsements.

| Name / URL | Free/paid status | Relevance / priority | Required information |
|---|---|---|---|
| Google Business Profile — https://business.google.com/ | No-cost listing | Maps/local identity; HIGH | Owner login/verification, exact business details, genuine service area, category, approved photos |
| Bing for Business — https://www.bing.com/forbusiness/ (current redirect from Bing Places) | Confirm current listing terms in onboarding | Bing mapping identity; HIGH | Owner verification, name/contact/site/category/service-area eligibility |
| Apple Business — https://business.apple.com/ | Confirm Australian Maps/brand eligibility and listing terms; paid optional services separate | Maps/brand identity; HIGH if eligible | Company verification, owned domain, contact/location policy, logo/photos |
| Yellow Pages — https://www.yellowpages.com.au/ | Free basic listing offered; paid advertising separate | Australian business directory; MEDIUM | Existing-record check, name/phone/site/category, service area and hours |
| True Local — https://www.truelocal.com.au/ | Free-listing link offered | Same Thryv/Yellow Pages ecosystem; MEDIUM, audit duplication | Correct shared record rather than an assumed independent profile |
| Hotfrog Australia — https://www.hotfrog.com.au/ | Add-business route confirmed; exact free/premium terms need checking | General AU identity; MEDIUM | Owned email, business details, accurate service category and description |
| AussieWeb — https://www.aussieweb.com.au/ | Advertises free local directory | AU construction category; MEDIUM | Name/contact/site/service description, avoid exposing residential address |
| Cylex Australia — https://www.cylex-australia.com/ | Free registration offered; premium/bulk products separate | AU construction categories; MEDIUM | Ownership/account, accurate details and category |
| Master Builders NSW — https://www.mbansw.asn.au/find-a-master-builder | Membership/qualification dependent; confirm fees/eligibility | Relevant industry directory; MEDIUM only if qualified | Actual member/licence eligibility and business details; do not claim membership prematurely |
| ASIAL — https://asial.com.au/Web/Web/Member-Resources/Membership-Directory.aspx | Paid membership; correct class/fee depends on eligibility | Security-industry corroboration; MEDIUM only if qualified | Genuine business scope, required licences/insurance/membership evidence; ask association about correct class |

Research sources are these first-party pages. Current Apple/Bing branding was checked. Do not buy an association membership just to acquire a link. Reject spam directories and fake-address requirements. Save each actual created profile URL/date/status before adding it to website schema.

## 8. BACKLINKS

**Links acquired this request: none. Existing backlink inventory: not established.** A verified ABN record corroborates identity but is not proof of a useful website backlink. No unsolicited outreach was sent.

| Opportunity | Why relevant / approach | Proof needed | Realistic likelihood (judgment) |
|---|---|---|---|
| 3–5 builders actually using Sukhmani | Ask the relationship owner about a supplier credit or collaborative project story on the builder's real site | Owner supplies actual builder names/sites, consent, job record and photos | Best prospect if relationship exists; no names guessed |
| Actual camera distributor/manufacturer | Ask whether a customer/installation story or genuine supplier directory entry is appropriate | Confirm manufacturer/model and purchasing relationship, approved installation evidence | Moderate once supplier is identified; currently pending owner input |
| Master Builders NSW / ASIAL | Correct eligible member directory or factual member story | Membership/qualification; approved scope | Moderate if qualified; no membership/link currently established |
| Australian Security Magazine — https://australiansecuritymagazine.com.au/contributors/ | Pitch a practical evidence-based installation lesson through its contributor route, not generic self-promotion | A distinctive real case, factual technical detail and authorised photographs | Low before real evidence; editorial decision, no guaranteed link |
| Build Australia — https://www.buildaustralia.com.au/contact-us/ | A genuine builder-led project collaboration may merit editorial consideration | Interesting project with builder consent and measurable documented outcome | Low for ordinary camera hire; do not pay for fake editorial or confuse advertising with earned coverage |
| A real local community/customer project | An accurate supplier acknowledgement if support/work genuinely occurred | Actual relationship, permission, project evidence | Moderate only with an existing relationship; no fabricated sponsorship |

Do not acquire links through packages/PBNs, fake press or reciprocal review arrangements. Record source URL, actual link target, relationship, publication date and disclosure if sponsored. No numeric success rate or backlink authority score was invented.

## 9. COMPETITOR GAP

Public first-party pages rechecked this request; website claims are not independent proof of equipment performance or photograph ownership. No ranking, local pack, citation/backlink volume or review-count comparison was measured.

| Competitor advantage observed | Sukhmani current status | Action taken | Still missing |
|---|---|---|---|
| Sydney Site Cam / SiteLock: visible weekly starting offer, named configurations/features and Sydney focus | Quote-only offer; general capabilities; new pages still 404 in production | System/price guides prepared; verification forms now completed as templates | Approved tariff/configurations, production release and genuine proof |
| JobCam: dedicated Sydney page, named technical features, links to pricing/case studies/blog/support | Sydney camera hub/guides prepared; no approved case studies | Existing intent structure retained; functioning project renderer added | Published real projects, supplied specs/support scope and actual deployment |
| Oz Technologies: visible monthly starting offer/minimum term, labelled installation images and footage, detailed connection/features | Existing photo provenance incomplete; no approved public price | Full image ledger, shot list and price/spec intake created | Approved Sukhmani equipment media/tariff; no capability copying |
| Sitesec: named client testimonials/case-study material, explicit monitored-response scope, NSW FAQ/service content | No approved real testimonial/project set; monitoring scope unverified | Practical FAQs/guides retained; project and support fields ready | Genuine client permission, documented outcomes and accurate monitoring distinction |
| Hexagon Valley: single/dual/custom packages, indicative weekly prices, stated retention/inclusions and delivery/install paths | General quote/installation explanation prepared | Configuration/price forms and system page ready | Verified package facts/prices, current hire/support terms |
| Call 2 Hire: dedicated Sydney equipment page, granular camera specifications and related equipment links | Service page/system guide prepared with conservative detail | Useful internal links and specification collection implemented | Model-confirmed resolution/rating/recording/audio detail; real public release |

Sources: https://sydneysitecam.com.au/ ; https://jobcam.com.au/locations/sydney ; https://oztechnologiesgroup.com.au/cctv-rental-construction ; https://sitesec.com.au/site-security-cameras-for-hire-nsw/ ; https://hexagonvalley.com.au/services/security-cameras/construction-site-camera-hire/ ; https://www.call2hire.com.au/equipment-hire/site-security-camera-hire .

Cross-dimension assessment: all six have dedicated camera/service content. Product/pricing differences are described above. FAQs and Sydney/NSW context were visible on several pages; internal links to products/support/content are visible. The earlier raw-source schema sample found FAQPage on Oz/Hexagon, BreadcrumbList/FAQPage on JobCam, BreadcrumbList on Call 2 Hire, WebPage/ImageObject/BreadcrumbList/WebSite on Sitesec, and no extracted JSON-LD on the sampled Sydney Site Cam homepage. Extraction of one page is not a site-wide schema verdict. Sukhmani's prepared shared organization/service/article relationships are adequate; adding schema alone does not close real-evidence gaps. Competitors' images and self-published case studies are visible but rights/authenticity are not independently certified. Third-party citations, backlinks, local-search presence and comparative authority remain unmeasured for both sides. Human-readable direct answers exist in the prepared Sukhmani build; no answer-engine visibility result has been established.

## 10. TOP 10 NEXT ACTIONS

| Rank | Impact | Action / current state |
|---|---|---|
| 1 | CRITICAL | Authenticate and deploy to the confirmed existing Vercel project; currently blocked |
| 2 | CRITICAL | Check actual www URLs, desktop/mobile/menu/contact/images, redirects, raw HTML/canonicals and crawl files after release |
| 3 | CRITICAL | Verify Search Console/Bing ownership, submit correct sitemap, inspect priority URLs and record actual status |
| 4 | HIGH | Owner completes camera specification form with model evidence |
| 5 | HIGH | Owner approves public pricing/inclusions/terms, then update existing cost page |
| 6 | HIGH | Supply approved real photographs from at least one installation |
| 7 | HIGH | Complete first genuine case study; add further 2–4 only with evidence |
| 8 | HIGH | Audit existing GBP ownership/category/website/service area and publish genuine photos/services |
| 9 | MEDIUM | Correct identity on eligible major directories; request genuine customer feedback without incentives |
| 10 | MEDIUM | Approach actual builders/suppliers for factual corroboration; track qualified enquiries/search performance monthly |

## 11. STOP LIST

Do not write more generic articles, mass-create suburbs, hide/stuff keywords, publish draft/fake projects, portray generated imagery as jobs, invent hardware capabilities/prices, copy competitor promises, buy bulk backlinks, create duplicate profiles/fake offices or promise rankings/AI citations. Do not call a sitemap submission indexing, a recommendation implementation, a private Site release a custom-domain deployment, or a template real evidence. Stop expanding content until production, facts and proof are addressed.
