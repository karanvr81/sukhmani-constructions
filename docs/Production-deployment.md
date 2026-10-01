# Production deployment — exact existing project

Current verified configuration:
- Team: `karanvr81-6218s-projects` / `team_zzwSgfSRVlhykgqqn8Zgblcw`
- Project: `sukhmani-constructions-sydney` / `prj_LKP9xVUZ3StzHzhmqaA8ZBIbY2PW`
- Current retained production deployment: `dpl_Po3sNC8xRuyDE8oNagtaoQjazhd5`
- Deployment URL: `https://sukhmani-constructions-sydney-r4glbnml3.vercel.app`
- Domain: `www.sukhmaniconstructions.com.au` → Production, Valid Configuration.
- Apex: `sukhmaniconstructions.com.au` → 308 to www, Valid Configuration.

No DNS, MX, domain, environment-variable or production settings were changed. The existing deployment remains intact. `production-backup/` holds public homepage/crawl-file snapshots and a screenshot; these are evidence snapshots, not a full replacement for Vercel's retained deployment.

## Blocker

The connected deploy operation returns `Tool deploy_to_vercel not found`. The browser is authenticated and the correct existing project was inspected, but the exposed UI has no supported file chooser for redeploying this project. Official Vercel Drop documentation says each drop creates a new project; it is not an existing-project update. A new hosting project/domain transfer was not substituted. The installed official Vercel CLI 61.1.0 is not authenticated. No token was created, extracted from a browser or requested in chat.

## Owner-run continuation on Windows

Extract the supplied update ZIP and open PowerShell in its root (where `vercel.json`, `src`, `scripts` and `dist` appear). Node/npm must be available. Run:

```powershell
node scripts/generate-routes.mjs
node scripts/validate-seo.mjs
npx --yes vercel@61.1.0 login
$env:VERCEL_ORG_ID = "team_zzwSgfSRVlhykgqqn8Zgblcw"
$env:VERCEL_PROJECT_ID = "prj_LKP9xVUZ3StzHzhmqaA8ZBIbY2PW"
npx --yes vercel@61.1.0 deploy --prod --yes --scope karanvr81-6218s-projects
```

Complete the official login yourself; never send a token/password/code in chat. Stop if the selected account or project differs. These commands are prepared, not run against authenticated production in this request. Official CLI reference: https://vercel.com/docs/cli/deploy .

## Verify the actual domain after READY

Use `priority-indexing.csv` for exact page URLs. All published canonical URLs should return 200, except the deliberately absent projects hub until approved records exist. Confirm custom-domain canonicals and actual raw main content; reject any deployment still referencing the preview origin. Inspect `/robots.txt`, `/sitemap.xml`, `/llms.txt`. The legacy camera URL must permanently redirect to the primary camera URL. Check the homepage, contact email handoff, navigation, footer, phone and WhatsApp links, image loading, FAQ toggles and mobile-menu open/close/Escape at desktop and narrow/mobile sizes. No test enquiry should be sent without permission. Check browser errors and real-device behaviour; source checks are not visual QA.

Rollback in Vercel: open the existing project's Deployments, select `dpl_Po3sNC8xRuyDE8oNagtaoQjazhd5`, and use the available rollback/promote action if the new production release breaks functionality. Do not alter DNS or email records. Verify the public domain again after rollback.
