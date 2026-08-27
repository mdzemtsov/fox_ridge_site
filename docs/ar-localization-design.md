# Arabic localization design

The Arabic website will use Modern Standard Arabic, language tag `ar`, right-to-left document direction, and parallel `/ar` routes. It will retain the English and Simplified Chinese sites. Arabic URLs will mirror the same public route structure and maintain the existing confidential-introduction API contract.

The shared locale module will treat `en`, `zh-CN`, and `ar` as explicit site locales. A visible compact language selector will show the two alternate language links using native labels: `EN`, `简体中文`, and `العربية`. It will preserve the current page path when changing language.

At the document level, Arabic pages will set `lang="ar"` and `dir="rtl"`; English and Chinese pages will continue to use `dir="ltr"`. The shared layout will use RTL-aware labels, an Arabic navigation model, a mobile drawer that opens from the left, mirrored chevrons/borders, and Arabic footer disclosure copy. Arabic typography will use Noto Sans Arabic for body text and Noto Naskh Arabic for display headings, with tracking reset to avoid Latin-style letter spacing.

Arabic applicant requests will submit `locale: "ar"` while all option values remain the pre-approved English API enums. The acknowledgement email will be right-to-left and link to `/ar/investor-resources`. Internal operational notifications will remain in English.

Arabic route metadata will use Arabic titles, descriptions, canonical URLs, and `hreflang` alternates for English, Simplified Chinese, and Arabic. The sitemap will be expanded with public Arabic URLs; the investor portal remains noindex. The standalone investor presentation will be translated without modifying its CSS or JavaScript and will return to `/ar/investor-portal`.
