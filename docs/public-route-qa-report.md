# FoxRidge Public Route QA Report

**Review date:** August 22, 2026
**Scope:** Public FoxRidge routes, public research route, public legal pages, the contextual Investor Portal route, global navigation and footer, route metadata, crawler controls, and responsive mobile presentation.

> **Scope boundary:** This is an implementation QA record, not a legal opinion. Legal, securities, privacy, international-data, and offering-language items identified below require qualified counsel review before reliance.

## Sitewide Fixes Completed

| Area | Completed correction | Verification |
|---|---|---|
| Zoom and document language | Removed `maximum-scale=1` from the viewport meta tag. The source document and runtime document language are set to English. | Static-head review and runtime route audit. |
| Route metadata | Added route-aware titles, descriptions, canonical URLs, Open Graph tags, Twitter summary metadata, branded logo social image, and noindex metadata for restricted and unknown routes. | Runtime metadata audit across 13 routes. |
| Keyboard access | Added a visible-on-focus **Skip to main content** link, a focusable main landmark, a consistent global focus ring, reduced-motion safeguards, and accessible hash-target focus behavior. | Local keyboard and anchor checks. |
| Mobile navigation | Retained a labeled, visible 44px mobile trigger and added explicit `aria-haspopup="dialog"`. Active links retain `aria-current="page"`. | Source, runtime, and responsive review. |
| Images and headings | Verified one H1 per tested route and no runtime images missing an `alt` attribute. Decorative homepage video remains hidden from assistive technology. | Runtime route audit. |
| Legal presentation | Retained the concise global disclosure plus expandable full legal text. Increased disclosure contrast without changing legal wording. | Mobile visual review and source check. |
| Responsive contrast | Removed the Privacy Policy fade-in that briefly rendered legal text at inadequate contrast. | Final 390px mobile capture. |
| Internal navigation | Updated route scrolling so pages start at the top while valid `#partnership-model` links focus their destination. | Local anchor audit. |

## Route-by-Route Results

| Route | Status | Completed QA and fixes |
|---|---|---|
| `/` | **Public / indexed** | Verified single H1, high-contrast hero, wrapped mobile CTAs, accessible partnership anchor, proof strip, current-focus line, and footer/legal links. |
| `/our-investors` | **Public / indexed** | Verified single H1, clear Capital Partners hierarchy, current conversion link, and shared metadata, navigation, contrast, and legal-accessibility improvements. |
| `/strategy` | **Public / indexed** | Verified single H1, current-program hierarchy, `#how-we-invest` target, current conversion link, and shared metadata/navigation improvements. |
| `/international-investors` | **Public / indexed** | Verified single H1, current CTA label, qualification notice visibility, accordion semantics, and shared metadata/navigation improvements. |
| `/track-record` | **Public / indexed** | Verified single H1, prior-entity attribution, responsive selected-project cards, readable historical-performance disclosure, and mobile image contrast. |
| `/investor-resources` | **Public / indexed** | Verified single H1, dated featured research card, readable source/factual-review information, research CTA, and responsive contrast. |
| `/research/current-acquisition-framework` | **Public / indexed** | Verified single H1, dated report metadata, source/factual-review treatment, readable long-form mobile layout, valid back link, and current research CTA. |
| `/about` | **Public / indexed** | Verified single H1, meaningful principal-photo alt text, role/experience layout, and shared metadata/navigation improvements. |
| `/contact` | **Public / indexed** | Verified single H1, associated labels, required indicators, descriptive errors, privacy consent link, hidden keyboard-inaccessible honeypot, and accessible confirmation state. |
| `/privacy-policy` | **Public / indexed** | Retained legal wording, updated metadata, and removed entrance animation to ensure immediate readable contrast on mobile. |
| `/terms-of-service` | **Public / indexed** | Verified single H1, metadata, legal links, footer access, and responsive shared layout. Legal wording was not changed. |
| `/investor-portal` | **Restricted context / noindex** | Verified single H1, contextual detailed-materials path, no access-code gate, noindex runtime metadata, robots exclusion, and Vercel noindex header. |
| Unknown paths | **Noindex** | The route-metadata fallback assigns a page-not-found title, description, canonical path, and `noindex, nofollow` directive. |

