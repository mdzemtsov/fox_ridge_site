import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Building2,
  ClipboardCheck,
  FileText,
  Hammer,
  Landmark,
  MapPin,
  Search,
  TrendingUp,
} from "lucide-react";

const whatWeLookFor = [
  {
    number: "01",
    title: "Sound real estate",
    description: "Income-producing multifamily in markets supported by durable housing demand and economic activity.",
    icon: Building2,
  },
  {
    number: "02",
    title: "Defensible basis",
    description: "We want the acquisition price and capitalization to provide a credible starting point before relying on future market appreciation.",
    icon: BarChart3,
  },
  {
    number: "03",
    title: "Current income",
    description: "The property should generate meaningful income at acquisition rather than depend primarily on speculative future repositioning.",
    icon: Landmark,
  },
  {
    number: "04",
    title: "Controllable NOI",
    description: "We look for revenue and expense opportunities that can be identified, underwritten and executed at the property level.",
    icon: ClipboardCheck,
  },
];

const opportunityDrivers = [
  {
    number: "01",
    title: "Refinancing pressure",
    description: "Existing debt may no longer refinance efficiently at today’s rates or underwriting standards.",
    icon: Landmark,
  },
  {
    number: "02",
    title: "Loan maturities",
    description: "Upcoming maturities can create a decision point for otherwise sound properties.",
    icon: TrendingUp,
  },
  {
    number: "03",
    title: "Expensive capital",
    description: "Floating-rate debt, replacement financing or additional equity requirements can change an owner’s economics.",
    icon: BarChart3,
  },
  {
    number: "04",
    title: "Ownership constraints",
    description: "Partnership issues, fund timelines, portfolio decisions or other ownership circumstances can create motivation to sell.",
    icon: FileText,
  },
];

const accessSelectionStages = [
  "Financing capability",
  "Certainty of close",
  "Broker & seller confidence",
  "Broader actionable deal flow",
  "Better selection",
];

const valueCreation = [
  {
    number: "01",
    title: "Buy well",
    description: "Acquire at a defensible basis.",
    icon: Search,
  },
  {
    number: "02",
    title: "Current income",
    description: "Start with an income-producing property and underwrite what exists today.",
    icon: Landmark,
  },
  {
    number: "03",
    title: "Improve controllable NOI",
    description: "Capture revenue and expense opportunities that can be executed at the property level.",
    icon: ClipboardCheck,
  },
  {
    number: "04",
    title: "Manage actively",
    description: "FoxRidge manages above the property-manager level throughout the hold.",
    icon: Hammer,
  },
];

const underwritingLenses = [
  {
    title: "Property operations",
    description: "In-place rents, occupancy, collections, expenses, unit economics and operating performance.",
    icon: Building2,
  },
  {
    title: "Market context",
    description: "Supply, demand, rents, employment, population trends and competitive positioning.",
    icon: MapPin,
  },
  {
    title: "Financing",
    description: "Debt availability, leverage, debt service, lender requirements and refinancing risk.",
    icon: Landmark,
  },
  {
    title: "Business plan",
    description: "Specific revenue, expense, capital and operating initiatives that FoxRidge believes can reasonably be executed.",
    icon: FileText,
  },
];

const currentFocus = [
  { label: "Markets", value: "Houston · Dallas–Fort Worth · San Antonio · South Florida" },
  { label: "Asset type", value: "Conventional multifamily · generally Class B/A" },
  { label: "Vintage", value: "Modern or newer vintage preferred" },
  { label: "Scale", value: "Typically 200+ units" },
  { label: "Operating profile", value: "Income-producing at acquisition" },
  { label: "Financing", value: "Positive leverage required" },
];

const executionSteps = [
  {
    number: "01",
    title: "Source",
    description: "Identify multifamily opportunities that fit the current mandate or present compelling asset-specific economics.",
    icon: Search,
  },
  {
    number: "02",
    title: "Underwrite",
    description: "Independently evaluate property operations, market context, financing and the acquisition case.",
    icon: BarChart3,
  },
  {
    number: "03",
    title: "Finance & diligence",
    description: "Arrange and execute the property-level financing process while leading physical, financial, legal and operational diligence.",
    icon: ClipboardCheck,
  },
  {
    number: "04",
    title: "Structure & close",
    description: "Finalize transaction-specific economics, governance and documentation and lead the acquisition through closing.",
    icon: FileText,
  },
  {
    number: "05",
    title: "Operate",
    description: "Lead asset management, business-plan execution, capital-plan oversight and oversight of third-party property management.",
    icon: Hammer,
  },
  {
    number: "06",
    title: "Hold / refinance / exit",
    description: "Evaluate hold, refinancing and disposition alternatives against the asset’s performance, market conditions and transaction documentation.",
    icon: TrendingUp,
  },
];

