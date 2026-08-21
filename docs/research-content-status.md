# Research Content Status Register

**Purpose:** Internal publishing control for the FoxRidge Research & Insights program. This register records the public-distribution status of each identified research or downloadable asset following the August 21, 2026 review.

> **Publishing rule:** A public research item must reflect the current Texas Triangle program, identify a factual review date, and include a readable source and date for every material market statistic. Public material does not publish investor minimums, economics, target returns, target equity multiples, target hold periods, or other offering-specific terms.

| Asset | Internal owner | Last factual review | Next review | Approved geography | Publish status | Public treatment / required action |
|---|---|---:|---:|---|---|---|
| `/investor-resources` — Research & Insights hub | FoxRidge Investment Team | 2026-08-21 | 2026-11-21 | Texas Triangle | **Live — updated** | One featured, dated public research note; one next step: **Request current research**. No historical reports, PDFs, or dashboard cards are publicly linked. |
| `/research/current-acquisition-framework` — FoxRidge Current Acquisition Framework | FoxRidge Investment Team | 2026-08-21 | 2026-11-21 or earlier upon program change | Houston, Dallas–Fort Worth, San Antonio | **Live — approved** | Dated, non-statistical program note. It is the only public research detail route and is included in the sitemap. |
| `internal/restricted/class-b-a-intelligence-dashboard.pending-owner-approval.html` | FoxRidge Investment Team and designated owner/counsel reviewer | 2026-08-21 | 2026-09-21 | Not approved for public distribution | **Hidden pending review** | Contains conflicting markets, target economics, minimum-ticket content, hold-period assumptions, and unapproved performance claims. It must not return to public deployment without a full fact, legal, and program-alignment rewrite. |
| `internal/restricted/texas-triangle-advantage.pending-owner-approval.html` | FoxRidge Investment Team and designated owner/counsel reviewer | 2026-08-21 | 2026-09-21 | Not approved for public distribution | **Hidden pending review** | Contains outdated and forecast-oriented market assertions, including non-current market framing. An approved replacement should provide dated, source-supported statistics only. |
| `internal/restricted/texas-triangle-2026-teaser.pending-owner-approval.pdf` | FoxRidge Investment Team and designated owner/counsel reviewer | 2026-08-21 | 2026-09-21 | Not approved for public distribution | **Hidden pending review** | Includes public-inappropriate economics and ticket-size claims. Do not edit financial content by inference; retain off-site until an approved replacement is supplied. |
| `internal/restricted/FoxRidge_TexasTriangle_2026.pending-owner-approval.pdf` | FoxRidge Investment Team and designated owner/counsel reviewer | 2026-08-21 | 2026-09-21 | Not approved for public distribution | **Hidden pending review** | Includes Austin and non-current asset criteria, target returns, preferred return, economics, hold periods, and unsupported urgency/statistics. It is no longer publicly downloadable. |
| `internal/restricted/FoxRidge_Company_Overview.pending-owner-approval.pdf` | FoxRidge leadership and designated owner/counsel reviewer | 2026-08-21 | 2026-09-21 | Not approved for public distribution | **Archived / owner input required** | This is a firm overview rather than a research item, but its public download was removed because it contains conflicting markets, deal-size claims, property-management statements, governance language, and detailed economics. A complete approved replacement is required before public use. |
| `client/public/research/vendor/chart.umd.min.js` | N/A | 2026-08-21 | N/A | N/A | **Archived / deleted from deployment** | Removed as unreferenced residual infrastructure after the public dashboard was withdrawn. |
| `client/public/presentations/investor-presentation-en.html` | FoxRidge leadership and designated owner/counsel reviewer | 2026-08-21 | 2026-09-21 | Controlled material only | **Requires owner input** | The Investor Portal is a browser-side screen; direct static asset access is not a true controlled-access mechanism. The presentation contains detailed economics and terms and needs a genuine controlled-delivery decision before continued use. |
| `client/public/presentations/investor-presentation-ru.html` | FoxRidge leadership and designated owner/counsel reviewer | 2026-08-21 | 2026-09-21 | Controlled material only | **Requires owner input** | Same controlled-access concern and detailed-economics review requirement as the English version. |

## Search and Indexing Controls

The sitemap includes the intended public research hub and the approved public note. The sitemap excludes the Investor Portal, obsolete static research routes, dashboard, and retired downloadable PDFs. `robots.txt` and Vercel `X-Robots-Tag` controls are configured to discourage indexing of the controlled portal and known retired routes. Archived materials are stored outside `client/public` and are not part of the deployment output.

## Required Owner Decisions

The following cannot be resolved through copy edits alone and require designated owner and counsel approval before publication or re-publication:

1. Whether any detailed dashboard should be rewritten for public use or delivered through a genuine controlled-access process.
2. Whether the English and Russian investor presentations remain in use, and how the underlying static files will be protected from direct access.
3. Whether to commission or approve a replacement firm overview PDF and a replacement Texas Triangle report after factual and legal review.
4. The named internal owner responsible for each future factual review and the final source packages for any material market-statistic update.
