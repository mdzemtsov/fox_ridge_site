import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowUpLeft, Building2, CalendarDays, MapPin, ShieldCheck } from "lucide-react";

const completedDeals = [
  { property: "El Ranchito / Milagro", location: "Fort Worth, TX", units: 68, acquired: "سبتمبر 2017", disposed: "سبتمبر 2018" },
  { property: "Westcreek Townhomes", location: "Fort Worth, TX", units: 50, acquired: "أبريل 2019", disposed: "ديسمبر 2021" },
  { property: "Antigua Village", location: "Fort Worth, TX", units: 152, acquired: "سبتمبر 2019", disposed: "مايو 2022" },
  { property: "Copper Creek Apartments", location: "Fort Worth, TX", units: 274, acquired: "مارس 2020", disposed: "يونيو 2022" },
  { property: "Crescent Village & Plaza", location: "Wichita Falls, TX", units: 88, acquired: "فبراير 2018", disposed: "أكتوبر 2021" },
  { property: "Village on West Irving", location: "Irving, TX", units: 91, acquired: "أكتوبر 2018", disposed: "يناير 2022" },
];

const inProgressDeals = [
  {
    property: "Royal Spring",
    location: "Spring, TX",
    units: 351,
    built: 2021,
    assetClass: "فئة A",
    description: "مجتمع حديقة بمستوى مؤسسي في منطقة هيوستن الكبرى، يتألف من مبانٍ ثلاثية الطوابق حديثة ومرافق على طراز المنتجعات.",
  },
  {
    property: "Royal Sienna",
    location: "Missouri City, TX",
    units: 330,
    built: 2021,
    assetClass: "فئة A",
    description: "مجتمع حديث يقع ضمن ممر التخطيط الكلي Sienna جنوب غرب هيوستن.",
  },
  {
    property: "The Sarah at Lake Houston",
    location: "Humble, TX",
    units: 350,
    built: 2020,
    assetClass: "فئة A+",
    description: "مجتمع حديقة في منطقة هيوستن الكبرى يتمتع بإطلالة على البحيرة.",
  },
  {
    property: "The Gallery at Katy",
    location: "Katy, TX",
    units: 316,
    built: 1983,
    assetClass: "فئة B",
    description: "مجتمع حديقة في سوق فرعي Katy/هيوستن، يخضع لبرنامج مستهدف لتحسين المظهر والتشغيل.",
  },
];

function SectionMarker({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-secondary">
      <span className="font-mono text-primary">{number}</span>
      <span className="h-px w-8 bg-secondary/60" />
      {label}
    </div>
  );
}

