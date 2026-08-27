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
  "مستثمر واحد لكل صفقة استحواذ معتمدة.",
  "يُشترط موافقة المستثمر قبل الالتزام بأيّ إسهام رأسمالي.",
  "تستثمر FoxRidge إلى جانب شريك رأس المال.",
  "بعد إتمام الإغلاق، تتولى FoxRidge التنفيذ التشغيلي اليومي.",
  "التركيز الحالي: Texas Triangle، عقارات متعددة الوحدات من الفئة B+/A، مبنية عام 2000 وما بعده.",
];

const processSteps = [
  {
    number: "01",
    title: "محادثة تمهيدية سرية",
    description: "تبدأ المحادثة بسرية لمناقشة الأهداف والخبرة وما إذا كانت الشراكة المباشرة في العقارات متعددة الوحدات مناسبة.",
    icon: Handshake,
  },
  {
    number: "02",
    title: "مطابقة متبادلة وفحص أولي للأهلية",
    description: "تقوم FoxRidge والشريك المحتمل بتقييم مدى جدوى استمرار الحوار، مع الالتزام بالمتطلبات المطبقة وخضوع العلاقة للمراجعات الداخلية.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "الفرص الحالية وعملية underwriting",
    description: "عند الاقتضاء، تناقش FoxRidge الفرص الجارية، عملية underwriting، الأصل المستهدف والنقاط الأساسية ذات الصلة بالصفقة.",
    icon: Landmark,
  },
  {
    number: "04",
    title: "إتمام الوثائق بالتعاون مع مستشاري الأطراف",
    description: "يتعاون كل طرف مع مستشاريه المؤهلين. تُحدَّد الشروط النهائية والأهلية والحقوق في مستندات الصفقة النهائية.",
    icon: FileText,
  },
  {
    number: "05",
    title: "الإغلاق والتقارير",
    description: "بعد الإغلاق، تتولى FoxRidge التنفيذ التشغيلي اليومي وتقدّم التقارير وفقاً لوثائق حوكمة الاستحواذ.",
    icon: ClipboardCheck,
  },
];

