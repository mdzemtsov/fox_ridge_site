import { Link } from "wouter";
import { ArrowRight, FileLock2, Globe2, ShieldCheck, UsersRound } from "lucide-react";

const process = [
  {
    number: "01",
    title: "保密初步沟通",
    text: "先进行私密对话，说明您的目标、相关经验以及当前的 FoxRidge 项目。",
  },
  {
    number: "02",
    title: "相互匹配与背景",
    text: "如双方相互匹配，FoxRidge 可能会讨论与对话相关的资料及适当的后续步骤。",
  },
  {
    number: "03",
    title: "资料获取流程",
    text: "任何详细资料及相关访问指示均按个案审议，需遵守适用要求并经内部审查。",
  },
];

export default function InvestorPortal() {
  return (
    <div className="min-h-screen bg-[#040C1D] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0E2148] via-[#081733] to-[#040C1D]" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(ellipse at 60% 50%, rgba(201,168,70,0.15) 0%, transparent 70%)" }} />
        <div className="container relative max-w-5xl py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 border border-[#C9A846]/30 bg-[#C9A846]/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#C9A846]">
              <FileLock2 className="h-3.5 w-3.5" aria-hidden="true" /> 详细资料
            </p>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight md:text-6xl">获得详细资料的审慎路径。</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl">某些资料适用于保密且基于背景的讨论，而非在网站上公开分发。请先发起保密初步沟通，以便 FoxRidge 评估是否适合进一步对话。</p>
          </div>
        </div>
      </section>

      <main className="container max-w-5xl py-12 md:py-16">
        <section className="grid gap-8 border-b border-white/10 pb-12 md:grid-cols-[.85fr_1.15fr] md:gap-12 md:pb-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C9A846]">可能提供的内容</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white md:text-4xl">以背景为先，再谈内容。</h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-[#B5C0CE] md:text-lg">
            <p>在完成保密初步沟通并审查相关背景后，可能会提供中文、英文或俄文的详细项目资料。可获得性并非自动，且本身不构成要约、邀约、推荐或对合格性的核实。</p>
            <p>若随后要求提供资格自我声明，该声明仅为初步确认。其不等同于也不能替代任何可能要求的合规或投资者资格核查程序。</p>
          </div>
        </section>

        <section className="py-12 md:py-16" aria-labelledby="materials-process-heading">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C9A846]">沟通流程</p>
            <h2 id="materials-process-heading" className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">在确认适当背景后，申请获取详细资料。</h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {process.map((step) => (
              <article key={step.number} className="border border-white/10 bg-white/[0.03] p-6">
                <span className="font-mono text-xs font-bold tracking-[0.16em] text-[#C9A846]">{step.number}</span>
                <h3 className="mt-4 text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#B5C0CE]">{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-5 border-t border-white/10 py-12 md:grid-cols-2 md:py-16">
          <article className="border border-white/10 bg-[#0E2148]/55 p-6 md:p-8">
            <Globe2 className="h-5 w-5 text-[#C9A846]" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-bold text-white">国际背景</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#B5C0CE]">对于国际层面的对话，适用要求、内部审查以及双方关系的具体情况将决定流程。 <Link href="/zh/international-investors" className="font-semibold text-[#C9A846] underline underline-offset-2 hover:text-white">了解国际合作关系</Link>。</p>
          </article>
          <article className="border border-white/10 bg-[#0E2148]/55 p-6 md:p-8">
            <UsersRound className="h-5 w-5 text-[#C9A846]" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-bold text-white">私密的第一步</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#B5C0CE]">保密初步沟通表单专为家族办公室、主要负责人和合格私人投资者设计。该表单用于初步评估相互匹配，而非投资者资格核查程序。</p>
          </article>
        </section>

        <section className="border border-[#C9A846]/30 bg-[#0E2148] p-7 md:p-10">
          <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C9A846]">下一步</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-white">申请保密初步沟通。</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#B5C0CE] md:text-base">FoxRidge 会逐一审阅每项咨询。如双方相互匹配，团队将讨论是否在对话中提供详细资料。</p>
            </div>
            <Link href="/zh/contact" className="inline-flex shrink-0 items-center justify-center gap-2 bg-[#C9A846] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-[#040C1D] transition-colors hover:bg-[#B8973A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A846] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E2148]">申请保密初步沟通 <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
          <p className="mt-5 flex items-start gap-2 border-t border-white/10 pt-5 text-xs leading-relaxed text-[#8899AA]"><ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#C9A846]" aria-hidden="true" /> 若分享，详细资料仍须遵守适用法律、内部合规要求及最终文件的规定。</p>
        </section>
      </main>
    </div>
  );
}
