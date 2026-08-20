# FoxRidge Equity Partners — Public-Message Source of Truth

> **Status:** Internal operating standard for public website messaging.
>
> **Purpose:** This document records owner-approved public-message boundaries for FoxRidge Equity Partners, a DBA of Consulting Point LLC. It is a content-control reference, not legal advice, offering documentation, or a substitute for review by qualified securities and legal counsel.
>
> **Repository baseline reviewed:** `mdzemtsov/fox_ridge_site`, commit `b8bf8cbd` (`Simplify footer navigation`).

## 1. Approved Public Positioning

| Topic | Approved public message | Implementation requirement |
|---|---|---|
| Positioning | **One Investor. One Deal. Full Alignment.** | Use this as the central partnership-model statement. “Single investor” and “single capital partner” may be used when their context is clear. |
| Audience | FoxRidge primarily serves **family offices and private capital** and welcomes family offices, principals, qualified private investors, and international principals. | Do not imply that a visitor must be a family office to begin a conversation. |
| Current focus | **Texas Triangle — Houston, Dallas–Fort Worth, and San Antonio.** | Do not present South Florida, Charlotte, Atlanta, or another market as an active current acquisition focus. |
| Asset criteria | **Class B+/A multifamily assets built in 2000 or later.** | Do not describe the current acquisition mandate as “Class A & B,” “Class A exclusively,” or a pure Class A strategy. Historical/track-record descriptions must be distinguished from current acquisition criteria. |
| Indicative scale | Where already legally appropriate and approved: approximately **$25–35 million purchase price** and **$8–10 million equity per acquisition**. | Always make clear that each acquisition is separate and subject to approval and definitive documentation. Do not introduce these figures where none existed without separate approval. |
| Partnership model | One investor per deal. The investor **reviews and approves each acquisition**; FoxRidge invests alongside the capital partner and leads day-to-day execution from closing through exit. | Avoid broad decision-rights promises, including pre-approved refinance, disposition, capex, or governance rights. |
| Asset management | FoxRidge leads asset management, capital-plan oversight, and **oversight of third-party property management**. | Never claim “in-house property management control.” |
| Track record | The principals’ track record remains visible as a trust-building asset. | Clearly identify relevant results as the principals’ **prior experience under prior sponsoring entities**. Do not portray historical metrics as future projections or objectives. |
| Public-content boundary | Public pages are informational only and must not present an investment offer, guaranteed outcome, or unapproved exact economics. | Maintain the shared legal disclaimer. Refer offering-specific matters to controlled materials after mutual fit and legal approval. |

## 2. Public-Language Guardrails

| Approved approach | Do not publish publicly without separate legal and owner approval |
|---|---|
| Texas Triangle focus: Houston, Dallas–Fort Worth, and San Antonio | South Florida, Charlotte, Atlanta, or other markets as current acquisition focus |
| Class B+/A, 2000 vintage and later | “Class A & B,” “Class A exclusively,” or equivalent current-mandate statements |
| Investor review and approval of each acquisition; FoxRidge day-to-day execution after closing | Broad governance rights, refinance timing, disposition windows, capex approvals, or “100% direct governance” promises |
| Asset management and third-party property-management oversight | “In-house property management control” or unverified vertically integrated management claims |
| Informational discussion subject to diligence, approval, and definitive documentation | Target IRR, target equity multiple, target yield, cash-on-cash return target, guaranteed closing timing, or projected return mechanics |
| General invitation to begin a conversation | Minimum ticket amounts, stated individual ticket sizes, or fundraising/subscription language |
| International partners are welcome; prospective partners should use qualified advisers | Offshore feeder vehicles, universal cross-border structuring, financial/tax/legal advice, or operational claims that are not confirmed |
| Optional site visits discussed case by case | Promises to arrange flights, hotels, transportation, or other travel services |
| Direct reporting and direct relationship where applicable | “No PPM needed,” claims about PPM circulation, or any statement that implies offering-document requirements are unnecessary |
| Historical track record with prior-sponsor disclosure | Current or future performance implication, even if based on historical results |

## 3. Required Qualifiers and Content Handling

