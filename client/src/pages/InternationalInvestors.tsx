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
  "One investor, one approved acquisition.",
  "Investor approval before commitment.",
  "FoxRidge invests alongside the capital partner.",
  "FoxRidge leads day-to-day execution after closing.",
  "Current focus: Texas Triangle, Class B+/A multifamily, 2000+ vintage.",
];

const processSteps = [
  {
    number: "01",
    title: "Confidential introduction",
    description: "Begin with a private conversation about objectives, experience, and whether a direct multifamily partnership may be a fit.",
    icon: Handshake,
  },
  {
    number: "02",
    title: "Mutual fit and preliminary eligibility",
    description: "FoxRidge and the prospective partner assess whether a conversation may proceed, subject to applicable requirements and internal review.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Current opportunity and underwriting",
    description: "Where appropriate, FoxRidge discusses a current opportunity, the underwriting, the asset, and the material considerations for that transaction.",
    icon: Landmark,
  },
  {
    number: "04",
    title: "Documentation with each party’s advisers",
    description: "Each party works with its own qualified advisers. Final terms, eligibility, and rights are addressed in definitive deal documentation.",
    icon: FileText,
  },
  {
    number: "05",
    title: "Closing and reporting",
    description: "Following closing, FoxRidge leads day-to-day execution and provides reporting as established for the acquisition in its governing documents.",
    icon: ClipboardCheck,
  },
];

