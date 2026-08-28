import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowUpLeft,
  Building2,
  CheckCircle2,
  Globe2,
  Handshake,
  Landmark,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Link } from "wouter";

const proofPoints = [
  "אתם מאשרים כל עסקה.",
  "אנחנו משקיעים איתכם ישירות.",
  "אנו מנהלים את הנכסים עד למועד היציאה.",
];

const partnershipSteps = [
  {
    number: "01",
    title: "סקירה",
    description: "FoxRidge מציגה הזדמנויות רכישה ממוקדות עם חיתום, בדיקת נאותות ותוכנית פעולה ברורה.",
    icon: Landmark,
  },
  {
    number: "02",
    title: "ההחלטה",
    description: "אתם בוחנים את ההזדמנות ומאשרים כל רכישה לפני שממשיכים בשותפות.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "ביצוע",
    description: "FoxRidge משקיעה איתכם ישירות, מנהלת את הנכסים ומפקחת על חברות ניהול נכסים חיצוניות עד למועד היציאה.",
    icon: Handshake,
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero */}
      <section className="relative isolate flex min-h-[700px] items-center overflow-hidden bg-stone-950 md:min-h-[760px]">
        <div className="absolute inset-0 -z-20">
          <video autoPlay muted loop playsInline className="h-full w-full object-cover" aria-hidden="true">
            <source src="/videos/hero-american-city.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-l from-[#050b18]/95 via-[#050b18]/78 to-[#050b18]/35" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-[#050b18]/75 to-transparent" />

        <div className="container py-20 lg:py-28">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-2 border border-white/20 bg-[#0E2148]/55 px-3 py-2 text-[10px] font-bold tracking-[0.16em] text-white/90 backdrop-blur-sm sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              שותפויות ישירות לנכסי דיור רב‑יחידות בארצות הברית
            </div>

            <h1 className="max-w-4xl font-display text-4xl font-bold leading-[0.98] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              הנכסים מוגדרים.<br />
              הנתונים זמינים. <span className="text-secondary">ואז ההון זמין.</span><br />
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/90 sm:text-xl md:text-2xl">
              אנו מספקים שותפויות ישירות לדיור רב‑יחידות בארצות הברית עבור משרדי משפחות והון פרטי. אתם מאשרים כל רכישה; FoxRidge משקיעה איתכם ישירות ומנהלת את התפעול עד למועד היציאה.
            </p>

            <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="h-14 bg-secondary px-6 text-base font-bold text-white hover:bg-[#b8942a] sm:px-8">
                <Link href="/he/contact">
                  בקשת שיחה ראשונית חסויה <ArrowUpLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 border-white/40 bg-white/[0.04] px-6 text-base font-semibold text-white hover:border-white hover:bg-white/10 hover:text-white sm:px-8">
                <a href="#partnership-model">
                  עיינו במודל השותפות <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Compact proof strip */}
      <section className="border-y border-stone-200 bg-white">
        <div className="container py-5 md:py-6">
          <div className="grid gap-3 md:grid-cols-3 md:divide-x md:divide-stone-200">
            {proofPoints.map((point) => (
              <div key={point} className="flex items-center gap-3 px-1 text-sm font-semibold text-primary md:justify-center md:px-5">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                {point}
              </div>
            ))}
          </div>
          <p className="mt-5 text-center text-xs font-bold uppercase tracking-[0.12em] text-stone-500 md:mt-4">
            מיקוד נוכחי: Texas Triangle · דירות רב‑יחידות בדרג B+/A · נבנו בשנת 2000 או לאחר מכן
          </p>
        </div>
      </section>

      {/* Partnership model */}
      <section id="partnership-model" className="scroll-mt-24 bg-stone-50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">הסבר מודל השותפות</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-5xl">מסלול ברור. אחריות משותפת.</h2>
            <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">
              המודל נועד לשיתוף פעולה ישיר: לכל נכס יש שותף הון יחיד, עם תהליך קבלת החלטות ברור, ו‑FoxRidge מבצעת את הניהול היומי לאחר הסגירה.
            </p>
          </div>

          <div className="mt-11 grid gap-4 md:grid-cols-3 md:gap-6">
            {partnershipSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="border border-stone-200 bg-white p-6 md:p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold tracking-[0.12em] text-secondary">{step.number}</span>
                    <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-bold text-primary">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">{step.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link href="/he/our-investors" className="inline-flex items-center gap-2 text-sm font-bold text-secondary transition-colors hover:text-primary">
              הכירו את שותפי ההון <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Current focus */}
      <section className="bg-primary py-16 text-white md:py-24">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">אסטרטגיה ושוק</p>
              <h2 className="mt-3 max-w-xl font-display text-3xl font-bold leading-tight md:text-5xl">מיקוד מוגדר ומכוון.</h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
                FoxRidge מתמקדת בהזדמנויות דיור רב‑יחידות ברמה מוסדית, שבהן השוק, הנכסים ותוכניות הביצוע עונים על קריטריונים מחמירים לרכישה.
              </p>
              <Link href="/he/strategy" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-secondary transition-colors hover:text-white">
                עיינו באסטרטגיה ובשוק <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="border border-white/15 bg-white/[0.06] p-6 backdrop-blur-sm md:p-8">
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/55">שוק</p>
                    <p className="mt-1 text-base font-semibold text-white">Houston · Dallas–Fort Worth · San Antonio</p>
                  </div>
                </div>
                <div className="h-px bg-white/10" />
                <div className="flex items-start gap-4">
                  <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/55">קריטריוני נכס</p>
                    <p className="mt-1 text-base font-semibold text-white">נכסי דיור רב‑יחידות ברמת B+/A · נבנו בשנת 2000 או לאחר מכן</p>
                  </div>
                </div>
                <div className="h-px bg-white/10" />
                <div className="flex items-start gap-4">
                  <Users className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/55">ביצוע</p>
                    <p className="mt-1 text-base font-semibold text-white">FoxRidge מנהלת את הנכסים ומפקחת על ניהול הנכסים על‑ידי צד שלישי</p>
                  </div>
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
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">הניסיון הקודם של המנהל הראשי</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-primary md:text-5xl">הניסיון מוביל את העבודה.</h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-stone-600 md:text-lg">
                FoxRidge מספקת הנהגה מנוסה בכל רכישה, תוך שמירה על מודל שותפות ישיר המותאם לכל נכס.
              </p>
              <Link href="/he/track-record" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-secondary transition-colors hover:text-primary">
                עיינו ברקורד של המנהל הראשי <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { value: "$1B+", label: "ניסיון בעסקאות" },
                  { value: "7,000+", label: "יחידות" },
                  { value: "36", label: "נכסים" },
                ].map((item) => (
                  <div key={item.label} className="border border-stone-200 bg-stone-50 p-5 md:p-6">
                    <p className="font-display text-3xl font-bold text-primary md:text-4xl">{item.value}</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.1em] text-stone-500">{item.label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 border-r-2 border-secondary pr-4 text-xs leading-relaxed text-stone-500">
                הניסיון המוצג משקף את פעילות המנהל הראשי בישויות קודמות שהקים. ביצועים בעבר אינם מבטיחים תוצאות עתידיות.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="border-y border-stone-200 bg-stone-50 py-14 md:py-20">
        <div className="container">
          <div className="grid items-center gap-7 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">מחקרים</p>
              <h2 className="mt-3 font-display text-2xl font-bold text-primary md:text-3xl">רקע שוק Texas Triangle.</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone-600 md:text-base">
                FoxRidge משתפת תובנות מאומתות על מצב שוק Texas Triangle לדיור רב‑יחידות, ונקודות בדיקת נאותות המנחות את תהליך הרכישה.
              </p>
            </div>
            <Link href="/investor-resources" className="shrink-0">
              <Button variant="outline" className="border-primary px-6 font-bold text-primary hover:bg-primary hover:text-white">
                עיינו בחומרי המחקר <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* International */}
      <section className="bg-[#0E2148] py-12 text-white md:py-14">
        <div className="container">
          <div className="flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
            <div className="flex max-w-3xl items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-secondary/40 bg-secondary/10">
                <Globe2 className="h-5 w-5 text-secondary" aria-hidden="true" />
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-white">הון בינלאומי, שותפויות ישירות.</h2>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  FoxRidge משתפת פעולה עם משרדי משפחות, מנהלים ראשיים ומשקיעים פרטיים מוסמכים ברחבי העולם.
                </p>
              </div>
            </div>
            <Link href="/he/international-investors" className="shrink-0">
              <Button className="bg-secondary px-6 font-bold text-white hover:bg-[#b8942a]">
                משקיעים בינלאומיים <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final conversion */}
      <section className="relative overflow-hidden bg-primary py-16 text-white md:py-24">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,rgba(201,168,70,0.20),transparent_65%)] lg:block" />
        <div className="container relative z-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">התחלת יצירת קשר ישיר</p>
          <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-bold leading-tight md:text-5xl">בקשת שיחה ראשונית חסויה.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            דיון האם שותפויות דיור רב‑יחידות ישירות מתאימות למטרותיכם ולנסיבותיכם.
          </p>
          <Button asChild size="lg" className="mt-8 h-14 bg-secondary px-8 text-base font-bold text-white hover:bg-[#b8942a]">
            <Link href="/he/contact">
              בקשת שיחה ראשונית חסויה <ArrowUpLeft className="mr-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
