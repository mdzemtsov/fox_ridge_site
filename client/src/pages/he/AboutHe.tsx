import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpLeft, Award, Briefcase, GraduationCap, Linkedin, Users } from "lucide-react";

const NAME_CLASS = "font-display text-3xl font-bold leading-tight text-stone-900 md:text-5xl";
const TITLE_CLASS = "mt-3 font-mono text-xs font-bold uppercase tracking-[0.18em] text-secondary";
const BODY_CLASS = "text-base leading-[1.8] text-stone-600 md:text-lg";
const CREDENTIAL_CLASS = "flex items-center gap-3 text-sm text-stone-500";

const experienceMetrics = [
  { value: "$1B+", label: "סך שווי העסקאות" },
  { value: "7,000+", label: "יחידות" },
  { value: "36", label: "נכסים" },
];

export default function About() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50">
      {/* Hero */}
      <section className="relative flex min-h-[560px] items-center overflow-hidden bg-stone-950">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10 bg-gradient-to-l from-stone-950/85 via-stone-950/60 to-stone-950/35" />
          <img src="/images/hero-modern-interior.jpg" alt="צוות ההנהלה של FoxRidge Equity Partners" className="h-full w-full object-cover opacity-85" />
        </div>
        <div className="container relative z-20 py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <p className="inline-flex items-center gap-2 border border-white/20 bg-primary/50 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
              <Users className="h-3.5 w-3.5 text-secondary" aria-hidden="true" /> הצוות שלנו
            </p>
            <h1 className="mt-7 font-display text-5xl font-bold leading-[0.95] text-white md:text-7xl">בהובלת השותפים.<br /><span className="text-secondary">אחריות ישירה.</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-stone-200 md:text-xl">
              Mikhail Pritsker ו-Slava Davidenko מביאים ניסיון שותפים מקיף למודל השותפות הישירה של FoxRidge, המבוסס על כל עסקה בתחום המגורים רב-היחידות.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Principal experience methodology */}
      <section className="border-b border-stone-200 bg-white py-10 md:py-14">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">ניסיון כולל של השותפים</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-primary md:text-4xl">ניסיון היסטורי. אחריות ברורה.</h2>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {experienceMetrics.map((metric) => (
                <div key={metric.label} className="border border-stone-200 bg-stone-50 p-4 text-center md:p-5">
                  <p className="font-display text-2xl font-bold text-primary md:text-3xl">{metric.value}</p>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.09em] text-stone-500 md:text-xs">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-6 border-r-2 border-secondary pr-4 text-xs leading-relaxed text-stone-500 md:text-sm">
            סכומי שווי העסקאות, היחידות והנכסים משקפים את פעילות השותפים בעבר בתוך היישויות המייסדות כשהדבר חל. מספרים אלה משמשים כאינדיקציה לניסיון היסטורי ואינם משקפים בהכרח את ניסיונה של FoxRidge. ביצועים עבר לא מבטיחים תוצאות עתידיות.
          </p>
        </div>
      </section>

      {/* Mikhail */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="overflow-hidden border border-stone-200 bg-stone-100">
                <img src="/images/mikhail.jpg" alt="Mikhail Pritsker" className="aspect-[3/4] h-full w-full object-cover object-top" />
              </div>
              <div className="mt-6 space-y-3 border-t border-stone-200 pt-6">
                <div className={CREDENTIAL_CLASS}><GraduationCap className="h-4 w-4 text-secondary" aria-hidden="true" /><span>MBA, University of Chicago Booth School of Business</span></div>
                <div className={CREDENTIAL_CLASS}><Award className="h-4 w-4 text-secondary" aria-hidden="true" /><span>בעל תעודת CCIM</span></div>
                <div className={CREDENTIAL_CLASS}><Briefcase className="h-4 w-4 text-secondary" aria-hidden="true" /><span>מעל 25 שנות ניסיון בנדל"ן</span></div>
              </div>
            </div>

            <div className="lg:col-span-7 lg:pt-4">
              <h2 className={NAME_CLASS}>Mikhail Pritsker</h2>
              <p className={TITLE_CLASS}>שותף מייסד ושותף מנהל</p>
              <p className="mt-8 font-display text-2xl leading-relaxed text-stone-800 md:text-3xl">ממשק עם שותפי הון, משמעת בדיווח וביצוע ברמת התיק.</p>
              <div className="mt-7 space-y-5">
                <p className={BODY_CLASS}>
                  Mikhail אחראי על העבודה עם שותפי הון ב-FoxRidge, מתאם סקירות רכישה, דיווחים, עדיפויות ניהול נכסים וביצוע עסקאות. גישתו מתמקדת במתן מידע ברור לשותפים לפני קבלת החלטות ובשמירה על תקשורת ישירה לאחר הסגירה.
                </p>
                <p className={BODY_CLASS}>
                  בעל ניסיון של למעלה מ-25 שנים בתפקידים מובילים בהשקעות נדל"ן לאורך מחזורים שוקיים שונים, שכללו ביצוע עסקאות, ניהול נכסים ופיקוח על פורטפוליו, במסגרת ישויות מוסדיות קודמות.
                </p>
              </div>
              <a href="https://www.linkedin.com/in/mikhailpritsker/" target="_blank" rel="noopener noreferrer" aria-label="פרופיל LinkedIn של Mikhail Pritsker" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#0A66C2] transition-colors hover:text-primary">
                <Linkedin className="h-4 w-4" aria-hidden="true" /> הפרופיל ב-LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container"><div className="h-px bg-stone-200" /></div>

      {/* Slava */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="order-2 lg:order-1 lg:col-span-7 lg:pt-4">
              <h2 className={NAME_CLASS}>Slava Davidenko</h2>
              <p className={TITLE_CLASS}>יו"ר המועצה הייעוצית</p>
              <p className="mt-8 font-display text-2xl leading-relaxed text-stone-800 md:text-3xl">מעניק פרספקטיבה אסטרטגית לגבי מקורות עסקאות, בדיקות נאותות, תפעול ואחריות השותפים.</p>
              <div className="mt-7 space-y-5">
                <p className={BODY_CLASS}>
                  בתפקידו כיו"ר המועצה הייעוצית, Slava מספק פרספקטיבה אסטרטגית ומעשית למודל העסקה-לכל-עסקה של FoxRidge, כולל הערכת הזדמנויות רכישה, הנחות תוכנית הפעולה ועדיפויות ביצוע.
                </p>
                <p className={BODY_CLASS}>
                  בעל יותר מ-25 שנות ניסיון ביזמות ובהשקעות, כולל מעורבות בפרויקטים למגורים רב-שימושיים ומיזמי נדל"ן מגוונים במסגרת ישויות מוסדיות קודמות.
                </p>
              </div>
              <a href="https://www.linkedin.com/in/vdavidenko/" target="_blank" rel="noopener noreferrer" aria-label="פרופיל LinkedIn של Slava Davidenko" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#0A66C2] transition-colors hover:text-primary">
                <Linkedin className="h-4 w-4" aria-hidden="true" /> הפרופיל ב-LinkedIn
              </a>
            </div>

            <div className="order-1 lg:order-2 lg:col-span-5">
              <div className="overflow-hidden border border-stone-200 bg-stone-100">
                <img src="/images/slava_new.webp" alt="Slava Davidenko" className="aspect-[3/4] h-full w-full object-cover object-top" />
              </div>
              <div className="mt-6 space-y-3 border-t border-stone-200 pt-6">
                <div className={CREDENTIAL_CLASS}><GraduationCap className="h-4 w-4 text-secondary" aria-hidden="true" /><span>MBA, University of Chicago Booth School of Business</span></div>
                <div className={CREDENTIAL_CLASS}><GraduationCap className="h-4 w-4 text-secondary" aria-hidden="true" /><span>תואר הנדסי (MEPhI)</span></div>
                <div className={CREDENTIAL_CLASS}><Briefcase className="h-4 w-4 text-secondary" aria-hidden="true" /><span>מעל 25 שנות ניסיון ביזמות ובהשקעות</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust and international link */}
      <section className="bg-stone-50 py-12 md:py-16">
        <div className="container">
          <div className="grid gap-6 border border-stone-200 bg-white p-6 md:grid-cols-[1.15fr_.85fr] md:p-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">רקורד היסטורי</p>
              <h2 className="mt-2 font-display text-2xl font-bold text-primary">מבחר מניסיונו הקודם של השותפים.</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone-600">
                עיינו בסעיף הרקורד הציבורי של FoxRidge כדי להבחין בין הפלטפורמה הנוכחית לפעילויות הקודמות של השותפים.
              </p>
              <Link href="/he/track-record" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-secondary transition-colors hover:text-primary">
                הצג רקורד קודם <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="border-t border-stone-200 pt-6 md:border-r md:border-t-0 md:pr-8 md:pt-0">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">הון בינלאומי</p>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                FoxRidge עובדת עם משרדי משפחות, שותפים ומשקיעים פרטיים מוסמכים ברחבי העולם, בהתאם לדרישות החלות, לציות הפנימי ולתיעוד הספציפי לכל עסקה.
              </p>
              <Link href="/he/international-investors" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-secondary transition-colors hover:text-primary">
                משקיעים בינלאומיים <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-white md:py-20">
        <div className="container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">התחלת תקשורת ישירה</p>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">בקשת יצירת קשר ראשונית חסויה.</h2>
          </div>
          <Button asChild size="lg" className="bg-secondary px-7 py-6 text-white hover:bg-secondary/90">
            <Link href="/he/contact">בקש יצירת קשר ראשונית חסויה <ArrowUpLeft className="mr-2 h-4 w-4" aria-hidden="true" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
