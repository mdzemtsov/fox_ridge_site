import { Link } from "wouter";
import { ArrowRight, FileLock2, Globe2, ShieldCheck, UsersRound } from "lucide-react";

const process = [
  {
    number: "01",
    title: "Confidential introduction",
    text: "Begin with a private conversation about your objectives, relevant experience, and the current FoxRidge program.",
  },
  {
    number: "02",
    title: "Mutual fit and context",
    text: "If there is mutual fit, FoxRidge may discuss the materials that are relevant to the conversation and the appropriate next steps.",
  },
  {
    number: "03",
    title: "Materials-access process",
    text: "Any detailed materials and related access instructions are considered case by case, subject to applicable requirements and internal review.",
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
              <FileLock2 className="h-3.5 w-3.5" aria-hidden="true" /> Detailed materials
            </p>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight md:text-6xl">A considered path to detailed materials.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl">Some materials are intended for a confidential, contextual discussion rather than general website distribution. Begin with an introduction so FoxRidge can understand whether a conversation may be appropriate.</p>
          </div>
        </div>
      </section>

      <main className="container max-w-5xl py-12 md:py-16">
        <section className="grid gap-8 border-b border-white/10 pb-12 md:grid-cols-[.85fr_1.15fr] md:gap-12 md:pb-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C9A846]">What may be available</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white md:text-4xl">Context before content.</h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-[#B5C0CE] md:text-lg">
            <p>Detailed program materials may be available in English or Russian after a confidential introduction and a review of the relevant context. Availability is not automatic and does not itself constitute an offer, solicitation, recommendation, or verification of eligibility.</p>
            <p>Where an eligibility self-attestation is later requested, it is a preliminary acknowledgement only. It is separate from, and does not replace, any compliance or investor-verification process that may be required.</p>
          </div>
        </section>

        <section className="py-12 md:py-16" aria-labelledby="materials-process-heading">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C9A846]">How the conversation proceeds</p>
            <h2 id="materials-process-heading" className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">Request access to detailed materials after the right context is established.</h2>
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
            <h2 className="mt-4 text-2xl font-bold text-white">International context</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#B5C0CE]">For international conversations, applicable requirements, internal review, and the facts of the relationship guide the process. <Link href="/international-investors" className="font-semibold text-[#C9A846] underline underline-offset-2 hover:text-white">Learn about international partnerships</Link>.</p>
          </article>
          <article className="border border-white/10 bg-[#0E2148]/55 p-6 md:p-8">
            <UsersRound className="h-5 w-5 text-[#C9A846]" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-bold text-white">A private first step</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#B5C0CE]">The confidential-introduction form is designed for family offices, principals, and qualified private investors. It is an initial mutual-fit conversation, not an investor-verification process.</p>
          </article>
        </section>

        <section className="border border-[#C9A846]/30 bg-[#0E2148] p-7 md:p-10">
          <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C9A846]">Next step</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-white">Request a confidential introduction.</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#B5C0CE] md:text-base">FoxRidge reviews each inquiry individually. If there is mutual fit, the team will discuss whether detailed materials are appropriate for the conversation.</p>
            </div>
            <Link href="/contact" className="inline-flex shrink-0 items-center justify-center gap-2 bg-[#C9A846] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-[#040C1D] transition-colors hover:bg-[#B8973A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A846] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E2148]">Request a confidential introduction <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
          <p className="mt-5 flex items-start gap-2 border-t border-white/10 pt-5 text-xs leading-relaxed text-[#8899AA]"><ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#C9A846]" aria-hidden="true" /> Detailed materials, if shared, remain subject to applicable law, internal compliance, and definitive documentation.</p>
        </section>
      </main>
    </div>
  );
}
