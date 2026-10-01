# Sukhmani Constructions — Phase 2 implementation and rollout

Audit date: 30 September 2026 UTC / 1 October 2026 Sydney. This report accompanies the prepared source and static deployment files. Production deployment and search indexing are separate outcomes.

## What changed

The existing navy/gold layout, home hero, service structure and contact flow remain. Phase 1 already prepared prerendered content, custom-domain canonicals, unique metadata, shared organization/service schema, camera hire guides, local compressed images, accessible FAQs and sitemap/robots fixes. Phase 2 adds:

| Page | Purpose |
|---|---|
| `/construction-site-camera-system/` | Supplied setup, semantic four-step power/camera/connection/viewing flow, handover checks and configuration FAQ |
| `/insights/` | Sydney Construction Insights hub with camera guides and practical planning articles |
| `/insights/construction-site-security-checklist/` | Access, storage, placement and review responsibilities |
| `/insights/construction-site-shutdown-preparation/` | Before/after shutdown camera and contact checks |
| `/insights/managing-camera-access-across-sites/` | Team access, account security and per-site review routines |

The footer now links the system and Insights pages. Articles have organizational authorship, Article schema, visible primary-source links and related guides. The hub has CollectionPage schema. No invented publication dates, reviews, product offers or exact hardware specifications were added. Pricing remains itemised-quote based until current public terms are approved. The existing cost, hire-process and no-Wi-Fi pages serve those intents; no duplicate articles were created.

## Live versus prepared

The live custom domain still serves the earlier production site. In `phase2-live-audit.json`, the homepage and old service pages return 200, but the four Phase 1 camera URLs return 404. Existing raw HTML contains very little main content and old ChatGPT-domain canonicals; robots/sitemap still reference the earlier origin. Therefore those fixes are **not verified live on the custom domain**.

The private ChatGPT Site can be updated independently. Its publication does not update Vercel. The available Vercel project deployment aliases do not establish ownership of the custom domain, and the connected deployment command was unavailable. Browser fallback requires owner authorization. Before deploying, verify the actual project/domain binding and preserve the current audience on the private Site.

Do not submit the new sitemap until the custom domain serves this build. Do not describe URLs as indexed merely because local validation passes.

## Verification and limitations

The build generates 22 canonical pages plus one legacy-camera redirect fallback; 19 canonical pages are indexable. Automated checks validate unique metadata/canonicals, prerendered H1s, parseable JSON-LD, sitemap parity, internal file targets and image alt attributes. Evidence is in `phase2-static-qa.json`. The build uses the existing contact email handoff; actual email delivery is not a server form submission. Browser-rendered desktop/mobile QA and external rich-result validation remain outstanding because the browser runtime was unavailable. No Core Web Vitals improvement, ranking gain, backlink count or indexation was measured.

## Real-project architecture

`src/projects.json` starts empty. Phase 3 now supplies a reusable renderer with verified-fact, consent and photograph guards; see Final-status-report.md for the current implementation. `project-case-study-template.md` is an internal intake template, not a public example. Each future record needs a real project suburb, service/date range, factual scope, permission to name the client, permission to publish photographs, original image files and a factual outcome. Exclude exact addresses, credentials and confidential client information. Approve captions before publishing. Create a public `/projects/` hub and individual case-study pages only once at least one complete, approved record exists. Never publish empty templates, stock photos as completed jobs or invented results.

## Image audit

| Asset group | Evidence | Decision |
|---|---|---|
| Pole-mounted camera beside scaffolding (`4e22e3705…`) | Existing photograph visually inspected | Use descriptive alt text; do not claim a location/client/project outcome without confirmation |
| Sarking (`24b9dcf83…`) | Existing uploaded image; project identity/rights not independently confirmed | Owner must supply provenance and caption before a case study |
| ChatGPT/generated service and hero images | Filenames/source identify illustrations | Retain design imagery; label service illustrations accurately; exclude from real-project proof |
| Logos | Existing company marks | Retain favicon/social identity; owner confirms rights |

Phase 1 reduced the converted source image total from about 11.9 MB to 2.34 MB, not a measured page-load metric. Request 6–10 original field photographs: equipment overview, installed solar panel, site context, installation process and other actual services. Get client consent and remove sensitive site detail. Replace illustrations selectively, without redesigning the approved layout.

