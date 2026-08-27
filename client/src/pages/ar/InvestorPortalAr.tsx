import { Link } from "wouter";
import { ArrowLeft, FileLock2, Globe2, ShieldCheck, UsersRound } from "lucide-react";

const process = [
  {
    number: "01",
    title: "محادثة أولية سرية",
    text: "إجراء محادثة سرية أولية لشرح أهدافكم والخبرة ذات الصلة والمشروع الحالي لدى FoxRidge.",
  },
  {
    number: "02",
    title: "التوافق المتبادل والخلفية",
    text: "إذا تبين وجود توافق متبادل، قد يناقش فريق FoxRidge المواد المتعلقة بالنقاش والخطوات اللاحقة المناسبة.",
  },
  {
    number: "03",
    title: "عملية الحصول على المواد",
    text: "تُراجع أي مواد تفصيلية وتعليمات الوصول ذات الصلة على أساس كل حالة على حدة، ويجب أن تفي بالمتطلبات المعمول بها وأن تخضع لمراجعة داخلية.",
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
              <FileLock2 className="h-3.5 w-3.5" aria-hidden="true" /> معلومات تفصيلية
            </p>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight md:text-6xl">مسار مدروس للوصول إلى المواد التفصيلية.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl">بعض المواد مناسبة للمناقشة السرية والمبنية على الخلفية، وليست مخصصة للتوزيع العام عبر الموقع. يُرجى بدء محادثة سرية أولية حتى يتسنى لـ FoxRidge تقييم ما إذا كان من الملائم المضي قدماً في الحوار.</p>
          </div>
        </div>
      </section>

      <main className="container max-w-5xl py-12 md:py-16">
        <section className="grid gap-8 border-b border-white/10 pb-12 md:grid-cols-[.85fr_1.15fr] md:gap-12 md:pb-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C9A846]">المواد المحتملة</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white md:text-4xl">الخلفية أولاً، ثم المحتوى.</h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-[#B5C0CE] md:text-lg">
            <p>بعد إجراء المحادثة السرية الأولية ومراجعة الخلفية ذات الصلة، قد تُتاح مواد مشروع تفصيلية بالصينية أو الإنجليزية أو الروسية. لا تُعد إمكانية الحصول على هذه المواد تلقائية، ولا تشكل بحد ذاتها عرضًا أو دعوة أو توصية أو تحققًا من الأهلية.</p>
            <p>إذا طُلب لاحقًا تقديم بيان ذاتي بشأن الأهلية، فإن هذا البيان يُعد تأكيدًا أوليًا فقط. ولا يدّعي كونه بديلاً أو معادلاً لأي إجراءات امتثال أو تحقق من أهلية المستثمرين قد تُطلب.</p>
          </div>
        </section>

        <section className="py-12 md:py-16" aria-labelledby="materials-process-heading">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C9A846]">سير التواصل</p>
            <h2 id="materials-process-heading" className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">بعد التأكد من ملاءمة الخلفية، قدّم طلبًا للحصول على المواد التفصيلية.</h2>
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
            <h2 className="mt-4 text-2xl font-bold text-white">الخلفية الدولية</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#B5C0CE]">بالنسبة للحوارات على المستوى الدولي، ستحدد المتطلبات المعمول بها والمراجعة الداخلية وطبيعة العلاقة بين الطرفين سير العملية. <Link href="/ar/international-investors" className="font-semibold text-[#C9A846] underline underline-offset-2 hover:text-white">تعرف على التعاون الدولي</Link>.</p>
          </article>
          <article className="border border-white/10 bg-[#0E2148]/55 p-6 md:p-8">
            <UsersRound className="h-5 w-5 text-[#C9A846]" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-bold text-white">الخطوة السرية الأولى</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#B5C0CE]">تم تصميم نموذج المحادثة السرية الأولية خصيصًا لمكاتب العائلات، والممثلين الرئيسيين، والمستثمرين الخاصين المؤهلين. يُستخدم هذا النموذج للتقييم الأولي للتوافق المتبادل، وليس كإجراء تحقق من أهلية المستثمرين.</p>
          </article>
        </section>

        <section className="border border-[#C9A846]/30 bg-[#0E2148] p-7 md:p-10">
          <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C9A846]">الخطوة التالية</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-white">قدّم طلبًا لإجراء محادثة سرية أولية.</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#B5C0CE] md:text-base">ستراجع FoxRidge كل استفسار على حدة. إذا تبيّن وجود توافق متبادل، سيناقش الفريق ما إذا كان سيتم تقديم مواد تفصيلية ضمن الحوار.</p>
            </div>
            <Link href="/ar/contact" className="inline-flex shrink-0 items-center justify-center gap-2 bg-[#C9A846] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-[#040C1D] transition-colors hover:bg-[#B8973A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A846] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E2148]">قدم طلب محادثة سرية أولية <ArrowLeft className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
          <p className="mt-5 flex items-start gap-2 border-t border-white/10 pt-5 text-xs leading-relaxed text-[#8899AA]"><ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#C9A846]" aria-hidden="true" /> تظل المواد التفصيلية، إذا جرى مشاركتها، خاضعة للقوانين المعمول بها ومتطلبات الامتثال الداخلية وبأحكام الوثائق النهائية.</p>
        </section>
      </main>
    </div>
  );
}
