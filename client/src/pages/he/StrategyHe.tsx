import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  ArrowLeft,
  ArrowUpLeft,
  BarChart3,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Hammer,
  Landmark,
  MapPin,
  Search,
  TrendingUp,
} from "lucide-react";

const acquisitionCriteria = [
  {
    icon: MapPin,
    title: "שוק",
    description: "Texas Triangle: Houston, Dallas–Fort Worth ו-San Antonio.",
  },
  {
    icon: Building2,
    title: "סוג הנכסים",
    description: "נכסי דיור רב-משפחתיים בדרגה B+/A.",
  },
  {
    icon: Landmark,
    title: "שנת הבנייה",
    description: "נבנה בשנת 2000 או לאחריה.",
  },
  {
    icon: FileText,
    title: "גודל אופייני",
    description:
      "מחירי רכישה לכל עסקה נעים בדרך כלל בין 25 ל-35 מיליון דולר, עם הון עצמי משוער בין 8 ל-10 מיליון דולר, בהתאם לפרטיות כל עסקה ובכפוף להערכה ולתיעוד כל עסקה.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "איתור הזדמנויות",
    description:
      "FoxRidge מעריכה הזדמנויות רכישה פוטנציאליות לנכסי דיור רב-משפחתיים ב-Houston, Dallas–Fort Worth ו-San Antonio על פי הקריטריונים הנוכחיים.",
    icon: Search,
  },
  {
    number: "02",
    title: "אישור",
    description:
      "כל הזדמנות מוערכת באמצעות הנחות שיטתיות ומותאמות לעסקה, תוך התחשבות בתפעול הנכס, בהקשר השוקי ובמקרים דומים של רכישה.",
    icon: BarChart3,
  },
  {
    number: "03",
    title: "בדיקת נאותות",
    description:
      "FoxRidge מבצעת בדיקות יישות, פיננסיות וחוקיות במטרה לזהות עובדות וסיכונים מהותיים הקשורים בכל רכישה.",
    icon: ClipboardCheck,
  },
  {
    number: "04",
    title: "מבנה העסקה",
    description:
      "כל רכישה נבחנת עם שותפי ההון לפני ההתחייבות, ויש לקבל את אישור המשקיעים. התנאים הסופיים מתועדים בהסכם העסקה הסופי.",
    icon: FileText,
  },
  {
    number: "05",
    title: "תפעול",
    description:
      "לאחר הסגירה, FoxRidge מובילה את ניהול הנכסים, מפקחת על תוכניות ההון ומפקחת על ניהול הנכס על ידי צד שלישי.",
    icon: Hammer,
  },
  {
    number: "06",
    title: "מכירה / החזקה / מימון מחדש",
    description:
      "FoxRidge מעריכה אפשרויות החזקה, מימון מחדש או יציאה בהתבסס על מצב הנכס, תנאי השוק ומסמכי העסקה הסופיים. אין הבטחות לתוצאות או לזמנים.",
    icon: TrendingUp,
  },
];

