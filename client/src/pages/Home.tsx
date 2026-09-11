import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Globe2,
  Handshake,
  Landmark,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Link } from "wouter";
import { motion, useReducedMotion } from "framer-motion";

const modelAtGlance = [
  {
    number: "01",
    title: "A specific asset",
    description: "You evaluate the property, economics, financing and business plan before committing capital.",
    icon: Building2,
  },
  {
    number: "02",
    title: "Meaningful rights",
    description: "You retain meaningful negotiated rights over major investment decisions without becoming the day-to-day operator.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Capital alongside yours",
    description: "FoxRidge invests its own capital alongside its partners in the investments it sponsors.",
    icon: Handshake,
  },
  {
    number: "04",
    title: "Professional execution",
    description: "FoxRidge sources, underwrites, finances, closes, operates and manages the investment through exit.",
    icon: Landmark,
  },
];

const partnershipSteps = [
  {
    number: "01",
    title: "Review",
    description: "FoxRidge presents the property, underwriting, financing, diligence and business plan.",
    icon: Building2,
  },
  {
    number: "02",
    title: "Decide",
    description: "You evaluate the opportunity and decide whether to invest. Governance and major-decision rights are established for the transaction.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Execute",
    description: "FoxRidge invests alongside its capital partners and remains responsible for financing, closing, asset management and operating oversight through exit.",
    icon: Handshake,
  },
];

