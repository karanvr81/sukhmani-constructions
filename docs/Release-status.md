# Release status — 1 October 2026

The updated source is committed on GitHub main: `6aae520313e984d1cc5419de3712bd1c8eb90198`. Vercel built it successfully as deployment `dpl_D5GyTNMKcuM8bT1JUjE8dScDvYnE` (READY). The candidate https://sukhmani-constructions.vercel.app/Contact/ visibly contains the updated fields and neutral marketing wording. The deployed quote API rejects GET with 405. No live provider email was sent; the public Turnstile key is not configured. The form is therefore not yet available for live submissions.

Direct HTTP verified `X-Robots-Tag: noindex, follow` on the Vercel candidate, plaintext robots, XML sitemap, and an actual 404. The legacy camera URL still returned its HTML fallback after the first release. Explicit slash/no-slash permanent redirects were added in a follow-up configuration correction; final verification appears below once that build completes. See `final-post-deployment-http.json` for the initial release evidence.

**Custom domain:** https://www.sukhmaniconstructions.com.au/ still served the older version at the post-release check; `/construction-site-camera-system/` returned 404. No domain mapping/DNS/MX change was made. The candidate deployment is not the `.com.au` production deployment.

**Owner connections before production:** `RESEND_API_KEY`, approved verified-domain `QUOTE_FROM_EMAIL`, owner-confirmed `QUOTE_TO_EMAIL`, real `TURNSTILE_SECRET_KEY`, and public build-time `TURNSTILE_SITE_KEY`. Enter them directly in Vercel, rebuild and test actual delivery. Full instructions: `Quote-form-connection.md`. No analytics provider or search-engine ownership connection was made.

## Follow-up deployment

Commit `1288ea607eb287cb3c7300d12e5b89031144df7a` built successfully as `dpl_GK3BXjzMLr9uDABGQMEYy2pq3GKP`, READY. Updated candidate contact fields were verified again in the actual cloud browser: camera quantity/duration appear for solar cameras and disappear for insulation. No site-script error was observed; extension errors were excluded.

A post-release crawl again returned 200 for all 22 canonical pages and 12 referenced unique image/script/stylesheet URLs, with valid robots/XML sitemap and true missing-route 404. The explicit slash redirect configuration is deployed. A fresh request to `/Services/Solar-Security-Cameras/?release=1288ea6` directly returned HTTP 308 to `/solar-camera-hire-sydney/?release=1288ea6`, confirming the configured redirect. Earlier bare slash checks timed out, and the unslashed request normalised to the slash URL. Repeat both bare slash variants on the final custom-domain release. See `final-redirect-verification.json`.

The public widget key is visibly absent. Actual email-provider acceptance/delivery has not been verified. A safe configuration POST containing no security token was attempted solely to check the failure boundary; remote network checks did not yield a confirmed final API response, and no live email delivery is claimed. Ten local server tests and mocked browser success/error checks passed.

The following documentation-only audit update does not alter the tested runtime code. The source/deployment IDs above identify the actual runtime releases checked.
