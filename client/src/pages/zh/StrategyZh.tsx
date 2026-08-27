import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  ArrowRight,
  ArrowUpRight,
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
    title: "市场",
    description: "德州三角：Houston、Dallas–Fort Worth 和 San Antonio。",
  },
  {
    icon: Building2,
    title: "资产类型",
    description: "B+/A 类多户型资产。",
  },
  {
    icon: Landmark,
    title: "建成年份",
    description: "2000 年或以后建成。",
  },
  {
    icon: FileText,
    title: "参考规模",
    description: "每笔收购的购买价格约为 2,500 万至 3,500 万美元，权益资本约为 800 万至 1,000 万美元，视交易具体情况并需经过个案评估与文件说明而定。",
  },
];

const processSteps = [
  {
    number: "01",
    title: "机会获取",
    description: "FoxRidge 根据当前收购标准评估在 Houston、Dallas–Fort Worth 和 San Antonio 的潜在多户型收购机会。",
    icon: Search,
  },
  {
    number: "02",
    title: "承保",
    description: "每个机会均采用有纪律、交易特定的假设，从物业运营、市场背景和收购案例等角度进行评估。",
    icon: BarChart3,
  },
  {
    number: "03",
    title: "尽职调查",
    description: "FoxRidge 进行旨在识别与特定收购相关的重要事实和风险的实体、财务和法律尽职调查。",
    icon: ClipboardCheck,
  },
  {
    number: "04",
    title: "交易结构",
    description: "每次收购均在承诺前与资本合作方一起审查并由投资者批准。该交易的最终条款以该交易的最终协议记录。",
    icon: FileText,
  },
  {
    number: "05",
    title: "运营",
    description: "交割后，FoxRidge 主导资产管理、资本计划监督以及对第三方物业管理的监督。",
    icon: Hammer,
  },
  {
    number: "06",
    title: "退出 / 持有 / 再融资",
    description: "FoxRidge 根据资产情况、市场状况和最终交易文件评估持有、再融资和退出备选方案。不保证任何结果或时机。",
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
            alt="花园式多户社区"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#040C1D]/95 via-[#040C1D]/78 to-[#040C1D]/35" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-[#040C1D]/70 to-transparent" />

        <div className="container py-20 lg:py-28">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-2 border border-white/20 bg-[#0E2148]/55 px-3 py-2 text-[10px] font-bold tracking-[0.16em] text-white/90 backdrop-blur-sm sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              策略与市场
            </div>
            <h1 className="max-w-4xl font-display text-4xl font-bold leading-[0.98] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              严谨的收购 <span className="text-secondary">框架。</span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/90 sm:text-xl md:text-2xl">
              FoxRidge 在德州三角地区评估 2000 年或以后建成的 B+/A 类多户型资产：Houston、Dallas–Fort Worth 和 San Antonio。每笔收购均单独评估、需获得投资者批准，并以最终协议记录。
            </p>
            <Button asChild size="lg" className="mt-9 h-14 bg-secondary px-7 text-base font-bold text-white hover:bg-[#b8942a] sm:px-8">
              <Link href="/zh/contact">
                请求保密初步沟通 <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Current acquisition program */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">当前收购计划</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-5xl">聚焦标准。基于个案的决策。</h2>
            <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">
              当前计划有意设定得较为狭窄。每一潜在收购均按其具体事实进行评估，交易需获得投资者批准并以该交易的最终协议记录。
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
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">市场背景</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-primary md:text-4xl">研究为决策提供信息，但不能取代决策。</h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-stone-600 md:text-lg">
                FoxRidge 在每次独立的收购审查中评估市场状况、供给、需求、融资和物业层面的运营环境。市场观察会与具体资产一并评估，但不构成对未来结果的承诺。
              </p>
              <Link href="/zh/investor-resources" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-secondary transition-colors hover:text-primary">
                查看当前市场研究 <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="border-l-2 border-secondary bg-white p-6 shadow-sm md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-stone-400">决策框架</p>
              <ul className="mt-5 space-y-4">
                {[
                  "德州三角市场背景（Houston、Dallas–Fort Worth、San Antonio）",
                  "资产层面的运营和资本需求",
                  "独立的尽职调查与最终文件",
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
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">六步流程</p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">每笔收购的评估流程。</h2>
            <p className="mt-5 text-base leading-relaxed text-white/75 md:text-lg">
              该流程旨在在承诺前为资本合作方提供明确的决策节点，并在交割后界定 FoxRidge 的执行职责。
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
          <div className="flex flex-col items-start justify-between gap-6 border-l-2 border-secondary bg-stone-50 p-6 md:flex-row md:items-center md:p-8">
            <div>
              <h2 className="font-display text-xl font-bold text-primary">来自美国境外进行投资？</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-stone-600">
                FoxRidge 与合格的国际资本合作伙伴合作，并鼓励潜在合作方根据自身情况获取独立的法律、税务及财务建议。
              </p>
            </div>
            <Link href="/zh/international-investors" className="shrink-0">
              <Button variant="outline" className="border-primary px-6 font-bold text-primary hover:bg-primary hover:text-white">
                国际投资者 <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-stone-950 py-16 text-white md:py-24">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,rgba(201,168,70,0.20),transparent_65%)] lg:block" />
        <div className="container relative z-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">开始直接对话</p>
          <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-bold leading-tight md:text-5xl">请求保密初步沟通。</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            讨论 FoxRidge 当前的收购计划是否符合您的目标和具体情况。
          </p>
          <Button asChild size="lg" className="mt-8 h-14 bg-secondary px-8 text-base font-bold text-white hover:bg-[#b8942a]">
            <Link href="/zh/contact">
              请求保密初步沟通 <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
