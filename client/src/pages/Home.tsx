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
  { title: "You review and approve the asset.", icon: CheckCircle2 },
  { title: "FoxRidge invests alongside you.", icon: Handshake },
  { title: "FoxRidge leads execution through exit.", icon: Building2 },
  { title: "Current focus: Texas Triangle, Class B+/A multifamily, 2000+ vintage.", icon: MapPin },
];

// Draft copy — requires content and compliance review before any future publication.
const MODEL_SUPPORTING_COPY = "One investor. One asset-specific decision. One accountable operating partner.";

const partnershipSteps = [
  {
    number: "01",
    title: "Review",
    description: "FoxRidge presents a focused acquisition opportunity with underwriting, diligence, and a clear business plan.",
    icon: Landmark,
  },
  {
    number: "02",
    title: "Decide",
    description: "You review the opportunity and approve each acquisition before the partnership proceeds.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Execute",
    description: "FoxRidge invests alongside you, leads asset management, and oversees third-party property management through exit.",
    icon: Handshake,
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
              DIRECT U.S. MULTIFAMILY PARTNERSHIPS
            </div>

            <h1 className="max-w-4xl font-display text-4xl font-bold leading-[0.98] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              The asset is named.<br />
              The numbers are <span className="text-secondary">known.</span><br />
              Then capital moves.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/90 sm:text-xl md:text-2xl">
              Direct U.S. multifamily partnerships for family offices and private capital. You approve each acquisition; FoxRidge invests alongside you and operates through exit.
            </p>

            <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="h-auto min-h-14 w-full whitespace-normal bg-secondary px-6 py-3 text-base font-bold text-white hover:bg-[#b8942a] sm:h-14 sm:w-auto sm:whitespace-nowrap sm:px-8 sm:py-0">
                <Link href="/contact">
                  Request a confidential introduction <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-auto min-h-14 w-full whitespace-normal border-white/40 bg-white/[0.04] px-6 py-3 text-base font-semibold text-white hover:border-white hover:bg-white/10 hover:text-white sm:h-14 sm:w-auto sm:whitespace-nowrap sm:px-8 sm:py-0">
                <a href="#partnership-model">
                  See how the partnership works <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
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
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">A direct partnership, clearly structured</p>
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
                  className="relative min-h-44 border border-stone-200 bg-stone-50 p-6 shadow-[0_10px_28px_rgba(14,33,72,0.045)]"
                >
                  {index < modelAtGlance.length - 1 && (
                    <span aria-hidden="true" className="absolute right-[-17px] top-1/2 z-10 hidden h-px w-[18px] bg-secondary/45 lg:block" />
                  )}
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-secondary/35 bg-secondary/10 text-secondary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-[10px] font-bold tracking-[0.14em] text-stone-400">0{index + 1}</span>
                  </div>
                  <p className="mt-8 max-w-[24ch] font-display text-xl font-bold leading-snug text-primary">{item.title}</p>
                </motion.li>
              );
            })}
          </ol>

          <p className="mx-auto mt-8 max-w-3xl text-center font-display text-xl font-semibold leading-relaxed text-primary md:text-2xl">
            {MODEL_SUPPORTING_COPY}
          </p>

          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="h-14 bg-secondary px-6 text-base font-bold text-white hover:bg-[#b8942a] sm:px-8">
              <Link href="/contact">
                Request a confidential introduction <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 border-primary px-6 text-base font-semibold text-primary hover:bg-primary hover:text-white sm:px-8">
              <Link href="/our-investors">
                Explore the direct partnership model <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Partnership model */}
      <section id="partnership-model" className="scroll-mt-24 bg-stone-50 py-16 md:py-24">
        <div className="content-wide">
          <div className="content-reading text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">How the partnership works</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-5xl">One clear process. Shared accountability.</h2>
            <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">
              The model is intentionally direct: one capital partner for one asset, with a defined decision process and FoxRidge accountable for day-to-day execution after closing.
            </p>
          </div>

          <div className="mt-11 grid gap-4 md:grid-cols-3 md:gap-6">
            {partnershipSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="border border-stone-200 bg-white p-6 md:p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold tracking-[0.12em] text-secondary">{step.number}</span>
                    <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-bold text-primary">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">{step.description}</p>
                </div>
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

      {/* Current focus */}
      <section className="bg-primary py-16 text-white md:py-24">
        <div className="content-standard">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Strategy &amp; markets</p>
              <h2 className="mt-3 max-w-xl font-display text-3xl font-bold leading-tight md:text-5xl">Current focus, deliberately narrow.</h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
                FoxRidge focuses on institutional-quality multifamily opportunities where the market, asset, and execution plan meet a disciplined acquisition standard.
              </p>
              <Link href="/strategy" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-secondary transition-colors hover:text-white">
                Explore Strategy &amp; Markets <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="border border-white/15 bg-white/[0.06] p-6 backdrop-blur-sm md:p-8">
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/55">Markets</p>
                    <p className="mt-1 text-base font-semibold text-white">Houston · Dallas–Fort Worth · San Antonio</p>
                  </div>
                </div>
                <div className="h-px bg-white/10" />
                <div className="flex items-start gap-4">
                  <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/55">Asset criteria</p>
                    <p className="mt-1 text-base font-semibold text-white">Class B+/A multifamily · 2000+ vintage</p>
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
                FoxRidge brings experienced leadership to each acquisition while maintaining a direct, asset-specific partnership model.
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
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Begin a direct conversation</p>
          <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-bold leading-tight md:text-5xl">Request a confidential introduction.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            Discuss whether a direct multifamily partnership may be a fit for your objectives and circumstances.
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
