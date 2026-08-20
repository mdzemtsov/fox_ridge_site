# FoxRidge Equity Partners — Public-Message Alignment Report

> **Scope:** Public-message consistency audit and implementation against the owner-approved standard in [`docs/foxridge-content-source-of-truth.md`](./foxridge-content-source-of-truth.md).
>
> **Repository baseline:** `mdzemtsov/fox_ridge_site` at `b8bf8cbd` before this change set.
>
> **Visual scope:** No visual-system redesign was made. Changes are limited to copy, public-resource availability, and removal of unused components that retained stale public-resource links.

## Executive Summary

The public website has been aligned to the approved core message:

> **One Investor. One Deal. Full Alignment.**

The active public pages now use the approved Texas Triangle focus — Houston, Dallas–Fort Worth, and San Antonio — and current Class B+/A, 2000-vintage-and-later acquisition criteria. Claims about South Florida, Charlotte, Atlanta, in-house property management, specific ticket amounts, timing, feeder structures, travel arrangements, broad governance rights, and unapproved economics were removed or replaced on the active public website.

Three public research assets contained extensive prohibited economics and market claims. They have been removed from the deployable public directory, retained under `internal/restricted/` for owner and counsel review, and unlinked from the active application. The gated English and Russian investor presentations remain a separate owner-decision item because the current browser-side access gate does not protect their direct static URLs.

## A. Corrected Public-Page Conflicts

| Route or shared surface | Corrected conflict | Final treatment |
|---|---|---|
| `/` — Homepage | Current focus stated Texas and South Florida; current asset class stated Class A/B. | Replaced with **Class B+/A**, 2000 vintage and later, across **Houston, Dallas–Fort Worth, and San Antonio**. |
| `/` — Homepage | Active-market section named South Florida. | Replaced with Dallas–Fort Worth, Houston, and San Antonio; softened deal-selection language to underwriting, diligence, and investment criteria. |
| `/` — Homepage | “Return-maximizing” and cash-on-cash language. | Replaced with disciplined, risk-aware value-creation language. |
| `/` — Homepage | “In-house property management control” and AI property-management claims. | Replaced with FoxRidge asset management and **oversight of third-party property management**; AI wording now describes operational support in coordination with that provider. |
| `/` — Homepage | “Class A & B Assets,” “2000s and up,” and an in-house property-management list item. | Replaced with Class B+/A assets, 2000 vintage and later, and third-party property-management oversight. |
| `/` — Homepage | A featured card directly opened an unapproved public report and made opportunity claims. | Replaced with a Research & Insights update linking only to `/investor-resources`. |
| `/strategy` — Investment Strategy | Class A & B acquisition criteria, $10M–$50M size range, Texas-and-Florida market copy, and South Florida sourcing language. | Replaced with Class B+/A, 2000 vintage and later; transaction scale assessed per acquisition; and the Texas Triangle — Houston, Dallas–Fort Worth, and San Antonio. |
| `/strategy` — Investment Strategy | Structure copy promised custom return, governance, hold-period, and jurisdiction terms. | Replaced with investor review and approval of each acquisition, subject to diligence and definitive documentation. |
| `/strategy` — Investment Strategy | “In-house property management control” and return-maximizing exit language. | Replaced with FoxRidge asset management, capital-plan oversight, third-party property-management oversight, and a no-guarantee qualification for exit timing and outcome. |
| `/strategy` — Investment Strategy | Cross-border structuring implication and stale report promotion. | Replaced with a qualified-adviser referral and a Research & Insights materials-under-review callout. |
| `/our-investors` — Capital Partners | Broad governance promises, including major decisions, refinance timing, disposition windows, capex approvals, and “100% Direct Governance.” | Replaced with the approved model: investor review and approval of each acquisition; FoxRidge leads day-to-day execution after closing. |
| `/our-investors` — Capital Partners | “No PPM circulation,” preferred-return conflicts, subscription language, economics comparisons, and expedited hard-money claim. | Replaced with direct communication, focused coordination, and clear references to diligence, financing, approval, and definitive documentation. |
| `/our-investors` — Capital Partners | Family-office-only or UHNW-only framing and Sun Belt target-market references. | Updated to include family offices, qualified private investors, principals, and international capital partners; Texas is the current focus. |
| `/our-investors` — Capital Partners | Stale and unapproved research promotion. | Replaced with a neutral public-materials-under-review message linking to Research & Insights. |
| `/international-investors` — International Investors | $3M, $5M, and $10M ticket amounts. | Removed; replaced with specific-asset review and acquisition approval language. |
| `/international-investors` — International Investors | South Florida portfolio framing, Charlotte/Atlanta expansion, and multi-asset/timeline promises. | Replaced with Texas Triangle focus and deal-by-deal evaluation. |
| `/international-investors` — International Investors | 30–45-day closing timeline; hosted Texas/Florida visits; flights, hotel, transportation, and dinner arrangements. | Removed; no timing is guaranteed and potential site visits are discussed case by case. |
| `/international-investors` — International Investors | Cross-border structuring and offshore-feeder-vehicle claims. | Replaced with a clear statement that FoxRidge does not provide legal, tax, financial, or cross-border structuring advice and that prospective partners should use their own qualified advisers. |
| `/international-investors` — International Investors | Predictive market-window and return-oriented language. | Replaced with careful-underwriting, asset-level diligence, and no-assurance language. |
| `/investor-resources` — Research & Insights | Dashboard card named South Florida as a current deployment market and made performance-oriented claims. | Removed from the public resource library. The page now uses a neutral materials-under-review message and retains its existing visual language. |
| `/about` — Our Team | Report-specific “new research” promotion and unapproved market-opportunity claim. | Replaced with a Research & Insights materials-under-review message. Leadership bios, titles, photos, and links were not changed. |
| Shared unused code | Dormant `ResearchBanner` and `ReportViewer` components retained stale direct links to restricted research. | Removed because they were not referenced by the active application and could otherwise reintroduce stale public destinations. |

