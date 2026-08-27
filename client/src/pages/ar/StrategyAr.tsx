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
    title: "السوق",
    description: "Texas Triangle: Houston، Dallas–Fort Worth و San Antonio.",
  },
  {
    icon: Building2,
    title: "نوع الأصول",
    description: "عقارات سكنية متعددة الأسر من الفئة B+/A.",
  },
  {
    icon: Landmark,
    title: "سنة البناء",
    description: "مبنية عام 2000 أو بعده.",
  },
  {
    icon: FileText,
    title: "حجم مرجعي",
    description:
      "يتراوح سعر شراء كل صفقة تقريبًا بين 25 و35 مليون دولار، مع رأس مال حقوق ملكية تقريبي يتراوح بين 8 و10 ملايين دولار، وفقًا لخصوصية كل صفقة وخاضعًا للتقييم الفردي ووثائقها.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "الحصول على الفرص",
    description:
      "تقيّم FoxRidge فرص الاستحواذ المحتملة للوحدات السكنية المتعددة في Houston و Dallas–Fort Worth و San Antonio وفق المعايير الحالية.",
    icon: Search,
  },
  {
    number: "02",
    title: "الاعتماد",
    description:
      "يُقيَّم كل فرصة باستخدام افتراضات منهجية ومحددة لكل صفقة، مع مراعاة تشغيل العقار، وسياق السوق، وحالات الاستحواذ المماثلة.",
    icon: BarChart3,
  },
  {
    number: "03",
    title: "العناية الواجبة",
    description:
      "تقوم FoxRidge بإجراء تحريات العناية الواجبة الكيانية والمالية والقانونية بهدف تحديد الوقائع والمخاطر الجوهرية المرتبطة بكل عملية استحواذ.",
    icon: ClipboardCheck,
  },
  {
    number: "04",
    title: "هيكلة الصفقة",
    description:
      "تتم مراجعة كل استحواذ مع شركاء رأس المال قبل الالتزام، ويجب أن يوافق المستثمرون عليها. تُسجل الشروط النهائية للصفقة في اتفاقية الصفقة النهائية.",
    icon: FileText,
  },
  {
    number: "05",
    title: "التشغيل",
    description:
      "بعد الإغلاق، تتولى FoxRidge قيادة إدارة الأصول، والإشراف على خطط رأس المال، والإشراف على إدارة الممتلكات من قبل طرف ثالث.",
    icon: Hammer,
  },
  {
    number: "06",
    title: "الخروج / الاحتفاظ / إعادة التمويل",
    description:
      "تقيّم FoxRidge خيارات الاحتفاظ أو إعادة التمويل أو الخروج استنادًا إلى حالة الأصل، وظروف السوق، ووثائق الصفقة النهائية. ولا تُقدّم أي ضمانات على النتائج أو التوقيت.",
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
            alt="مجمع سكني على طراز الحديقة"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-l from-[#040C1D]/95 via-[#040C1D]/78 to-[#040C1D]/35" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-[#040C1D]/70 to-transparent" />

        <div className="container py-20 lg:py-28">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-2 border border-white/20 bg-[#0E2148]/55 px-3 py-2 text-[10px] font-bold tracking-[0.16em] text-white/90 backdrop-blur-sm sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              الاستراتيجية والسوق
            </div>
            <h1 className="max-w-4xl font-display text-4xl font-bold leading-[0.98] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              إطار استحواذ <span className="text-secondary">دقيق.</span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/90 sm:text-xl md:text-2xl">
              تقوم FoxRidge بتقييم عقارات متعددة الأسر من الفئة B+/A المبنية عام 2000 أو بعده في Texas Triangle (Houston وDallas–Fort Worth وSan Antonio). ويُقيَّم كل استحواذ على حدة، ويتطلب موافقة المستثمرين، وتُوثَّق الشروط في الاتفاقيات النهائية.
            </p>
            <Button asChild size="lg" className="mt-9 h-14 bg-secondary px-7 text-base font-bold text-white hover:bg-[#b8942a] sm:px-8">
              <Link href="/ar/contact">
                طلب محادثة أولية سرية <ArrowUpLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Current acquisition program */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">برنامج الاستحواذ الحالي</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-5xl">معايير مُركّزة. قرارات مبنية على كل حالة على حدة.</h2>
            <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">
              تم تصميم البرنامج الحالي ليكون محدود النطاق عمدًا. يُقيَّم كل احتمال استحواذ بناءً على وقائعه الخاصة، وتستلزم الصفقات موافقة المستثمرين وتوثيقها في الاتفاق النهائي.
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
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">سياق السوق</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-primary md:text-4xl">الأبحاث تزود القرار بمعلومات لكنها لا تحل محله.</h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-stone-600 md:text-lg">
                تُقيّم FoxRidge، في كل مراجعة استحواذ مستقلة، حالة السوق والعرض والطلب والتمويل وظروف التشغيل على مستوى العقار. تُؤخذ ملاحظات السوق بعين الاعتبار مع الأصل المحدد، لكنها لا تشكل التزامًا بالنتائج المستقبلية.
              </p>
              <Link href="/ar/investor-resources" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-secondary transition-colors hover:text-primary">
                عرض أبحاث السوق الحالية <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="border-r-2 border-secondary bg-white p-6 shadow-sm md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-stone-400">إطار القرار</p>
              <ul className="mt-5 space-y-4">
                {[
                  "سياق سوق Texas Triangle(Houston، Dallas–Fort Worth، San Antonio)",
                  "احتياجات التشغيل ورأس المال على مستوى الأصل",
                  "التحقيقات المستقلة (دراسة العناية الواجبة) والوثائق النهائية",
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
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">عملية من ست خطوات</p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">إجراءات تقييم كل استحواذ.</h2>
            <p className="mt-5 text-base leading-relaxed text-white/75 md:text-lg">
              تهدف هذه العملية إلى توفير نقاط قرار واضحة لشركاء رأس المال قبل الالتزام، وتحديد مسؤوليات تنفيذ FoxRidge بعد الإغلاق.
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
              <h2 className="font-display text-xl font-bold text-primary">هل تستثمر من خارج الولايات المتحدة؟</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-stone-600">
                تتعاون FoxRidge مع شركاء رأس مال دوليين مؤهلين، وتحث الشركاء المحتملين على الحصول على استشارات قانونية وضرائبية ومالية مستقلة حسب ظروفهم.
              </p>
            </div>
            <Link href="/ar/international-investors" className="shrink-0">
              <Button variant="outline" className="border-primary px-6 font-bold text-primary hover:bg-primary hover:text-white">
                المستثمرون الدوليون <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-stone-950 py-16 text-white md:py-24">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,rgba(201,168,70,0.20),transparent_65%)] lg:block" />
        <div className="container relative z-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">بدء حوار مباشر</p>
          <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-bold leading-tight md:text-5xl">طلب محادثة أولية سرية.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            مناقشة ما إذا كان برنامج الاستحواذ الحالي لدى FoxRidge يتوافق مع أهدافكم وظروفكم الخاصة.
          </p>
          <Button asChild size="lg" className="mt-8 h-14 bg-secondary px-8 text-base font-bold text-white hover:bg-[#b8942a]">
            <Link href="/ar/contact">
              طلب محادثة أولية سرية <ArrowUpLeft className="mr-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
