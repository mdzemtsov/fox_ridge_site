# Arabic Localization QA Notes

**Scope:** local pre-publication validation for the Arabic `/ar` experience.

| Check | Result | Evidence |
|---|---|---|
| Arabic homepage | Passed | `/ar` rendered Arabic navigation, hero, calls to action, footer disclosure, and links to `/ar` routes. The language switcher exposed English and Simplified Chinese alternatives. |
| RTL document semantics | Passed | On `/ar/contact?interest=research`, the DOM reported `lang="ar"` and `dir="rtl"`. |
| Arabic metadata and hreflang | Passed | The Arabic contact page carried Arabic title metadata and reciprocal `en`, `zh-CN`, `ar`, and `x-default` alternate links. |
| Confidential-introduction form | Passed | Labels, guidance, consent, errors, placeholders, and CTA rendered in Arabic. The query preselection yielded the server-approved value `Research / market briefing`. |
| Horizontal overflow | Passed | The local Arabic contact page reported `scrollWidth` 1265 against a 1280 viewport, with no horizontal overflow. |
| Desktop visual treatment | Passed | Homepage and contact form were visually reviewed with right-aligned Arabic content, mirrored directional icons, readable typography, intact branding, and no clipping observed. |

## Remaining release checks

- Validate Arabic Track Record, Privacy Policy, Investor Resources, International Investors, and standalone investor presentation in desktop and mobile viewports.
- Submit one controlled Arabic production form test only after deployment approval; validate both internal notification and applicant acknowledgement.
- Obtain qualified counsel approval before relying on Arabic privacy, securities, Regulation D, performance, and offering language.

| Arabic Track Record | Passed | `/ar/track-record` displayed the completed full-cycle investments, in-progress projects, and 25+ LP participation sections as a readable RTL vertical experience. Historical-experience and past-performance limitations remained visible. |
| Arabic Privacy Policy | Passed | `/ar/privacy-policy` rendered its Arabic dates, Vercel Blob/Resend data-routing disclosure, RTL bullet lists, and Arabic legal content without Chinese text or visual clipping in desktop review. |
| Arabic standalone presentation | Passed | `/presentations/investor-presentation-ar.html` opened as a full-page Arabic RTL presentation, displayed Arabic navigation and content, and exposed both return links to `/ar/investor-portal`. Interactive sections and chart canvases remained present. |

> The legal-language review is a translation and implementation quality check only. It is not legal advice or counsel approval.
| Arabic Investor Resources | Passed | `/ar/investor-resources` rendered Arabic research cards with RTL layout and local routes to the Arabic research note. The page retained its informational-only framing. |
| Arabic International Investors | Passed | `/ar/international-investors` rendered Arabic cross-border process content, KYC/AML and sanctions disclosures, investor-specific eligibility qualifications, FAQs, CTA, and link to Arabic Track Record with no clipping in desktop review. |
| Standalone presentation DOM | Passed | The presentation DOM reported `lang="ar"` and `dir="rtl"`, had two Arabic portal-return links, retained 14 chart canvases, and contained no Chinese text in its rendered body. |