const valueDrivers = [
  {
    number: "01",
    title: "Buy well",
    description: "Acquire at a defensible basis.",
    icon: CheckCircle2,
  },
  {
    number: "02",
    title: "Current income",
    description: "The property produces income from day one.",
    icon: Landmark,
  },
  {
    number: "03",
    title: "Improve controllable NOI",
    description: "Capture revenue and expense opportunities that can be executed at the property level.",
    icon: Building2,
  },
  {
    number: "04",
    title: "Manage actively",
    description: "FoxRidge manages above the property-manager level throughout the hold.",
    icon: ShieldCheck,
  },
];

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero */}
      <section className="relative isolate flex min-h-[700px] items-center overflow-hidden bg-stone-950 md:min-h-[760px]">
        <div className="absolute inset-0 -z-20">
          <video autoPlay muted loop playsInline className="h-full w-full object-cover" aria-hidden="true">
            <source src="/videos/hero-american-city.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#050b18]/95 via-[#050b18]/78 to-[#050b18]/35" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-[#050b18]/75 to-transparent" />

        <div className="container py-20 lg:py-28">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-2 border border-white/20 bg-[#0E2148]/55 px-3 py-2 text-[10px] font-bold tracking-[0.16em] text-white/90 backdrop-blur-sm sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              ASSET-SPECIFIC U.S. MULTIFAMILY INVESTMENTS
            </div>

            <h1 className="max-w-4xl font-display text-4xl font-bold leading-[0.98] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              The asset is named.<br />
              The numbers are <span className="text-secondary">known.</span><br />
              Then capital moves.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/90 sm:text-xl md:text-2xl">
              Asset-specific multifamily investments for private capital. You evaluate the actual property before investing. FoxRidge sources it, independently underwrites it, solves the financing and closing, operates it, and invests its own capital alongside you.
            </p>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-secondary sm:text-sm">
              Specific asset. Professional execution. Meaningful rights. Aligned capital.
            </p>

            <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="h-auto min-h-14 w-full whitespace-normal bg-secondary px-6 py-3 text-base font-bold text-white hover:bg-[#b8942a] sm:h-14 sm:w-auto sm:whitespace-nowrap sm:px-8 sm:py-0">
                <Link href="/contact">
                  Request a confidential introduction <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-auto min-h-14 w-full whitespace-normal border-white/40 bg-white/[0.04] px-6 py-3 text-base font-semibold text-white hover:border-white hover:bg-white/10 hover:text-white sm:h-14 sm:w-auto sm:whitespace-nowrap sm:px-8 sm:py-0">
                <a href="#partnership-model">
                  See how the model works <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FoxRidge model at a glance */}
      <section aria-labelledby="model-at-a-glance-heading" className="border-y border-stone-200 bg-white py-16 md:py-20">
        <div className="content-wide">
          <div className="content-reading text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">The FoxRidge model</p>
            <h2 id="model-at-a-glance-heading" className="mt-3 font-display text-3xl font-bold text-primary md:text-5xl">The FoxRidge model at a glance.</h2>
          </div>

          <ol className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-4">
            {modelAtGlance.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.li
                  key={item.title}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.22 }}
                  transition={{ duration: 0.28, delay: index * 0.07, ease: [0.23, 1, 0.32, 1] }}
                  className="relative min-h-56 border border-stone-200 bg-stone-50 p-6 shadow-[0_10px_28px_rgba(14,33,72,0.045)]"
                >
                  {index < modelAtGlance.length - 1 && (
                    <span aria-hidden="true" className="absolute right-[-17px] top-1/2 z-10 hidden h-px w-[18px] bg-secondary/45 lg:block" />
                  )}
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-secondary/35 bg-secondary/10 text-secondary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-[10px] font-bold tracking-[0.14em] text-stone-400">{item.number}</span>
                  </div>
                  <h3 className="mt-8 max-w-[24ch] font-display text-xl font-bold leading-snug text-primary">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">{item.description}</p>
                </motion.li>
              );
            })}
          </ol>

          <div className="mx-auto mt-9 max-w-3xl text-center">
            <p className="font-display text-xl font-semibold leading-relaxed text-primary md:text-2xl">
              More authority than conventional passive LP exposure, without becoming the operator.
            </p>
            <p className="mt-3 text-sm font-bold uppercase tracking-[0.14em] text-secondary">Control is an option, not a job.</p>
          </div>

          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="h-auto min-h-14 w-full whitespace-normal bg-secondary px-6 py-3 text-base font-bold text-white hover:bg-[#b8942a] sm:h-14 sm:w-auto sm:whitespace-nowrap sm:px-8 sm:py-0">
              <Link href="/contact">
                Request a confidential introduction <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-auto min-h-14 w-full whitespace-normal border-primary px-6 py-3 text-base font-semibold text-primary hover:bg-primary hover:text-white sm:h-14 sm:w-auto sm:whitespace-nowrap sm:px-8 sm:py-0">
              <Link href="/our-investors">
                Explore the direct partnership model <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why this is different */}
      <section aria-labelledby="difference-heading" className="bg-stone-50 py-16 md:py-20">
        <div className="content-standard grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-start lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Why this is different</p>
            <h2 id="difference-heading" className="mt-3 font-display text-3xl font-bold leading-tight text-primary md:text-5xl">More than a conventional single-asset LP investment.</h2>
          </div>
          <div className="border-l-2 border-secondary pl-6 md:pl-8">
            <p className="text-base leading-relaxed text-stone-600 md:text-lg">
              Asset-specific alone is not the difference. Many traditional real-estate investments are also built around a named property. FoxRidge combines a specific asset with meaningful negotiated rights, FoxRidge execution responsibility, and FoxRidge capital invested alongside its partners.
            </p>
            <p className="mt-6 font-display text-xl font-semibold leading-relaxed text-primary md:text-2xl">
              More than deal-by-deal LP exposure: the capital partner retains meaningful negotiated rights over major decisions, while FoxRidge remains responsible for financing, execution and day-to-day operations.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership model */}
      <section id="partnership-model" className="scroll-mt-24 bg-white py-16 md:py-24">
        <div className="content-wide">
          <div className="content-reading text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">How the partnership works</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-5xl">One clear process. Shared accountability.</h2>
            <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">
              The model is asset-specific: the capital partner evaluates the actual investment before committing, retains meaningful rights over major decisions, and relies on FoxRidge for financing, execution and day-to-day real-estate operations.
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
                  <h3 className="mt-8 font-display text-2xl font-bold text-primary">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">{step.description}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link href="/our-investors" className="inline-flex items-center gap-2 text-sm font-bold text-secondary transition-colors hover:text-primary">
              Explore Capital Partners <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Value creation */}
      <section aria-labelledby="value-creation-heading" className="border-y border-stone-200 bg-stone-50 py-16 md:py-24">
        <div className="content-wide">
          <div className="content-reading text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Where the value comes from</p>
            <h2 id="value-creation-heading" className="mt-3 font-display text-3xl font-bold text-primary md:text-5xl">Buy well. Operate intelligently. Manage actively.</h2>
            <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">
              We want the return to come from things we can underwrite and influence: a defensible acquisition basis, current property income, controllable NOI improvement and active execution.
            </p>
          </div>

          <ol className="mt-11 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {valueDrivers.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.number} className="border border-stone-200 bg-white p-6">
                  <div className="flex items-center justify-between gap-4">
                    <Icon className="h-5 w-5 text-secondary" aria-hidden="true" />
                    <span className="font-mono text-[10px] font-bold tracking-[0.14em] text-stone-400">{item.number}</span>
                  </div>
                  <h3 className="mt-7 font-display text-xl font-bold text-primary">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">{item.description}</p>
                </li>
              );
            })}
          </ol>

          <p className="content-reading mx-auto mt-8 border-l-2 border-secondary pl-5 text-sm leading-relaxed text-stone-600 md:pl-6 md:text-base">
            Falling rates or cap-rate compression can help, but the base case should not require them.
          </p>
        </div>
      </section>

      {/* Financing */}
      <section aria-labelledby="financing-heading" className="bg-white py-16 md:py-24">
        <div className="content-standard grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Debt execution</p>
            <h2 id="financing-heading" className="mt-3 max-w-2xl font-display text-3xl font-bold leading-tight text-primary md:text-5xl">You bring the investment capital. We solve the debt side.</h2>
          </div>
          <div className="border border-stone-200 bg-stone-50 p-6 md:p-8">
            <p className="text-base leading-relaxed text-stone-600 md:text-lg">
              FoxRidge takes responsibility for arranging and executing the property-level financing through closing — lender sourcing and negotiation, lender underwriting and documentation, sponsor-side qualification and guaranty support where applicable.
            </p>
            <p className="mt-5 font-display text-lg font-semibold leading-relaxed text-primary">
              The capital partner invests in the real estate without having to become the financing operator.
            </p>
            <p className="mt-5 border-t border-stone-200 pt-5 text-xs leading-relaxed text-stone-500">
              Financing and guaranty requirements are transaction-specific and subject to lender approval.
            </p>
          </div>
        </div>
      </section>

      {/* Market context and current focus */}
      <section className="bg-primary py-16 text-white md:py-24">
        <div className="content-standard">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Why now</p>
              <h2 className="mt-3 max-w-xl font-display text-3xl font-bold leading-tight md:text-5xl">Good real estate. Stressed capital structures.</h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
                We are not looking for broken buildings. We look for good real estate where the ownership or capital structure creates motivation to transact — refinancing pressure, loan maturities, expensive debt, partnership constraints or other situations where certainty matters.
              </p>
              <p className="mt-6 max-w-xl font-display text-xl font-semibold leading-relaxed text-white md:text-2xl">
                Good real estate with a stressed capital structure — not distressed real estate.
              </p>
              <Link href="/strategy" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-secondary transition-colors hover:text-white">
                Explore Strategy &amp; Markets <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="border border-white/15 bg-white/[0.06] p-6 backdrop-blur-sm md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-secondary">Current focus, deliberately narrow</p>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                FoxRidge targets income-producing multifamily properties in fundamentally strong U.S. growth markets where the basis, current economics and controllable NOI opportunities meet our acquisition standard.
              </p>
              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/55">Current markets</p>
                    <p className="mt-1 text-base font-semibold text-white">Houston · Dallas–Fort Worth · San Antonio · South Florida</p>
                  </div>
                </div>
                <div className="h-px bg-white/10" />
                <div className="flex items-start gap-4">
                  <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/55">Current acquisition preferences</p>
                    <p className="mt-1 text-base font-semibold text-white">Conventional multifamily · generally Class B/A · modern or newer vintage preferred · typically 200+ units · income-producing at acquisition · positive leverage required</p>
                  </div>
                </div>
                <div className="h-px bg-white/10" />
                <div className="flex items-start gap-4">
                  <Users className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/55">Execution</p>
                    <p className="mt-1 text-base font-semibold text-white">FoxRidge asset management and third-party property-management oversight</p>
                  </div>
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
                FoxRidge brings experienced leadership to each acquisition while maintaining an asset-specific investment model.
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

      {/* Research */}
      <section className="border-y border-stone-200 bg-stone-50 py-14 md:py-20">
        <div className="content-standard">
          <div className="grid items-center gap-7 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Research</p>
              <h2 className="mt-3 font-display text-2xl font-bold text-primary md:text-3xl">Texas Triangle market context.</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone-600 md:text-base">
                FoxRidge shares current, approved observations on Texas Triangle multifamily conditions and the diligence considerations that inform its acquisition process.
              </p>
            </div>
            <Link href="/investor-resources" className="shrink-0">
              <Button variant="outline" className="border-primary px-6 font-bold text-primary hover:bg-primary hover:text-white">
                Explore Research <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* International */}
      <section className="bg-[#0E2148] py-12 text-white md:py-14">
        <div className="content-standard">
          <div className="flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
            <div className="flex max-w-3xl items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-secondary/40 bg-secondary/10">
                <Globe2 className="h-5 w-5 text-secondary" aria-hidden="true" />
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-white">International capital, direct partnership.</h2>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  FoxRidge works with family offices, principals, and qualified private investors worldwide.
                </p>
              </div>
            </div>
            <Link href="/international-investors" className="shrink-0">
              <Button className="bg-secondary px-6 font-bold text-white hover:bg-[#b8942a]">
                International Investors <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final conversion */}
      <section className="relative overflow-hidden bg-primary py-16 text-white md:py-24">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,rgba(201,168,70,0.20),transparent_65%)] lg:block" />
        <div className="content-standard relative z-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Evaluate the actual investment</p>
          <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-bold leading-tight md:text-5xl">See a real deal — not a brochure.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            Review what a FoxRidge capital partner sees before deciding: the property, underwriting, debt analysis, business plan and transaction structure.
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
