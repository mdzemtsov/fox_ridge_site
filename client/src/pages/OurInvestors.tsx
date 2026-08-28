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
    title: "Review the opportunity.",
    description: "You see the asset, the underwriting, and the key risks before you commit.",
    icon: FileCheck2,
  },
  {
    number: "02",
    title: "Approve the deal.",
    description: "You decide whether to move forward. You are not placed into a blind pool or a pre-set allocation.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "We execute the business plan.",
    description: "FoxRidge invests alongside you and leads asset management, capital-plan oversight, and oversight of third-party property management through exit.",
    icon: Handshake,
  },
];

const partnershipPrinciples = [
  "One investor, one approved acquisition.",
  "Investor approval before commitment.",
  "GP capital invested alongside the capital partner.",
  "FoxRidge leads day-to-day execution after closing.",
  "Current focus: Texas Triangle, Class B+/A multifamily, 2000+ vintage.",
];

export default function OurInvestors() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50">
      {/* Hero */}
      <section className="relative isolate flex min-h-[650px] items-center overflow-hidden bg-stone-950 md:min-h-[720px]">
        <div className="absolute inset-0 -z-20">
          <img
            src="/images/investor-hero-people.jpg"
            alt="Private investor meeting"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#040C1D]/95 via-[#040C1D]/78 to-[#040C1D]/32" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-[#040C1D]/70 to-transparent" />

        <div className="container py-20 lg:py-28">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-2 border border-white/20 bg-[#0E2148]/55 px-3 py-2 text-[10px] font-bold tracking-[0.16em] text-white/90 backdrop-blur-sm sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              CAPITAL PARTNERS
            </div>
            <h1 className="font-display text-4xl font-bold leading-[0.98] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              One Investor. <span className="text-secondary">One Deal.</span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/90 sm:text-xl md:text-2xl">
              FoxRidge partners with one family office, principal, or qualified private investor on each approved acquisition. You see the asset and underwriting before you decide. We invest alongside you and lead execution after closing.
            </p>
            <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="h-auto min-h-14 w-full whitespace-normal bg-secondary px-7 py-3 text-base font-bold text-white hover:bg-[#b8942a] sm:h-14 sm:w-auto sm:whitespace-nowrap sm:px-8 sm:py-0">
                <Link href="/contact">
                  Request a confidential introduction <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-auto min-h-14 w-full whitespace-normal border-white/40 bg-white/[0.04] px-6 py-3 text-base font-semibold text-white hover:border-white hover:bg-white/10 hover:text-white sm:h-14 sm:w-auto sm:whitespace-nowrap sm:px-8 sm:py-0">
                <a href="/our-investors#partnership-model">
                  See the partnership model <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Plain-language steps */}
      <section id="partnership-model" className="scroll-mt-28 bg-white py-16 md:py-24">
        <div className="content-wide">
          <div className="content-reading text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">The model, in plain language</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-5xl">You evaluate the asset. We lead the work.</h2>
            <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">
              The partnership is designed to make the acquisition decision clear before closing and the operating responsibility clear after closing.
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
        <div className="content-standard">
          <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Partnership at a glance</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">A direct structure for one specific acquisition.</h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-white/75 md:text-lg">
                This is a direct partnership for a specific approved acquisition, not a fund. The decision process, execution responsibilities, and applicable governance are addressed for that deal.
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
                Governance rights are set in definitive deal documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Audience and international context */}
      <section className="border-b border-stone-200 bg-stone-50 py-14 md:py-20">
        <div className="content-standard">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Who we work with</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-4xl">Built for direct decision-making.</h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-600 md:text-lg">
                FoxRidge works with family offices, principals, and qualified private investors who want to review a specific acquisition rather than commit to a blind pool or pre-set allocation.
              </p>
            </div>
            <div className="border-l-2 border-secondary bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <Globe2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                <div>
                  <h3 className="font-display text-lg font-bold text-primary">Investing from outside the United States?</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">Learn how FoxRidge works with qualified international capital partners.</p>
                  <Link href="/international-investors" className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-secondary transition-colors hover:text-primary">
                    International Investors <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principal experience */}
      <section className="bg-white py-16 md:py-24">
        <div className="content-standard">
          <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-end lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Principal experience</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-primary md:text-5xl">Experienced principals. Asset-specific focus.</h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-stone-600 md:text-lg">
                Prior leadership experience informs FoxRidge’s acquisition, asset-management, and execution work for each direct partnership.
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
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Begin a direct conversation</p>
          <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-bold leading-tight md:text-5xl">Request a confidential introduction.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            Discuss whether the direct partnership model may be a fit for your objectives and circumstances.
          </p>
          <Button asChild size="lg" className="mt-8 h-auto min-h-14 w-full whitespace-normal bg-secondary px-8 py-3 text-base font-bold text-white hover:bg-[#b8942a] sm:h-14 sm:w-auto sm:whitespace-nowrap sm:py-0">
            <Link href="/contact">
              Request a confidential introduction <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
