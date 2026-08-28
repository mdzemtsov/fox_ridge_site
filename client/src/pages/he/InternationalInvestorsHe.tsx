import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowUpLeft,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Globe2,
  Handshake,
  Landmark,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Link } from "wouter";

const partnershipPrinciples = [
  "משקיע אחד לכל עסקת רכישה שאושרה.",
  "נדרשת הסכמת המשקיע לפני התחייבות לכל השתתפות הונית.",
  "FoxRidge משקיעה לצד שותף הון.",
  "לאחר הסגירה, FoxRidge מנהלת את הניהול התפעולי היומיומי.",
  "מוקד נוכחי: משולש טקסס, נכסי דיור רב‑דירתיים בדרגת B+/A שנבנו משנת 2000 ואילך.",
];

const processSteps = [
  {
    number: "01",
    title: "שיחה מקדימה חסויה",
    description: "השיחה מתחילה באופן חסוי כדי לדון במטרות, בניסיון ובהאם שותפות ישירה בנכסים רב‑דירתיים מתאימה.",
    icon: Handshake,
  },
  {
    number: "02",
    title: "התאמה הדדית ובדיקת זכאות ראשונית",
    description: "FoxRidge והשותף הפוטנציאלי מעריכים אם יש טעם להמשיך בדיאלוג, תוך עמידה בדרישות החלות ובבדיקות הפנימיות.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "הזדמנויות נוכחיות ותהליך underwriting",
    description: "במקרה הצורך, FoxRidge דנה בהזדמנויות הנוכחיות, בתהליך underwriting, בנכס המטרה ובנקודות מפתח רלוונטיות לעסקה.",
    icon: Landmark,
  },
  {
    number: "04",
    title: "השלמת המסמכים בשיתוף היועצים",
    description: "כל צד משתף פעולה עם יועציו המוסמכים. התנאים הסופיים, הזכויות והזכאות ייקבעו במסמכי העסקה הסופיים.",
    icon: FileText,
  },
  {
    number: "05",
    title: "סגירה ודיווח",
    description: "לאחר הסגירה, FoxRidge מנהלת את התפעול היומי ומספקת דיווחים בהתאם למסמכי ממשל הרכישה.",
    icon: ClipboardCheck,
  },
];

const faqs = [
  {
    question: "מי יכול לבקש להתחיל דיאלוג?",
    answer: "משרדי משפחות, בעלי נכסים בכירים ומשקיעים פרטיים מוסמכים יכולים לבקש שיחה מקדימה חסויה. כל דיון כפוף לחוקים החלים, לדרישות הציות הפנימיות ולנסיבות הספציפיות של הקשר והעסקה.",
  },
  {
    question: "כיצד נלקחים בחשבון שיקולי תושבות בארה\"ב ולא‑תושבים?",
    answer: "הזכאות וכל הליך מסוים תלויים במצבו האישי של המשקיע, במקום מגוריו או במעמדו החוקי, בחוקים החלים ובמאפייני העסקה. דף זה אינו מספק זכאות אוטומטית לאדם או ליישות משפטית כלשהי.",
  },
  {
    question: "האם נדרשות בדיקות KYC/AML וסנקציות?",
    answer: "כן. FoxRidge עשויה לבצע בדיקות ציות פנימיות, בדיקות KYC/AML, בדיקות סנקציות ובדיקות נאותות נוספות לפני המשך הקשר או העסקה.",
  },
  {
    question: "האם FoxRidge מעניקה ייעוץ משפטי או מס?",
    answer: "לא. שותפים פוטנציאליים צריכים לפנות ליועצים משפטיים, מסיים ופיננסיים בלתי תלויים ומוסמכים בנוגע לנסיבותיהם ולכל עסקה מוצעת.",
  },
  {
    question: "כיצד מנוהלים הדיווחים וביקורי שטח?",
    answer: "מסמכי ממשל הרכישה קובעים את אופן הדיווח. ביקורי שטח בנכסים או בשווקים ניתנים לדיון לפי הצורך, אך אינם שירות מובטח או לוח זמנים מובטח.",
  },
];

