import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowUpRight, Building2, CalendarDays, MapPin, ShieldCheck } from "lucide-react";

const completedDeals = [
  { property: "El Ranchito / Milagro", location: "Fort Worth, TX", units: 68, acquired: "Sep 2017", disposed: "Sep 2018" },
  { property: "Westcreek Townhomes", location: "Fort Worth, TX", units: 50, acquired: "Apr 2019", disposed: "Dec 2021" },
  { property: "Antigua Village", location: "Fort Worth, TX", units: 152, acquired: "Sep 2019", disposed: "May 2022" },
  { property: "Copper Creek Apartments", location: "Fort Worth, TX", units: 274, acquired: "Mar 2020", disposed: "Jun 2022" },
  { property: "Crescent Village & Plaza", location: "Wichita Falls, TX", units: 88, acquired: "Feb 2018", disposed: "Oct 2021" },
  { property: "Village on West Irving", location: "Irving, TX", units: 91, acquired: "Oct 2018", disposed: "Jan 2022" },
];

const inProgressDeals = [
  {
    property: "Royal Spring",
    location: "Spring, TX",
    units: 351,
    built: 2021,
    assetClass: "Class A",
    description: "Institutional-quality garden-style community in the Houston MSA with modern three-story buildings and resort-style amenities.",
  },
  {
    property: "Royal Sienna",
    location: "Missouri City, TX",
    units: 330,
    built: 2021,
    assetClass: "Class A",
    description: "Newer community in the Sienna master-planned corridor southwest of Houston.",
  },
  {
    property: "The Sarah at Lake Houston",
    location: "Humble, TX",
    units: 350,
    built: 2020,
    assetClass: "Class A+",
    description: "Garden-style community with lake views in the Houston MSA.",
  },
  {
    property: "The Gallery at Katy",
    location: "Katy, TX",
    units: 316,
    built: 1983,
    assetClass: "Class B",
    description: "Garden-style community in the Katy / Houston submarket, with a targeted cosmetic and operational improvement plan.",
  },
];

function SectionMarker({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-secondary">
      <span className="font-mono text-primary">{number}</span>
      <span className="h-px w-8 bg-secondary/60" />
      {label}
    </div>
  );
}

