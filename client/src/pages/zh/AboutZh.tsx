import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Award, Briefcase, GraduationCap, Linkedin, Users } from "lucide-react";

const NAME_CLASS = "font-display text-3xl font-bold leading-tight text-stone-900 md:text-5xl";
const TITLE_CLASS = "mt-3 font-mono text-xs font-bold uppercase tracking-[0.18em] text-secondary";
const BODY_CLASS = "text-base leading-[1.8] text-stone-600 md:text-lg";
const CREDENTIAL_CLASS = "flex items-center gap-3 text-sm text-stone-500";

const experienceMetrics = [
  { value: "$1B+", label: "合计交易经验" },
  { value: "7,000+", label: "单位" },
  { value: "36", label: "物业" },
];

export default function About() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50">
      {/* Hero */}
      <section className="relative flex min-h-[560px] items-center overflow-hidden bg-stone-950">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-stone-950/85 via-stone-950/60 to-stone-950/35" />
          <img src="/images/hero-modern-interior.jpg" alt="FoxRidge Equity Partners 领导团队" className="h-full w-full object-cover opacity-85" />
        </div>
        <div className="container relative z-20 py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <p className="inline-flex items-center gap-2 border border-white/20 bg-primary/50 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
              <Users className="h-3.5 w-3.5 text-secondary" aria-hidden="true" /> 我们的团队
            </p>
            <h1 className="mt-7 font-display text-5xl font-bold leading-[0.95] text-white md:text-7xl">由合伙人主导。<br /><span className="text-secondary">直接负责。</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-stone-200 md:text-xl">
              Mikhail Pritsker 和 Slava Davidenko 将严谨的合伙人经验带入 FoxRidge 的按交易逐项、多户住宅直接合作伙伴模式。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Principal experience methodology */}
      <section className="border-b border-stone-200 bg-white py-10 md:py-14">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">合并的合伙人经验</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-primary md:text-4xl">历史经验。明确归属。</h2>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {experienceMetrics.map((metric) => (
                <div key={metric.label} className="border border-stone-200 bg-stone-50 p-4 text-center md:p-5">
                  <p className="font-display text-2xl font-bold text-primary md:text-3xl">{metric.value}</p>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.09em] text-stone-500 md:text-xs">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-6 border-l-2 border-secondary pl-4 text-xs leading-relaxed text-stone-500 md:text-sm">
            合计交易经验、单位和物业反映了合伙人在适用情况下于先前发起实体下的活动。这些数据为历史经验指标，并非代表 FoxRidge 自身的过往经验。过往表现并不预示未来结果。
          </p>
        </div>
      </section>

      {/* Mikhail */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="overflow-hidden border border-stone-200 bg-stone-100">
                <img src="/images/mikhail.jpg" alt="Mikhail Pritsker" className="aspect-[3/4] h-full w-full object-cover object-top" />
              </div>
              <div className="mt-6 space-y-3 border-t border-stone-200 pt-6">
                <div className={CREDENTIAL_CLASS}><GraduationCap className="h-4 w-4 text-secondary" aria-hidden="true" /><span>芝加哥大学布斯商学院 MBA</span></div>
                <div className={CREDENTIAL_CLASS}><Award className="h-4 w-4 text-secondary" aria-hidden="true" /><span>CCIM 认证</span></div>
                <div className={CREDENTIAL_CLASS}><Briefcase className="h-4 w-4 text-secondary" aria-hidden="true" /><span>超过25年的房地产经验</span></div>
              </div>
            </div>

            <div className="lg:col-span-7 lg:pt-4">
              <h2 className={NAME_CLASS}>Mikhail Pritsker</h2>
              <p className={TITLE_CLASS}>联合创始人兼管理合伙人</p>
              <p className="mt-8 font-display text-2xl leading-relaxed text-stone-800 md:text-3xl">与资本合伙人的沟通、报告纪律，以及组合层面的执行。</p>
              <div className="mt-7 space-y-5">
                <p className={BODY_CLASS}>
                  Mikhail 负责 FoxRidge 与资本合伙人的工作，并协调整个收购评审、报告、资产管理优先事项与交易执行。他的做法侧重于在做出决策前向合伙人提供明确信息，并在交割后保持直接沟通。
                </p>
                <p className={BODY_CLASS}>
                  他此前在房地产投资领导岗位拥有超过25年的经验，贯穿多个市场周期，涵盖交易、资产管理和组合监督等职责，并涉及先前的发起实体。
                </p>
              </div>
              <a href="https://www.linkedin.com/in/mikhailpritsker/" target="_blank" rel="noopener noreferrer" aria-label="Mikhail Pritsker 的 LinkedIn 资料" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#0A66C2] transition-colors hover:text-primary">
                <Linkedin className="h-4 w-4" aria-hidden="true" /> LinkedIn 个人资料
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container"><div className="h-px bg-stone-200" /></div>

      {/* Slava */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="order-2 lg:order-1 lg:col-span-7 lg:pt-4">
              <h2 className={NAME_CLASS}>Slava Davidenko</h2>
              <p className={TITLE_CLASS}>咨询委员会主席</p>
              <p className="mt-8 font-display text-2xl leading-relaxed text-stone-800 md:text-3xl">在寻源、尽职、运营和合伙人问责方面提供战略视角。</p>
              <div className="mt-7 space-y-5">
                <p className={BODY_CLASS}>
                  作为咨询委员会主席，Slava 为 FoxRidge 的按交易逐项模式提供战略与运营视角，包括对收购机会、业务计划假设和执行优先事项的评估。
                </p>
                <p className={BODY_CLASS}>
                  他此前拥有超过25年的创业和投资经历，包括在先前发起实体下参与多户住宅及多元化房地产项目。
                </p>
              </div>
              <a href="https://www.linkedin.com/in/vdavidenko/" target="_blank" rel="noopener noreferrer" aria-label="Slava Davidenko 的 LinkedIn 资料" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#0A66C2] transition-colors hover:text-primary">
                <Linkedin className="h-4 w-4" aria-hidden="true" /> LinkedIn 个人资料
              </a>
            </div>

            <div className="order-1 lg:order-2 lg:col-span-5">
              <div className="overflow-hidden border border-stone-200 bg-stone-100">
                <img src="/images/slava_new.webp" alt="Slava Davidenko" className="aspect-[3/4] h-full w-full object-cover object-top" />
              </div>
              <div className="mt-6 space-y-3 border-t border-stone-200 pt-6">
                <div className={CREDENTIAL_CLASS}><GraduationCap className="h-4 w-4 text-secondary" aria-hidden="true" /><span>芝加哥大学布斯商学院 MBA</span></div>
                <div className={CREDENTIAL_CLASS}><GraduationCap className="h-4 w-4 text-secondary" aria-hidden="true" /><span>工程学学位（MEPhI）</span></div>
                <div className={CREDENTIAL_CLASS}><Briefcase className="h-4 w-4 text-secondary" aria-hidden="true" /><span>超过25年的创业和投资经验</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust and international link */}
      <section className="bg-stone-50 py-12 md:py-16">
        <div className="container">
          <div className="grid gap-6 border border-stone-200 bg-white p-6 md:grid-cols-[1.15fr_.85fr] md:p-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">历史证明</p>
              <h2 className="mt-2 font-display text-2xl font-bold text-primary">精选先前合伙人经验。</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone-600">
                查看 FoxRidge 的高层公开证明部分，用以区分当前平台与合伙人先前的活动。
              </p>
              <Link href="/zh/track-record" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-secondary transition-colors hover:text-primary">
                查看过往经验 <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="border-t border-stone-200 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">国际资本</p>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                FoxRidge 与全球的家族办公室、合伙人和合格私人投资者合作，须遵守适用要求、内部合规及交易特定的文件。
              </p>
              <Link href="/zh/international-investors" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-secondary transition-colors hover:text-primary">
                国际投资者 <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-white md:py-20">
        <div className="container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">开始直接沟通</p>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">请求保密初步沟通。</h2>
          </div>
          <Button asChild size="lg" className="bg-secondary px-7 py-6 text-white hover:bg-secondary/90">
            <Link href="/zh/contact">请求保密初步沟通 <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
