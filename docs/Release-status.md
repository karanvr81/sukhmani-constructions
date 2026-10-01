# Release status — 1 October 2026

The updated source is committed on GitHub main: `6aae520313e984d1cc5419de3712bd1c8eb90198`. Vercel built it successfully as deployment `dpl_D5GyTNMKcuM8bT1JUjE8dScDvYnE` (READY). The candidate https://sukhmani-constructions.vercel.app/Contact/ visibly contains the updated fields and neutral marketing wording. The deployed quote API rejects GET with 405. No live provider email was sent; the public Turnstile key is not configured. The form is therefore not yet available for live submissions.

Direct HTTP verified `X-Robots-Tag: noindex, follow` on the Vercel candidate, plaintext robots, XML sitemap, and an actual 404. The legacy camera URL still returned its HTML fallback after the first release. Explicit slash/no-slash permanent redirects were added in a follow-up configuration correction; final verification appears below once that build completes. See `final-post-deployment-http.json` for the initial release evidence.

**Custom domain:** https://www.sukhmaniconstructions.com.au/ still served the older version at the post-release check; `/construction-site-camera-system/` returned 404. No domain mapping/DNS/MX change was made. The candidate deployment is not the `.com.au` production deployment.

**Owner connections before production:** `RESEND_API_KEY`, approved verified-domain `QUOTE_FROM_EMAIL`, owner-confirmed `QUOTE_TO_EMAIL`, real `TURNSTILE_SECRET_KEY`, and public build-time `TURNSTILE_SITE_KEY`. Enter them directly in Vercel, rebuild and test actual delivery. Full instructions: `Quote-form-connection.md`. No analytics provider or search-engine ownership connection was made.
