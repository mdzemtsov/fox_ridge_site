import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowUpRight,
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
  "一位投资者，对应一项获批收购。",
  "在承诺出资前须经投资者批准。",
  "FoxRidge 与资金合伙人共同出资。",
  "完成交割后，FoxRidge 负责日常执行。",
  "当前重点：德州三角（Texas Triangle）、B+/A 级多户型、2000 年及以后建造。",
];

const processSteps = [
  {
    number: "01",
    title: "保密初步沟通",
    description: "以保密对话开始，讨论目标、经验，以及是否适合直接的多户型合作。",
    icon: Handshake,
  },
  {
    number: "02",
    title: "相互适配与初步资格审查",
    description: "FoxRidge 与潜在合伙人评估是否可继续进行对话，需符合适用要求并经过内部审查。",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "当前机会与承销（underwriting）",
    description: "在适当情况下，FoxRidge 会讨论当前机会、承销、标的资产及该交易的重要注意事项。",
    icon: Landmark,
  },
  {
    number: "04",
    title: "与各方顾问一同完成文件",
    description: "各方与其各自合格顾问合作。最终条款、资格和权利将在最终交易文件中明确。",
    icon: FileText,
  },
  {
    number: "05",
    title: "交割与报告",
    description: "交割后，FoxRidge 负责日常执行并根据收购的治理文件提供报告。",
    icon: ClipboardCheck,
  },
];

const faqs = [
  {
    question: "谁可以发起对话？",
    answer: "家族办公室、主要负责人和合格私人投资者可请求保密初步沟通。任何讨论均需遵守适用法律、内部合规要求，并取决于具体关系和交易的事实。",
  },
  {
    question: "如何处理美国居民与非美国居民的相关考量？",
    answer: "资格以及任何发售流程取决于投资者的具体情况、居住或身份、适用法律及具体交易。本页面并不为任何个人或司法管辖区创造自动资格。",
  },
  {
    question: "是否需要 KYC/AML 与制裁审查？",
    answer: "是。FoxRidge 可能在继续之前就该关系和交易进行内部合规、KYC/AML、制裁及其他相应筛查。",
  },
  {
    question: "FoxRidge 是否提供法律或税务建议？",
    answer: "不提供。潜在合伙人应就其自身情况及任何拟议交易咨询独立的法律、税务、财务及其他合格顾问。",
  },
  {
    question: "如何处理报告与实地考察？",
    answer: "报告做法在收购的治理文件中确定。资产或市场实地考察可在适当时讨论，但并非承诺提供的服务或差旅行程。",
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
            alt="美国多户型社区"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#040C1D]/95 via-[#040C1D]/80 to-[#040C1D]/35" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-[#040C1D]/70 to-transparent" />

        <div className="container py-20 lg:py-28">
          <div className="max-w-5xl">
            <div className="mb-7 inline-flex items-center gap-2 border border-white/20 bg-[#0E2148]/55 px-3 py-2 text-[10px] font-bold tracking-[0.16em] text-white/90 backdrop-blur-sm sm:text-xs">
              <Globe2 className="h-3.5 w-3.5 text-secondary" aria-hidden="true" />
              国际资本合伙人
            </div>
            <h1 className="max-w-5xl font-display text-4xl font-bold leading-[0.98] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              面向家族办公室与私人资本的美国多户型直接合作 <span className="text-secondary">全球。</span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/90 sm:text-xl md:text-2xl">
              FoxRidge 与寻求按单个交易直接参与美国多户型房地产的家族办公室、主要负责人和合格私人投资者合作。
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
              一位投资者。一项交易。您审阅并批准每项收购。我们与您共同投资并负责运营直至退出。
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="h-auto min-h-14 bg-secondary px-6 py-3 text-left text-sm font-bold leading-snug text-white hover:bg-[#b8942a] sm:px-8 sm:text-base">
                <Link href="/zh/contact">
                  请求保密初步沟通 <ArrowUpRight className="ml-2 h-4 w-4 shrink-0" aria-hidden="true" />
                </Link>
              </Button>
              <p className="mt-4 max-w-3xl text-xs leading-relaxed text-white/60">
                面向符合条件的投资者，须受适用法律、内部合规、KYC/AML、制裁筛查及最终交易文件的约束。
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
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">为何采用该模式</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-primary md:text-5xl">围绕特定资产的直接合伙关系。</h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-stone-600 md:text-lg">
                该模式适用于希望在决策前审查特定收购、其承销/估算和关键风险的主要负责人或资金合伙人。
              </p>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-stone-500">
                这是一种按单笔交易的直接合伙，而非盲池基金。每项收购独立且仍需接受审查、批准并由最终文件确定。
              </p>
            </div>

            <div className="border-l-2 border-secondary bg-stone-50 p-6 md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-stone-400">合作概览</p>
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
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">务实的跨境流程</p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">明确步骤。适当审查。</h2>
            <p className="mt-5 text-base leading-relaxed text-white/75 md:text-lg">
              跨境关系需要谨慎协调。该流程分阶段进行，不保证任何时间安排、司法结果或交易实现。
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
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">跨境常见问题</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-5xl">常见问题，直接回答。</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-stone-600 md:text-lg">
              本概述仅供参考，不构成法律、税务、证券、移民或投资建议。
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
            包括欧洲、海湾合作委员会（GCC）、亚太和拉美等市场在内，可能在适用要求范围内被考虑。没有任何地区或司法管辖区享有自动资格。
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-end lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">经验与问责</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-primary md:text-5xl">经验丰富的主要负责人。直接问责。</h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-stone-600 md:text-lg">
                FoxRidge 在每项收购中由经验丰富的主要负责人主导，同时在资产生命周期内与资金合伙人保持直接关系。
              </p>
              <Link href="/zh/track-record" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-secondary transition-colors hover:text-primary">
                查看主要负责人的过往经验 <ArrowRight className="h-4 w-4" aria-hidden="true" />
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
                展示的经验反映出之前在先前主办实体下主要负责人完成的活动。过往表现并不代表未来业绩。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-stone-950 py-16 text-white md:py-24">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,rgba(201,168,70,0.20),transparent_65%)] lg:block" />
        <div className="container relative z-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">开始私人对话</p>
          <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-bold leading-tight md:text-5xl">请求保密初步沟通。</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            讨论直接美国多户型合作是否适合您的目标和情况。
          </p>
          <Button asChild size="lg" className="mt-8 h-auto min-h-14 bg-secondary px-6 py-3 text-left text-sm font-bold leading-snug text-white hover:bg-[#b8942a] sm:px-8 sm:text-base">
            <Link href="/zh/contact">
              请求保密初步沟通 <ArrowUpRight className="ml-2 h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
