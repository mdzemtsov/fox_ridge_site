import { ACTIVE_NON_RESEARCH_PATHS, LOCALES, SiteLocale } from "@/lib/locale";

export type NavigationItem = {
  name: string;
  path: string;
};

export const SHARED_NAVIGATION: Record<SiteLocale, { desktop: NavigationItem[]; mobile: NavigationItem[] }> = {
  en: {
    desktop: [
      { name: "Strategy & Markets", path: "/strategy" },
      { name: "Capital Partners", path: "/our-investors" },
      { name: "Track Record", path: "/track-record" },
      { name: "Research", path: "/investor-resources" },
      { name: "International Investors", path: "/international-investors" },
      { name: "About", path: "/about" },
    ],
    mobile: [
      { name: "Strategy & Markets", path: "/strategy" },
      { name: "Capital Partners", path: "/our-investors" },
      { name: "International Investors", path: "/international-investors" },
      { name: "Track Record", path: "/track-record" },
      { name: "Research", path: "/investor-resources" },
      { name: "About", path: "/about" },
    ],
  },
  zh: {
    desktop: [
      { name: "策略与市场", path: "/strategy" },
      { name: "资本合作伙伴", path: "/our-investors" },
      { name: "过往经验", path: "/track-record" },
      { name: "研究资料", path: "/investor-resources" },
      { name: "国际投资者", path: "/international-investors" },
      { name: "关于我们", path: "/about" },
    ],
    mobile: [
      { name: "策略与市场", path: "/strategy" },
      { name: "资本合作伙伴", path: "/our-investors" },
      { name: "国际投资者", path: "/international-investors" },
      { name: "过往经验", path: "/track-record" },
      { name: "研究资料", path: "/investor-resources" },
      { name: "关于我们", path: "/about" },
    ],
  },
  ar: {
    desktop: [
      { name: "الاستراتيجية والأسواق", path: "/strategy" },
      { name: "شركاء رأس المال", path: "/our-investors" },
      { name: "السجل السابق", path: "/track-record" },
      { name: "الأبحاث", path: "/investor-resources" },
      { name: "المستثمرون الدوليون", path: "/international-investors" },
      { name: "من نحن", path: "/about" },
    ],
    mobile: [
      { name: "الاستراتيجية والأسواق", path: "/strategy" },
      { name: "شركاء رأس المال", path: "/our-investors" },
      { name: "المستثمرون الدوليون", path: "/international-investors" },
      { name: "السجل السابق", path: "/track-record" },
      { name: "الأبحاث", path: "/investor-resources" },
      { name: "من نحن", path: "/about" },
    ],
  },
  he: {
    desktop: [
      { name: "אסטרטגיה ושווקים", path: "/strategy" },
      { name: "שותפי הון", path: "/our-investors" },
      { name: "ניסיון קודם", path: "/track-record" },
      { name: "מחקר", path: "/investor-resources" },
      { name: "משקיעים בין-לאומיים", path: "/international-investors" },
      { name: "אודות", path: "/about" },
    ],
    mobile: [
      { name: "אסטרטגיה ושווקים", path: "/strategy" },
      { name: "שותפי הון", path: "/our-investors" },
      { name: "משקיעים בין-לאומיים", path: "/international-investors" },
      { name: "ניסיון קודם", path: "/track-record" },
      { name: "מחקר", path: "/investor-resources" },
      { name: "אודות", path: "/about" },
    ],
  },
};

/** English labels intentionally differ outside Research; the protected route retains SHARED_NAVIGATION.en. */
export const ENGLISH_NON_RESEARCH_DESKTOP_NAVIGATION: NavigationItem[] = [
  { name: "What We Do", path: "/strategy" },
  { name: "How We Partner", path: "/our-investors" },
  { name: "Track Record", path: "/track-record" },
  { name: "Research", path: "/investor-resources" },
  { name: "International Investors", path: "/international-investors" },
  { name: "About FoxRidge", path: "/about" },
];

export const LANGUAGE_SELECTOR_COPY: Record<SiteLocale, { label: string; current: string; unavailable: string }> = {
  en: { label: "Select language", current: "Current language", unavailable: "Translation review pending" },
  zh: { label: "选择语言", current: "当前语言", unavailable: "翻译审核中" },
  ar: { label: "اختر اللغة", current: "اللغة الحالية", unavailable: "الترجمة قيد المراجعة" },
  he: { label: "בחירת שפה", current: "השפה הנוכחית", unavailable: "התרגום בבדיקה" },
};

export const ROUTE_LOCALE_COVERAGE: Record<(typeof ACTIVE_NON_RESEARCH_PATHS)[number], Record<SiteLocale, "full" | "candidate" | "not-available">> = Object.fromEntries(
  ACTIVE_NON_RESEARCH_PATHS.map((path) => [
    path,
    { en: "full", zh: "candidate", ar: "candidate", he: "candidate" },
  ]),
) as Record<(typeof ACTIVE_NON_RESEARCH_PATHS)[number], Record<SiteLocale, "full" | "candidate" | "not-available">>;

export function getLanguageSelectorLabel(locale: SiteLocale) {
  const strings = LANGUAGE_SELECTOR_COPY[locale];
  return `${strings.label}. ${strings.current}: ${LOCALES[locale].nativeName}.`;
}
