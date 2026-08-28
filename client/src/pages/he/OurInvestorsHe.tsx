import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowUpLeft,
  Building2,
  CheckCircle2,
  FileCheck2,
  Globe2,
  Handshake,
  Landmark,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Link } from "wouter";

const partnershipSteps = [
  {
    number: "01",
    title: "סקירת ההזדמנות.",
    description: "הצגת הנכסים וניתוח ההשקעה והסיכונים המרכזיים לפני מתן התחייבות.",
    icon: FileCheck2,
  },
  {
    number: "02",
    title: "אישור העסקה.",
    description: "ההחלטה האם להתקדם היא שלכם; לא תהיו כלולים בקרן עיוורת ולא יוטלו עליכם הקצאות קבועות מראש.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "ניישם את תוכנית העסקים.",
    description: "FoxRidge תשקיע בשותפות עמכם ותנהיג את ניהול הנכסים, תפקח על תוכניות ההון ותעקוב אחרי ניהול הנכסים על ידי צד שלישי לאורך תקופת ההחזקה ועד לצאת.",
    icon: Handshake,
  },
];

const partnershipPrinciples = [
  "משקיע יחיד לכל עסקה מאושרת.",
  "המשקיע חייב לאשר לפני מתן כל התחייבות הון.",
  "הון השותף הכללי (GP) מושקע לצד שותפי ההון.",
  "לאחר סיום הסגירה, FoxRidge לוקחת על עצמה את הביצוע התפעולי היומיומי.",
  "מיקוד נוכחי: Texas Triangle, טקסס — נכסי דיור רב-משפחתיים ברמת B+/A, ונכסים שנבנו משנת 2000 והלאה.",
];