const faqs = [
  {
    question: "Who may start a conversation?",
    answer: "Family offices, principals, and qualified private investors may request a confidential introduction. Any discussion remains subject to applicable law, internal compliance, and the facts of the specific relationship and transaction.",
  },
  {
    question: "How are U.S. person and non-U.S. person considerations handled?",
    answer: "Eligibility and any offering process depend on the investor’s circumstances, residence or status, applicable law, and the specific transaction. The page does not create automatic eligibility for any person or jurisdiction.",
  },
  {
    question: "Are KYC/AML and sanctions checks required?",
    answer: "Yes. FoxRidge may conduct internal compliance, KYC/AML, sanctions, and other screening appropriate to the relationship and transaction before proceeding.",
  },
  {
    question: "Does FoxRidge provide legal or tax advice?",
    answer: "No. Prospective partners should consult independent legal, tax, financial, and other qualified advisers regarding their own circumstances and any proposed transaction.",
  },
  {
    question: "How are reporting and asset visits handled?",
    answer: "Reporting practices are established in the governing documents for the acquisition. Asset or market visits may be discussed when appropriate for the transaction and are not a promised service or travel arrangement.",
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
            alt="U.S. multifamily community"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#040C1D]/95 via-[#040C1D]/80 to-[#040C1D]/35" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-[#040C1D]/70 to-transparent" />

        <div className="container py-20 lg:py-28">
          <div className="max-w-5xl">
            <div className="mb-7 inline-flex items-center gap-2 border border-white/20 bg-[#0E2148]/55 px-3 py-2 text-[10px] font-bold tracking-[0.16em] text-white/90 backdrop-blur-sm sm:text-xs">
              <Globe2 className="h-3.5 w-3.5 text-secondary" aria-hidden="true" />
              INTERNATIONAL CAPITAL PARTNERS
            </div>
            <h1 className="max-w-5xl font-display text-4xl font-bold leading-[0.98] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Direct U.S. Multifamily Partnerships for Family Offices &amp; Private Capital <span className="text-secondary">Worldwide.</span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/90 sm:text-xl md:text-2xl">
              FoxRidge partners with family offices, principals and qualified private investors seeking direct, deal-by-deal exposure to U.S. multifamily real estate.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
              One investor. One deal. You review and approve every acquisition. We invest alongside you and operate through exit.
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button asChild size="lg" className="h-auto min-h-14 w-full whitespace-normal bg-secondary px-6 py-3 text-left text-sm font-bold leading-snug text-white hover:bg-[#b8942a] sm:w-auto sm:whitespace-nowrap sm:px-8 sm:text-base">
                <Link href="/contact">
                  Request a confidential introduction <ArrowUpRight className="ml-2 h-4 w-4 shrink-0" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-h-14 w-full whitespace-normal border-white/40 bg-white/[0.04] px-6 text-sm font-semibold text-white hover:border-white hover:bg-white/10 hover:text-white sm:w-auto sm:whitespace-nowrap sm:text-base">
                <a href="#international-faq">
                  Explore international eligibility <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
              <p className="max-w-3xl text-xs leading-relaxed text-white/60 sm:basis-full">
                Available to eligible investors, subject to applicable law, internal compliance, KYC/AML, sanctions screening and final deal documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why this model */}
      <section className="bg-white py-16 md:py-24">
        <div className="content-standard">
          <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Why this model</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-primary md:text-5xl">A direct partnership around a specific asset.</h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-stone-600 md:text-lg">
                The model is designed for a principal or capital partner who wants to review a specific acquisition, its underwriting, and its key risks before making a decision.
              </p>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-stone-500">
                It is a direct, deal-by-deal partnership rather than a blind-pool fund. Each acquisition stands on its own and remains subject to review, approval, and definitive documentation.
              </p>
            </div>

            <div className="border-l-2 border-secondary bg-stone-50 p-6 md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-stone-400">Partnership at a glance</p>
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
        <div className="content-wide">
          <div className="content-reading text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">A practical international process</p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">Clear steps. Appropriate review.</h2>
            <p className="mt-5 text-base leading-relaxed text-white/75 md:text-lg">
              Cross-border relationships require careful coordination. The process is deliberately staged and no timing, jurisdictional outcome, or transaction is guaranteed.
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
      <section id="international-faq" className="scroll-mt-28 bg-stone-50 py-16 md:py-24">
        <div className="content-reading">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">International FAQ</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-5xl">Practical questions, answered directly.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-stone-600 md:text-lg">
              This overview is informational only. It does not provide legal, tax, securities, immigration, or investment advice.
            </p>
          </div>

          <div className="mt-10 divide-y divide-stone-200 border-y border-stone-200 bg-white">
            {faqs.map((faq) => (
              <details key={faq.question} className="group px-5 py-5 md:px-7">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display text-lg font-bold text-primary marker:content-none">
                  <span>{faq.question}</span>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center border border-stone-300 text-secondary transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-4 max-w-[var(--content-reading)] text-sm leading-relaxed text-stone-600">{faq.answer}</p>
              </details>
            ))}
          </div>
          <p className="mt-6 text-center text-xs leading-relaxed text-stone-500">
            Europe, the GCC, Asia-Pacific, and Latin America, among other markets, may be considered subject to applicable requirements. No region or jurisdiction is automatically eligible.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-white py-16 md:py-24">
        <div className="content-standard">
          <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-end lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Experience and accountability</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-primary md:text-5xl">Experienced principals. Direct accountability.</h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-stone-600 md:text-lg">
                FoxRidge applies experienced principal leadership to each acquisition while maintaining a direct relationship with the capital partner throughout the asset lifecycle.
              </p>
              <Link href="/track-record" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-secondary transition-colors hover:text-primary">
                View principal experience <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { value: "$1B+", label: "Transaction experience" },
                  { value: "7,000+", label: "Units" },
                  { value: "36", label: "Properties" },
                ].map((item) => (
                  <div key={item.label} className="border border-stone-200 bg-stone-50 p-5 md:p-6">
                    <p className="font-display text-3xl font-bold text-primary md:text-4xl">{item.value}</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.1em] text-stone-500">{item.label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 border-l-2 border-secondary pl-4 text-xs leading-relaxed text-stone-500">
                Experience shown reflects prior activities of the principals under prior sponsoring entities. Past performance is not indicative of future results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-stone-950 py-16 text-white md:py-24">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,rgba(201,168,70,0.20),transparent_65%)] lg:block" />
        <div className="content-standard relative z-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Begin a private conversation</p>
          <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-bold leading-tight md:text-5xl">Request a confidential introduction.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            Discuss whether a direct U.S. multifamily partnership may be a fit for your objectives and circumstances.
          </p>
          <Button asChild size="lg" className="mt-8 h-auto min-h-14 bg-secondary px-6 py-3 text-left text-sm font-bold leading-snug text-white hover:bg-[#b8942a] sm:px-8 sm:text-base">
            <Link href="/contact">
              Request a confidential introduction <ArrowUpRight className="ml-2 h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
