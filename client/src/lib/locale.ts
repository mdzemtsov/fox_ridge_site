export type SiteLocale = "en" | "zh" | "ar" | "he";
export type LocaleDirection = "ltr" | "rtl";
export type LocaleReviewStatus = "reviewed" | "candidate";

export type LocaleDefinition = {
  code: SiteLocale;
  htmlLang: string;
  direction: LocaleDirection;
  nativeName: string;
  selectorLabel: string;
  reviewStatus: LocaleReviewStatus;
  selectable: boolean;
};

/**
 * Selector availability is deliberately separate from URL recognition.
 * Candidate locales may be implemented locally, but remain unavailable for public selection
 * until native-language and content/compliance review is recorded.
 */
export const LOCALES: Record<SiteLocale, LocaleDefinition> = {
  en: { code: "en", htmlLang: "en", direction: "ltr", nativeName: "English", selectorLabel: "English", reviewStatus: "reviewed", selectable: true },
  zh: { code: "zh", htmlLang: "zh-CN", direction: "ltr", nativeName: "简体中文", selectorLabel: "简体中文", reviewStatus: "candidate", selectable: true },
  ar: { code: "ar", htmlLang: "ar", direction: "rtl", nativeName: "العربية", selectorLabel: "العربية", reviewStatus: "candidate", selectable: true },
  he: { code: "he", htmlLang: "he", direction: "rtl", nativeName: "עברית", selectorLabel: "עברית", reviewStatus: "candidate", selectable: false },
};

export const LOCALE_ORDER: SiteLocale[] = ["en", "zh", "ar", "he"];

/** Only these routes participate in new locale-equivalence selection. */
export const ACTIVE_NON_RESEARCH_PATHS = [
  "/",
  "/about",
  "/strategy",
  "/our-investors",
  "/track-record",
  "/contact",
  "/international-investors",
  "/privacy-policy",
  "/terms-of-service",
  "/investor-portal",
] as const;

/** Research routes are protected from this localization-foundation task. */
export const PROTECTED_RESEARCH_PATHS = [
  "/investor-resources",
  "/research/current-acquisition-framework",
] as const;

const localePrefix = new Set<SiteLocale>(["zh", "ar", "he"]);

function splitUrl(path: string) {
  const match = path.match(/^([^?#]*)(.*)$/);
  return { pathname: match?.[1] || "/", suffix: match?.[2] || "" };
}

export function getLocale(path: string): SiteLocale {
  const { pathname } = splitUrl(path);
  if (pathname === "/zh" || pathname.startsWith("/zh/")) return "zh";
  if (pathname === "/ar" || pathname.startsWith("/ar/")) return "ar";
  if (pathname === "/he" || pathname.startsWith("/he/")) return "he";
  return "en";
}

export function isChinesePath(path: string) {
  return getLocale(path) === "zh";
}

export function isArabicPath(path: string) {
  return getLocale(path) === "ar";
}

export function isHebrewPath(path: string) {
  return getLocale(path) === "he";
}

export function toEnglishPath(path: string) {
  const { pathname, suffix } = splitUrl(path);
  const firstSegment = pathname.split("/")[1] as SiteLocale | undefined;
  if (firstSegment && localePrefix.has(firstSegment)) {
    const remainder = pathname.slice(3) || "/";
    return `${remainder}${suffix}`;
  }
  return `${pathname || "/"}${suffix}`;
}

export function toLocalizedPath(path: string, locale: SiteLocale) {
  const englishPath = toEnglishPath(path);
  if (locale === "en") return englishPath;
  const { pathname, suffix } = splitUrl(englishPath);
  return `${pathname === "/" ? `/${locale}` : `/${locale}${pathname}`}${suffix}`;
}

export function toChinesePath(path: string) {
  return toLocalizedPath(path, "zh");
}

export function toArabicPath(path: string) {
  return toLocalizedPath(path, "ar");
}

export function toHebrewPath(path: string) {
  return toLocalizedPath(path, "he");
}

export function isProtectedResearchPath(path: string) {
  const { pathname } = splitUrl(toEnglishPath(path));
  return PROTECTED_RESEARCH_PATHS.some((route) => pathname === route || pathname.startsWith(`${route}/`));
}

export function hasLocalizedEquivalent(path: string, locale: SiteLocale) {
  const { pathname } = splitUrl(toEnglishPath(path));
  return locale === "en" || ACTIVE_NON_RESEARCH_PATHS.includes(pathname as (typeof ACTIVE_NON_RESEARCH_PATHS)[number]);
}

export function hasReviewedEquivalent(path: string, locale: SiteLocale) {
  return hasLocalizedEquivalent(path, locale) && LOCALES[locale].reviewStatus === "reviewed";
}

/**
 * Direct localized URLs remain authoritative. This helper preserves the matching route and
 * its query/hash where local candidate content exists; selector availability remains governed
 * independently by LOCALES[locale].selectable.
 */
export function toEquivalentLocalizedPath(path: string, locale: SiteLocale) {
  const englishPath = toEnglishPath(path);
  return hasLocalizedEquivalent(englishPath, locale) ? toLocalizedPath(englishPath, locale) : englishPath;
}

export function toAlternatePath(path: string, locale: Exclude<SiteLocale, "en"> = "zh") {
  return toLocalizedPath(path, locale);
}
