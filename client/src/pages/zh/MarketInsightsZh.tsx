import { Link } from "wouter";
import { ArrowRight, CalendarDays, FileText, ShieldCheck } from "lucide-react";

export default function MarketInsights() {
  return (
    <div className="flex min-h-screen flex-col bg-[#040C1D]">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0E2148] via-[#081733] to-[#040C1D]" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(ellipse at 70% 50%, rgba(201,168,70,0.12) 0%, transparent 65%)" }} />
        <div className="container relative py-14 md:py-20">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 border border-[#C9A846]/30 bg-[#C9A846]/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#C9A846]">
              <FileText className="h-3.5 w-3.5" aria-hidden="true" /> 研究与洞察
            </p>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">支撑审慎决策的研究。<br /><span className="text-[#C9A846]"></span></h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#B5C0CE] md:text-xl">
              关于 FoxRidge 当前收购计划的注明日期且来源可查的公开材料。研究仅供信息参考，不构成要约、招揽、推荐或投资建议。
            </p>
          </div>
        </div>
      </section>

      <main className="flex-1 py-10 md:py-14">
        <div className="container">
          <section aria-labelledby="featured-research">
            <div className="mb-6 flex items-end justify-between gap-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C9A846]">精选报告</p>
                <h2 id="featured-research" className="mt-2 text-2xl font-bold text-white md:text-3xl">当前公开报告</h2>
              </div>
              <p className="hidden max-w-sm text-right text-xs leading-relaxed text-[#8899AA] md:block">每一项公开资料均会审查其与当前计划的一致性、事实依据及公开分发的适宜性。</p>
            </div>

            <article className="overflow-hidden border border-[#C9A846]/30 bg-[#0E2148]/70">
              <div className="border-b border-[#C9A846]/20 bg-[#C9A846]/10 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#C9A846]">经批准的公开研究</div>
              <div className="grid gap-8 p-6 md:grid-cols-[.8fr_1.2fr] md:p-9">
                <div className="flex flex-col justify-between gap-7">
                  <div>
                    <span className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-white/80"><FileText className="h-3.5 w-3.5 text-[#C9A846]" aria-hidden="true" /> 项目报告</span>
                    <p className="mt-5 inline-flex items-center gap-2 text-sm text-[#B5C0CE]"><CalendarDays className="h-4 w-4 text-[#C9A846]" aria-hidden="true" /> 2026年8月21日</p>
                  </div>
                  <p className="text-xs leading-relaxed text-[#8899AA]">来源：FoxRidge 批准的公开信息权威来源。事实审查：2026年8月21日。</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold leading-tight text-white md:text-4xl">FoxRidge 当前收购框架</h3>
                  <p className="mt-4 text-base leading-relaxed text-[#B5C0CE] md:text-lg">对当前 Texas Triangle 项目的非推销性公开概述、独立的收购审批流程，以及规范公开研究发布的标准。</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Texas Triangle", "Class B+/A", "2000年及以后建成", "已于2026年8月审阅"].map((tag) => <span key={tag} className="border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-[#B5C0CE]">{tag}</span>)}
                  </div>
                  <Link href="/zh/research/current-acquisition-framework" className="mt-8 inline-flex items-center gap-2 bg-[#C9A846] px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-[#040C1D] transition-colors hover:bg-[#B8973A]">查看研究说明 <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
                </div>
              </div>
            </article>
          </section>

          <section className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
            <div className="border border-white/10 bg-[#0E2148]/55 p-6 md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C9A846]">编辑标准</p>
              <h2 className="mt-3 text-2xl font-bold text-white">公开研究包含的内容。</h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#B5C0CE] md:text-base">公开研究仅限于反映当前收购计划，且能够注明日期、来源并适合公开分发审查的材料。不发布交易经济、目标回报、投资最低额或预测。</p>
            </div>
            <div className="border border-white/10 bg-[#081733] p-6 md:p-8">
              <div className="flex gap-4">
                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[#C9A846]" aria-hidden="true" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C9A846]">正在准备的更新研究</p>
                  <p className="mt-3 text-sm leading-relaxed text-[#B5C0CE]">历史报告、PDF 以及先前的仪表板在经过项目、事实与公开分发审查期间暂不对外公开分发。</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-10 border-t border-white/10 pt-10 text-center md:mt-14 md:pt-14">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C9A846]">下一步</p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">索取当前研究资料。</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#B5C0CE]">请求保密初步沟通，以讨论 FoxRidge 当前的项目和当前研究是否可能与您的目标相关。</p>
            <Link href="/zh/contact" className="mt-7 inline-flex items-center gap-2 bg-[#C9A846] px-7 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-[#040C1D] transition-colors hover:bg-[#B8973A]">索取当前研究资料 <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </section>
        </div>
      </main>
    </div>
  );
}
