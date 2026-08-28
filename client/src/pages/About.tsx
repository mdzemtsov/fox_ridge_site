import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Award, Briefcase, GraduationCap, Linkedin, Users } from "lucide-react";

const NAME_CLASS = "font-display text-3xl font-bold leading-tight text-stone-900 md:text-5xl";
const TITLE_CLASS = "mt-3 font-mono text-xs font-bold uppercase tracking-[0.18em] text-secondary";
const BODY_CLASS = "text-base leading-[1.8] text-stone-600 md:text-lg";
const CREDENTIAL_CLASS = "flex items-center gap-3 text-sm text-stone-500";

const experienceMetrics = [
  { value: "$1B+", label: "Combined transaction experience" },
  { value: "7,000+", label: "Units" },
  { value: "36", label: "Properties" },
];

export default function About() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50">
      {/* Hero */}
      <section className="relative flex min-h-[560px] items-center overflow-hidden bg-stone-950">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-stone-950/85 via-stone-950/60 to-stone-950/35" />
          <img src="/images/hero-modern-interior.jpg" alt="FoxRidge Equity Partners leadership" className="h-full w-full object-cover opacity-85" />
        </div>
        <div className="container relative z-20 py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <p className="inline-flex items-center gap-2 border border-white/20 bg-primary/50 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
              <Users className="h-3.5 w-3.5 text-secondary" aria-hidden="true" /> Our Team
            </p>
            <h1 className="mt-7 font-display text-4xl font-bold leading-[0.95] text-white sm:text-5xl md:text-7xl">Principal-led.<br /><span className="text-secondary">Directly accountable.</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-stone-200 md:text-xl">
              Mikhail Pritsker and Slava Davidenko bring disciplined principal experience to FoxRidge’s direct, deal-by-deal multifamily partnership model.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Principal experience methodology */}
      <section className="border-b border-stone-200 bg-white py-10 md:py-14">
        <div className="content-standard">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Combined principal experience</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-primary md:text-4xl">Historical experience. Clear attribution.</h2>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {experienceMetrics.map((metric) => (
                <div key={metric.label} className="border border-stone-200 bg-stone-50 p-4 text-center md:p-5">
                  <p className="font-display text-2xl font-bold text-primary md:text-3xl">{metric.value}</p>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.09em] text-stone-500 md:text-xs">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-6 max-w-[var(--content-reading)] border-l-2 border-secondary pl-4 text-xs leading-relaxed text-stone-500 md:text-sm">
            Combined transaction experience, units, and properties reflect the principals’ prior activities under prior sponsoring entities where applicable. These figures are historical experience metrics, not a representation of FoxRidge’s own track record. Past performance is not indicative of future results.
          </p>
        </div>
      </section>

      {/* Mikhail */}
      <section className="bg-white py-16 md:py-24">
        <div className="content-standard">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="overflow-hidden border border-stone-200 bg-stone-100">
                <img src="/images/mikhail.jpg" alt="Mikhail Pritsker" className="aspect-[3/4] h-full w-full object-cover object-top" />
              </div>
              <div className="mt-6 space-y-3 border-t border-stone-200 pt-6">
                <div className={CREDENTIAL_CLASS}><GraduationCap className="h-4 w-4 text-secondary" aria-hidden="true" /><span>MBA, University of Chicago Booth</span></div>
                <div className={CREDENTIAL_CLASS}><Award className="h-4 w-4 text-secondary" aria-hidden="true" /><span>CCIM Designation</span></div>
                <div className={CREDENTIAL_CLASS}><Briefcase className="h-4 w-4 text-secondary" aria-hidden="true" /><span>25+ years of real estate experience</span></div>
              </div>
            </div>

            <div className="lg:col-span-7 lg:pt-4">
              <h2 className={NAME_CLASS}>Mikhail Pritsker</h2>
              <p className={TITLE_CLASS}>Co-Founder &amp; Managing Partner</p>
              <p className="mt-8 font-display text-2xl leading-relaxed text-stone-800 md:text-3xl">Capital-partner communication, reporting discipline, and portfolio-level execution.</p>
              <div className="mt-7 max-w-[var(--content-reading)] space-y-5">
                <p className={BODY_CLASS}>
                  Mikhail leads FoxRidge’s work with capital partners and helps connect acquisition review, reporting, asset-management priorities, and transaction execution. His approach is centered on giving a partner clear information before a decision and maintaining direct communication after closing.
                </p>
                <p className={BODY_CLASS}>
                  His prior experience includes more than 25 years in real estate investment leadership across multiple market cycles, including transaction, asset-management, and portfolio-oversight responsibilities under prior sponsoring entities.
                </p>
              </div>
              <a href="https://www.linkedin.com/in/mikhailpritsker/" target="_blank" rel="noopener noreferrer" aria-label="Mikhail Pritsker on LinkedIn" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#0A66C2] transition-colors hover:text-primary">
                <Linkedin className="h-4 w-4" aria-hidden="true" /> LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="content-standard"><div className="h-px bg-stone-200" /></div>

      {/* Slava */}
      <section className="bg-white py-16 md:py-24">
        <div className="content-standard">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="order-2 lg:order-1 lg:col-span-7 lg:pt-4">
              <h2 className={NAME_CLASS}>Slava Davidenko</h2>
              <p className={TITLE_CLASS}>Chairman, Advisory Board</p>
              <p className="mt-8 font-display text-2xl leading-relaxed text-stone-800 md:text-3xl">Strategic perspective on sourcing, underwriting, operations, and principal accountability.</p>
              <div className="mt-7 max-w-[var(--content-reading)] space-y-5">
                <p className={BODY_CLASS}>
                  As Chairman of the Advisory Board, Slava contributes strategic and operating perspective to FoxRidge’s deal-by-deal model, including the assessment of acquisition opportunities, business-plan assumptions, and execution priorities.
                </p>
                <p className={BODY_CLASS}>
                  His prior experience spans more than 25 years of entrepreneurship and investment activity, including involvement in multifamily and diversified real estate projects under prior sponsoring entities.
                </p>
              </div>
              <a href="https://www.linkedin.com/in/vdavidenko/" target="_blank" rel="noopener noreferrer" aria-label="Slava Davidenko on LinkedIn" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#0A66C2] transition-colors hover:text-primary">
                <Linkedin className="h-4 w-4" aria-hidden="true" /> LinkedIn Profile
              </a>
            </div>

            <div className="order-1 lg:order-2 lg:col-span-5">
              <div className="overflow-hidden border border-stone-200 bg-stone-100">
                <img src="/images/slava_new.webp" alt="Slava Davidenko" className="aspect-[3/4] h-full w-full object-cover object-top" />
              </div>
              <div className="mt-6 space-y-3 border-t border-stone-200 pt-6">
                <div className={CREDENTIAL_CLASS}><GraduationCap className="h-4 w-4 text-secondary" aria-hidden="true" /><span>MBA, University of Chicago Booth</span></div>
                <div className={CREDENTIAL_CLASS}><GraduationCap className="h-4 w-4 text-secondary" aria-hidden="true" /><span>Engineering Degree, MEPhI</span></div>
                <div className={CREDENTIAL_CLASS}><Briefcase className="h-4 w-4 text-secondary" aria-hidden="true" /><span>25+ years of entrepreneurial and investment experience</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust and international link */}
      <section className="bg-stone-50 py-12 md:py-16">
        <div className="content-standard">
          <div className="grid gap-6 border border-stone-200 bg-white p-6 md:grid-cols-[1.15fr_.85fr] md:p-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Historical proof</p>
              <h2 className="mt-2 font-display text-2xl font-bold text-primary">Selected prior principal experience.</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone-600">
                Review FoxRidge’s high-level public proof block, which distinguishes the current platform from prior activities of the principals.
              </p>
              <Link href="/track-record" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-secondary transition-colors hover:text-primary">
                View Track Record <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="border-t border-stone-200 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">International capital</p>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                FoxRidge works with family offices, principals, and qualified private investors worldwide, subject to applicable requirements, internal compliance, and deal-specific documentation.
              </p>
              <Link href="/international-investors" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-secondary transition-colors hover:text-primary">
                International Investors <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-white md:py-20">
        <div className="content-standard flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Begin a direct conversation</p>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Request a confidential introduction.</h2>
          </div>
          <Button asChild size="lg" className="bg-secondary px-7 py-6 text-white hover:bg-secondary/90">
            <Link href="/contact">Request a confidential introduction <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
