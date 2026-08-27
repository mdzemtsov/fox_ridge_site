import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  FileCheck2,
  Globe2,
  Handshake,
  Landmark,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Link } from "wouter";

const partnershipSteps = [
  {
    number: "01",
    title: "审阅机会。",
    description: "在您做出承诺之前，查看资产、承销分析和关键风险。",
    icon: FileCheck2,
  },
  {
    number: "02",
    title: "批准交易。",
    description: "您决定是否推进。您不会被置入盲池或预设配额。",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "我们执行业务计划。",
    description: "FoxRidge 与您共同投资，并在持有期间主导资产管理、资本计划监督及对第三方物业管理的监督，直至退出。",
    icon: Handshake,
  },
];

const partnershipPrinciples = [
  "一位投资者，仅一项获批收购。",
  "在出资承诺前投资者须批准。",
  "普通合伙人（GP）资本与资本合伙人共同投资。",
  "完成交割后，FoxRidge 负责日常执行。",
  "当前聚焦：德州三角区（Texas Triangle）、B+/A 级多户住宅、2000 年及以后建成的物业。",
];

export default function OurInvestors() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50">
      {/* Hero */}
      <section className="relative isolate flex min-h-[650px] items-center overflow-hidden bg-stone-950 md:min-h-[720px]">
        <div className="absolute inset-0 -z-20">
          <img
            src="/images/investor-hero-people.jpg"
            alt="私人投资者会议"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#040C1D]/95 via-[#040C1D]/78 to-[#040C1D]/32" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-[#040C1D]/70 to-transparent" />

        <div className="container py-20 lg:py-28">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-2 border border-white/20 bg-[#0E2148]/55 px-3 py-2 text-[10px] font-bold tracking-[0.16em] text-white/90 backdrop-blur-sm sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              资本合作伙伴
            </div>
            <h1 className="font-display text-4xl font-bold leading-[0.98] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              一位投资者。 <span className="text-secondary">一次交易。</span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/90 sm:text-xl md:text-2xl">
              FoxRidge 与每一项获批收购仅合作一位家族办公室、主要投资人或合格私人投资者。您在决定前查看资产与承销分析。我们与您共同投资，并在交割后主导执行工作。
            </p>
            <Button asChild size="lg" className="mt-9 h-14 bg-secondary px-7 text-base font-bold text-white hover:bg-[#b8942a] sm:px-8">
              <Link href="/zh/contact">
                请求保密初步沟通 <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Plain-language steps */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">模式，简明说明</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-5xl">您评估资产。我们主导执行。</h2>
            <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">
              合作安排旨在使交割前的收购决策清晰明了，交割后的运营责任明确可执行。
            </p>
          </div>

          <div className="mt-11 grid gap-4 md:grid-cols-3 md:gap-6">
            {partnershipSteps.map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.number} className="border border-stone-200 bg-stone-50 p-6 md:p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold tracking-[0.12em] text-secondary">{step.number}</span>
                    <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-bold leading-tight text-primary">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership at a glance */}
      <section className="bg-primary py-16 text-white md:py-24">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">合作概览</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">针对单一特定收购的直接结构。</h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-white/75 md:text-lg">
                这是针对特定获批收购的直接合作安排，而非基金。该交易的决策流程、执行职责及适用治理将在该笔交易中予以明确。
              </p>
            </div>

            <div className="border border-white/15 bg-white/[0.06] p-6 backdrop-blur-sm md:p-8">
              <ul className="space-y-4">
                {partnershipPrinciples.map((principle) => (
                  <li key={principle} className="flex items-start gap-3 text-sm leading-relaxed text-white/90 md:text-base">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                    <span>{principle}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-white/10 pt-5 text-xs leading-relaxed text-white/55">
                治理权利在最终交易文件中规定。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Audience and international context */}
      <section className="border-b border-stone-200 bg-stone-50 py-14 md:py-20">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">我们合作的对象</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-4xl">为直接决策而设。</h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-600 md:text-lg">
                FoxRidge 与希望评估特定收购而非承诺至盲池或预设配额的家族办公室、主要投资人和合格私人投资者合作。
              </p>
            </div>
            <div className="border-l-2 border-secondary bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <Globe2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                <div>
                  <h3 className="font-display text-lg font-bold text-primary">在美国境外投资？</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">了解 FoxRidge 如何与符合条件的国际资本合伙人合作。</p>
                  <Link href="/zh/international-investors" className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-secondary transition-colors hover:text-primary">
                    国际投资者 <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
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
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">主要投资人经验</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-primary md:text-5xl">经验丰富的主要投资人。专注于具体资产。</h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-stone-600 md:text-lg">
                以往的领导经验为 FoxRidge 在每一项直接合作中的收购、资产管理与执行工作提供依据。
              </p>
              <Link href="/zh/track-record" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-secondary transition-colors hover:text-primary">
                查看过往经验 <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { value: "$1B+", label: "交易经验" },
                  { value: "7,000+", label: "单元数" },
                  { value: "36", label: "物业数量" },
                ].map((item) => (
                  <div key={item.label} className="border border-stone-200 bg-stone-50 p-5 md:p-6">
                    <p className="font-display text-3xl font-bold text-primary md:text-4xl">{item.value}</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.1em] text-stone-500">{item.label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 border-l-2 border-secondary pl-4 text-xs leading-relaxed text-stone-500">
                所示经验反映主要投资人在以往赞助实体下的既往活动。既往业绩并不代表未来结果。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-stone-950 py-16 text-white md:py-24">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,rgba(201,168,70,0.20),transparent_65%)] lg:block" />
        <div className="container relative z-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">开始直接沟通</p>
          <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-bold leading-tight md:text-5xl">请求保密初步沟通。</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            讨论直接合作模式是否可能符合您的目标与具体情况。
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
