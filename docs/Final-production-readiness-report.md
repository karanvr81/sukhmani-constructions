# Final production readiness — 1 October 2026

## READY FOR PRODUCTION

Not yet a full production sign-off. The current Vercel candidate was directly crawled: all 22 canonical pages returned 200, 11 referenced unique image/script/stylesheet URLs returned 200, robots was plain text and sitemap valid XML with 19 indexable canonical URLs. Raw main content and one H1 were present on canonical pages. Legal pages are noindex and excluded from the sitemap. A missing route returned 404. Canonical URLs, shared organization/service/article identities, Open Graph and sitemap use `https://www.sukhmaniconstructions.com.au`. HTTP evidence: `final-candidate-http-audit.json`.

Desktop contact validation and phone/email/WhatsApp targets were checked in the actual candidate browser. No site-script error was observed there; browser-extension errors were excluded. Updated desktop/mobile checks use the source build locally at 1440, 390 and 320 px; see `final-browser-qa.json`. This is local responsive QA, not real-domain mobile acceptance. The standalone test browser could not reach the remote candidate through this environment; that limitation is not a site outage. No Lighthouse or field LCP/CLS/INP score was invented.

## FIXED

- Replaced mailto quote submission with a same-origin Vercel server function and secure email-provider integration, ready for the exact connections listed in `Quote-form-connection.md`.
- Added required site suburb/postcode and short project details, optional start date, and camera-only quantity/duration. Kept the original form layout and visual system.
- Added required-field/server validation, mandatory verified bot check, spam trap, body/attachment limits, safe attachment filenames/signatures, outbound timeouts and email idempotency. Failures preserve typed details and do not show false success.
- Added a reference-based accepted-for-sending state. Provider acceptance is distinguished from inbox delivery.
- Added consent-gated conversion hooks without installing another tracker or collecting enquiry text in analytics.
- Removed the unsupported perpetual monthly $100 promotion, camera count, 24-hour response promise and unqualified 24/7/from-anywhere claims; used neutral wording.
- Preserved approved navy/gold presentation, existing pages, optimized images and animation design. Added small-screen form safeguards, keyboard menu focus containment and scroll locking.
- Added preview-host noindex headers, permanent legacy camera redirect configuration, and a Node 24 package manifest. Updated privacy disclosures for email/bot-check processing. No extra generic articles/suburb pages were created.

## OWNER VERIFICATION REQUIRED

Complete the existing **one** camera questionnaire and **one** pricing form under `owner-input/`. Vehicle detection was added to the specification checklist. No model, PTZ range, SIM network, retention, IP rating, audio, siren/light, monitoring or numerical public tariff was guessed. Operational/customer billing rates were not automatically converted into a public advertised offer.

`owner-input/Marketing-claims-verification.md` records original claims, replacements and evidence needed. Confirm contact details/hours, coverage boundaries, offer terms, installer/licence/warranty scope and any numerical inventory/lead-time promises before restoring them. Legal identity/ABN were explicitly verified in the brief.

The cost guide explains rate basis, duration, camera count, inclusions, extra charges and GST comparison. It still cannot answer “what will Sukhmani charge?” numerically until the owner approves a public tariff. That is a remaining commercial gap.

## OWNER CONTENT REQUIRED

Send approved original photos using `owner-input/Photography-shot-list.md`, and complete `owner-input/First-projects-intake.md` for 3–5 genuine jobs. Customer names are optional; general locations and actual customer/project type still need evidence. `src/projects.json` remains empty; the existing approval-gated renderer is retained. No fake hub, example installation or testimonial was published. Image ledger remains `image-provenance-audit.csv`: generated assets are illustrations, and apparent site photos still need ownership/publication verification.

## DEPLOYMENT

Candidate project: `sukhmani-constructions` (`prj_TEaZinjQWqC9JcLYWSlYuxIPdoM5`), connected to GitHub `karanvr81/sukhmani-constructions`, main branch. Its original imported deployment was `dpl_Dy17YAXDBqgBy6UFEbcVgxsHmpTp`, source commit `ff6ea804dcb60c1327d33d03c950e69fd50fee19`. The domain `.com.au` remains a separate production release boundary. No DNS/MX/mailbox/domain mapping was changed in this audit. See `Release-status.md` for the exact final source/deployment result, which supersedes the initial status here.

Before the custom-domain release: connect real email and Turnstile credentials, rebuild, test actual provider delivery, verify current Vercel deployment settings apply `vercel.json`, inspect the legacy URL for a 308 HTTP redirect and the Vercel alias for `X-Robots-Tag: noindex`. The pre-update legacy route had an HTML fallback, not an HTTP redirect. Verify `.com.au` has no accidental noindex and all 19 sitemap pages return the intended updated HTML. Retain the earlier production deployment for rollback. Do not transfer the domain to another project until the candidate passes these gates.

