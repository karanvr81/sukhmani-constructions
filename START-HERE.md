# Sukhmani production candidate

The current work includes a Vercel quote API, updated form and trust/SEO fixes. Start with `docs/Final-production-readiness-report.md`, `docs/Quote-form-connection.md` and `docs/Release-status.md`. Email delivery and bot-protection credentials must be entered directly in Vercel and tested before public production sign-off. No secrets are included. `npm run build` generates the static frontend; the project root `api/` supplies the Vercel backend. Do not deploy only `dist/` if the quote form is required.