export default function TrackRecord() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50">
      <section className="relative isolate flex min-h-[560px] items-center overflow-hidden bg-stone-950 md:min-h-[620px]">
        <div className="absolute inset-0 -z-20">
          <img src="/images/hero-trackrecord-garden.png" alt="مجتمع سكني متعدد الوحدات" className="h-full w-full object-cover opacity-85" />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-l from-[#040C1D]/92 via-[#040C1D]/72 to-[#040C1D]/35" />
        <div className="container py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            <p className="inline-flex items-center gap-2 border border-white/20 bg-primary/50 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
              <ShieldCheck className="h-3.5 w-3.5 text-secondary" aria-hidden="true" /> خبرة القادة الرئيسيين
            </p>
            <h1 className="mt-7 font-display text-5xl font-bold leading-[0.95] text-white md:text-7xl">سجل تاريخي.<br /><span className="text-secondary">وضوح المسؤولية.</span></h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-stone-200 md:text-xl">
              ما هو معروض أدناه هو مجموعة مختارة من الخبرات التاريخية على مستوى رفيع للقادة الرئيسيين قبل انضمامهم إلى FoxRidge Equity Partners. FoxRidge منصة جديدة نسبيًا؛ ولا تشكل الخبرات المذكورة أدناه سجلاً تشغيليًا مستقلًا لها.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white py-8 md:py-10">
        <div className="container">
          <p className="border-r-2 border-secondary pr-4 text-xs leading-relaxed text-stone-500 md:text-sm">
            الأسجل أدناه مُنظَّم حسب الاستثمارات المكتملة بدورة كاملة، المشاريع الجارية، ومشاركات الشركاء المحدودين. حيثما ينطبق، يعكس ذلك أنشطة القادة الرئيسيين تحت هيئات سابقة، وهو أداء مركَّب على مستوى الأصول وليس سجلًا مستقلًا لمنصة FoxRidge نفسها. الأداء السابق لا يضمن النتائج المستقبلية.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <SectionMarker number="01" label="استثمارات مكتملة بدورة كاملة" />
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-primary md:text-5xl">ستة استثمارات مكتملة معروضة بالتتابع.</h2>
            <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">
              عرض مختار لست استثمارات مكتملة بدورة كاملة، بإجمالي 723 وحدة. أسماء المشاريع، المواقع، عدد الوحدات، وتواريخ الاستحواذ والتصرف مُدرجة للغرض التاريخي فقط.
            </p>
          </div>

          <div className="mt-10 divide-y divide-stone-200 border-y border-stone-200">
            {completedDeals.map((deal, index) => (
              <motion.article
                key={deal.property}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="grid gap-5 py-7 md:grid-cols-[5rem_minmax(0,1.25fr)_minmax(18rem,.9fr)] md:items-center md:gap-8 md:py-8"
              >
                <p className="font-mono text-sm font-bold tracking-[0.14em] text-secondary">{String(index + 1).padStart(2, "0")}</p>
                <div>
                  <h3 className="font-display text-2xl font-bold leading-tight text-primary md:text-3xl">{deal.property}</h3>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-stone-600">
                    <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-secondary" aria-hidden="true" />{deal.location}</span>
                    <span className="inline-flex items-center gap-2"><Building2 className="h-4 w-4 text-secondary" aria-hidden="true" />{deal.units} وحدة</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 border-r-0 border-stone-200 pt-1 text-sm md:border-r md:pr-7">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-stone-400">الاستحواذ</p>
                    <p className="mt-1 font-semibold text-primary">{deal.acquired}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-stone-400">التصرف</p>
                    <p className="mt-1 inline-flex items-center gap-2 font-semibold text-primary"><CalendarDays className="h-3.5 w-3.5 text-secondary" aria-hidden="true" />{deal.disposed}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-stone-50 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <SectionMarker number="02" label="المشاريع الجارية" />
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-primary md:text-5xl">أربعة مشاريع مجتمعية جارية.</h2>
            <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">
              أربعة مجتمعات من الفئة A وB في منطقة هيوستن الكبرى معروضة كقائمة رأسية بدلاً من شبكة مجمعة. لا تتضمن هذه الصفحة العامة بيانات الأداء الحالية المفصلة.
            </p>
          </div>

          <div className="mt-10 divide-y divide-stone-200 border-y border-stone-200 bg-white px-6 md:px-8">
            {inProgressDeals.map((deal, index) => (
              <motion.article
                key={deal.property}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="grid gap-5 py-7 md:grid-cols-[5rem_minmax(0,1.1fr)_minmax(18rem,.9fr)] md:items-center md:gap-8 md:py-8"
              >
                <p className="font-mono text-sm font-bold tracking-[0.14em] text-secondary">{String(index + 1).padStart(2, "0")}</p>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-2xl font-bold leading-tight text-primary md:text-3xl">{deal.property}</h3>
                    <span className="border border-secondary/40 bg-secondary/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-secondary">قيد التنفيذ</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-stone-600">
                    <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-secondary" aria-hidden="true" />{deal.location}</span>
                    <span className="inline-flex items-center gap-2"><Building2 className="h-4 w-4 text-secondary" aria-hidden="true" />{deal.units} وحدة</span>
                    <span>{deal.assetClass} · مبنى {deal.built}</span>
                  </div>
                </div>
                <p className="border-r-0 border-stone-200 text-sm leading-relaxed text-stone-600 md:border-r md:pr-7">{deal.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-white md:py-24">
        <div className="container">
          <div className="grid gap-8 border border-white/15 bg-white/[0.04] p-7 md:grid-cols-[.8fr_1.2fr] md:p-10">
            <div>
              <SectionMarker number="03" label="مشاركة الشركاء المحدودين" />
              <p className="mt-7 font-display text-6xl font-bold leading-none text-secondary md:text-8xl">25+</p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-white/60">عقارات مستقلة</p>
            </div>
            <div className="md:border-r md:border-white/15 md:pr-10">
              <h2 className="font-display text-3xl font-bold leading-tight text-white md:text-5xl">المشاركة في أكثر من 25 عقارًا مستقلًا كشركاء محدودين.</h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
                بالإضافة إلى الاستثمارات المذكورة أعلاه، شارك القادة الرئيسيون أيضًا كشركاء محدودين في أكثر من 25 عقارًا مستقلاً. تُعتبر هذه المشاركات منفصلة عن برامج الاستثمار المباشر الحالية لـ FoxRidge، ومُدرجة هنا لأغراض السجل التاريخي فقط.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-950 py-16 text-white md:py-20">
        <div className="container grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">التواصل الإضافي</p>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">طلب محادثة أولية سرية.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">بعد إجراء المحادثة الأولية السرية، قد يقرر FoxRidge، استنادًا إلى المراجعات الداخلية والمتطلبات المعمول بها وطبيعة المناقشات، ما إذا كان من المناسب مشاركة مزيد من المعلومات التاريخية. لا توفر هذه الصفحة العامة وصولًا تلقائيًا أو معتمدًا ذاتيًا إلى مستندات الأداء التفصيلية.</p>
          </div>
          <Button asChild size="lg" className="bg-secondary px-7 py-6 text-white hover:bg-secondary/90">
            <Link href="/ar/contact">طلب محادثة أولية سرية <ArrowUpLeft className="mr-2 h-4 w-4" aria-hidden="true" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