## Indexing Decisions

| Asset or route class | Sitemap | Robots / noindex decision |
|---|---|---|
| Core public pages and current research note | Included | Indexable; each tested public route receives `index, follow` runtime metadata. |
| Investor Portal | Excluded | `Disallow` in `robots.txt`, `X-Robots-Tag: noindex, nofollow` in Vercel configuration, and runtime noindex metadata. |
| English and Russian detailed presentations | Excluded | Crawler exclusions and Vercel noindex headers remain in place. |
| Retired dashboard, historical research HTML, teaser PDF, and archived PDFs | Excluded | Crawler exclusions and Vercel noindex controls remain in place. |
| Unknown routes | Not applicable | Runtime `noindex, nofollow` metadata. |

## Verification Summary

The production build and TypeScript check passed. Production verification confirmed the deployed homepage title, current direct-multifamily description, skip-navigation link, updated hero presentation, and readable concise footer disclosure. The local route audit verified English language, exactly one H1, canonical metadata, descriptions, Open Graph metadata, Twitter summary metadata, skip navigation, main landmark presence, and runtime image-alt coverage across 13 routes. The rendered link audit checked **302 internal links** across the public pages and Investor Portal with **zero failures**. The sitemap includes all intended public routes and the current public research note; it excludes controlled and obsolete materials.

Mobile visual QA at a 390px width covered the homepage, Track Record, Research & Insights hub, current research note, Investor Portal, and Privacy Policy. The review confirmed readable hero overlays, CTA wrapping, responsive historical-proof layout, long-form research readability, contextual portal presentation, and the corrected Privacy Policy contrast.

## Remaining Accessibility and Platform Limitations

| Item | Status and recommended next step |
|---|---|
| Mobile-sheet key simulation | The local headless DevTools harness could verify the labeled visible trigger and dialog/pointer path, but did not synthesize Radix Sheet Enter/Escape focus restoration reliably. This is a test-environment limitation, not a reproduced user-facing failure. A real-device keyboard regression check remains recommended before any future navigation-library upgrade. |
| Route-specific social previews for non-JavaScript crawlers | Page metadata updates at runtime in the current client-rendered SPA. JavaScript-capable crawlers receive route-specific metadata; crawlers that inspect only the initial HTML receive the homepage default. True static per-route social previews would require pre-rendering or server-rendered route heads. |
| Long legal pages | Legal content is readable and no longer fades in, but it is necessarily long on mobile. Future legal revisions should preserve heading hierarchy and contrast. |

## Counsel Review Items

| Topic | Reason for counsel review |
|---|---|
| Privacy rights, retention, and response timing | The Privacy Policy includes California-rights language, a 45-day response statement, and data-retention statements that require verification against FoxRidge operational procedures and applicable law. |
| International data handling | The site accurately states that the reviewed source lacks a visitor-selected regional storage workflow. Counsel should determine whether additional cross-border notices, transfer mechanisms, or jurisdiction-specific rights language is required. |
| Offering and securities disclosures | The footer retains Rule 506(c), accredited-investor, no-offer, performance, and general-advertising language. It was not substantively changed and should remain under securities-counsel review. |
| Detailed-materials distribution | The Investor Portal is noindex and contextual, but long-term delivery of detailed materials should use a genuinely controlled process determined by FoxRidge and counsel, not a browser-only gate. |

## References

[1]: `/client/index.html` — viewport, document language, and static homepage metadata.
[2]: `/client/src/components/RouteMetadata.tsx` — route-aware title, canonical, Open Graph, Twitter, and noindex implementation.
[3]: `/client/public/sitemap.xml` and `/client/public/robots.txt` — public-route inclusion and crawler exclusions.
[4]: `/vercel.json` — noindex headers for the Investor Portal and retired or controlled materials.
[5]: `/client/src/components/Layout.tsx` and `/client/src/components/ScrollToTop.tsx` — shared navigation, keyboard focus, footer disclosure, and anchor behavior.