## Capabilities and pricing needing approval

OWNER ACTION REQUIRED: confirm model/configuration, fixed/PTZ availability, connectivity/SIM inclusions, recording retention, night viewing, audio/siren/light features, app name, access permissions, alerts, support hours, monitoring/response inclusions, installation/relocation/removal fees, minimum hire and billing terms. Do not transfer specifications from another company or camera brand. Approve a dated current tariff before publishing numerical prices; quotes must explain GST and the full hire basis. No minimum period or price has been inferred from competitors.

Sydney/Greater Sydney remains the service area. Out-of-area availability is enquiry based. Do not create suburb landing pages until genuine coverage and distinctive local evidence are available.

## Search and crawler rollout

`indexing-checklist.csv` lists every indexable build URL and deliberately leaves private Search Console status unverified. Owner/SEO administrator must:

1. Verify the production Vercel project, deploy the prepared `dist` through its build configuration and check the custom domain.
2. Check rendered content and raw source on homepage, camera primary/system, Insights hub and article URLs; confirm status 200 and custom-domain canonical.
3. Confirm legacy `/Services/Solar-Security-Cameras/` redirects permanently to `/solar-camera-hire-sydney/`, without chains; verify old navigation links.
4. Check `/robots.txt`, `/sitemap.xml`, `/llms.txt` and response MIME types. Searchable pages must have no `noindex` or X-Robots-Tag block.
5. Confirm Search Console domain-property DNS ownership; submit the sitemap and inspect priority URLs. Request indexing where available, then record reported canonical/crawl/index status rather than assuming success.
6. Verify Bing Webmaster Tools ownership, submit the sitemap and inspect crawl/index errors. Check genuine bot requests using verified IP/log evidence; a spoofed Bingbot user agent only tests HTTP accessibility.
7. Test host firewall/CDN access as well as robots; robots allowance alone does not establish that bots can fetch pages.

The prepared robots file allows `User-agent: *`. OpenAI distinguishes OAI-SearchBot (search) from GPTBot (training); those choices are independent. ChatGPT-User is user-initiated retrieval and robots may not apply. No crawler allowance guarantees an AI citation. `llms.txt` is a useful navigation aid, not a guaranteed ranking mechanism. Source: https://developers.openai.com/api/docs/bots .

## Entity consistency and identity

Official ABN Lookup matches SUKHMANI CONSTRUCTIONS PTY LTD, ABN 72 679 226 496, ACN 679 226 496, active/GST registration from 18 July 2024, NSW 2765: https://abr.business.gov.au/ABN/View?id=72679226496 . The website uses the verified legal name/ABN and Sydney service area. Same-name Indian companies surfaced in public search; these are not evidence about this Australian entity. No incorrect Australian listing was conclusively identified, and limited search results are not proof that listings do not exist.

OWNER ACTION REQUIRED: confirm official trading name, phone, email, hours, service areas and whether customers can visit the address. Keep these consistent across owned listings. Do not expose a residential address for a service-area business. Add `sameAs` only for confirmed owned profiles; no guessed socials were added.

## Google Business Profile action plan

OWNER ACTION REQUIRED — authenticated profile unavailable. Audit existing ownership and duplicates before creating a profile. Use the actual business name without appended keywords. Choose the closest accurate primary category from the current Australian selector; candidate areas to investigate include security-system supply/installation versus construction services, based on the actual primary business. Category names/availability need checking inside the profile. Add relevant secondary categories only for genuine services. Confirm service-area eligibility and hide an address if customers are not served there. Upload real approved equipment/team/job photos, set service descriptions, confirm contact/hours and link to the relevant camera landing page. Publish factual updates, not guaranteed deterrence/response claims.

Ask actual customers for honest reviews without incentives or review gating. Verify that the supplied review URL belongs to the business before using it: https://g.page/r/CeC9OM2XR5B1ECE/review . Do not invent reviews or upload testimonials without permission. Guidance: https://support.google.com/business/answer/3038177 and https://support.google.com/business/answer/3474122 .

## Citation and directory shortlist

