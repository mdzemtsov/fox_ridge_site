export type SiteLocale = "en" | "zh" | "ar";

export function isChinesePath(path: string) {
  return path === "/zh" || path.startsWith("/zh/");
}

export function isArabicPath(path: string) {
  return path === "/ar" || path.startsWith("/ar/");
}

export function getLocale(path: string): SiteLocale {
  if (isChinesePath(path)) return "zh";
  if (isArabicPath(path)) return "ar";
  return "en";
}

export function toEnglishPath(path: string) {
  if (path === "/zh" || path === "/ar") return "/";
  if (path.startsWith("/zh/") || path.startsWith("/ar/")) return path.slice(3);
  return path;
}

export function toChinesePath(path: string) {
  const englishPath = toEnglishPath(path);
  if (englishPath === "/") return "/zh";
  return `/zh${englishPath}`;
}

export function toArabicPath(path: string) {
  const englishPath = toEnglishPath(path);
  if (englishPath === "/") return "/ar";
  return `/ar${englishPath}`;
}

export function toLocalizedPath(path: string, locale: SiteLocale) {
  if (locale === "zh") return toChinesePath(path);
  if (locale === "ar") return toArabicPath(path);
  return toEnglishPath(path);
}

export function toAlternatePath(path: string, locale: Exclude<SiteLocale, "en"> = "zh") {
  return toLocalizedPath(path, locale);
}
