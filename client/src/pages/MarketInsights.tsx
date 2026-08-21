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
              <FileText className="h-3.5 w-3.5" aria-hidden="true" /> Research &amp; Insights
            </p>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">Research that supports<br /><span className="text-[#C9A846]">disciplined decisions.</span></h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#B5C0CE] md:text-xl">
              Dated, source-conscious public material on FoxRidge’s current acquisition program. Research is informational only and does not constitute an offer, solicitation, recommendation, or investment advice.
            </p>
          </div>
        </div>
      </section>

      <main className="flex-1 py-10 md:py-14">
        <div className="container">
          <section aria-labelledby="featured-research">
            <div className="mb-6 flex items-end justify-between gap-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C9A846]">Featured report</p>
                <h2 id="featured-research" className="mt-2 text-2xl font-bold text-white md:text-3xl">Current public report</h2>
              </div>
              <p className="hidden max-w-sm text-right text-xs leading-relaxed text-[#8899AA] md:block">Every public item is reviewed for current program alignment, factual support, and public-distribution suitability.</p>
            </div>

            <article className="overflow-hidden border border-[#C9A846]/30 bg-[#0E2148]/70">
              <div className="border-b border-[#C9A846]/20 bg-[#C9A846]/10 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#C9A846]">Approved public research</div>
              <div className="grid gap-8 p-6 md:grid-cols-[.8fr_1.2fr] md:p-9">
                <div className="flex flex-col justify-between gap-7">
                  <div>
                    <span className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-white/80"><FileText className="h-3.5 w-3.5 text-[#C9A846]" aria-hidden="true" /> Program Report</span>
                    <p className="mt-5 inline-flex items-center gap-2 text-sm text-[#B5C0CE]"><CalendarDays className="h-4 w-4 text-[#C9A846]" aria-hidden="true" /> August 21, 2026</p>
                  </div>
                  <p className="text-xs leading-relaxed text-[#8899AA]">Source: FoxRidge approved public-message source of truth. Factual review: August 21, 2026.</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold leading-tight text-white md:text-4xl">FoxRidge Current Acquisition Framework</h3>
                  <p className="mt-4 text-base leading-relaxed text-[#B5C0CE] md:text-lg">A non-promotional public overview of the current Texas Triangle program, separate acquisition approval, and the standards that govern public research publication.</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Texas Triangle", "Class B+/A", "2000+ vintage", "Reviewed Aug. 2026"].map((tag) => <span key={tag} className="border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-[#B5C0CE]">{tag}</span>)}
                  </div>
                  <Link href="/research/current-acquisition-framework" className="mt-8 inline-flex items-center gap-2 bg-[#C9A846] px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-[#040C1D] transition-colors hover:bg-[#B8973A]">Read research note <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
                </div>
              </div>
            </article>
          </section>

          <section className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
            <div className="border border-white/10 bg-[#0E2148]/55 p-6 md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C9A846]">Editorial standard</p>
              <h2 className="mt-3 text-2xl font-bold text-white">What public research includes.</h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#B5C0CE] md:text-base">Public research is limited to material that reflects the current acquisition program and can be dated, sourced, and reviewed for public distribution. It does not publish deal economics, target returns, investor minimums, or projections.</p>
            </div>
            <div className="border border-white/10 bg-[#081733] p-6 md:p-8">
              <div className="flex gap-4">
                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[#C9A846]" aria-hidden="true" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C9A846]">Updated research in preparation</p>
                  <p className="mt-3 text-sm leading-relaxed text-[#B5C0CE]">Historic reports, PDFs, and the former dashboard are not currently distributed publicly while they undergo program, factual, and public-distribution review.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-10 border-t border-white/10 pt-10 text-center md:mt-14 md:pt-14">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C9A846]">Next step</p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Request current research.</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#B5C0CE]">Request a confidential introduction to discuss whether FoxRidge’s current program and current research may be relevant to your objectives.</p>
            <Link href="/contact" className="mt-7 inline-flex items-center gap-2 bg-[#C9A846] px-7 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-[#040C1D] transition-colors hover:bg-[#B8973A]">Request current research <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </section>
        </div>
      </main>
    </div>
  );
}