| Candidate | Fit / cost status | Owner action |
|---|---|---|
| Google Business Profile | Primary local identity; no listing fee | Verify ownership, eligibility and details |
| Bing Places | Search/map identity; verify current onboarding and eligibility | Claim correct business, avoid duplicates |
| Yellow Pages Australia | Current site offers a free listing; advertising is separate | Check existing record and exact basic terms before enrolling |
| True Local | Current site tied to the same Thryv ecosystem | Check duplication/synchronisation before treating as independent work |
| Apple Business | Current Apple business onboarding; eligibility/terms need confirmation | Verify business/profile route and service-area suitability |
| Master Builders NSW | Relevant industry association, membership/eligibility required | Confirm actual membership before seeking member listing |

No Domain Authority values or paid fees were invented. Do not buy directory packages without checking relevance, renewal terms and genuine referral value. Websites: https://www.yellowpages.com.au/ , https://www.truelocal.com.au/ , https://business.apple.com/ , https://www.mbansw.asn.au/ .

## Competitor comparison and outreach

Fresh public-page evidence is retained in `phase2-competitor-evidence.json`; some requests can be blocked or fail. Public product statements must not be copied as Sukhmani capabilities. This is a content/positioning review, not a measured SERP-ranking or backlink audit.

| Comparator | Public positioning to review | Sukhmani opportunity |
|---|---|---|
| Sydney Site Cam | Sydney solar hire and visible pricing | Approve transparent current pricing and genuinely local installation proof |
| Oz Technologies Group | Construction CCTV rental | Explain supplied setup and handover clearly |
| JobCam Sydney | Dedicated Sydney location/service landing page | Reinforce real local projects and service availability |
| Call2Hire | Equipment/security camera hire | Make quote inclusions, collection and extension terms clear |
| Hexagon Valley | Dedicated construction camera service page | Add consented equipment photos and configuration facts |
| Sitesec NSW | NSW site-security hire page | Show genuine service/support scope without copying claims |

Do not claim any comparator outranks the business without a dated, location-specific search sample. No authority scores, traffic estimates, uptime or conversion statistics were collected.

Prioritise genuine builder/supplier relationships over link purchases. Ask a satisfied builder, installer/supplier or relevant member association whether an accurate project reference or approved supplier listing is appropriate. Draft: “We worked together on [approved project]. Would an accurate supplier credit or brief project reference be useful on your website? We can supply the agreed scope, approved images and our business details.” This is a draft only; no messages were sent. Never exchange fake reviews or demand keyword-rich links.

## Tracking framework

Owner/analytics administrator: record a baseline after the correct production release. Use Search Console clicks, impressions, queries and indexed-page reports; Bing crawl/index status; GBP website/call interactions; and actual qualified camera enquiries/bookings. Compare branded versus non-branded camera intent separately. Track quote, phone and WhatsApp interactions only after the owner approves analytics and the privacy/cookie arrangement; no tracking snippets or cookie claims were added. Distinguish button clicks from submitted enquiries and paid hires. Annotate release dates, content updates and review activity. Monthly review should compare similar periods and account for seasonality. AI citation checks should record prompt, date, location/product and cited URL; isolated mentions do not establish stable visibility.

## 30 / 60 / 90-day roadmap

First 30 days: deploy and verify the custom domain; Search Console/Bing setup; approve capabilities/pricing; correct owned business identity; collect consented photos and a first project record; establish enquiry baseline.

Days 31–60: publish the first factual case study, improve real-image coverage, request genuine customer feedback and complete selected eligible directory records. Review crawl errors and query intent; update existing guides before adding new pages.

Days 61–90: assess qualified enquiries and search performance, add another evidenced project if available, refine pages based on customer questions and undertake relevant partner outreach. Expand location content only with real service evidence. No fixed ranking deadline is promised.

## Next ten actions, in priority order

1. Owner verifies Vercel project/custom-domain binding and authorises browser deployment fallback if required.
2. Deploy prepared build and verify production redirects, content, canonicals and crawl files.
3. Complete desktop/mobile visual and contact-flow tests on production.
4. Submit the correct production sitemap in verified Search Console and Bing accounts.
5. Approve current camera configuration and feature list.
6. Approve numerical pricing, GST, minimum hire, inclusions and billing terms.
7. Supply approved original photographs and one completed case-study intake.
8. Audit GBP ownership, category, service area and business details.
9. Correct relevant existing directories, then ask actual customers for honest reviews.
10. Record enquiry/search baseline and review monthly; pursue relevant partner references with consent.
