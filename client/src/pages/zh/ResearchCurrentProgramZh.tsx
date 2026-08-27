import { Link } from "wouter";
import { ArrowLeft, ArrowRight, CalendarDays, CheckCircle2, FileText, ShieldCheck } from "lucide-react";

const focusItems = [
  "德州三角地带：休斯顿、达拉斯–沃斯堡 和 圣安东尼奥。",
  "B+/A 级多户住宅资产。",
  "建成于2000年或之后。",
];

export default function ResearchCurrentProgram() {
  return (
    <div className="min-h-screen bg-stone-50">
      <section className="border-b border-stone-200 bg-primary py-16 text-white md:py-24">
        <div className="container max-w-4xl">
          <Link href="/zh/investor-resources" className="inline-flex items-center gap-2 text-sm font-bold text-white/70 transition-colors hover:text-white">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> 返回 研究资料
          </Link>
          <p className="mt-10 inline-flex items-center gap-2 border border-white/20 bg-white/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-secondary">
            <FileText className="h-3.5 w-3.5" aria-hidden="true" /> 研究说明
          </p>
          <h1 className="mt-6 font-display text-4xl font-bold leading-tight md:text-6xl">FoxRidge 当前收购框架</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl">
            对当前项目的简明公开概述，用于说明 FoxRidge 的收购审查流程。此文并非市场预测、投资建议、发售文件或对未来结果的陈述。
          </p>
          <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/65">
            <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4 text-secondary" aria-hidden="true" /> 发布日期：2026年8月21日</span>
            <span>事实复核：2026年8月21日</span>
          </div>
        </div>
      </section>

      <main className="py-14 md:py-20">
        <div className="container max-w-4xl">
          <article className="space-y-14">
            <section className="grid gap-8 border-b border-stone-200 pb-12 md:grid-cols-[.85fr_1.15fr] md:gap-12">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">当前重点</p>
                <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-primary md:text-4xl">聚焦且精确的当前项目。</h2>
              </div>
              <div>
                <p className="text-base leading-relaxed text-stone-600 md:text-lg">
                  FoxRidge 在定义的当前关注范围内对各项多户住宅收购机会逐项评估。该计划具有刻意的具体性，仅在内部审查并获得适当的公开内容批准后方可演进。
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
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">收购审查</p>
                <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-primary md:text-4xl">按交易评估，而非预先分配。</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-stone-600 md:text-lg">
                <p>每项收购均基于其自身事实单独评估，包括资产、承保、市场背景、融资考虑以及尽职调查结果。</p>
                <p>资本合作方在作出承诺前会审查并批准每项收购。该交易的最终条款、合格性与权利将记录在最终协议文件中。</p>
              </div>
            </section>

            <section className="grid gap-8 border-b border-stone-200 pb-12 md:grid-cols-[.85fr_1.15fr] md:gap-12">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">编辑标准</p>
                <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-primary md:text-4xl">以证据为先。</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-stone-600 md:text-lg">
                <p>本公开说明不包含市场统计数据、收益目标、预期持有期或发售经济学。任何未来公开的市场统计数据将同时标明可查来源和日期。</p>
                <p>研究旨在为审查流程提供信息，并不替代尽职调查、独立建议或适用于特定收购的文件。</p>
              </div>
            </section>

            <section className="border-l-2 border-secondary bg-white p-6 md:p-8">
              <div className="flex gap-4">
                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">来源与复核</p>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600 md:text-base">来源：FoxRidge 批准的公开信息权威来源。事实复核日期：2026年8月21日。下一次预定复核：2026年11月21日，或在当前收购计划变更时提前复核。</p>
                </div>
              </div>
            </section>
          </article>

          <section className="mt-14 bg-primary p-7 text-white md:mt-20 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">下一步</p>
            <h2 className="mt-3 font-display text-3xl font-bold">索取当前研究。</h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">请求保密初步沟通，以讨论 FoxRidge 当前计划是否可能符合您的目标和具体情况。</p>
            <Link href="/zh/contact" className="mt-7 inline-flex items-center gap-2 bg-secondary px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-secondary/90">
              索取当前研究资料 <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
