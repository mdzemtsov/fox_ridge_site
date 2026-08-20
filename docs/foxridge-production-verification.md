# FoxRidge Production Verification Log

## Deployment Verified — 2026-08-20

The GitHub `main` branch was updated to commit `f623ab71` (`Align public messaging with approved source of truth`). Vercel subsequently deployed the change successfully to `https://www.foxridgeequity.com/`.

| Production check | Result |
|---|---|
| Homepage approved focus | Verified. The homepage now states Class B+/A multifamily assets built in 2000 or later across the Texas Triangle — Houston, Dallas–Fort Worth, and San Antonio. |
| Homepage research promotion | Verified. The former featured-report card has been replaced with a Research & Insights information update; it no longer links directly to a restricted report. |
| Research & Insights route | Verified at `/investor-resources`. The public page displays its informational/no-offer framing and a visible “Materials Under Review” notice. No report, PDF, or dashboard card is publicly linked. |
| Former dashboard URL | Verified at `/research/class-b-a-intelligence-dashboard.html`. Production returns HTTP `404` and does not serve legacy dashboard content. |
| Former Texas Triangle report URL | Verified at `/research/texas-triangle-advantage.html`. Production returns HTTP `404` and does not serve legacy report content. |
| Former Texas Triangle PDF URL | Verified at `/research/texas-triangle-2026-teaser.pdf`. Production returns HTTP `404` and does not serve legacy PDF content. |
| Active navigation and public routes | Homepage and Research & Insights navigation were visible and working in the deployed site. Local production-build checks had already confirmed all active application routes return the built application. |

> The investor-presentation English and Russian static URLs were not altered during this deployment. They remain an owner-and-counsel decision because the existing browser-side portal gate does not secure the direct presentation URLs.
