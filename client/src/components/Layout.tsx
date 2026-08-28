import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ArrowUpRight, ChevronLeft, ChevronRight, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { getLocale, isProtectedResearchPath, SiteLocale, toEquivalentLocalizedPath, toLocalizedPath } from "@/lib/locale";
import { ENGLISH_NON_RESEARCH_DESKTOP_NAVIGATION, SHARED_NAVIGATION } from "@/lib/locale-content";
import LanguageSelector from "@/components/LanguageSelector";

type NavigationItem = {
  name: string;
  path: string;
};

type LocaleCopy = {
  skip: string;
  homeLabel: string;
  primaryNavigation: string;
  mobileNavigation: string;
  openNavigation: string;
  navigation: string;
  introduction: string;
  explore: string;
  resources: string;
  contact: string;
  researchAndFirm: string;
  exploreFoxRidge: string;
  contactFoxRidge: string;
  research: string;
  about: string;
  investorPortal: string;
  researchUpdates: string;
  privacyPolicy: string;
  termsOfService: string;
  strapline: string;
  shortDisclosureLead: string;
  shortDisclosureBody: string;
  fullLegalDisclosures: string;
  copyright: string;
  legalDisclosure: React.ReactNode;
};

const navigation: Record<Exclude<SiteLocale, "he">, { desktop: NavigationItem[]; mobile: NavigationItem[] }> = {
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
};

const englishDesktopNavigation: NavigationItem[] = [
  { name: "What We Do", path: "/strategy" },
  { name: "How We Partner", path: "/our-investors" },
  { name: "Track Record", path: "/track-record" },
  { name: "Research", path: "/investor-resources" },
  { name: "International Investors", path: "/international-investors" },
  { name: "About FoxRidge", path: "/about" },
];

const languageLabels: Record<SiteLocale, string> = {
  en: "EN",
  zh: "简体中文",
  ar: "العربية",
  he: "עברית",
};

const languageAriaLabels: Record<SiteLocale, string> = {
  en: "Switch to English",
  zh: "切换至简体中文",
  ar: "التبديل إلى العربية",
  he: "מעבר לעברית",
};