const faqs = [
  {
    question: "من يمكنه طلب بدء الحوار؟",
    answer: "يمكن لمكاتب العائلات، الرؤساء الرئيسيين، والمستثمرين الخاصين المؤهلين طلب محادثة تمهيدية سرية. أي نقاش يخضع للقوانين المطبقة، لمتطلبات الامتثال الداخلي، وللوقائع المحددة للعلاقة والصفقة.",
  },
  {
    question: "كيف تُؤخذ اعتبارات المقيمين في الولايات المتحدة وغير المقيمين في الحسبان؟",
    answer: "تتوقف الأهلية وأي إجراءات طرح على الحالة الفردية للمستثمر، محل إقامته أو وضعه القانوني، القوانين المطبقة وخصوصيات الصفقة. هذه الصفحة لا تمنح أهلية تلقائية لأي شخص أو اختصاص قضائي.",
  },
  {
    question: "هل يتطلب الأمر فحوصات KYC/AML والعقوبات؟",
    answer: "نعم. قد تجري FoxRidge عمليات امتثال داخلية، فحوصات KYC/AML، مراجعات بالعقوبات وغيرها من الفحوصات الملائمة قبل المضي قدماً في العلاقة أو الصفقة.",
  },
  {
    question: "هل تقدّم FoxRidge مشورة قانونية أو ضريبية؟",
    answer: "لا. يجب على الشركاء المحتملين استشارة مستشارين قانونيين وضريبيين وماليّين وغيرهم مستقلين ومؤهلين بشأن ظروفهم وأي صفقة مقترحة.",
  },
  {
    question: "كيف تُدار التقارير والزيارات الميدانية؟",
    answer: "تحدد وثائق حوكمة الاستحواذ كيفية إعداد التقارير. يمكن مناقشة زيارات ميدانية للأصول أو الأسواق عند الاقتضاء، لكنها ليست خدمة أو جدول سفر مضمون.",
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
            alt="مشروع سكني متعدد الوحدات في الولايات المتحدة"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-l from-[#040C1D]/95 via-[#040C1D]/80 to-[#040C1D]/35" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-[#040C1D]/70 to-transparent" />

        <div className="container py-20 lg:py-28">
          <div className="max-w-5xl">
            <div className="mb-7 inline-flex items-center gap-2 border border-white/20 bg-[#0E2148]/55 px-3 py-2 text-[10px] font-bold tracking-[0.16em] text-white/90 backdrop-blur-sm sm:text-xs">
              <Globe2 className="h-3.5 w-3.5 text-secondary" aria-hidden="true" />
              شركاء رأس المال الدوليون
            </div>
            <h1 className="max-w-5xl font-display text-4xl font-bold leading-[0.98] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              شراكات مباشرة في العقارات متعددة الوحدات في الولايات المتحدة لمكاتب العائلات ورأس المال الخاص <span className="text-secondary">عالمياً.</span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/90 sm:text-xl md:text-2xl">
              تتعاون FoxRidge مع مكاتب العائلات، الرؤساء الرئيسيين، والمستثمرين الخاصين المؤهلين الساعين للمشاركة مباشرة في كل صفقة من صفقات العقارات متعددة الوحدات في الولايات المتحدة.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
              مستثمر واحد. صفقة واحدة. أنتم تراجعون وتوافقون على كل استحواذ. نشارككم الاستثمار ونتولى الإدارة حتى الخروج.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="h-auto min-h-14 bg-secondary px-6 py-3 text-right text-sm font-bold leading-snug text-white hover:bg-[#b8942a] sm:px-8 sm:text-base">
                <Link href="/ar/contact">
                  طلب محادثة تمهيدية سرية <ArrowUpLeft className="mr-2 h-4 w-4 shrink-0" aria-hidden="true" />
                </Link>
              </Button>
              <p className="mt-4 max-w-3xl text-xs leading-relaxed text-white/60">
                مخصّص للمستثمرين المؤهلين ويخضع للقوانين المطبقة، لمتطلبات الامتثال الداخلية، فحوصات KYC/AML، مراجعات العقوبات، ولأحكام مستندات الصفقة النهائية.
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
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">لماذا هذا النموذج</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-primary md:text-5xl">شراكات مباشرة مركّزة على أصول محددة.</h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-stone-600 md:text-lg">
                يناسب هذا النموذج الرؤساء الرئيسيين أو شركاء رأس المال الذين يرغبون في مراجعة الاستحواذ المحدد، عملية underwriting/التقدير، والمخاطر الجوهرية قبل اتخاذ القرار.
              </p>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-stone-500">
                هذه شراكة مباشرة لكل صفقة على حدة، وليست صندوقًا من نوع blind pool. كل استحواذ يُنظر إليه بشكل مستقل ويخضع للمراجعة والموافقة، وتُحدد الشروط في الوثائق النهائية.
              </p>
            </div>

            <div className="border-r-2 border-secondary bg-stone-50 p-6 md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-stone-400">لمحة عن التعاون</p>
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
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">نهج عابر للحدود عملي</p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">خطوات واضحة. مراجعات مناسبة.</h2>
            <p className="mt-5 text-base leading-relaxed text-white/75 md:text-lg">
              تتطلّب العلاقات العابرة للحدود تنسيقًا دقيقًا. العملية مكوّنة من مراحل، ولا تضمن أي مواعيد زمنية أو نتائج قضائية أو إتمام الصفقات.
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
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">أسئلة شائعة عبر الحدود</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-5xl">أسئلة شائعة — أجوبة مباشرة.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-stone-600 md:text-lg">
              هذه الملخصات للرجوع إليها فقط ولا تشكل نصيحة قانونية أو ضريبية أو تتعلق بالأوراق المالية أو الهجرة أو الاستثمار.
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
            قد تُؤخذ أسواق أوروبا، دول مجلس التعاون الخليجي (GCC)، آسيا والمحيط الهادئ، وأمريكا اللاتينية ضمن نطاق المتطلبات المطبقة. لا تتمتع أي منطقة أو اختصاص قضائي بأهلية تلقائية.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-end lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">الخبرة والمساءلة</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-primary md:text-5xl">رؤساء تنفيذيون ذوو خبرة. مساءلة مباشرة.</h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-stone-600 md:text-lg">
                تقود FoxRidge كل استحواذ بواسطة رؤساء تنفيذين ذوي خبرة، وتحافظ على علاقة مباشرة مع شركاء رأس المال طوال دورة حياة الأصل.
              </p>
              <Link href="/ar/track-record" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-secondary transition-colors hover:text-primary">
                اطلع على سجل الرؤساء التنفيذيين <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { value: "$1B+", label: "خبرة في الصفقات" },
                  { value: "7,000+", label: "عدد الوحدات" },
                  { value: "36", label: "عدد الممتلكات" },
                ].map((item) => (
                  <div key={item.label} className="border border-stone-200 bg-stone-50 p-5 md:p-6">
                    <p className="font-display text-3xl font-bold text-primary md:text-4xl">{item.value}</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.1em] text-stone-500">{item.label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 border-r-2 border-secondary pr-4 text-xs leading-relaxed text-stone-500">
                تعكس الخبرة المعروضة الأنشطة التي أدارها الرؤساء التنفيذيون ضمن كيانات سابقة. الأداء السابق لا يضمن الأداء المستقبلي.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-stone-950 py-16 text-white md:py-24">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,rgba(201,168,70,0.20),transparent_65%)] lg:block" />
        <div className="container relative z-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">بدء محادثة خاصة</p>
          <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-bold leading-tight md:text-5xl">اطلب محادثة تمهيدية سرية.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            لمناقشة ما إذا كانت الشراكات المباشرة في العقارات متعددة الوحدات في الولايات المتحدة مناسبة لأهدافكم وظروفكم.
          </p>
          <Button asChild size="lg" className="mt-8 h-auto min-h-14 bg-secondary px-6 py-3 text-right text-sm font-bold leading-snug text-white hover:bg-[#b8942a] sm:px-8 sm:text-base">
            <Link href="/ar/contact">
              طلب محادثة تمهيدية سرية <ArrowUpLeft className="mr-2 h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