export default function OurInvestors() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50">
      {/* Hero */}
      <section className="relative isolate flex min-h-[650px] items-center overflow-hidden bg-stone-950 md:min-h-[720px]">
        <div className="absolute inset-0 -z-20">
          <img
            src="/images/investor-hero-people.jpg"
            alt="פגישה פרטית של משקיעים"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-l from-[#040C1D]/95 via-[#040C1D]/78 to-[#040C1D]/32" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-[#040C1D]/70 to-transparent" />

        <div className="container py-20 lg:py-28">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-2 border border-white/20 bg-[#0E2148]/55 px-3 py-2 text-[10px] font-bold tracking-[0.16em] text-white/90 backdrop-blur-sm sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              שותפי הון
            </div>
            <h1 className="font-display text-4xl font-bold leading-[0.98] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              משקיע אחד. <span className="text-secondary">עסקה אחת.</span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/90 sm:text-xl md:text-2xl">
              FoxRidge משתפת פעולה עם משרד משפחתי אחד, משקיע מוביל או משקיע פרטי מוסמך אחד עבור כל רכישה מאושרת. תוכלו לעיין בנכסים ולבצע בדיקת השקעה לפני קבלת ההחלטה. אנו משקיעים יחד אתכם ומובילים את הביצוע לאחר הסגירה.
            </p>
            <Button asChild size="lg" className="mt-9 h-14 bg-secondary px-7 text-base font-bold text-white hover:bg-[#b8942a] sm:px-8">
              <Link href="/he/contact">
                בקשה לשיחה ראשונית סודית <ArrowUpLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Plain-language steps */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">המודל — תמצית</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-5xl">אתם מעריכים את הנכסים; אנחנו מבצעים.</h2>
            <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">
              הסדרי השותפות נועדו להבהיר את החלטות הרכישה לפני הסגירה ולהגדיר באופן ניתן ליישום את אחריות התפעול לאחר הסגירה.
            </p>
          </div>

          <div className="mt-11 grid gap-4 md:grid-cols-3 md:gap-6">
            {partnershipSteps.map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.number} className="border border-stone-200 bg-stone-50 p-6 md:p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold tracking-[0.12em] text-secondary">{step.number}</span>
                    <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-bold leading-tight text-primary">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership at a glance */}
      <section className="bg-primary py-16 text-white md:py-24">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">סקירה על השותפות</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">מבנה ישיר לעסקת רכישה ספציפית.</h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-white/75 md:text-lg">
                אלו הסדרי שותפות ישירים לעסקה מאושרת ספציפית, ולא קרן. מנגנוני קבלת ההחלטות, אחריות הביצוע והממשל יוגדרו במסמכי העסקה.
              </p>
            </div>

            <div className="border border-white/15 bg-white/[0.06] p-6 backdrop-blur-sm md:p-8">
              <ul className="space-y-4">
                {partnershipPrinciples.map((principle) => (
                  <li key={principle} className="flex items-start gap-3 text-sm leading-relaxed text-white/90 md:text-base">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                    <span>{principle}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-white/10 pt-5 text-xs leading-relaxed text-white/55">
                זכויות הממשל יוגדרו במסמכי העסקה הסופיים.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Audience and international context */}
      <section className="border-b border-stone-200 bg-stone-50 py-14 md:py-20">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">שותפינו</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-4xl">מותאם להחלטות ישירות.</h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-600 md:text-lg">
                FoxRidge משתפת פעולה עם משרדי משפחה, משקיעים מובילים ומשקיעים פרטיים מוסמכים שמעדיפים להעריך עסקאות ספציפיות במקום להתחייב לקרנות עיוורות או להקצאות קבועות מראש.
              </p>
            </div>
            <div className="border-r-2 border-secondary bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <Globe2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                <div>
                  <h3 className="font-display text-lg font-bold text-primary">האם אתם משקיעים מחוץ לארצות הברית?</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">למדו כיצד FoxRidge משתפת פעולה עם שותפי הון בינלאומיים מוסמכים.</p>
                  <Link href="/he/international-investors" className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-secondary transition-colors hover:text-primary">
                    משקיעים בינלאומיים <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principal experience */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-end lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">ניסיון המשקיעים הראשיים</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-primary md:text-5xl">משקיעים מובילים ומנוסים, ממוקדים בנכסים ספציפיים.</h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-stone-600 md:text-lg">
                ניסיון ההובלה הקודם מהווה את הבסיס לפעילות FoxRidge ברכישות, בניהול נכסים ובביצוע בכל שותפות ישירה.
              </p>
              <Link href="/he/track-record" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-secondary transition-colors hover:text-primary">
                הצג רקורד <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { value: "$1B+", label: "ניסיון בעסקאות" },
                  { value: "7,000+", label: "מספר יחידות" },
                  { value: "36", label: "מספר נכסים" },
                ].map((item) => (
                  <div key={item.label} className="border border-stone-200 bg-stone-50 p-5 md:p-6">
                    <p className="font-display text-3xl font-bold text-primary md:text-4xl">{item.value}</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.1em] text-stone-500">{item.label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 border-r-2 border-secondary pr-4 text-xs leading-relaxed text-stone-500">
                הניסיון המוצג משקף פעילויות קודמות של המשקיעים הראשיים במסגרת גופים מפעילים קודמים. ביצועים קודמים אינם ערובה לתוצאות עתידיות.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-stone-950 py-16 text-white md:py-24">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,rgba(201,168,70,0.20),transparent_65%)] lg:block" />
        <div className="container relative z-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">התחלת קשר ישיר</p>
          <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-bold leading-tight md:text-5xl">בקשה לשיחה ראשונית סודית.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            לדיון האם מודל השותפות הישירה מתאים למטרות ולנסיבות שלכם.
          </p>
          <Button asChild size="lg" className="mt-8 h-14 bg-secondary px-8 text-base font-bold text-white hover:bg-[#b8942a]">
            <Link href="/he/contact">
              בקשה לשיחה ראשונית סודית <ArrowUpLeft className="mr-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