const copy: Record<SiteLocale, LocaleCopy> = {
  en: {
    skip: "Skip to main content",
    homeLabel: "FoxRidge Equity Partners home",
    primaryNavigation: "Primary navigation",
    mobileNavigation: "Mobile navigation",
    openNavigation: "Open navigation menu",
    navigation: "Navigation",
    introduction: "Request a confidential introduction",
    explore: "Explore",
    resources: "Resources",
    contact: "Contact",
    researchAndFirm: "Research and firm information",
    exploreFoxRidge: "Explore FoxRidge",
    contactFoxRidge: "Contact FoxRidge",
    research: "Research",
    about: "About",
    investorPortal: "Investor Portal",
    researchUpdates: "Receive research updates",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    strapline: "Institutional discipline. Entrepreneurial execution. Direct multifamily partnerships for family offices and qualified private capital.",
    shortDisclosureLead: "FoxRidge Equity Partners is a DBA of Consulting Point LLC.",
    shortDisclosureBody: "This website is for informational and educational purposes only and is not an offer, solicitation, recommendation, or investment advice. Real estate investments involve risk, including possible loss of principal.",
    fullLegalDisclosures: "Full legal disclosures",
    copyright: "a DBA of Consulting Point LLC. All Rights Reserved.",
    legalDisclosure: <p className="pt-4"><span className="font-semibold uppercase tracking-[0.08em] text-white/85">Entity Disclosure:</span>{" "}FoxRidge Equity Partners is a registered trade name (DBA) of <span className="font-semibold text-white/85">Consulting Point LLC</span>, a limited liability company organized under the laws of the State of Florida. All business activities, agreements, and legal obligations are conducted through Consulting Point LLC. <span className="font-semibold uppercase tracking-[0.08em] text-white/85">Legal Disclaimer:</span>{" "}This website and all content herein are provided solely for informational and educational purposes. Nothing on this website constitutes an offer to sell, a solicitation of an offer to buy, or a recommendation of any security, investment product, or investment strategy. No content on this site constitutes investment, financial, legal, tax, or accounting advice of any kind. <span className="font-semibold uppercase tracking-[0.08em] text-white/85">No Guarantee of Returns:</span>{" "}Any projected returns, target yields, IRR, equity multiples, or other forward-looking metrics are illustrative estimates only based on assumptions that may not materialize. Past performance is not indicative of future results. All real estate investments involve substantial risk, including possible loss of some or all principal invested. Actual results may differ materially from any projections presented. <span className="font-semibold uppercase tracking-[0.08em] text-white/85">Accredited Investors Only — General Advertising Notice:</span>{" "}This website may constitute general advertising or general solicitation within the meaning of Rule 502(c) of Regulation D. Any securities offerings are conducted exclusively pursuant to exemptions from registration under the Securities Act of 1933, as amended, including Rule 506(c) of Regulation D, and are available only to verified accredited investors as defined under Rule 501. No offer to sell or solicitation to buy any security is made through this website; any such offer is made only through definitive offering documents. Prior to accepting any investment, FoxRidge Equity Partners / Consulting Point LLC will take reasonable steps to verify accredited investor status as required by Rule 506(c). Participation requires completion of a formal subscription process and execution of definitive offering documents. <span className="font-semibold uppercase tracking-[0.08em] text-white/85">Independent Advice:</span>{" "}Prospective investors are strongly encouraged to conduct independent due diligence and consult qualified legal, tax, financial, and accounting advisors before making any investment decision. FoxRidge Equity Partners / Consulting Point LLC makes no representation or warranty, express or implied, as to the accuracy, completeness, timeliness, or suitability of any information on this website for any particular purpose.</p>,
  },
  zh: {
    skip: "跳至主要内容",
    homeLabel: "FoxRidge Equity Partners 首页",
    primaryNavigation: "主导航",
    mobileNavigation: "移动端导航",
    openNavigation: "打开导航菜单",
    navigation: "导航",
    introduction: "申请保密初步沟通",
    explore: "浏览",
    resources: "资料",
    contact: "联系",
    researchAndFirm: "研究与公司信息",
    exploreFoxRidge: "浏览 FoxRidge",
    contactFoxRidge: "联系 FoxRidge",
    research: "研究资料",
    about: "关于我们",
    investorPortal: "详细资料",
    researchUpdates: "订阅研究更新",
    privacyPolicy: "隐私政策",
    termsOfService: "使用条款",
    strapline: "机构化纪律，创业型执行。面向家族办公室与合格私人资本的美国多户住宅直接合作。",
    shortDisclosureLead: "FoxRidge Equity Partners 是 Consulting Point LLC 的商业名称（DBA）。",
    shortDisclosureBody: "本网站仅供参考和教育用途，不构成任何要约、招揽、建议或投资意见。不动产投资存在风险，包括可能损失本金。",
    fullLegalDisclosures: "完整法律披露",
    copyright: "Consulting Point LLC 的商业名称。保留所有权利。",
    legalDisclosure: <p className="pt-4"><span className="font-semibold uppercase tracking-[0.08em] text-white/85">实体披露：</span>FoxRidge Equity Partners 是依据佛罗里达州法律成立的有限责任公司 <span className="font-semibold text-white/85">Consulting Point LLC</span> 的注册商业名称（DBA）。所有业务活动、协议及法律义务均通过 Consulting Point LLC 进行。 <span className="font-semibold uppercase tracking-[0.08em] text-white/85">法律免责声明：</span>本网站及其所有内容仅供参考和教育用途。本网站任何内容均不构成出售要约、购买要约的招揽，或对任何证券、投资产品或投资策略的推荐。本网站内容不构成任何形式的投资、财务、法律、税务或会计建议。 <span className="font-semibold uppercase tracking-[0.08em] text-white/85">不保证回报：</span>任何预测回报、目标收益率、IRR、股权倍数或其他前瞻性指标仅为基于可能无法实现的假设所作的说明性估计。过往业绩并不代表未来结果。所有不动产投资均涉及重大风险，包括可能损失部分或全部投入本金。实际结果可能与任何所示预测存在重大差异。 <span className="font-semibold uppercase tracking-[0.08em] text-white/85">仅限经核实的合格投资者——一般广告提示：</span>本网站可能构成 Regulation D 第 502(c) 条所指的一般广告或一般招揽。任何证券发行仅根据经修订的 1933 年《证券法》注册豁免条款（包括 Regulation D 第 506(c) 条）进行，并仅向符合 Rule 501 定义且经核实的合格投资者提供。本网站不作出任何出售证券要约或购买证券招揽；任何此类要约仅通过最终发行文件作出。在接受任何投资之前，FoxRidge Equity Partners / Consulting Point LLC 将按照 Rule 506(c) 的要求采取合理步骤核实合格投资者身份。参与须完成正式认购流程并签署最终发行文件。 <span className="font-semibold uppercase tracking-[0.08em] text-white/85">独立建议：</span>潜在投资者在作出任何投资决定前，应进行独立尽职调查，并咨询合格的法律、税务、财务和会计顾问。FoxRidge Equity Partners / Consulting Point LLC 不就本网站任何信息针对任何特定目的的准确性、完整性、及时性或适用性作出任何明示或默示的陈述或保证。</p>,
  },
  he: {
    skip: "דלג לתוכן הראשי",
    homeLabel: "דף הבית של FoxRidge Equity Partners",
    primaryNavigation: "ניווט ראשי",
    mobileNavigation: "ניווט לנייד",
    openNavigation: "פתח תפריט ניווט",
    navigation: "ניווט",
    introduction: "בקשת שיחת היכרות חסויה",
    explore: "לגלות",
    resources: "משאבים",
    contact: "יצירת קשר",
    researchAndFirm: "מחקר ומידע על החברה",
    exploreFoxRidge: "לגלות את FoxRidge",
    contactFoxRidge: "יצירת קשר עם FoxRidge",
    research: "מחקר",
    about: "אודות",
    investorPortal: "חומרים מפורטים",
    researchUpdates: "קבלת עדכוני מחקר",
    privacyPolicy: "מדיניות פרטיות",
    termsOfService: "תנאי שימוש",
    strapline: "משמעת מוסדית. ביצוע יזמי. שותפויות ישירות בנדל״ן רב-משפחתי עבור משרדי משפחות והון פרטי כשיר.",
    // Legal and regulatory wording remains in approved English pending a reviewed Hebrew legal translation.
    shortDisclosureLead: "FoxRidge Equity Partners is a DBA of Consulting Point LLC.",
    shortDisclosureBody: "This website is for informational and educational purposes only and is not an offer, solicitation, recommendation, or investment advice. Real estate investments involve risk, including possible loss of principal.",
    fullLegalDisclosures: "Full legal disclosures (English)",
    copyright: "a DBA of Consulting Point LLC. All Rights Reserved.",
    legalDisclosure: null,
  },
  ar: {
    skip: "انتقل إلى المحتوى الرئيسي",
    homeLabel: "الصفحة الرئيسية لـ FoxRidge Equity Partners",
    primaryNavigation: "التنقل الرئيسي",
    mobileNavigation: "تنقل الهاتف المحمول",
    openNavigation: "افتح قائمة التنقل",
    navigation: "التنقل",
    introduction: "اطلب تواصلاً سرياً",
    explore: "استكشف",
    resources: "الموارد",
    contact: "التواصل",
    researchAndFirm: "الأبحاث ومعلومات الشركة",
    exploreFoxRidge: "استكشف FoxRidge",
    contactFoxRidge: "تواصل مع FoxRidge",
    research: "الأبحاث",
    about: "من نحن",
    investorPortal: "مواد تفصيلية",
    researchUpdates: "تلقي تحديثات الأبحاث",
    privacyPolicy: "سياسة الخصوصية",
    termsOfService: "شروط الاستخدام",
    strapline: "انضباط مؤسسي. تنفيذ ريادي. شراكات مباشرة في العقارات متعددة الوحدات للمكاتب العائلية ورأس المال الخاص المؤهل.",
    shortDisclosureLead: "FoxRidge Equity Partners هو الاسم التجاري لشركة Consulting Point LLC.",
    shortDisclosureBody: "هذا الموقع مخصص لأغراض المعلومات والتثقيف فقط، ولا يشكل عرضاً أو دعوةً أو توصيةً أو مشورةً استثمارية. تنطوي الاستثمارات العقارية على مخاطر، بما في ذلك احتمال خسارة رأس المال.",
    fullLegalDisclosures: "الإفصاحات القانونية الكاملة",
    copyright: "اسم تجاري لشركة Consulting Point LLC. جميع الحقوق محفوظة.",
    legalDisclosure: <p className="pt-4"><span className="font-semibold tracking-[0.02em] text-white/85">إفصاح الكيان:</span>{" "}FoxRidge Equity Partners هو الاسم التجاري المسجل (DBA) لشركة <span className="font-semibold text-white/85">Consulting Point LLC</span>، وهي شركة ذات مسؤولية محدودة منشأة بموجب قوانين ولاية فلوريدا. تُمارس جميع الأنشطة التجارية والاتفاقيات والالتزامات القانونية من خلال Consulting Point LLC. <span className="font-semibold tracking-[0.02em] text-white/85">إخلاء المسؤولية القانوني:</span>{" "}يُقدَّم هذا الموقع وجميع محتوياته لأغراض المعلومات والتثقيف فقط. ولا يشكل أي محتوى فيه عرضاً للبيع أو دعوةً لتقديم عرض للشراء أو توصيةً بشأن أي ورقة مالية أو منتج استثماري أو استراتيجية استثمارية. ولا يُعد أي محتوى في هذا الموقع مشورةً استثمارية أو مالية أو قانونية أو ضريبية أو محاسبية من أي نوع. <span className="font-semibold tracking-[0.02em] text-white/85">لا يوجد ضمان للعوائد:</span>{" "}أي عوائد متوقعة أو عوائد مستهدفة أو معدل عائد داخلي (IRR) أو مضاعفات حقوق ملكية أو مقاييس استشرافية أخرى هي تقديرات توضيحية فقط قائمة على افتراضات قد لا تتحقق. ولا يُعد الأداء السابق مؤشراً للنتائج المستقبلية. وتنطوي جميع الاستثمارات العقارية على مخاطر جوهرية، بما في ذلك احتمال خسارة بعض أو كل رأس المال المستثمر. وقد تختلف النتائج الفعلية اختلافاً جوهرياً عن أي توقعات معروضة. <span className="font-semibold tracking-[0.02em] text-white/85">للمستثمرين المعتمدين الذين تم التحقق منهم فقط — إشعار بالإعلان العام:</span>{" "}قد يُعد هذا الموقع إعلاناً عاماً أو دعوةً عامة بالمعنى المقصود في القاعدة 502(c) من Regulation D. وتُجرى أي عروض للأوراق المالية حصراً وفقاً لإعفاءات التسجيل بموجب Securities Act of 1933، بصيغته المعدلة، بما في ذلك القاعدة 506(c) من Regulation D، ولا تتاح إلا للمستثمرين المعتمدين الذين تم التحقق منهم كما عرّفتهم القاعدة 501. ولا يُقدَّم عبر هذا الموقع أي عرض لبيع أي ورقة مالية أو دعوة لشرائها؛ ويُقدَّم أي عرض من هذا القبيل فقط من خلال وثائق الطرح النهائية. وقبل قبول أي استثمار، ستتخذ FoxRidge Equity Partners / Consulting Point LLC خطوات معقولة للتحقق من صفة المستثمر المعتمد كما تتطلب القاعدة 506(c). وتتطلب المشاركة استكمال عملية اكتتاب رسمية وتنفيذ وثائق الطرح النهائية. <span className="font-semibold tracking-[0.02em] text-white/85">مشورة مستقلة:</span>{" "}يُشجَّع المستثمرون المحتملون بشدة على إجراء العناية الواجبة المستقلة واستشارة مستشارين قانونيين وضريبيين وماليين ومحاسبيين مؤهلين قبل اتخاذ أي قرار استثماري. ولا تقدم FoxRidge Equity Partners / Consulting Point LLC أي إقرار أو ضمان، صريحاً أو ضمنياً، بشأن دقة أو اكتمال أو حداثة أو ملاءمة أي معلومات في هذا الموقع لأي غرض محدد.</p>,
  },
};

