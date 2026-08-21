import { Link } from "wouter";
import { ArrowLeft, ArrowRight, CalendarDays, CheckCircle2, FileText, ShieldCheck } from "lucide-react";

const focusItems = [
  "Texas Triangle: Houston, Dallas–Fort Worth, and San Antonio.",
  "Class B+/A multifamily assets.",
  "Built in 2000 or later.",
];

export default function ResearchCurrentProgram() {
  return (
    <div className="min-h-screen bg-stone-50">
      <section className="border-b border-stone-200 bg-primary py-16 text-white md:py-24">
        <div className="container max-w-4xl">
          <Link href="/investor-resources" className="inline-flex items-center gap-2 text-sm font-bold text-white/70 transition-colors hover:text-white">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to Research &amp; Insights
          </Link>
          <p className="mt-10 inline-flex items-center gap-2 border border-white/20 bg-white/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-secondary">
            <FileText className="h-3.5 w-3.5" aria-hidden="true" /> Research note
          </p>
          <h1 className="mt-6 font-display text-4xl font-bold leading-tight md:text-6xl">FoxRidge Current Acquisition Framework</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl">
            A concise public overview of the current program that informs FoxRidge’s acquisition review. This is not a market forecast, investment recommendation, offering document, or representation of future results.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/65">
            <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4 text-secondary" aria-hidden="true" /> Published August 21, 2026</span>
            <span>Factual review: August 21, 2026</span>
          </div>
        </div>
      </section>

      <main className="py-14 md:py-20">
        <div className="container max-w-4xl">
          <article className="space-y-14">
            <section className="grid gap-8 border-b border-stone-200 pb-12 md:grid-cols-[.85fr_1.15fr] md:gap-12">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Current focus</p>
                <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-primary md:text-4xl">A narrow, current program.</h2>
              </div>
              <div>
                <p className="text-base leading-relaxed text-stone-600 md:text-lg">
                  FoxRidge evaluates individual multifamily acquisition opportunities within a defined current focus. The program is intentionally specific and may evolve only after internal review and appropriate public-content approval.
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
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Acquisition review</p>
                <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-primary md:text-4xl">Deal-specific, not pre-allocated.</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-stone-600 md:text-lg">
                <p>Each acquisition is separately evaluated on its own facts, including the asset, underwriting, market context, financing considerations, and diligence findings.</p>
                <p>The capital partner reviews and approves each acquisition before commitment. Final terms, eligibility, and rights are documented for that transaction in definitive agreements.</p>
              </div>
            </section>

            <section className="grid gap-8 border-b border-stone-200 pb-12 md:grid-cols-[.85fr_1.15fr] md:gap-12">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Editorial standard</p>
                <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-primary md:text-4xl">Evidence before emphasis.</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-stone-600 md:text-lg">
                <p>This public note does not include market statistics, return targets, projected hold periods, or offering economics. Any future public market statistic will identify both a readable source and a date.</p>
                <p>Research is intended to inform the review process. It does not replace diligence, independent advice, or the documentation applicable to a specific acquisition.</p>
              </div>
            </section>

            <section className="border-l-2 border-secondary bg-white p-6 md:p-8">
              <div className="flex gap-4">
                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Source and review</p>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600 md:text-base">Source: FoxRidge approved public-message source of truth. Factual review date: August 21, 2026. Next scheduled review: November 21, 2026, or earlier if the current acquisition program changes.</p>
                </div>
              </div>
            </section>
          </article>

          <section className="mt-14 bg-primary p-7 text-white md:mt-20 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Next step</p>
            <h2 className="mt-3 font-display text-3xl font-bold">Request current research.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">Request a confidential introduction to discuss whether FoxRidge’s current program may be a fit for your objectives and circumstances.</p>
            <Link href="/contact" className="mt-7 inline-flex items-center gap-2 bg-secondary px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-secondary/90">
              Request current research <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
