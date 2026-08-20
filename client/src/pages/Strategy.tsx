import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Hammer,
  Landmark,
  MapPin,
  Search,
  TrendingUp,
} from "lucide-react";

const acquisitionCriteria = [
  {
    icon: MapPin,
    title: "Markets",
    description: "Texas Triangle: Houston, Dallas–Fort Worth, and San Antonio.",
  },
  {
    icon: Building2,
    title: "Asset type",
    description: "Class B+/A multifamily assets.",
  },
  {
    icon: Landmark,
    title: "Vintage",
    description: "Built in 2000 or later.",
  },
  {
    icon: FileText,
    title: "Indicative scale",
    description: "Approximately $25–35 million purchase price and $8–10 million equity per acquisition, where appropriate and subject to deal-specific evaluation and documentation.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Source",
    description: "FoxRidge evaluates potential multifamily acquisitions in Houston, Dallas–Fort Worth, and San Antonio against its current acquisition criteria.",
    icon: Search,
  },
  {
    number: "02",
    title: "Underwrite",
    description: "Each opportunity is evaluated from its property operations, market context, and acquisition case using disciplined, deal-specific assumptions.",
    icon: BarChart3,
  },
  {
    number: "03",
    title: "Diligence",
    description: "FoxRidge conducts physical, financial, and legal diligence designed to identify the material facts and risks relevant to the specific acquisition.",
    icon: ClipboardCheck,
  },
  {
    number: "04",
    title: "Structure",
    description: "Every acquisition is reviewed with the capital partner and approved by the investor before commitment. Final terms are documented in definitive agreements for that transaction.",
    icon: FileText,
  },
  {
    number: "05",
    title: "Operate",
    description: "FoxRidge leads asset management, capital-plan oversight, and oversight of third-party property management after closing.",
    icon: Hammer,
  },
  {
    number: "06",
    title: "Exit / Hold / Refinance",
    description: "FoxRidge evaluates hold, refinance, and exit alternatives against the asset’s circumstances, market conditions, and definitive deal documentation. No outcome or timing is guaranteed.",
    icon: TrendingUp,
  },
];

export default function Strategy() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50">
      {/* Hero */}
      <section className="relative isolate flex min-h-[620px] items-center overflow-hidden bg-stone-950 md:min-h-[700px]">
        <div className="absolute inset-0 -z-20">
          <img
            src="/images/hero-strategy-garden.jpg"
            alt="Garden-style multifamily community"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#040C1D]/95 via-[#040C1D]/78 to-[#040C1D]/35" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-[#040C1D]/70 to-transparent" />

        <div className="container py-20 lg:py-28">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-2 border border-white/20 bg-[#0E2148]/55 px-3 py-2 text-[10px] font-bold tracking-[0.16em] text-white/90 backdrop-blur-sm sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              STRATEGY &amp; MARKETS
            </div>
            <h1 className="max-w-4xl font-display text-4xl font-bold leading-[0.98] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              A disciplined acquisition <span className="text-secondary">framework.</span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/90 sm:text-xl md:text-2xl">
              FoxRidge evaluates Class B+/A multifamily assets built in 2000 or later across the Texas Triangle: Houston, Dallas–Fort Worth, and San Antonio. Each acquisition is separately evaluated, approved by the investor, and documented in definitive agreements.
            </p>
            <Button asChild size="lg" className="mt-9 h-14 bg-secondary px-7 text-base font-bold text-white hover:bg-[#b8942a] sm:px-8">
              <Link href="/contact">
                Request a confidential introduction <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Current acquisition program */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Current acquisition program</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-5xl">Focused criteria. Deal-specific decisions.</h2>
            <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">
              The current program is intentionally narrow. Each potential acquisition is evaluated on its own facts, with investor approval and definitive documentation required for that transaction.
            </p>
          </div>

          <div className="mt-11 grid gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-5">
            {acquisitionCriteria.map((criterion) => {
              const Icon = criterion.icon;
              return (
                <article key={criterion.title} className="border border-stone-200 bg-stone-50 p-6">
                  <Icon className="h-7 w-7 text-secondary" aria-hidden="true" />
                  <h3 className="mt-7 font-display text-xl font-bold text-primary">{criterion.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">{criterion.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Market context */}
      <section className="border-y border-stone-200 bg-stone-50 py-16 md:py-20">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Market context</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-primary md:text-4xl">Research informs the decision. It does not replace it.</h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-stone-600 md:text-lg">
                FoxRidge evaluates market conditions, supply, demand, financing, and property-level operating context as part of each separate acquisition review. Market observations are assessed alongside the specific asset and are not a promise of future results.
              </p>
              <Link href="/investor-resources" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-secondary transition-colors hover:text-primary">
                Explore current market research <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="border-l-2 border-secondary bg-white p-6 shadow-sm md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-stone-400">Decision framework</p>
              <ul className="mt-5 space-y-4">
                {[
                  "Texas Triangle market context",
                  "Asset-level operating and capital needs",
                  "Independent diligence and definitive documentation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-stone-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Six-step process */}
      <section id="how-we-invest" className="scroll-mt-24 bg-primary py-16 text-white md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Six-step process</p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">How each acquisition is evaluated.</h2>
            <p className="mt-5 text-base leading-relaxed text-white/75 md:text-lg">
              The process is designed to give the capital partner a clear decision point before commitment and to define FoxRidge’s execution role after closing.
            </p>
          </div>

          <div className="mt-11 grid gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-5">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.number} className="border border-white/15 bg-white/[0.06] p-6 backdrop-blur-sm md:p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold tracking-[0.12em] text-secondary">{step.number}</span>
                    <Icon className="h-6 w-6 text-secondary" aria-hidden="true" />
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-bold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* International context */}
      <section className="bg-white py-12 md:py-14">
        <div className="container">
          <div className="flex flex-col items-start justify-between gap-6 border-l-2 border-secondary bg-stone-50 p-6 md:flex-row md:items-center md:p-8">
            <div>
              <h2 className="font-display text-xl font-bold text-primary">Investing from outside the United States?</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-stone-600">
                FoxRidge works with qualified international capital partners and encourages prospective partners to obtain independent legal, tax, and financial advice relevant to their circumstances.
              </p>
            </div>
            <Link href="/international-investors" className="shrink-0">
              <Button variant="outline" className="border-primary px-6 font-bold text-primary hover:bg-primary hover:text-white">
                International Investors <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-stone-950 py-16 text-white md:py-24">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,rgba(201,168,70,0.20),transparent_65%)] lg:block" />
        <div className="container relative z-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Begin a direct conversation</p>
          <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-bold leading-tight md:text-5xl">Request a confidential introduction.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            Discuss whether FoxRidge’s current acquisition program may be a fit for your objectives and circumstances.
          </p>
          <Button asChild size="lg" className="mt-8 h-14 bg-secondary px-8 text-base font-bold text-white hover:bg-[#b8942a]">
            <Link href="/contact">
              Request a confidential introduction <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