export default function InternationalInvestors() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50">
      {/* Hero */}
      <section className="relative isolate flex min-h-[720px] items-center overflow-hidden bg-stone-950 md:min-h-[780px]">
        <div className="absolute inset-0 -z-20">
          <img
            src="/images/hero-strategy-garden.jpg"
            alt="פרויקט דיור רב-דירות בארצות הברית"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-l from-[#040C1D]/95 via-[#040C1D]/80 to-[#040C1D]/35" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-[#040C1D]/70 to-transparent" />

        <div className="container py-20 lg:py-28">
          <div className="max-w-5xl">
            <div className="mb-7 inline-flex items-center gap-2 border border-white/20 bg-[#0E2148]/55 px-3 py-2 text-[10px] font-bold tracking-[0.16em] text-white/90 backdrop-blur-sm sm:text-xs">
              <Globe2 className="h-3.5 w-3.5 text-secondary" aria-hidden="true" />
              שותפי הון בינלאומיים
            </div>
            <h1 className="max-w-5xl font-display text-4xl font-bold leading-[0.98] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              שותפויות ישירות בנכסי דיור רב‑דירתיים בארה&quot;ב עבור משרדי משפחות והון פרטי <span className="text-secondary">בינלאומית.</span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/90 sm:text-xl md:text-2xl">
              FoxRidge משתפת פעולה עם משרדי משפחות, בעלי נכסים בכירים ומשקיעים פרטיים מוסמכים המבקשים להשתתף ישירות בכל עסקה של נכסים רב‑דירתיים בארצות הברית.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
              משקיע אחד. עסקה אחת. אתם בוחנים ומאשרים כל רכישה. אנו משתפים אתכם בהשקעה ומנהלים עד היציאה.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="h-auto min-h-14 bg-secondary px-6 py-3 text-right text-sm font-bold leading-snug text-white hover:bg-[#b8942a] sm:px-8 sm:text-base">
                <Link href="/he/contact">
                  בקשו שיחה מקדימה חסויה <ArrowUpLeft className="mr-2 h-4 w-4 shrink-0" aria-hidden="true" />
                </Link>
              </Button>
              <p className="mt-4 max-w-3xl text-xs leading-relaxed text-white/60">
                מיועד למשקיעים מוסמכים ותלוי בחוקים החלים, בדרישות ציות פנימיות, בבדיקות KYC/AML, בבדיקות סנקציות, ובתנאים במסמכי העסקה הסופיים.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why this model */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">למה מודל זה</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-primary md:text-5xl">שותפויות ישירות ממוקדות בנכסים ספציפיים.</h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-stone-600 md:text-lg">
                מודל זה מתאים לבעלי נכסים בכירים או לשותפי הון הרוצים לבחון רכישה ספציפית, תהליך underwriting/תמחור והסיכונים המרכזיים לפני קבלת ההחלטה.
              </p>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-stone-500">
                זו שותפות ישירה לעסקה בודדת, לא קרן מסוג blind pool. כל רכישה נבחנת ולאשרור נפרד, והתנאים נקבעים במסמכים הסופיים.
              </p>
            </div>

            <div className="border-r-2 border-secondary bg-stone-50 p-6 md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-stone-400">סקירת שותפות</p>
              <ul className="mt-5 space-y-4">
                {partnershipPrinciples.map((principle) => (
                  <li key={principle} className="flex items-start gap-3 text-sm leading-relaxed text-stone-700 md:text-base">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                    <span>{principle}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Practical international process */}
      <section className="border-y border-white/10 bg-primary py-16 text-white md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">גישה מעשית לפעילות חוצת גבולות</p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">שלבים ברורים. בדיקות מתאימות.</h2>
            <p className="mt-5 text-base leading-relaxed text-white/75 md:text-lg">
              יחסים חוצי גבולות דורשים תיאום קפדני. התהליך בנוי משלבים ואינו מבטיח מועדים, תוצאות משפטיות או השלמת עסקה.
            </p>
          </div>

          <div className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 md:gap-5">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.number} className="border border-white/15 bg-white/[0.06] p-5 backdrop-blur-sm md:p-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold tracking-[0.12em] text-secondary">{step.number}</span>
                    <Icon className="h-5 w-5 text-secondary" aria-hidden="true" />
                  </div>
                  <h3 className="mt-7 font-display text-xl font-bold leading-tight text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-stone-50 py-16 md:py-24">
        <div className="container max-w-4xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">שאלות נפוצות חוצות‑גבולות</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-5xl">שאלות נפוצות — תשובות ישירות.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-stone-600 md:text-lg">
              סיכומי עיון אלה מיועדים לעיון בלבד ואינם מהווים ייעוץ משפטי, מס, ניירות ערך, הגירה או השקעה.
            </p>
          </div>

          <div className="mt-10 divide-y divide-stone-200 border-y border-stone-200 bg-white">
            {faqs.map((faq) => (
              <details key={faq.question} className="group px-5 py-5 md:px-7">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display text-lg font-bold text-primary marker:content-none">
                  <span>{faq.question}</span>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center border border-stone-300 text-secondary transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-stone-600">{faq.answer}</p>
              </details>
            ))}
          </div>
          <p className="mt-6 text-center text-xs leading-relaxed text-stone-500">
            שוקי אירופה, מדינות מועצת שיתוף הפעולה של המפרץ (GCC), אסיה‑פסיפיק ודרום אמריקה עשויים להיכלל במסגרת הדרישות החלות. אין אזור או תחום שיפוטי הזכאי באופן אוטומטי.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-end lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">ניסיון ואחריות</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-primary md:text-5xl">מנכ&quot;לים מנוסים. אחריות ישירה.</h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-stone-600 md:text-lg">
                FoxRidge מובילה כל רכישה באמצעות מנכ&quot;לים מנוסים ושומרת על קשר ישיר עם שותפי ההון לאורך מחזור חיי הנכס.
              </p>
              <Link href="/he/track-record" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-secondary transition-colors hover:text-primary">
                עיינו ברקורד המנכ&quot;לים <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { value: "$1B+", label: "ניסיון בעסקאות" },
                  { value: "7,000+", label: "מספר הדירות" },
                  { value: "36", label: "מספר הנכסים" },
                ].map((item) => (
                  <div key={item.label} className="border border-stone-200 bg-stone-50 p-5 md:p-6">
                    <p className="font-display text-3xl font-bold text-primary md:text-4xl">{item.value}</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.1em] text-stone-500">{item.label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 border-r-2 border-secondary pr-4 text-xs leading-relaxed text-stone-500">
                הניסיון המוצג משקף פעילויות שנוהלו על‑ידי המנכ&quot;לים בחברות קודמות. ביצועים בעבר אינם מבטיחים ביצועים בעתיד.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-stone-950 py-16 text-white md:py-24">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,rgba(201,168,70,0.20),transparent_65%)] lg:block" />
        <div className="container relative z-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">התחלת שיחה פרטית</p>
          <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-bold leading-tight md:text-5xl">בקשו שיחה מקדימה חסויה.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            לדון האם שותפויות ישירות בנכסי דיור רב‑דירות בארה&quot;ב מתאימות למטרותיכם ולנסיבותיכם.
          </p>
          <Button asChild size="lg" className="mt-8 h-auto min-h-14 bg-secondary px-6 py-3 text-right text-sm font-bold leading-snug text-white hover:bg-[#b8942a] sm:px-8 sm:text-base">
            <Link href="/he/contact">
              בקשו שיחה מקדימה חסויה <ArrowUpLeft className="mr-2 h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