export default function Strategy() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex min-h-screen flex-col bg-stone-50">
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
              FoxRidge evaluates income-producing multifamily in fundamentally strong U.S. growth markets. We look for a defensible acquisition basis, current property income, controllable NOI opportunities and financing that supports the business plan. Each opportunity is independently underwritten and evaluated on its own facts.
            </p>
            <p className="mt-6 font-display text-xl font-bold tracking-tight text-secondary sm:text-2xl">
              Buy the asset. Not the story.
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
              The market creates the opportunity. The property still has to earn the investment.
            </p>
            <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="h-auto min-h-14 w-full whitespace-normal bg-secondary px-7 py-3 text-base font-bold text-white hover:bg-[#b8942a] sm:h-14 sm:w-auto sm:whitespace-nowrap sm:px-8 sm:py-0">
                <Link href="/contact">
                  Request a confidential introduction <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-auto min-h-14 w-full whitespace-normal border-white/40 bg-white/[0.04] px-6 py-3 text-base font-semibold text-white hover:border-white hover:bg-white/10 hover:text-white sm:h-14 sm:w-auto sm:whitespace-nowrap sm:px-8 sm:py-0">
                <Link href="/investor-resources">
                  Explore current market research <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="what-we-look-for-heading" className="bg-white py-16 md:py-24">
        <div className="content-wide">
          <div className="content-reading text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">What we look for</p>
            <h2 id="what-we-look-for-heading" className="mt-3 font-display text-3xl font-bold text-primary md:text-5xl">Good real estate. Defensible basis. Controllable upside.</h2>
            <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">
              We prefer investments where the return can be explained by the property itself — what we pay, what it earns today, what we can improve, and how we execute the business plan.
            </p>
          </div>
          <ol aria-label="What FoxRidge looks for" className="mt-11 grid gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-5">
            {whatWeLookFor.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.li
                  key={item.title}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.26, delay: index * 0.06 }}
                  className="border border-stone-200 bg-stone-50 p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <Icon className="h-7 w-7 text-secondary" aria-hidden="true" />
                    <span className="font-mono text-[10px] font-bold tracking-[0.14em] text-stone-400">{item.number}</span>
                  </div>
                  <h3 className="mt-7 font-display text-xl font-bold text-primary">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">{item.description}</p>
                </motion.li>
              );
            })}
          </ol>
          <p className="mx-auto mt-8 max-w-3xl border-l-2 border-secondary bg-stone-50 px-5 py-4 text-center text-sm font-semibold leading-relaxed text-primary md:text-base">
            We would rather buy a good building from a motivated owner than buy a broken building simply because it looks distressed.
          </p>
        </div>
      </section>

      <section aria-labelledby="why-now-heading" className="border-y border-stone-200 bg-stone-50 py-16 md:py-20">
        <div className="content-wide">
          <div className="content-reading text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Why now</p>
            <h2 id="why-now-heading" className="mt-3 font-display text-3xl font-bold text-primary md:text-5xl">Good real estate with a stressed capital structure — not distressed real estate.</h2>
            <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">
              FoxRidge is not looking for broken buildings simply because they appear distressed. We look for good real estate where the ownership or capital structure creates motivation to transact.
            </p>
          </div>
          <ol aria-label="Potential opportunity drivers" className="mt-11 grid gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-5">
            {opportunityDrivers.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.li
                  key={item.title}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.26, delay: index * 0.06 }}
                  className="border border-stone-200 bg-white p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <Icon className="h-7 w-7 text-secondary" aria-hidden="true" />
                    <span className="font-mono text-[10px] font-bold tracking-[0.14em] text-stone-400">{item.number}</span>
                  </div>
                  <h3 className="mt-7 font-display text-xl font-bold text-primary">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">{item.description}</p>
                </motion.li>
              );
            })}
          </ol>
          <p className="mx-auto mt-8 max-w-3xl bg-primary px-5 py-5 text-center font-display text-xl font-bold leading-tight text-white md:text-2xl">
            Motivated seller does not have to mean distressed property.
          </p>
        </div>
      </section>

      <section aria-labelledby="access-selection-heading" className="bg-white py-16 md:py-20">
        <div className="content-wide">
          <div className="content-reading text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Access &amp; selection</p>
            <h2 id="access-selection-heading" className="mt-3 font-display text-3xl font-bold text-primary md:text-5xl">Execution certainty creates access. Discipline creates selection.</h2>
            <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">
              In multifamily, access depends partly on whether brokers and sellers believe a buyer can actually close. FoxRidge combines durable broker relationships with financing capability and execution certainty, giving us recurring access to actionable opportunities — including marketed transactions, early looks, broken deals, second looks and limited-buyer situations.
            </p>
          </div>
          <ol aria-label="Access and selection progression" className="mx-auto mt-11 grid max-w-6xl gap-4 lg:grid-cols-5 lg:gap-0">
            {accessSelectionStages.map((stage, index) => (
              <motion.li
                key={stage}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.26, delay: index * 0.06 }}
                className="relative flex min-h-32 items-center border border-stone-200 bg-stone-50 p-5 text-center sm:min-h-36 lg:min-h-44 lg:rounded-none lg:first:rounded-l-sm lg:last:rounded-r-sm"
              >
                {index < accessSelectionStages.length - 1 && <ArrowRight aria-hidden="true" className="absolute -bottom-3 left-1/2 z-10 h-6 w-6 -translate-x-1/2 rotate-90 bg-white p-1 text-secondary lg:bottom-auto lg:left-auto lg:right-[-13px] lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 lg:rotate-0" />}
                <span className="w-full text-xs font-bold uppercase tracking-[0.12em] text-primary">{stage}</span>
              </motion.li>
            ))}
          </ol>
          <p className="mx-auto mt-8 max-w-3xl border-l-2 border-secondary bg-stone-50 px-5 py-4 text-center text-sm font-semibold leading-relaxed text-primary md:text-base">
            Access does not make a deal attractive. It gives us more opportunities from which to be selective.
          </p>
        </div>
      </section>

      <section aria-labelledby="value-creation-heading" className="bg-white py-16 md:py-20">
        <div className="content-wide">
          <div className="content-reading text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Where the value comes from</p>
            <h2 id="value-creation-heading" className="mt-3 font-display text-3xl font-bold text-primary md:text-5xl">Buy well. Operate intelligently. Manage actively.</h2>
            <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">
              We want the return to come from things we can underwrite and influence: a defensible acquisition basis, current property income, controllable NOI improvement and active execution.
            </p>
          </div>
          <ol aria-label="Value creation framework" className="mt-11 grid gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-5">
            {valueCreation.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.li
                  key={item.title}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.26, delay: index * 0.06 }}
                  className="border border-stone-200 bg-stone-50 p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <Icon className="h-7 w-7 text-secondary" aria-hidden="true" />
                    <span className="font-mono text-[10px] font-bold tracking-[0.14em] text-stone-400">{item.number}</span>
                  </div>
                  <h3 className="mt-7 font-display text-xl font-bold text-primary">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">{item.description}</p>
                </motion.li>
              );
            })}
          </ol>
          <p className="mx-auto mt-8 max-w-4xl border-l-2 border-secondary bg-stone-50 px-5 py-4 text-center text-sm font-semibold leading-relaxed text-primary md:text-base">
            Falling rates or cap-rate compression can help, but the base case should not require them.
          </p>
        </div>
      </section>

      <section aria-labelledby="underwriting-heading" className="border-y border-primary/10 bg-primary py-16 text-white md:py-24">
        <div className="content-wide">
          <div className="content-reading text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Underwriting discipline</p>
            <h2 id="underwriting-heading" className="mt-3 font-display text-3xl font-bold md:text-5xl">We buy the asset, not the broker’s story.</h2>
            <p className="mt-5 text-base leading-relaxed text-white/75 md:text-lg">
              Every opportunity is independently evaluated from the property operations, market context, financing and acquisition case. Broker assumptions may inform the review, but they do not become the FoxRidge case simply because they appear in marketing materials.
            </p>
          </div>
          <ol aria-label="Independent underwriting comparison" className="mx-auto mt-11 grid max-w-5xl gap-4 md:grid-cols-3 md:gap-0">
            {[
              { label: "As is", description: "What is the property actually producing today?" },
              { label: "Broker case", description: "What assumptions are being presented by the seller or broker?" },
              { label: "FoxRidge case", description: "What can FoxRidge independently support through its own underwriting and execution plan?" },
            ].map((item, index, items) => (
              <li key={item.label} className="relative border border-white/15 bg-white/[0.06] p-6 md:min-h-48 md:rounded-none md:first:rounded-l-sm md:last:rounded-r-sm md:p-7">
                {index < items.length - 1 && <span aria-hidden="true" className="absolute bottom-[-17px] left-1/2 z-10 h-[18px] w-px bg-secondary/70 md:bottom-auto md:left-auto md:right-[-17px] md:top-1/2 md:h-px md:w-[18px]" />}
                <span className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-secondary">{item.label}</span>
                <p className="mt-7 font-display text-xl font-bold leading-snug text-white">{item.description}</p>
              </li>
            ))}
          </ol>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm font-semibold leading-relaxed text-white md:text-base">
            The investment decision is based on the FoxRidge case — not on the most optimistic available scenario.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {underwritingLenses.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="border border-white/15 bg-white/[0.06] p-6 backdrop-blur-sm">
                  <Icon className="h-7 w-7 text-secondary" aria-hidden="true" />
                  <h3 className="mt-7 font-display text-xl font-bold leading-snug text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section aria-labelledby="market-context-heading" className="bg-white py-16 md:py-20">
        <div className="content-standard">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Market context</p>
              <h2 id="market-context-heading" className="mt-3 font-display text-3xl font-bold leading-tight text-primary md:text-4xl">Research informs the decision. It does not replace it.</h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-stone-600 md:text-lg">
                FoxRidge evaluates supply, demand, financing conditions, economic activity and property-level operating context as part of each acquisition review. Market observations are assessed alongside the specific asset and are not a substitute for property-level underwriting.
              </p>
              <Link href="/investor-resources" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-secondary transition-colors hover:text-primary">
                Explore current market research <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="border-l-2 border-secondary bg-stone-50 p-6 shadow-sm md:p-8">
              <p className="font-display text-xl font-bold leading-snug text-primary md:text-2xl">
                A strong market does not make every property a good investment. A difficult market does not make every property a bad one.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="current-focus-heading" className="border-y border-stone-200 bg-stone-50 py-16 md:py-20">
        <div className="content-wide">
          <div className="content-reading text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Current focus</p>
            <h2 id="current-focus-heading" className="mt-3 font-display text-3xl font-bold text-primary md:text-5xl">Focused today. Flexible when the facts justify it.</h2>
            <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">
              FoxRidge maintains a deliberately focused acquisition mandate while evaluating every opportunity on its individual economics.
            </p>
          </div>
          <dl className="mx-auto mt-11 grid max-w-5xl gap-px overflow-hidden border border-stone-200 bg-stone-200 sm:grid-cols-2 lg:grid-cols-3">
            {currentFocus.map((item) => (
              <div key={item.label} className="bg-white p-6 md:p-7">
                <dt className="text-xs font-bold uppercase tracking-[0.14em] text-secondary">{item.label}</dt>
                <dd className="mt-3 text-base leading-relaxed text-primary">{item.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mx-auto mt-5 max-w-4xl text-center text-xs leading-relaxed text-stone-500">
            These are current acquisition preferences, not permanent universal requirements. Individual opportunities are evaluated on their own facts, economics, financing and risk profile.
          </p>
        </div>
      </section>

      <section id="how-we-invest" aria-labelledby="execution-heading" className="scroll-mt-24 bg-primary py-16 text-white md:py-24">
        <div className="content-wide">
          <div className="content-reading text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">From opportunity to exit</p>
            <h2 id="execution-heading" className="mt-3 font-display text-3xl font-bold md:text-5xl">One lifecycle. One accountable team.</h2>
            <p className="mt-5 text-base leading-relaxed text-white/75 md:text-lg">
              FoxRidge remains responsible for the investment process from sourcing and independent underwriting through financing, diligence, closing, asset management and exit.
            </p>
          </div>
          <ol aria-label="FoxRidge execution process" className="mt-11 grid gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-5">
            {executionSteps.map((step) => {
              const Icon = step.icon;
              return (
                <li key={step.number} className="border border-white/15 bg-white/[0.06] p-6 backdrop-blur-sm md:p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold tracking-[0.12em] text-secondary">{step.number}</span>
                    <Icon className="h-6 w-6 text-secondary" aria-hidden="true" />
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-bold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{step.description}</p>
                </li>
              );
            })}
          </ol>
          <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-white/60">
            No outcome or timing is guaranteed. Decisions are made based on the circumstances of the specific investment.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 md:py-14">
        <div className="content-standard">
          <div className="flex flex-col items-start justify-between gap-6 border-l-2 border-secondary bg-stone-50 p-6 md:flex-row md:items-center md:p-8">
            <div>
              <h2 className="font-display text-xl font-bold text-primary">Investing from outside the United States?</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-stone-600">
                FoxRidge works with qualified international capital partners seeking asset-specific U.S. multifamily exposure. Prospective investors should obtain independent legal, tax and financial advice relevant to their circumstances.
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

      <section className="relative overflow-hidden bg-stone-950 py-16 text-white md:py-24">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,rgba(201,168,70,0.20),transparent_65%)] lg:block" />
        <div className="content-standard relative z-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Evaluate the actual investment</p>
          <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-bold leading-tight md:text-5xl">See the framework applied to a real deal.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            Review a representative property, underwriting, financing, business plan and transaction structure to see how the FoxRidge framework is applied in practice.
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