## INDEXING

No authenticated Google Search Console/Bing report was inspected, and no sitemap/indexing request was submitted. Indexed status remains unknown. Once `.com.au` is verified live, follow `priority-indexing.csv` and the exact Search Console/Bing instructions in `Final-status-report.md`: verify property, submit the canonical sitemap, inspect priority URLs/canonicals/fetch status and record actual indexing separately. Candidate noindex is intentional.

## CONVERSION

Form: code implemented and local tests run; actual delivery awaits provider/Turnstile connection and an owner inbox test. Phone and WhatsApp links use the established public number. Clicking a link is not proof of a completed call, message or qualified lead. Analytics: event hooks prepared; no account/provider connected or collected conversion verified. Before connecting analytics, restore a visible consent control and test consent/withdrawal and debug events. Do not claim that tracking currently works.

## SEO/GEO

Existing 22-page structure and 19-URL sitemap remain. Shared Organization ABN/@id, WebSite, Service, Article, CollectionPage and breadcrumbs are retained with no fake review/ratings schema. Original informational sources and contextual commercial links remain; no unsupported rankings or AI visibility promise was made. Projects remain absent until evidence is supplied. Pricing, real installations, verified equipment information and external corroboration are the main gaps.

Local validation checks JSON-LD syntax/relationships, unique metadata and crawlable HTML; no external rich-results eligibility result is claimed. Existing hero image preload, dimensions/local WebP, lazy non-hero images, local Lenis and reduced-motion handling remain. Third-party fonts still require a network request. Compression/CDN caching and Web Vitals must be checked on the final public release. No unrelated visual feature was removed to chase a score.

Off-site plan: audit the existing owner-managed Google Business Profile with correct identity/category/service area/website/hours; add genuine installation photos; invite all eligible real customers to give feedback without incentives or rating conditions; correct eligible Australian listings; seek factual supplier/builder project credits from actual relationships. Existing legitimate citation/backlink shortlist is in `Final-status-report.md`. No listings, reviews, outreach or backlinks were created/acquired during this task.

## COMPETITOR GAP

First-party pages rechecked 1 October 2026. Website claims below are self-published, not independent equipment verification. No third-party backlink/citation inventory, local pack ranking or real competitor form delivery/mobile test was performed.

| Competitor | Observed advantage over current Sukhmani evidence | Legitimate Sukhmani improvement |
|---|---|---|
| Sydney Site Cam / SiteLock | Visible starting weekly offer, configuration/features and Sydney focus | Publish only owner-approved available pricing/configurations; keep a shorter relevant enquiry flow |
| JobCam Australia | Sydney landing page, named specifications, pricing/case-study/support links | Add model-backed equipment details and genuine Sydney installation stories |
| Oz Technologies Group | Pricing/term explanation, equipment features and labelled installation/footage material | Approve public tariff; use authorized real equipment photos and footage |
| Sitesec | Named client/case-study material and stated monitoring/service scope | Show actual builder outcomes and clearly distinguish remote viewing from staffed monitoring |
| Hexagon Valley | Package/configuration comparison, indicative weekly pricing and inclusions | Explain single/multiple-camera options only when verified, with itemised inclusions |
| Call 2 Hire | Detailed Sydney equipment page and technical specifications | Publish manufacturer-confirmed resolution/rating/recording details for supplied equipment |

Sources: https://sydneysitecam.com.au/ ; https://jobcam.com.au/locations/sydney ; https://oztechnologiesgroup.com.au/cctv-rental-construction ; https://sitesec.com.au/site-security-cameras-for-hire-nsw/ ; https://hexagonvalley.com.au/services/security-cameras/construction-site-camera-hire/ ; https://www.call2hire.com.au/equipment-hire/site-security-camera-hire . The earlier detailed evidence/citation plan is retained; nothing was copied into Sukhmani's marketing claims.

## TOP 10 NEXT ACTIONS

1. Connect verified Resend sender/API key and real Turnstile keys in the candidate Vercel project.
2. Test actual accepted/delivered/bounced status and destination inbox with a clearly labelled test, including permitted attachment.
3. Verify candidate deployment config, desktop/mobile navigation/form, preview noindex, legacy HTTP redirect and true 404.
4. Release the verified candidate to `.com.au`, preserving existing DNS/mail and rollback.
5. Approve a clear public tariff and complete the one camera specification questionnaire.
6. Supply original installation photos with rights/privacy approval.
7. Publish the first complete genuine case study, then 2–4 more when ready.
8. Audit Google Business Profile and request genuine feedback from actual customers.
9. Verify Google/Bing properties, submit sitemap and inspect priority pages; record actual indexing.
10. Establish eligible citations/real partner mentions and consented lead tracking, then measure qualified enquiries and search performance.
