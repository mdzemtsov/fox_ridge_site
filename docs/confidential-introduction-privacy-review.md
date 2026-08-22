# Confidential-Introduction and Privacy Implementation Review

**Review date:** August 22, 2026
**Scope:** The public confidential-introduction form, its current storage endpoint, the Investor Portal journey, browser storage, and the associated public Privacy Policy statements.

> **Implementation boundary:** This record describes the reviewed website implementation. It is not a legal opinion and should be reviewed by qualified counsel before the Privacy Policy or cross-border process is relied upon.

## Verified Implementation

| Area | Verified implementation | Public-policy treatment |
|---|---|---|
| Primary conversion path | The public site directs prospective capital partners to `/contact`, labelled **Request a confidential introduction**. | Described as an initial mutual-fit conversation; not an offering process or investor verification. |
| Fields collected | Full name, email address, investor type, country or region, U.S. person status, indicative capital capacity, current interest, preferred time zone, optional message, and privacy/contact consent. | Field list is stated in the Privacy Policy. |
| Form routing | The browser posts to `/api/confidential-introduction`. | The Privacy Policy states that a Vercel-hosted endpoint routes the submission. |
| Record storage | Valid submissions are written as private JSON records to Vercel Blob under `confidential-introductions/YYYY-MM-DD/<uuid>.json`. | The Privacy Policy identifies private Vercel Blob storage. |
| Existing external integrations | No CRM or email-service provider is configured in the reviewed website source. | The Privacy Policy does not claim an active CRM or email provider. |
| Browser storage | The reviewed source retains localStorage only for the display-theme preference. The removed popup and Investor Portal no longer store lead or access records in browser storage. | The Privacy Policy reflects the theme-preference storage only. |
| Automatic interruption | The prior automatic investor-list popup, timed display, session key, and popup-specific endpoint have been removed. | No popup-session storage is described. |
| Investor Portal | The Portal now explains a confidential-introduction and case-by-case materials-access path. It no longer uses a public access code, browser-side gate, or self-attestation as a proxy for verification. | The Privacy Policy states that a request for detailed materials uses the same initial-introduction information and is not investor verification. |
| Research updates | The footer provides a quiet **Receive research updates** link to the same form with **Research / market briefing** preselected. No standalone email subscription, automated mailing workflow, or additional provider is configured. | No separate newsletter-processing claim is made. |

## Counsel and Owner Review Required

| Open item | Why an implementation review cannot decide it | Required owner or counsel decision |
|---|---|---|
| Retention schedule and deletion process | The endpoint stores private records but has no automated deletion or anonymization process. | Approve a written retention period, deletion workflow, responsible owner, and procedure for access/deletion requests. |
| International data handling | The source does not select a visitor-specific data location or implement a distinct regional processing workflow. | Confirm cross-border transfer disclosures, applicable data-processing agreements, and any required regional notices or mechanisms. |
| Vercel provider terms and operational access | The source identifies Vercel routing and private Blob storage, but does not establish contractual, legal, or organizational controls. | Confirm approved vendor terms, internal access control, and incident-response procedures. |
| Detailed-material distribution | Static presentation files have no-index controls but are not a genuine controlled-access system. | Determine whether to replace them with an approved secure delivery process, remove them, or implement an appropriate controlled-material workflow. |
| Form consent wording | The implementation uses a required privacy/contact-consent checkbox. | Confirm the final consent language, lawful basis, and whether a separate optional marketing/research-update consent is required. |
| Property-owner or broker submissions | No active dedicated acquisition-submission route or supporting endpoint is present in the reviewed source. | Confirm whether the business actively solicits such submissions before creating a separate route and privacy notice. |

## Publishing Guardrails

The form confirmation does not promise a response time. The form does not label any user as verified, accredited, eligible, or approved. It does not collect a social-security number, passport data, payment information, or deal-specific subscription information. Any future request for sensitive information, detailed materials, eligibility acknowledgement, or compliance review should be implemented as a separate, approved process rather than added to the public introduction form.