function isCurrentRoute(location: string, path: string, locale: SiteLocale) {
  return location.split("?")[0] === toLocalizedPath(path, locale);
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const locale = getLocale(location);
  const arabic = locale === "ar";
  const rtl = locale === "ar" || locale === "he";
  const localeCopy = copy[locale];
  const currentPath = location.split("?")[0];
  const isProtectedResearchRoute = isProtectedResearchPath(currentPath);
  const localizedNavigation = SHARED_NAVIGATION[locale];
  const desktopNavigation = locale === "en" && !isProtectedResearchRoute ? ENGLISH_NON_RESEARCH_DESKTOP_NAVIGATION : localizedNavigation.desktop;
  const footerNavigation = localizedNavigation.desktop;
  const mobileNavigation = localizedNavigation.mobile;
  const localize = (path: string) => toEquivalentLocalizedPath(path, locale);
  // Research remains excluded: preserve its existing standalone locale links and do not render the new selector there.
  const alternateLanguages = (["en", "zh", "ar"] as SiteLocale[]).filter((item) => item !== locale);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div dir={rtl ? "rtl" : "ltr"} className={cn("min-h-screen flex flex-col font-sans bg-background text-foreground selection:bg-secondary selection:text-white", !isProtectedResearchRoute && "layout-system", locale === "zh" && "locale-zh", arabic && "locale-ar", locale === "he" && "locale-he")}>
      <a href="#main-content" className={cn("sr-only fixed top-4 z-[60] bg-secondary px-4 py-3 text-sm font-bold text-white shadow-lg focus:not-sr-only focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2", rtl ? "right-4" : "left-4")}>
        {localeCopy.skip}
      </a>
      <header
        className={cn(
          "fixed z-40 w-full border-b border-border bg-background/92 backdrop-blur-xl transition-[height,box-shadow,background-color] duration-300",
          scrolled ? "h-16 lg:h-[88px] shadow-sm" : "h-20 lg:h-[104px]"
        )}
        style={{ top: 0 }}
      >
        <div className="container flex h-full items-center justify-between gap-3">
          <Link href={localize("/")} className="flex shrink-0 items-center py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2" aria-label={localeCopy.homeLabel}>
            <img src="/images/logo-header.png" alt="FoxRidge Equity Partners" className={cn("w-auto object-contain transition-all duration-300", scrolled ? "h-10 lg:h-[66px]" : "h-12 lg:h-[80px]")} style={{ maxWidth: scrolled ? "145px" : "175px" }} />
          </Link>

          {isProtectedResearchRoute ? (
            <nav className="hidden xl:flex min-w-0 items-center justify-end gap-0.5" aria-label={localeCopy.primaryNavigation}>
              {desktopNavigation.map((item) => {
                const active = isCurrentRoute(location, item.path, locale);
                return <Link key={item.path} href={localize(item.path)} aria-current={active ? "page" : undefined} className={cn("relative whitespace-nowrap rounded-sm px-2.5 py-2 text-[11px] font-semibold tracking-[0.01em] transition-colors duration-200 2xl:px-3 2xl:text-xs", active ? "bg-primary/5 text-primary" : "text-muted-foreground hover:bg-primary/[0.035] hover:text-primary")}>
                  {item.name}
                  <span className={cn("absolute inset-x-2.5 bottom-0 h-[2px] scale-x-0 bg-secondary transition-transform duration-200 2xl:inset-x-3", rtl ? "origin-right" : "origin-left", active && "scale-x-100")} />
                </Link>;
              })}
              {alternateLanguages.map((alternate) => <Link key={alternate} href={toLocalizedPath(location.split("?")[0] || "/", alternate)} className="ms-2 rounded-sm border border-primary/15 px-2.5 py-2 text-[10px] font-bold tracking-[0.03em] text-primary transition-colors hover:border-secondary hover:text-secondary" aria-label={languageAriaLabels[alternate]}>{languageLabels[alternate]}</Link>)}
              <Link href={localize("/contact")} className="ms-2.5 shrink-0"><Button className="h-10 bg-secondary px-3.5 text-[10px] font-bold uppercase tracking-[0.08em] text-white hover:bg-primary 2xl:px-4">{localeCopy.introduction}<ArrowUpRight className={cn("ms-2 h-3.5 w-3.5", rtl && "-scale-x-100")} aria-hidden="true" /></Button></Link>
            </nav>
          ) : (
            <div className="hidden min-w-0 items-center justify-end gap-2 xl:flex">
              <nav className="flex min-w-0 items-center justify-end gap-0.5" aria-label={localeCopy.primaryNavigation}>
                {desktopNavigation.map((item) => {
                  const active = isCurrentRoute(location, item.path, locale);
                  return <Link key={item.path} href={localize(item.path)} aria-current={active ? "page" : undefined} className={cn("relative whitespace-nowrap rounded-sm px-2.5 py-2 text-[11px] font-semibold tracking-[0.01em] transition-colors duration-200 2xl:px-3 2xl:text-xs", active ? "bg-primary/5 text-primary" : "text-muted-foreground hover:bg-primary/[0.035] hover:text-primary")}>
                    {item.name}
                    <span className={cn("absolute inset-x-2.5 bottom-0 h-[2px] scale-x-0 bg-secondary transition-transform duration-200 2xl:inset-x-3", rtl ? "origin-right" : "origin-left", active && "scale-x-100")} />
                  </Link>;
                })}
              </nav>
              <LanguageSelector currentPath={location} locale={locale} />
              <Link href={localize("/contact")} className="shrink-0"><Button className="h-10 bg-secondary px-3.5 text-[10px] font-bold uppercase tracking-[0.08em] text-white hover:bg-primary 2xl:px-4">{localeCopy.introduction}<ArrowUpRight className={cn("ms-2 h-3.5 w-3.5", rtl && "-scale-x-100")} aria-hidden="true" /></Button></Link>
            </div>
          )}

          <div className="flex items-center gap-1 xl:hidden">
            {isProtectedResearchRoute ? alternateLanguages.map((alternate) => <Link key={alternate} href={toLocalizedPath(location.split("?")[0] || "/", alternate)} className="rounded-sm px-2 py-2 text-[11px] font-bold text-primary transition-colors hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2" aria-label={languageAriaLabels[alternate]}>{alternate === "zh" ? "中文" : languageLabels[alternate]}</Link>) : <LanguageSelector currentPath={location} locale={locale} compact />}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild><Button variant="ghost" size="icon" className="h-11 w-11 rounded-none text-primary hover:bg-primary/5 hover:text-secondary" aria-label={localeCopy.openNavigation} aria-haspopup="dialog"><Menu className="h-6 w-6" aria-hidden="true" /><span className="sr-only">{localeCopy.openNavigation}</span></Button></SheetTrigger>
              <SheetContent side={rtl ? "left" : "right"} className={cn("w-[min(100vw,430px)] p-0", rtl ? "border-r" : "border-l")}>
                  <div className="flex h-full flex-col bg-background" dir={rtl ? "rtl" : "ltr"}>
                  <div className="flex items-center justify-between border-b border-border px-6 py-5"><span className="font-display text-xl font-bold text-primary">{localeCopy.navigation}</span><span className="text-[10px] font-bold uppercase tracking-[0.16em] text-secondary">FoxRidge</span></div>
                  <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-5 py-5" aria-label={localeCopy.mobileNavigation}>
                    {mobileNavigation.map((item, index) => {
                      const active = isCurrentRoute(location, item.path, locale);
                      const Chevron = rtl ? ChevronLeft : ChevronRight;
                      return <Link key={item.path} href={localize(item.path)} aria-current={active ? "page" : undefined} onClick={() => setIsOpen(false)} className={cn("group flex min-h-14 items-center justify-between px-4 py-3 text-lg font-display font-bold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2", rtl ? "border-r-2" : "border-l-2", active ? "border-secondary bg-primary/[0.045] text-primary" : "border-transparent text-muted-foreground hover:border-secondary/50 hover:bg-primary/[0.035] hover:text-primary")}><span className="flex items-center gap-3"><span className="text-[10px] font-mono font-medium text-secondary/80">0{index + 1}</span>{item.name}</span><Chevron className={cn("h-4 w-4 text-secondary transition-transform", active ? "translate-x-0" : rtl ? "translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100")} aria-hidden="true" /></Link>;
                    })}
                  </nav>
                  <div className="border-t border-border bg-stone-50 px-5 py-5"><Link href={localize("/contact")} onClick={() => setIsOpen(false)}><Button className="min-h-14 w-full whitespace-normal bg-secondary px-5 py-3 text-sm font-bold leading-snug text-white hover:bg-primary">{localeCopy.introduction}<ArrowUpRight className={cn("ms-2 h-4 w-4 shrink-0", rtl && "-scale-x-100")} aria-hidden="true" /></Button></Link></div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main id="main-content" tabIndex={-1} className={cn("flex-1 transition-[padding] duration-300 focus:outline-none", scrolled ? "pt-16 lg:pt-[88px]" : "pt-20 lg:pt-[104px]")}>{children}</main>

      <footer id="site-footer" className="border-t border-white/10 bg-primary pb-7 pt-11 text-white">
        <div className="container">
          <div className="grid grid-cols-1 gap-11 border-b border-white/[0.08] pb-11 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,1.95fr)] xl:gap-16">
            <div><Link href={localize("/")} aria-label={localeCopy.homeLabel} className="inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"><img src="/images/logo-dark-bg.png" alt="FoxRidge Equity Partners" className="mb-5 h-20 w-auto object-contain md:h-[88px]" style={{ maxWidth: "205px" }} /></Link><p className="max-w-sm text-sm leading-relaxed text-white/65">{localeCopy.strapline}</p><Link href={localize("/contact")} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-colors hover:text-white">{localeCopy.introduction}<ArrowUpRight className={cn("h-4 w-4", rtl && "-scale-x-100")} aria-hidden="true" /></Link></div>
            <div className="grid grid-cols-1 gap-9 sm:grid-cols-3 sm:gap-7 xl:pt-2">
              <nav aria-label={localeCopy.exploreFoxRidge}><h3 className="mb-4 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-secondary">{localeCopy.explore}</h3><div className="flex flex-col items-start gap-2.5 text-sm text-white/70"><Link href={localize("/strategy")} className="transition-colors hover:text-white">{footerNavigation[0].name}</Link><Link href={localize("/our-investors")} className="transition-colors hover:text-white">{footerNavigation[1].name}</Link><Link href={localize("/international-investors")} className="transition-colors hover:text-white">{footerNavigation[4].name}</Link><Link href={localize("/track-record")} className="transition-colors hover:text-white">{footerNavigation[2].name}</Link></div></nav>
              <nav aria-label={localeCopy.researchAndFirm}><h3 className="mb-4 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-secondary">{localeCopy.resources}</h3><div className="flex flex-col items-start gap-2.5 text-sm text-white/70"><Link href={localize("/investor-resources")} className="transition-colors hover:text-white">{localeCopy.research}</Link><Link href={localize("/about")} className="transition-colors hover:text-white">{localeCopy.about}</Link><Link href={localize("/investor-portal")} className="transition-colors hover:text-white">{localeCopy.investorPortal}</Link><Link href={localize("/contact?interest=research")} className="transition-colors hover:text-white">{localeCopy.researchUpdates}</Link></div></nav>
              <nav aria-label={localeCopy.contactFoxRidge}><h3 className="mb-4 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-secondary">{localeCopy.contact}</h3><div className="flex flex-col items-start gap-2.5 text-sm text-white/70"><Link href={localize("/contact")} className="font-semibold text-secondary transition-colors hover:text-white">{localeCopy.introduction}</Link><a href="mailto:partners@foxridgeequity.com" className="break-all transition-colors hover:text-white">partners@foxridgeequity.com</a><a href="https://www.linkedin.com/company/foxridge-equity-partners/" target="_blank" rel="noopener noreferrer" aria-label="FoxRidge Equity Partners on LinkedIn" className="inline-flex items-center gap-2 transition-colors hover:text-[#6fa8dc]"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24.774 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>LinkedIn</a></div></nav>
            </div>
          </div>
          <div className="py-5 md:py-6"><p className="max-w-5xl text-[11px] leading-relaxed text-white/70"><span className="font-semibold text-white/90">{localeCopy.shortDisclosureLead}</span>{" "}{localeCopy.shortDisclosureBody}</p><details className={cn("group mt-4 max-w-5xl text-[10px] leading-[1.65] text-white/70", rtl ? "border-r border-white/15 pr-4" : "border-l border-white/15 pl-4")}><summary className="cursor-pointer list-none text-[10px] font-bold uppercase tracking-[0.12em] text-white/80 transition-colors hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary">{localeCopy.fullLegalDisclosures}</summary>{locale === "he" ? <div dir="ltr">{copy.en.legalDisclosure}</div> : localeCopy.legalDisclosure}</details></div>
          <div className="flex flex-col items-start justify-between gap-4 border-t border-white/[0.08] pt-5 text-[10px] uppercase tracking-wider text-white/45 sm:flex-row sm:items-center"><p>&copy; {new Date().getFullYear()} FoxRidge Equity Partners — {localeCopy.copyright}</p><div className="flex flex-wrap gap-x-5 gap-y-2"><Link href={localize("/privacy-policy")} className="transition-colors hover:text-white">{localeCopy.privacyPolicy}</Link><Link href={localize("/terms-of-service")} className="transition-colors hover:text-white">{localeCopy.termsOfService}</Link></div></div>
        </div>
      </footer>
    </div>
  );
}
