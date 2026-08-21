import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Building2, CalendarDays, MapPin, ShieldCheck } from "lucide-react";

const selectedProjects = [
  { property: "El Ranchito / Milagro", location: "Fort Worth, TX", units: 68, acquired: "Sep 2017", disposed: "Sep 2018" },
  { property: "Westcreek Townhomes", location: "Fort Worth, TX", units: 50, acquired: "Apr 2019", disposed: "Dec 2021" },
  { property: "Antigua Village", location: "Fort Worth, TX", units: 152, acquired: "Sep 2019", disposed: "May 2022" },
  { property: "Copper Creek Apartments", location: "Fort Worth, TX", units: 274, acquired: "Mar 2020", disposed: "Jun 2022" },
  { property: "Crescent Village & Plaza", location: "Wichita Falls, TX", units: 88, acquired: "Feb 2018", disposed: "Oct 2021" },
  { property: "Village on West Irving", location: "Irving, TX", units: 91, acquired: "Oct 2018", disposed: "Jan 2022" },
];

const proofMetrics = [
  { value: "6", label: "Selected realized projects" },
  { value: "723", label: "Units across selected projects" },
  { value: "$56.1M", label: "Aggregate acquisition price" },
  { value: "$81.1M", label: "Aggregate exit value" },
];

export default function TrackRecord() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50">
      {/* Hero */}
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
              Selected high-level historical experience of the principals before FoxRidge Equity Partners. FoxRidge is a newer platform; the proof below is not presented as its own operating history.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Methodology */}
      <section className="border-b border-stone-200 bg-white py-8 md:py-10">
        <div className="container">
          <p className="border-l-2 border-secondary pl-4 text-xs leading-relaxed text-stone-500 md:text-sm">
            The selected projects below reflect prior activities of the principals under prior sponsoring entities where applicable. The public proof block is a selected historical subset, not a fund-level composite or a representation of FoxRidge’s own track record. Past performance is not indicative of future results.
          </p>
        </div>
      </section>

      {/* Public proof block */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Selected historical proof</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-primary md:text-5xl">A public view of selected realized projects.</h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-stone-600 md:text-lg">
                Six selected realized projects are shown at a high level to provide context for the principals’ prior operating experience. Current FoxRidge opportunities are evaluated separately and are not inferred from these historical activities.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {proofMetrics.map((metric) => (
                <div key={metric.label} className="border border-stone-200 bg-stone-50 p-5 text-center md:p-6">
                  <p className="font-display text-3xl font-bold text-primary md:text-4xl">{metric.value}</p>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.09em] text-stone-500">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Responsive project cards */}
      <section className="bg-stone-50 py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col justify-between gap-5 border-b border-stone-200 pb-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Selected projects</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-4xl">Project context, without performance promotion.</h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-stone-500 md:text-right">The cards retain the verified project identity, location, units, and historical acquisition and disposition dates. Detailed historical performance is not published through the public website.</p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {selectedProjects.map((project, index) => (
              <motion.article
                key={project.property}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="border border-stone-200 bg-white p-6"
              >
                <p className="font-mono text-xs font-bold tracking-[0.14em] text-secondary">PROJECT {String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-stone-900">{project.property}</h3>
                <div className="mt-6 space-y-3 text-sm text-stone-600">
                  <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-secondary" aria-hidden="true" />{project.location}</p>
                  <p className="flex items-center gap-2"><Building2 className="h-4 w-4 text-secondary" aria-hidden="true" />{project.units} units</p>
                  <p className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-secondary" aria-hidden="true" />Acquired {project.acquired} · Disposed {project.disposed}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Platform distinction */}
      <section className="bg-white py-16 md:py-20">
        <div className="container">
          <div className="grid gap-8 border border-stone-200 bg-stone-50 p-7 md:grid-cols-[.9fr_1.1fr] md:p-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">FoxRidge today</p>
              <h2 className="mt-2 font-display text-3xl font-bold leading-tight text-primary">A current platform with a defined acquisition program.</h2>
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-stone-600 md:text-base">
              <p>FoxRidge’s current focus is the Texas Triangle: Houston, Dallas–Fort Worth, and San Antonio; Class B+/A multifamily assets; and properties built in 2000 or later.</p>
              <p>Every current opportunity is separately evaluated, approved by the investor, and documented in definitive agreements. Historical principal experience provides context; it is not a representation, forecast, or promise regarding any future FoxRidge acquisition.</p>
              <Link href="/strategy" className="inline-flex items-center gap-2 font-bold text-secondary transition-colors hover:text-primary">Explore Strategy &amp; Markets <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Information path */}
      <section className="bg-primary py-16 text-white md:py-20">
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
