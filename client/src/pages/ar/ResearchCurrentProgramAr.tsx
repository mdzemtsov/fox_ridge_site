import { Link } from "wouter";
import { ArrowLeft, CalendarDays, CheckCircle2, FileText, ShieldCheck } from "lucide-react";

const focusItems = [
  "Texas Triangle: هيوستن، دالاس–فورت وورث، وسان أنطونيو.",
  "عقارات سكنية متعددة الأسر مصنفة B+/A.",
  "بُنيت في عام 2000 أو بعده.",
];

export default function ResearchCurrentProgram() {
  return (
    <div className="min-h-screen bg-stone-50">
      <section className="border-b border-stone-200 bg-primary py-16 text-white md:py-24">
        <div className="container max-w-4xl">
          <Link href="/ar/investor-resources" className="inline-flex items-center gap-2 text-sm font-bold text-white/70 transition-colors hover:text-white">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> العودة إلى موارد المستثمرين
          </Link>
          <p className="mt-10 inline-flex items-center gap-2 border border-white/20 bg-white/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-secondary">
            <FileText className="h-3.5 w-3.5" aria-hidden="true" /> مذكرة بحثية
          </p>
          <h1 className="mt-6 font-display text-4xl font-bold leading-tight md:text-6xl">إطار استحواذات FoxRidge الحالي</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl">
            نظرة عامة مختصرة ومعلنة على البرنامج الحالي لتوضيح عملية مراجعة الاستحواذ لدى FoxRidge. هذا المستند ليس توقعًا للسوق، أو نصيحة استثمارية، أو وثيقة عرض، ولا يمثل بيانًا بشأن النتائج المستقبلية.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/65">
            <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4 text-secondary" aria-hidden="true" /> تاريخ النشر: 21 أغسطس 2026</span>
            <span>مراجعة الحقائق: 21 أغسطس 2026</span>
          </div>
        </div>
      </section>

      <main className="py-14 md:py-20">
        <div className="container max-w-4xl">
          <article className="space-y-14">
            <section className="grid gap-8 border-b border-stone-200 pb-12 md:grid-cols-[.85fr_1.15fr] md:gap-12">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">النقاط الرئيسية الحالية</p>
                <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-primary md:text-4xl">برنامج حالي محدد ومركّز.</h2>
              </div>
              <div>
                <p className="text-base leading-relaxed text-stone-600 md:text-lg">
                  تقوم FoxRidge بتقييم فرص استحواذ العقارات السكنية متعددة الأسر على أساس كل فرصة ضمن نطاق الاهتمام المحدد. البرنامج مصمَّم بتحديدٍ مقصود، ولن يتقدم إلا بعد مراجعة داخلية وموافقة مناسبة على الإفصاح العام.
                </p>
                <ul className="mt-6 space-y-4">
                  {focusItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-stone-700 md:text-base">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="grid gap-8 border-b border-stone-200 pb-12 md:grid-cols-[.85fr_1.15fr] md:gap-12">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">مراجعة الاستحواذات</p>
                <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-primary md:text-4xl">تُقيّم كل صفقة على حدة، لا وفق تخصيص مسبق.</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-stone-600 md:text-lg">
                <p>تُقيّم كل صفقة اعتمادًا على حقائقها الخاصة، بما في ذلك الأصل، وعملية الاعتماد (underwriting)، وظروف السوق، واعتبارات التمويل، ونتائج العناية الواجبة.</p>
                <p>سيقوم الشركاء الرأسماليون بمراجعة والموافقة على كل استحواذ قبل تقديم أي التزام. سيتم توثيق الشروط النهائية، والأهلية، والحقوق المتعلقة بكل صفقة في وثائق الاتفاقية النهائية.</p>
              </div>
            </section>

            <section className="grid gap-8 border-b border-stone-200 pb-12 md:grid-cols-[.85fr_1.15fr] md:gap-12">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">معايير التحرير</p>
                <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-primary md:text-4xl">الاستناد إلى الأدلة.</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-stone-600 md:text-lg">
                <p>لا يتضمن هذا الإفصاح بيانات إحصائية عن السوق، أو أهداف عائد، أو مدة الاحتفاظ المتوقعة، أو الاقتصاديات المتعلقة بعرض ما. أي بيانات سوقية تُنشر مستقبلاً ستشمل مصادر يمكن التحقق منها والتاريخ.</p>
                <p>الغرض من البحث هو إعلام عملية المراجعة، ولا يحل محل العناية الواجبة أو المشورة المستقلة أو وثائق الصفقة الخاصة باستحواذ معين.</p>
              </div>
            </section>

            <section className="border-r-2 border-secondary bg-white p-6 md:p-8">
              <div className="flex gap-4">
                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">المصادر والمراجعة</p>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600 md:text-base">المصدر: مصادر معلومات علنية موثوقة معتمدة من FoxRidge. تاريخ مراجعة الحقائق: 21 أغسطس 2026. موعد المراجعة التالي المقرر: 21 نوفمبر 2026، أو سيتم إجراء مراجعة مبكرة إذا طرأ تغيير على برنامج الاستحواذ الحالي.</p>
                </div>
              </div>
            </section>
          </article>

          <section className="mt-14 bg-primary p-7 text-white md:mt-20 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">الخطوة التالية</p>
            <h2 className="mt-3 font-display text-3xl font-bold">اطلب الدراسة الحالية.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">اطلب محادثة أولية سرية لمناقشة ما إن كان برنامج FoxRidge الحالي قد يتوافق مع أهدافك وظروفك الخاصة.</p>
            <Link href="/ar/contact" className="mt-7 inline-flex items-center gap-2 bg-secondary px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-secondary/90">
              اطلب مواد البحث الحالية <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