1. Retain the shared footer’s entity disclosure and informational, no-offer, no-guarantee, risk, and independent-advice language unless qualified legal counsel directs a change.
2. Describe any acquisition as separate, subject to investor approval, diligence, and definitive documentation where the context calls for an acquisition or partnership discussion.
3. Do not publish detailed fees, promote mechanics, preferred-return terms, lender requirements, guarantees, confidential Head of Terms content, or specific offering economics on public pages.
4. Keep historical track-record figures available only with their clear prior-experience and past-performance qualifications.
5. Treat an access-code gate implemented only in browser-side code as a **user-experience gate, not a secure document-control system**. Documents containing sensitive economics need an owner decision and appropriate secure distribution approach before being treated as controlled materials.

## 4. Current Audit Classification

The classifications below record the public-message audit completed against the repository baseline. “Correct now” means an exact public-copy alignment that can be made without changing the visual system or inventing new economics. “Owner decision” means that removal, replacement, or secure treatment requires an owner decision and, where applicable, legal review.

| Route or asset | Classification | Current issue or action |
|---|---|---|
| `/` — Homepage | Correct now | Current-market references include South Florida; asset criteria say “Class A & B”; asset-management copy claims in-house property-management control; returns language includes cash-on-cash wording. |
| `/strategy` — Investment Strategy | Correct now | Current criteria include Class A & B, Florida, South Florida, and in-house property-management control. Supporting claims should be made consistent with Texas Triangle and third-party property-management oversight. |
| `/our-investors` — Capital Partners | Correct now | Governance language exceeds acquisition approval; “No PPM circulation” and preferred-return references should be removed; decision and timing claims should be softened. |
| `/international-investors` — International Investors | Correct now | Specific ticket amounts, South Florida/Charlotte/Atlanta market language, a closing timeline, feeder-vehicle/cross-border claims, and travel arrangements conflict with the approved boundary. |
| `/investor-resources` — Research & Insights | Correct now | The dashboard resource card presents South Florida as a current deployment market and promotes performance-oriented research language. |
| `/track-record` — Track Record | Retain and verify | Historical results are already identified as the principals’ prior experience under prior sponsoring entities. Do not remove the page or recast historical information as current acquisition criteria. |
| `/about` — Our Team | Retain and verify | Leadership information is not a material conflict; preserve current biographies, titles, and links. |
| `/contact` — Invest With Us | Retain and verify | No material public-message conflict found in the initial audit. |
| Shared `Layout` footer | Retain and verify | Entity disclosure and broad informational/no-offer/risk language are in place. |
| `/research/texas-triangle-advantage.html` | Hidden pending owner approval | Although Texas-focused, the report contains target economics, preferred-return language, ticket amounts, South Florida/Charlotte/Atlanta references, and other unapproved public claims. It was moved out of the deployable public directory for review. |
| `/research/class-b-a-intelligence-dashboard.html` | Hidden pending owner approval | The dashboard contains South Florida plus Charlotte/Atlanta focus, LP IRR figures and targets, target price and financing content, and scenario economics. It was moved out of the deployable public directory for review. |
| `/presentations/investor-presentation-en.html` | Owner decision / controlled-material review | Contains detailed economics and preferred-return mechanics. Browser-side portal access does not prevent direct public URL access; a secure distribution approach and owner/counsel content decision are required. |
| `/presentations/investor-presentation-ru.html` | Owner decision / controlled-material review | Same controlled-material issue as the English presentation, including detailed economics and preferred-return mechanics. Browser-side portal access does not prevent direct public URL access; a secure distribution approach and owner/counsel content decision are required. |

## 5. Current Restricted-Material Location

The three former public research assets are retained in `internal/restricted/` for owner and counsel review and are no longer included in Vercel’s deployable public directory. The public Research & Insights page remains available but does not link to those materials until approved replacements are available.

## 6. Implementation Rule

When copy is ambiguous, apply the more conservative approved interpretation: maintain **Texas Triangle**, **Class B+/A built in 2000 or later**, **one investor per deal**, **investor approval of each acquisition**, and **FoxRidge’s asset-management and third-party property-management oversight**. Escalate content that describes economics, legal structuring, investment terms, performance, markets outside the Texas Triangle, or service commitments rather than improvising new language.

## 7. Change Control

Any future public-page change that introduces a new market, investment product, capital structure, return discussion, case study, investment threshold, international structuring claim, or service commitment must be checked against this document before publication. Where the proposed content could constitute an offering, solicitation, performance communication, or legal/tax advice, obtain qualified counsel review before it is published.