## B. Items Hidden Pending Approval

The following assets were not deleted. They were moved from `client/public/research/`, which is deployed by Vercel, into `internal/restricted/`, which is retained in source control but not deployed as a public site asset.

| Former public URL | Retained review file | Why it was hidden |
|---|---|---|
| `/research/class-b-a-intelligence-dashboard.html` | `internal/restricted/class-b-a-intelligence-dashboard.pending-owner-approval.html` | Contains South Florida, Charlotte, and Atlanta acquisition framing; LP IRR and scenario targets; target price and financing information; and other unapproved performance/economic claims. |
| `/research/texas-triangle-advantage.html` | `internal/restricted/texas-triangle-advantage.pending-owner-approval.html` | Contains target economics, preferred-return language, ticket amounts, current-market references outside the approved Texas Triangle focus, and other public-message conflicts. |
| `/research/texas-triangle-2026-teaser.pdf` | `internal/restricted/texas-triangle-2026-teaser.pending-owner-approval.pdf` | Contains LP IRR and a $3M minimum-ticket claim, which are outside the approved public-message boundary. |

The public `/investor-resources` route remains active. It no longer links to any of the three restricted materials while replacement materials are being reviewed.

## C. Items Requiring Owner and Counsel Input

| Material or issue | Required decision |
|---|---|
| `/presentations/investor-presentation-en.html` | Decide whether to revise the presentation for future controlled circulation or remove it from site infrastructure. It includes detailed economics and preferred-return mechanics. |
| `/presentations/investor-presentation-ru.html` | Apply the same decision as the English presentation; it includes detailed economics and preferred-return mechanics. |
| Investor Portal access model | The current code-based gate is entirely browser-side, and the HTML presentation URLs remain directly reachable as static assets. Decide whether to implement secure, server-enforced distribution before treating the presentations as controlled materials. |
| Restricted research assets | Decide whether each asset should be revised into a compliant public research publication, distributed only through a secure controlled process, or archived permanently. Any revised version should receive qualified legal review before publication. |
| Transaction-scale disclosure | The approved standard permits approximately $25–35 million purchase price and $8–10 million equity only where legally appropriate and approved. No new scale figures were added during this pass; confirm the exact contexts, qualifiers, and approval path before publishing them. |

## D. Retained and Verified Content

| Route or surface | Verification result |
|---|---|
| `/track-record` — Track Record | Retained without structural or copy changes. Its historical figures continue to be identified as the principals’ prior experience under prior sponsoring entities, with past-performance qualifications. |
| Shared footer in `Layout.tsx` | Retained. Entity disclosure and informational, no-offer, no-guarantee, risk, accredited-investor, and independent-advice language remain in place. |
| `/contact` — Invest With Us | No material conflict identified in this review. |
| `/about` — Our Team | Leadership profiles remained intact except for the research callout noted above. |
| Navigation and visual system | Existing labels, URLs, layout, styling, and responsive structures were preserved. |

## E. Quality Assurance Completed

| Check | Result |
|---|---|
| TypeScript validation | Passed with `pnpm check`. |
| Production build | Passed with `pnpm build`. The existing bundle-size advisory remains but is not caused by this copy-and-content alignment work. |
| Whitespace validation | Passed with `git diff --check`. |
| Active public copy scan | No prohibited market, economics, governance, property-management, travel, or timing claim remains in active public application source outside the retained historical track-record, legal-disclaimer, and controlled-material contexts. |
| Direct public-resource links | No active application link remains to the three restricted research assets. |
| Local route check | All active application routes returned the built site locally: `/`, `/about`, `/strategy`, `/our-investors`, `/track-record`, `/contact`, `/international-investors`, `/privacy-policy`, `/terms-of-service`, `/investor-resources`, and `/investor-portal`. |
| Restricted-material local behavior | The removed research files are absent from the build. The local Express fallback serves the SPA shell for unknown static-like paths; production Vercel behavior must be checked after deployment to confirm no legacy content remains available. |

## F. Production Verification Pending Deployment

After the commit is pushed to `main`, verify that Vercel has deployed the revised build, that all active routes remain available, and that legacy research URLs no longer serve their former HTML/PDF content. This section will be updated with the production result once deployment verification is complete.

## Implementation Note

This report documents content and technical alignment work, not legal advice. The source-of-truth document and all public investment, performance, offering, and international-distribution language should be reviewed by qualified counsel before reliance or future publication.
