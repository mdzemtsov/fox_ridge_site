import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowUpRight,
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
  "您批准交易。",
  "我们与您直接共同投资。",
  "我们负责运营直至退出。",
];

const partnershipSteps = [
  {
    number: "01",
    title: "审阅",
    description: "FoxRidge 提供经过承销的重点收购机会，包含尽职调查和清晰的业务计划。",
    icon: Landmark,
  },
  {
    number: "02",
    title: "决定",
    description: "您审阅该机会并在合作推进前批准每项收购。",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "执行",
    description: "FoxRidge 与您直接共同投资，主导资产管理，并在退出前监督第三方物业管理。",
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
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#050b18]/95 via-[#050b18]/78 to-[#050b18]/35" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-[#050b18]/75 to-transparent" />

        <div className="container py-20 lg:py-28">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-2 border border-white/20 bg-[#0E2148]/55 px-3 py-2 text-[10px] font-bold tracking-[0.16em] text-white/90 backdrop-blur-sm sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              美国直接多户合伙
            </div>

            <h1 className="max-w-4xl font-display text-4xl font-bold leading-[0.98] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              资产已明确。<br />
              数据已可知。<span className="text-secondary">随后资金到位。</span><br />
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/90 sm:text-xl md:text-2xl">
              为家族办公室和私人资本提供美国直接多户住宅合伙。您批准每项收购；FoxRidge 与您直接共同投资并负责直至退出的运营。
            </p>

            <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="h-14 bg-secondary px-6 text-base font-bold text-white hover:bg-[#b8942a] sm:px-8">
                <Link href="/zh/contact">
                  请求保密初步沟通 <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 border-white/40 bg-white/[0.04] px-6 text-base font-semibold text-white hover:border-white hover:bg-white/10 hover:text-white sm:px-8">
                <a href="#partnership-model">
                  查看合作模式 <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
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
            当前关注：德州三角区 · B+/A 级多户住宅 · 2000 年及以后建成
          </p>
        </div>
      </section>

      {/* Partnership model */}
      <section id="partnership-model" className="scroll-mt-24 bg-stone-50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">合作模式说明</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-5xl">一个明确流程。共同承担责任。</h2>
            <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">
              模式设计为直接对接：每项资产对应一位资本合伙人，具有明确决策流程，并由 FoxRidge 在交割后负责日常执行。
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
            <Link href="/zh/our-investors" className="inline-flex items-center gap-2 text-sm font-bold text-secondary transition-colors hover:text-primary">
              了解资本合伙人 <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Current focus */}
      <section className="bg-primary py-16 text-white md:py-24">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">策略与市场</p>
              <h2 className="mt-3 max-w-xl font-display text-3xl font-bold leading-tight md:text-5xl">当前聚焦，刻意专注。</h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
                FoxRidge 专注于具机构级质量的多户住宅机会，市场、资产与执行计划符合严格的收购标准。
              </p>
              <Link href="/zh/strategy" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-secondary transition-colors hover:text-white">
                查看策略与市场 <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="border border-white/15 bg-white/[0.06] p-6 backdrop-blur-sm md:p-8">
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/55">市场</p>
                    <p className="mt-1 text-base font-semibold text-white">Houston · Dallas–Fort Worth · San Antonio</p>
                  </div>
                </div>
                <div className="h-px bg-white/10" />
                <div className="flex items-start gap-4">
                  <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/55">资产标准</p>
                    <p className="mt-1 text-base font-semibold text-white">B+/A 级多户住宅 · 2000 年及以后建成</p>
                  </div>
                </div>
                <div className="h-px bg-white/10" />
                <div className="flex items-start gap-4">
                  <Users className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/55">执行</p>
                    <p className="mt-1 text-base font-semibold text-white">FoxRidge 负责资产管理并监督第三方物业管理</p>
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
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">主要负责人过往经验</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-primary md:text-5xl">以经验指导实践。</h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-stone-600 md:text-lg">
                FoxRidge 在每次收购中提供资深领导，同时保持直接、按资产定制的合伙模式。
              </p>
              <Link href="/zh/track-record" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-secondary transition-colors hover:text-primary">
                查看主要负责人过往经验 <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { value: "$1B+", label: "交易经验" },
                  { value: "7,000+", label: "套数" },
                  { value: "36", label: "物业" },
                ].map((item) => (
                  <div key={item.label} className="border border-stone-200 bg-stone-50 p-5 md:p-6">
                    <p className="font-display text-3xl font-bold text-primary md:text-4xl">{item.value}</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.1em] text-stone-500">{item.label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 border-l-2 border-secondary pl-4 text-xs leading-relaxed text-stone-500">
                所示经验反映主要负责人在先前发起实体下的既往活动。既往业绩不代表未来表现。
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
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">研究</p>
              <h2 className="mt-3 font-display text-2xl font-bold text-primary md:text-3xl">德州三角区市场背景。</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone-600 md:text-base">
                FoxRidge 分享经批准的关于德州三角区多户住宅状况的观点，以及指导其收购流程的尽职调查要点。
              </p>
            </div>
            <Link href="/zh/investor-resources" className="shrink-0">
              <Button variant="outline" className="border-primary px-6 font-bold text-primary hover:bg-primary hover:text-white">
                查看研究资料 <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
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
                <h2 className="font-display text-xl font-bold text-white">国际资本，直接合作。</h2>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  FoxRidge 与全球的家族办公室、主要负责人和合格私人投资者合作。
                </p>
              </div>
            </div>
            <Link href="/zh/international-investors" className="shrink-0">
              <Button className="bg-secondary px-6 font-bold text-white hover:bg-[#b8942a]">
                国际投资者 <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final conversion */}
      <section className="relative overflow-hidden bg-primary py-16 text-white md:py-24">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,rgba(201,168,70,0.20),transparent_65%)] lg:block" />
        <div className="container relative z-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">开始直接沟通</p>
          <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-bold leading-tight md:text-5xl">请求保密初步沟通。</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            讨论直接多户住宅合伙是否符合您的目标和具体情况。
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