export default function Strategy() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50">
      {/* Hero */}
      <section className="relative isolate flex min-h-[620px] items-center overflow-hidden bg-stone-950 md:min-h-[700px]">
        <div className="absolute inset-0 -z-20">
          <img
            src="/images/hero-strategy-garden.jpg"
            alt="מתחם דיור בסגנון גן"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-l from-[#040C1D]/95 via-[#040C1D]/78 to-[#040C1D]/35" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-[#040C1D]/70 to-transparent" />

        <div className="container py-20 lg:py-28">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-2 border border-white/20 bg-[#0E2148]/55 px-3 py-2 text-[10px] font-bold tracking-[0.16em] text-white/90 backdrop-blur-sm sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              אסטרטגיה ושוק
            </div>
            <h1 className="max-w-4xl font-display text-4xl font-bold leading-[0.98] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              מסגרת רכישה <span className="text-secondary">מדויקת.</span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/90 sm:text-xl md:text-2xl">
              FoxRidge מעריכה נכסי דיור רב-משפחתיים בדרגה B+/A שנבנו בשנת 2000 או לאחריה ב-Texas Triangle (Houston, Dallas–Fort Worth ו-San Antonio). כל רכישה מוערכת בנפרד, דורשת אישור המשקיעים והתנאים מתועדים בהסכמים הסופיים.
            </p>
            <Button asChild size="lg" className="mt-9 h-14 bg-secondary px-7 text-base font-bold text-white hover:bg-[#b8942a] sm:px-8">
              <Link href="/he/contact">
                בקשו שיחה ראשונית חסויה <ArrowUpLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Current acquisition program */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">תוכנית הרכישה הנוכחית</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-5xl">קריטריונים ממוקדים. החלטות מבוססות על כל מקרה לגופו.</h2>
            <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">
              התוכנית הנוכחית תוכננה במכוון להיות מוגבלת בטווח. כל הזדמנות רכישה נבחנת על פי נסיבותיה הספציפיות, עסקאות מצריכות אישור המשקיעים והתיעוד בהסכם הסופי.
            </p>
          </div>

          <div className="mt-11 grid gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-5">
            {acquisitionCriteria.map((criterion) => {
              const Icon = criterion.icon;
              return (
                <article key={criterion.title} className="border border-stone-200 bg-stone-50 p-6">
                  <Icon className="h-7 w-7 text-secondary" aria-hidden="true" />
                  <h3 className="mt-7 font-display text-xl font-bold text-primary">{criterion.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">{criterion.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Market context */}
      <section className="border-y border-stone-200 bg-stone-50 py-16 md:py-20">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">הקשר שוקי</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-primary md:text-4xl">מחקרים מספקים מידע להחלטה אך אינם מחליפים אותה.</h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-stone-600 md:text-lg">
                בכל סקירת רכישה עצמאית, FoxRidge מעריכה את מצב השוק, היצע וביקוש, מימון ותנאי תפעול ברמת הנכס. תובנות השוק נלקחות בחשבון ביחס לנכס הספציפי, אך אינן מהוות התחייבות לתוצאות עתידיות.
              </p>
              <Link href="/investor-resources" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-secondary transition-colors hover:text-primary">
                הצג מחקרי השוק העדכניים <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="border-r-2 border-secondary bg-white p-6 shadow-sm md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-stone-400">מסגרת ההחלטה</p>
              <ul className="mt-5 space-y-4">
                {[
                  "הקשר שוקי של Texas Triangle (Houston, Dallas–Fort Worth, San Antonio)",
                  "צרכי תפעול והון ברמת הנכס",
                  "בדיקות עצמאיות (בדיקת נאותות) והמסמכים הסופיים",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-stone-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Six-step process */}
      <section id="how-we-invest" className="scroll-mt-24 bg-primary py-16 text-white md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">תהליך בשישה שלבים</p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">שלבי הערכה לכל רכישה.</h2>
            <p className="mt-5 text-base leading-relaxed text-white/75 md:text-lg">
              מטרת תהליך זה להגדיר נקודות החלטה ברורות לשותפי ההון לפני ההתחייבות ולהגדיר את תחומי האחריות של FoxRidge לאחר הסגירה.
            </p>
          </div>

          <div className="mt-11 grid gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-5">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.number} className="border border-white/15 bg-white/[0.06] p-6 backdrop-blur-sm md:p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold tracking-[0.12em] text-secondary">{step.number}</span>
                    <Icon className="h-6 w-6 text-secondary" aria-hidden="true" />
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-bold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* International context */}
      <section className="bg-white py-12 md:py-14">
        <div className="container">
          <div className="flex flex-col items-start justify-between gap-6 border-r-2 border-secondary bg-stone-50 p-6 md:flex-row md:items-center md:p-8">
            <div>
              <h2 className="font-display text-xl font-bold text-primary">האם אתם משקיעים מחוץ לארצות הברית?</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-stone-600">
                FoxRidge משתפת פעולה עם שותפי הון בינלאומיים מוסמכים, וממליצה למשקיעים פוטנציאליים לפנות לייעוץ משפטי, מס וייעוץ פיננסי עצמאי בהתאם לנסיבותיהם.
              </p>
            </div>
            <Link href="/he/international-investors" className="shrink-0">
              <Button variant="outline" className="border-primary px-6 font-bold text-primary hover:bg-primary hover:text-white">
                משקיעים בינלאומיים <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-stone-950 py-16 text-white md:py-24">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,rgba(201,168,70,0.20),transparent_65%)] lg:block" />
        <div className="container relative z-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">התחלת שיחה ישירה</p>
          <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-bold leading-tight md:text-5xl">בקשת שיחה ראשונית חסויה.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            דיון אם תוכנית הרכישה הנוכחית של FoxRidge תואמת את מטרותיכם ונסיבותיכם.
          </p>
          <Button asChild size="lg" className="mt-8 h-14 bg-secondary px-8 text-base font-bold text-white hover:bg-[#b8942a]">
            <Link href="/he/contact">
              בקשו שיחה ראשונית חסויה <ArrowUpLeft className="mr-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