export default function TrackRecord() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50">
      <section className="relative isolate flex min-h-[560px] items-center overflow-hidden bg-stone-950 md:min-h-[620px]">
        <div className="absolute inset-0 -z-20">
          <img src="/images/hero-trackrecord-garden.png" alt="Multifamily community" className="h-full w-full object-cover opacity-85" />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#040C1D]/92 via-[#040C1D]/72 to-[#040C1D]/35" />
        <div className="container py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            <p className="inline-flex items-center gap-2 border border-white/20 bg-primary/50 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
              <ShieldCheck className="h-3.5 w-3.5 text-secondary" aria-hidden="true" /> Principal experience
            </p>
            <h1 className="mt-7 font-display text-5xl font-bold leading-[0.95] text-white md:text-7xl">Historical proof.<br /><span className="text-secondary">Clearly attributed.</span></h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-stone-200 md:text-xl">
              Selected high-level historical experience of the principals before FoxRidge Equity Partners. FoxRidge is a newer platform; the experience below is not presented as its own operating history.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white py-8 md:py-10">
        <div className="container">
          <p className="border-l-2 border-secondary pl-4 text-xs leading-relaxed text-stone-500 md:text-sm">
            The historical context below is organized from completed full-cycle investments, to deals in progress, to limited-partner participation. It reflects prior activities of the principals under prior sponsoring entities where applicable, is not a fund-level composite, and is not a representation of FoxRidge’s own track record. Past performance is not indicative of future results.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <SectionMarker number="01" label="Full-cycle completed" />
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-primary md:text-5xl">Six completed investments, shown sequentially.</h2>
            <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">
              A selected view of six completed full-cycle investments across 723 units. Project identity, location, unit count, and acquisition and disposition dates are shown for historical context only.
            </p>
          </div>

          <div className="mt-10 divide-y divide-stone-200 border-y border-stone-200">
            {completedDeals.map((deal, index) => (
              <motion.article
                key={deal.property}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="grid gap-5 py-7 md:grid-cols-[5rem_minmax(0,1.25fr)_minmax(18rem,.9fr)] md:items-center md:gap-8 md:py-8"
              >
                <p className="font-mono text-sm font-bold tracking-[0.14em] text-secondary">{String(index + 1).padStart(2, "0")}</p>
                <div>
                  <h3 className="font-display text-2xl font-bold leading-tight text-primary md:text-3xl">{deal.property}</h3>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-stone-600">
                    <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-secondary" aria-hidden="true" />{deal.location}</span>
                    <span className="inline-flex items-center gap-2"><Building2 className="h-4 w-4 text-secondary" aria-hidden="true" />{deal.units} units</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 border-l-0 border-stone-200 pt-1 text-sm md:border-l md:pl-7">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-stone-400">Acquired</p>
                    <p className="mt-1 font-semibold text-primary">{deal.acquired}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-stone-400">Disposed</p>
                    <p className="mt-1 inline-flex items-center gap-2 font-semibold text-primary"><CalendarDays className="h-3.5 w-3.5 text-secondary" aria-hidden="true" />{deal.disposed}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-stone-50 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <SectionMarker number="02" label="Deals in progress" />
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-primary md:text-5xl">Four selected communities in progress.</h2>
            <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">
              Four Class A and B garden-style communities in the Houston MSA, presented as a vertical list rather than a portfolio grid. Detailed current performance is not published on this public page.
            </p>
          </div>

          <div className="mt-10 divide-y divide-stone-200 border-y border-stone-200 bg-white px-6 md:px-8">
            {inProgressDeals.map((deal, index) => (
              <motion.article
                key={deal.property}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="grid gap-5 py-7 md:grid-cols-[5rem_minmax(0,1.1fr)_minmax(18rem,.9fr)] md:items-center md:gap-8 md:py-8"
              >
                <p className="font-mono text-sm font-bold tracking-[0.14em] text-secondary">{String(index + 1).padStart(2, "0")}</p>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-2xl font-bold leading-tight text-primary md:text-3xl">{deal.property}</h3>
                    <span className="border border-secondary/40 bg-secondary/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-secondary">In progress</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-stone-600">
                    <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-secondary" aria-hidden="true" />{deal.location}</span>
                    <span className="inline-flex items-center gap-2"><Building2 className="h-4 w-4 text-secondary" aria-hidden="true" />{deal.units} units</span>
                    <span>{deal.assetClass} · Built {deal.built}</span>
                  </div>
                </div>
                <p className="border-l-0 border-stone-200 text-sm leading-relaxed text-stone-600 md:border-l md:pl-7">{deal.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-white md:py-24">
        <div className="container">
          <div className="grid gap-8 border border-white/15 bg-white/[0.04] p-7 md:grid-cols-[.8fr_1.2fr] md:p-10">
            <div>
              <SectionMarker number="03" label="LP participation" />
              <p className="mt-7 font-display text-6xl font-bold leading-none text-secondary md:text-8xl">25+</p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-white/60">Separate properties</p>
            </div>
            <div className="md:border-l md:border-white/15 md:pl-10">
              <h2 className="font-display text-3xl font-bold leading-tight text-white md:text-5xl">Participation as limited partners across more than 25 properties.</h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
                In addition to the named investments above, the principals have participated as limited partners in more than 25 separate properties. This participation is distinct from FoxRidge’s current direct-investment program and is shown solely as historical context.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-950 py-16 text-white md:py-20">
        <div className="container grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Further conversation</p>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Request a confidential introduction.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">After a confidential introduction, FoxRidge may determine whether further historical information is appropriate to share based on internal review, applicable requirements, and the specific discussion. This public page does not provide automated or self-certified access to detailed performance material.</p>
          </div>
          <Button asChild size="lg" className="bg-secondary px-7 py-6 text-white hover:bg-secondary/90">
            <Link href="/contact">Request a confidential introduction <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
