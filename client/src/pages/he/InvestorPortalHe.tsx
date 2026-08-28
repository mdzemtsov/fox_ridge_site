import { Link } from "wouter";
import { ArrowLeft, FileLock2, Globe2, ShieldCheck, UsersRound } from "lucide-react";

const process = [
  {
    number: "01",
    title: "שיחה ראשונית חסויה",
    text: "קיום שיחה ראשונית חסויה להסבר על יעדיכם, הניסיון הרלוונטי והפרויקט הנוכחי של FoxRidge.",
  },
  {
    number: "02",
    title: "התאמה הדדית ורקע",
    text: "אם יתברר שיש התאמה הדדית, צוות FoxRidge עשוי לדון בחומרי הדיון ובצעדים המתאימים להמשך.",
  },
  {
    number: "03",
    title: "תהליך קבלת החומרים",
    text: "כל חומר מפורט והנחיות גישה רלוונטיות נבדקים על בסיס כל מקרה לגופו, חייבים לעמוד בדרישות הרלוונטיות ולהיות כפופים לסקירה פנימית.",
  },
];

export default function InvestorPortal() {
  return (
    <div className="min-h-screen bg-[#040C1D] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0E2148] via-[#081733] to-[#040C1D]" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(ellipse at 60% 50%, rgba(201,168,70,0.15) 0%, transparent 70%)" }} />
        <div className="container relative max-w-5xl py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 border border-[#C9A846]/30 bg-[#C9A846]/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#C9A846]">
              <FileLock2 className="h-3.5 w-3.5" aria-hidden="true" /> מידע מפורט
            </p>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight md:text-6xl">נתיב שקול לגישה לחומרים המפורטים.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl">חלק מהחומרים מתאימים לדיון חסוי המבוסס על רקע, ואינם מיועדים להפצה ציבורית באתר. אנא פתחו שיחה ראשונית חסויה כדי ש-FoxRidge תוכל להעריך האם מתאים להמשיך בדיאלוג.</p>
          </div>
        </div>
      </section>

      <main className="container max-w-5xl py-12 md:py-16">
        <section className="grid gap-8 border-b border-white/10 pb-12 md:grid-cols-[.85fr_1.15fr] md:gap-12 md:pb-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C9A846]">חומרים פוטנציאליים</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white md:text-4xl">הרקע תחילה, התוכן לאחר מכן.</h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-[#B5C0CE] md:text-lg">
            <p>לאחר קיום השיחה הראשונית החסויה ובחינת הרקע הרלוונטי, עשויים להימסר חומרים מפורטים של הפרויקט בסינית, באנגלית או ברוסית. האפשרות לקבלת חומרים אלה אינה אוטומטית, ואינה מהווה בעצמה הצעה, קריאה לפעולה, המלצה או אימות זכאות.</p>
            <p>אם תתבקשו מאוחר יותר להגיש הצהרת זכאות עצמית, הצהרה זו נחשבת לאישור ראשוני בלבד. היא איננה תחליף ולא שקולה לכל נהלי ציות או אימות זכאות של משקיעים שעשויים להדרש.</p>
          </div>
        </section>

        <section className="py-12 md:py-16" aria-labelledby="materials-process-heading">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C9A846]">מהלך התקשורת</p>
            <h2 id="materials-process-heading" className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">לאחר אימות התאמת הרקע, הגש בקשה לקבלת החומרים המפורטים.</h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {process.map((step) => (
              <article key={step.number} className="border border-white/10 bg-white/[0.03] p-6">
                <span className="font-mono text-xs font-bold tracking-[0.16em] text-[#C9A846]">{step.number}</span>
                <h3 className="mt-4 text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#B5C0CE]">{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-5 border-t border-white/10 py-12 md:grid-cols-2 md:py-16">
          <article className="border border-white/10 bg-[#0E2148]/55 p-6 md:p-8">
            <Globe2 className="h-5 w-5 text-[#C9A846]" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-bold text-white">רקע בינלאומי</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#B5C0CE]">לשיחות ברמה הבינלאומית, הדרישות החלות, הסקירה הפנימית וטיב הקשר בין הצדדים יקבעו את מהלך התהליך. <Link href="/he/international-investors" className="font-semibold text-[#C9A846] underline underline-offset-2 hover:text-white">למד על שיתוף פעולה בינלאומי</Link>.</p>
          </article>
          <article className="border border-white/10 bg-[#0E2148]/55 p-6 md:p-8">
            <UsersRound className="h-5 w-5 text-[#C9A846]" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-bold text-white">השלב החסוי הראשוני</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#B5C0CE]">תבנית השיחה הראשונית החסויה תוכננה במיוחד למשרדי משפחות, לנציגים מרכזיים ולמשקיעים פרטיים מוסמכים. תבנית זו נועדה להערכה ראשונית של התאמה הדדית, ואינה מהווה הליך אימות זכאות של משקיעים.</p>
          </article>
        </section>

        <section className="border border-[#C9A846]/30 bg-[#0E2148] p-7 md:p-10">
          <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C9A846]">הצעד הבא</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-white">הגש בקשה לשיחה ראשונית חסויה.</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#B5C0CE] md:text-base">FoxRidge תבחן כל פנייה בפני עצמה. אם יתברר שיש התאמה הדדית, הצוות ידון האם יסופקו חומרים מפורטים במסגרת הדיאלוג.</p>
            </div>
            <Link href="/he/contact" className="inline-flex shrink-0 items-center justify-center gap-2 bg-[#C9A846] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-[#040C1D] transition-colors hover:bg-[#B8973A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A846] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E2148]">הגש בקשה לשיחה ראשונית חסויה <ArrowLeft className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
          <p className="mt-5 flex items-start gap-2 border-t border-white/10 pt-5 text-xs leading-relaxed text-[#8899AA]"><ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#C9A846]" aria-hidden="true" /> החומרים המפורטים, אם ישותפו, יישארו כפופים לחוקים החלים, לדרישות הציות הפנימיות ולסעיפי המסמכים הסופיים.</p>
        </section>
      </main>
    </div>
  );
}
