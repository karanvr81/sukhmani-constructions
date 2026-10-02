# Quote form corrections — 2 October 2026

Status: OWNER ACTION REQUIRED. Real enquiry delivery to amjeetsachdeva@gmail.com has not been verified. Candidate code can be deployed; the .com.au production switch remains blocked.

## Changes

- Removed Preferred Start Date from UI, backend validation and email payload. There is no hidden required date field, date state/type, date confirmation or analytics metadata. Removed only the related date-request phrases in camera quote instructions and the related privacy collection phrase.
- Restored exactly 2,500+ Jobs Completed; 200+ Happy Clients; 600+ Cameras Active; 4+ Years Experience. The shared stats renderer keeps these consistent in every existing location. Owner verification is recorded for future cleanup.
- All template CSS is byte-for-byte unchanged, including navy backgrounds, orange numbers, type, spacing, desktop four-column/mobile two-column layouts and animations. No other section was redesigned. Other marketing claims were not restored. Header and navigation are unchanged.
- Preserved the existing Resend/Turnstile backend and customer Reply-To. Email field labels are readable, attachments include filename/size information, and no start date is emailed. Destination is server-configured QUOTE_TO_EMAIL, to be set to amjeetsachdeva@gmail.com.
- Form posts to /api/quote/ directly, matching the Vercel trailing-slash configuration. Added Turnstile error/expiry/timeout messages and the requested success wording. No quote-submit mailto behaviour exists anywhere in the candidate runtime source or generated HTML. The intentional footer Email us link remains.

## Test evidence

11 backend tests pass. Build/SEO checks pass for 23 routes and 19 indexable URLs. Local Chromium passes at 1440, 390 and 320 widths, including exact statistics, date absence, required/email validation, conditional camera fields, PDF submission, failure retention of text/file, duplicate click suppression, captcha failure and mocked success without navigation. See quote-form-browser-checks.json.

The local browser uses mocked Turnstile and successful/failing provider responses, plus a real local backend request returning 503 for absent configuration. These are not live inbox tests. The candidate's public Turnstile key was empty on inspection; Vercel connector does not expose environment variable management. Resend domain/key configuration and Gmail receipt cannot be verified with the current account connections.

## Deployment boundary

Actual HTTP inspection confirmed that the separate .com.au website still contains its older mailto handler; the Vercel candidate uses quote-client.js and direct backend submission. The old domain/project has not been changed. No DNS, domain transfer, mailbox or secret changes were made. Use Quote-form-connection.md for the exact owner setup and real inbox acceptance steps. Do not declare complete or switch .com.au until actual delivery succeeds.

## Exact files changed in this update

- `api/quote.mjs`
- `dist/About/index.html`
- `dist/Contact/index.html`
- `dist/PrivacyPolicy/index.html`
- `dist/Services/Construction-Site-Cleaning/index.html`
- `dist/Services/Insulation-Installation/index.html`
- `dist/Services/Sarking-Installation/index.html`
- `dist/Services/Termite-Protection/index.html`
- `dist/Services/index.html`
- `dist/assets/quote-client.js`
- `dist/construction-site-camera-system/index.html`
- `dist/how-camera-hire-works/index.html`
- `dist/index.html`
- `dist/solar-camera-hire-sydney/index.html`
- `docs/Final-production-readiness-report.md`
- `docs/Quote-form-connection.md`
- `docs/Quote-form-corrections-report.md`
- `docs/owner-input/Marketing-claims-verification.md`
- `docs/quote-form-browser-checks.json`
- `src/camera-pages.json`
- `src/quote-client.js`
- `src/template.html`
- `tests/quote.test.mjs`

Generated dist HTML changes contain only the requested statistic/date/form changes or directly related date-request/privacy text. Other page sections/content/styles were not modified. Documentation and test changes record these corrections and the remaining account setup.
