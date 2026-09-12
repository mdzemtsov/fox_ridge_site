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

const capitalPartnerModel = [
  {
    number: "01",
    title: "A specific asset",
    description: "You evaluate the actual property, underwriting, financing and business plan before deciding whether to invest.",
    icon: FileCheck2,
  },
  {
    number: "02",
    title: "Meaningful rights",
    description: "Major-decision rights are negotiated for the transaction and documented in the definitive agreements.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "FoxRidge execution",
    description: "FoxRidge remains responsible for financing, closing, asset management and operating oversight.",
    icon: Building2,
  },
  {
    number: "04",
    title: "Capital alongside yours",
    description: "FoxRidge invests its own capital alongside its partners in the investments it sponsors.",
    icon: Handshake,
  },
];

const capitalPartnerResponsibilities = [
  "Evaluate the specific investment",
  "Decide whether to participate",
  "Negotiate transaction-specific governance",
  "Exercise agreed rights over major decisions",
];

const foxRidgeResponsibilities = [
  "Source and independently underwrite the property",
  "Arrange and execute property-level financing",
  "Lead diligence and closing",
  "Manage the asset and oversee third-party property management",
  "Execute the approved business plan",
  "Manage the investment through exit",
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
            <h1 className="max-w-4xl font-display text-4xl font-bold leading-[0.98] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Know the asset. Retain meaningful rights. Leave the execution to us.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/90 sm:text-xl md:text-2xl">
              FoxRidge creates asset-specific multifamily investments for private capital. You evaluate the actual property before investing, retain meaningful negotiated rights over major decisions, and rely on FoxRidge to finance, close, operate and manage the investment through exit. We invest our own capital alongside our partners in the investments we sponsor.
            </p>
            <p className="mt-5 max-w-3xl font-display text-xl font-semibold leading-relaxed text-white md:text-2xl">
              More authority than conventional passive LP exposure, without becoming the operator.
            </p>
            <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="h-auto min-h-14 w-full whitespace-normal bg-secondary px-7 py-3 text-base font-bold text-white hover:bg-[#b8942a] sm:h-14 sm:w-auto sm:whitespace-nowrap sm:px-8 sm:py-0">
                <Link href="/contact">
                  Request a confidential introduction <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-auto min-h-14 w-full whitespace-normal border-white/40 bg-white/[0.04] px-6 py-3 text-base font-semibold text-white hover:border-white hover:bg-white/10 hover:text-white sm:h-14 sm:w-auto sm:whitespace-nowrap sm:px-8 sm:py-0">
                <a href="#capital-partner-model">
                  See how the model works <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Capital partner model */}
      <section id="capital-partner-model" aria-labelledby="capital-partner-model-heading" className="scroll-mt-28 bg-white py-16 md:py-24">
        <div className="content-wide">
          <div className="content-reading text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">The capital partner model</p>
            <h2 id="capital-partner-model-heading" className="mt-3 font-display text-3xl font-bold text-primary md:text-5xl">A different balance of authority and responsibility.</h2>
          </div>

          <ol className="mt-11 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {capitalPartnerModel.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.number} className="border border-stone-200 bg-stone-50 p-6 shadow-[0_10px_28px_rgba(14,33,72,0.045)]">
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-secondary/35 bg-secondary/10 text-secondary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-[10px] font-bold tracking-[0.14em] text-stone-400">{item.number}</span>
                  </div>
                  <h3 className="mt-8 font-display text-xl font-bold leading-snug text-primary">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">{item.description}</p>
                </li>
              );
            })}
          </ol>

          <p className="mx-auto mt-9 max-w-3xl text-center text-sm font-bold uppercase tracking-[0.14em] text-secondary">Control is an option, not a job.</p>
        </div>
      </section>

      {/* Functional differentiation */}
      <section aria-labelledby="difference-heading" className="bg-primary py-16 text-white md:py-24">
        <div className="content-standard">
          <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Why this is different</p>
              <h2 id="difference-heading" className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">More than knowing which property you own.</h2>
            </div>
            <div className="border border-white/15 bg-white/[0.06] p-6 backdrop-blur-sm md:p-8">
              <p className="text-base leading-relaxed text-white/80 md:text-lg">
                Asset-specific alone is not the difference. Many conventional real-estate sponsors also raise capital around a named property. FoxRidge combines a specific asset with meaningful negotiated rights, FoxRidge execution responsibility, and FoxRidge capital invested alongside its partners.
              </p>
              <p className="mt-6 border-t border-white/10 pt-6 font-display text-xl font-semibold leading-relaxed text-white md:text-2xl">
                The capital partner retains meaningful negotiated rights over major decisions, while FoxRidge remains responsible for financing, execution and day-to-day operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section aria-labelledby="governance-heading" className="border-y border-stone-200 bg-stone-50 py-16 md:py-24">
        <div className="content-standard grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-center lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Governance</p>
            <h2 id="governance-heading" className="mt-3 font-display text-3xl font-bold leading-tight text-primary md:text-5xl">Meaningful rights. Clearly documented.</h2>
          </div>
          <div className="border-l-2 border-secondary pl-6 md:pl-8">
            <p className="text-base leading-relaxed text-stone-600 md:text-lg">
              Governance is established transaction by transaction in the definitive investment documents. Depending on the structure, negotiated reserved matters may include major decisions such as a sale, refinancing, or material changes to the approved business plan.
            </p>
            <p className="mt-6 font-display text-xl font-semibold leading-relaxed text-primary md:text-2xl">
              The objective is not to make the capital partner the operator. It is to provide meaningful authority over major investment decisions while FoxRidge remains accountable for execution.
            </p>
            <p className="mt-6 text-xs leading-relaxed text-stone-500">
              Specific governance rights and legal structure vary by transaction and are governed solely by definitive documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Division of responsibility */}
      <section aria-labelledby="responsibility-heading" className="bg-white py-16 md:py-24">
        <div className="content-wide">
          <div className="content-reading text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Who does what</p>
            <h2 id="responsibility-heading" className="mt-3 font-display text-3xl font-bold text-primary md:text-5xl">Your capital. Our execution responsibility.</h2>
          </div>

          <div className="mt-11 grid gap-4 lg:grid-cols-2 lg:gap-6">
            <article className="border border-stone-200 bg-stone-50 p-6 md:p-8">
              <div className="flex items-center gap-3 text-primary">
                <Users className="h-5 w-5 text-secondary" aria-hidden="true" />
                <h3 className="font-display text-2xl font-bold">Capital partner</h3>
              </div>
              <ul className="mt-7 space-y-4">
                {capitalPartnerResponsibilities.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-stone-600 md:text-base">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="border border-primary bg-primary p-6 text-white md:p-8">
              <div className="flex items-center gap-3">
                <Landmark className="h-5 w-5 text-secondary" aria-hidden="true" />
                <h3 className="font-display text-2xl font-bold">FoxRidge</h3>
              </div>
              <ul className="mt-7 space-y-4">
                {foxRidgeResponsibilities.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-white/80 md:text-base">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <p className="content-reading mx-auto mt-8 border-l-2 border-secondary pl-5 text-sm leading-relaxed text-stone-600 md:pl-6 md:text-base">
            You do not need to build a real-estate operating platform to own institutional-quality multifamily directly.
          </p>
        </div>
      </section>

      {/* Financing */}
      <section aria-labelledby="financing-heading" className="border-y border-stone-200 bg-stone-50 py-16 md:py-24">
        <div className="content-standard grid gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-center lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Financing execution</p>
            <h2 id="financing-heading" className="mt-3 max-w-2xl font-display text-3xl font-bold leading-tight text-primary md:text-5xl">We take responsibility for the debt side.</h2>
          </div>
          <div className="border border-stone-200 bg-white p-6 md:p-8">
            <p className="text-base leading-relaxed text-stone-600 md:text-lg">
              FoxRidge arranges and executes the property-level financing process through closing, including lender sourcing and negotiation, lender underwriting and documentation, sponsor-side qualification, and guaranty support where applicable.
            </p>
            <p className="mt-6 border-t border-stone-200 pt-5 text-xs leading-relaxed text-stone-500">
              Financing, borrower, guaranty and recourse requirements are transaction-specific and subject to lender approval.
            </p>
          </div>
        </div>
      </section>

      {/* Audience and international context */}
      <section className="border-b border-stone-200 bg-white py-16 md:py-24">
        <div className="content-standard">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Who we work with</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-primary md:text-4xl">Built for private capital that wants to know what it owns.</h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-600 md:text-lg">
                FoxRidge is designed primarily for family offices, principals, entrepreneurs and other qualified private capital seeking asset-specific real-estate exposure with professional execution and meaningful governance.
              </p>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-stone-500 md:text-base">
                Our model is designed primarily around core private-capital relationships of approximately $5 million or more, while the appropriate allocation and capital structure remain transaction-specific.
              </p>
            </div>
            <div className="border-l-2 border-secondary bg-stone-50 p-6 shadow-sm">
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
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-primary md:text-5xl">Experience that informs the work.</h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-stone-600 md:text-lg">
                Prior principal experience informs FoxRidge’s acquisition, financing, asset-management and execution work across the investments it sponsors.
              </p>
              <Link href="/track-record" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-secondary transition-colors hover:text-primary">
                View principal experience <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {[
                  { value: "$1B+", label: "Real-estate transactions" },
                  { value: "7,000+", label: "Units invested" },
                  { value: "36", label: "Property investments" },
                  { value: "8", label: "Full-cycle exits" },
                ].map((item) => (
                  <div key={item.label} className="border border-stone-200 bg-stone-50 p-5 md:p-6">
                    <p className="font-display text-3xl font-bold text-primary md:text-4xl">{item.value}</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.1em] text-stone-500">{item.label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 border-l-2 border-secondary pl-4 text-xs leading-relaxed text-stone-500">
                Experience shown reflects cumulative career participation of the principals across prior firms and sponsorships. It is not the track record of FoxRidge Equity Partners as a legal entity. Past performance is not indicative of future results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-stone-950 py-16 text-white md:py-24">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,rgba(201,168,70,0.20),transparent_65%)] lg:block" />
        <div className="content-standard relative z-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">See the model in practice</p>
          <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-bold leading-tight md:text-5xl">See how the model works on an actual investment.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            Review what a FoxRidge capital partner sees before deciding: the property, underwriting, financing, business plan and transaction structure.
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="h-auto min-h-14 w-full whitespace-normal bg-secondary px-8 py-3 text-base font-bold text-white hover:bg-[#b8942a] sm:h-14 sm:w-auto sm:whitespace-nowrap sm:py-0">
              <Link href="/contact">
                Request a Sample Deal Package <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-auto min-h-14 w-full whitespace-normal border-white/40 bg-white/[0.04] px-8 py-3 text-base font-semibold text-white hover:border-white hover:bg-white/10 hover:text-white sm:h-14 sm:w-auto sm:whitespace-nowrap sm:py-0">
              <Link href="/contact">
                Request a Confidential Introduction <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
