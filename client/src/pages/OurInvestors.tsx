import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Shield, Zap, Lock, Users, Building2, TrendingUp, Target } from "lucide-react";

const pillars = [
  {
    number: "01",
    icon: Users,
    title: "Acquisition Approval Without Operational Burden",
    body: "The investor reviews and approves each acquisition before the parties proceed through diligence and definitive documentation. After closing, FoxRidge leads day-to-day execution, asset management, capital-plan oversight, and oversight of third-party property management.",
  },
  {
    number: "02",
    icon: Target,
    title: "A Direct, Deal-by-Deal Partnership",
    body: "Each acquisition is evaluated separately with one capital partner. The parties discuss investment fit and proceed only after diligence, approval, and definitive documentation; FoxRidge does not require a pooled fund format to evaluate an opportunity.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Focused Coordination",
    body: "A one-investor-per-deal structure allows for direct coordination among the capital partner, FoxRidge, advisers, and counterparties. Any acquisition remains subject to diligence, financing, approval, and definitive documentation.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Direct Communication and Reporting",
    body: "The relationship and reporting are direct. FoxRidge works with one capital partner per acquisition and maintains a focused line of communication throughout the asset’s lifecycle, subject to the governing documents for that acquisition.",
  },
  {
    number: "05",
    icon: Lock,
    title: "Confidentiality and Discretion",
    body: "For UHNW principals, family office heads, and post-exit founders, having their name on a forty-person cap table is not desirable. A single-LP structure keeps the investment confidential and the entity clean. This matters more than people acknowledge — particularly for physician groups, public-company executives, and family offices that prefer not to advertise their real estate exposure.",
  },
  {
    number: "06",
    icon: Building2,
    title: "An Experienced Operating Partner",
    body: "FoxRidge brings acquisition, underwriting, asset-management, capital-plan, and market experience to each separate acquisition. The capital partner can evaluate a direct multifamily partnership without building a dedicated operating platform internally.",
  },
  {
    number: "07",
    icon: Shield,
    title: "Direct Asset Visibility",
    body: "A direct partnership gives the capital partner the opportunity to review the specific asset and acquisition case before approving it. Every investment involves risk and should be evaluated through independent diligence and qualified advice.",
  },
];

const stats = [
  { value: "1", label: "Investor Per Deal" },
  { value: "1", label: "Acquisition at a Time" },
  { value: "Direct", label: "Partnership Model" },
  { value: "Texas", label: "Current Focus" },
];

export default function OurInvestors() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[550px] flex items-center overflow-hidden bg-stone-950">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/70 to-stone-950/30 z-10" />
          <img
            src="/images/investor-hero-people.jpg"
            alt="Private investor meeting"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-20 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 mb-8">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-sm font-medium tracking-wide uppercase">Capital Partnership</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Capital <br />
              <span className="text-secondary">Partners</span>
            </h1>
            <p className="text-xl text-stone-300 max-w-2xl font-light leading-relaxed">
              One Investor. One Deal. Full Alignment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary py-0">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="py-8 px-8 text-center"
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-secondary mb-1">{stat.value}</div>
                <div className="text-white/60 text-sm uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual break between stats bar and intro section */}
      <div className="bg-white border-b border-stone-100">
        <div className="container">
          <div className="flex items-center gap-6 py-10">
            <div className="h-px flex-1 bg-stone-200" />
            <span className="text-stone-400 text-xs font-mono uppercase tracking-widest px-2">Partnership Model</span>
            <div className="h-px flex-1 bg-stone-200" />
          </div>
        </div>
      </div>

      {/* Intro — Two Column with Image */}
      <section className="py-0 bg-white">
        <div className="container-fluid">
          <div className="grid lg:grid-cols-2 min-h-[520px]">
            {/* Left — Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden"
            >
              <img
                src="/images/investor-meeting.png"
                alt="Private investor meeting"
                className="w-full h-full object-cover min-h-[420px]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
              {/* Floating badge */}
              <div className="absolute bottom-8 left-8 bg-primary/90 backdrop-blur-sm border border-white/10 p-6 max-w-xs">
                <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-2">Our Model</p>
                <p className="text-white text-lg font-display font-bold leading-snug">One Investor. One Deal. Full Alignment.</p>
              </div>
            </motion.div>

            {/* Right — Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center px-12 lg:px-20 py-16 bg-white"
            >
              <div className="w-12 h-1 mb-8" style={{ backgroundColor: "#B8942A" }} />
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 leading-tight" style={{ color: "#1E3A6E" }}>
                Not a Fund. Not a Syndication.<br />
                <span style={{ color: "#B8942A" }}>A Direct Partnership.</span>
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-6">
                FoxRidge Equity Partners operates on a{" "}
                <strong className="text-primary">one-investor-per-deal model</strong>. We partner with one
                family office, qualified private investor, or principal per acquisition, and serve as their dedicated
                operating partner across the Texas Triangle.
              </p>
              <p className="text-stone-600 text-lg leading-relaxed">
                We are not in a fundraising process. We deploy alongside committed capital partners who want
                institutional-quality execution without building an in-house team.
              </p>
              <div className="mt-10">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-stone-400 mb-4">Who We Partner With</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    "Family Offices",
                    "Private Investors",
                    "International Principals",
                  ].map((partner) => (
                    <div key={partner} className="flex items-center gap-3 border border-stone-200 bg-stone-50 px-4 py-3 text-sm font-medium text-primary">
                      <span className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                      {partner}
                    </div>
                  ))}
                </div>
                <Link href="/international-investors" className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-primary hover:text-secondary transition-colors">
                  Investing from outside the U.S.? Learn more <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seven Pillars */}
      <section className="py-12 md:py-24 bg-stone-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4" style={{ color: "#1E3A6E" }}>
              Why Partners{" "}
              <span style={{ color: "#B8942A" }}>Choose This Model</span>
            </h2>
            <p className="text-stone-600 text-lg">
              Seven reasons capital partners may prefer a one-investor-per-deal structure.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="bg-white border border-stone-200 p-8 hover:border-secondary/50 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-start gap-5 mb-5">
                    {/* Gold number */}
                    <div className="shrink-0 flex flex-col items-center gap-2">
                      <span
                        className="text-3xl font-display font-bold leading-none"
                        style={{ color: "#B8942A" }}
                      >
                        {pillar.number}
                      </span>
                      <div
                        className="w-8 h-8 flex items-center justify-center rounded-sm"
                        style={{ backgroundColor: "#1E3A6E10" }}
                      >
                        <Icon className="w-4 h-4" style={{ color: "#1E3A6E" }} />
                      </div>
                    </div>
                    <h3
                      className="text-xl font-display font-bold leading-snug pt-1"
                      style={{ color: "#1E3A6E" }}
                    >
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-stone-600 text-base leading-relaxed">{pillar.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visual Divider — Full-width image with overlay quote */}
      <section className="relative h-64 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-primary/80 z-10" />
          <img
            src="/images/investor-room.jpg"
            alt="Private meeting room"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 h-full flex items-center justify-center text-center px-6">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="text-2xl md:text-3xl font-display font-bold text-white leading-snug">
              "We are the operational team they don't need to hire —{" "}
              <span style={{ color: "#B8942A" }}>deal by deal, asset by asset.</span>"
            </p>
          </motion.blockquote>
        </div>
      </section>

      {/* International Investors Callout */}
      <section className="py-0 bg-white">
        <div className="container py-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-l-4 border-secondary bg-stone-50 p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          >
            <div>
              <h3 className="font-display text-xl font-bold text-primary mb-2">Investing from Outside the United States?</h3>
              <p className="text-stone-600 text-base max-w-2xl">
                We work with international family offices, principals, and capital partners across the Middle East, Asia-Pacific, Europe, Latin America, and beyond. See our dedicated page for international investors.
              </p>
            </div>
            <Link href="/international-investors">
              <Button className="bg-primary text-white hover:bg-primary/90 rounded-none px-8 py-5 font-bold shrink-0 whitespace-nowrap">
                Learn About International Investing
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Research & Insights Banner */}
      <section className="py-10 bg-stone-100 border-t border-stone-200">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-1 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Research &amp; Insights
              </p>
              <h3 className="text-primary font-display font-bold text-xl">Explore Research &amp; Insights</h3>
              <p className="text-stone-500 text-sm mt-1">Public research materials are being reviewed to ensure alignment with FoxRidge’s approved messaging and current focus.</p>
            </div>
            <Link href="/investor-resources" className="shrink-0">
              <button className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white font-bold px-6 py-3 text-sm whitespace-nowrap transition-colors">
                View Research &amp; Insights →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Investor Portal Cross-Promo */}
      <section className="py-16 bg-gradient-to-r from-[#040C1D] via-[#0E2148] to-[#040C1D] border-y border-[#C9A846]/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-[#C9A846]/10 border border-[#C9A846]/30 flex items-center justify-center flex-shrink-0 mt-1">
                <Lock className="w-6 h-6 text-[#C9A846]" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 bg-[#C9A846]/10 border border-[#C9A846]/30 text-[#C9A846] text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A846] animate-pulse" />
                  Investor Portal — Restricted Access
                </div>
                <h3 className="text-white text-2xl font-bold mb-2">Full Investor Presentations Available</h3>
                <p className="text-white/60 max-w-xl leading-relaxed">
                  Qualified investors can request access to additional firm and market materials in English and Russian, subject to the applicable access process and review.
                </p>
              </div>
            </div>
            <div className="flex-shrink-0">
              <Link href="/investor-portal">
                <Button className="bg-[#C9A846] hover:bg-[#B8973A] text-[#040C1D] font-bold px-8 h-12 text-sm tracking-widest uppercase rounded-lg whitespace-nowrap">
                  Access Portal →
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-24 bg-stone-950 text-white text-center">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Explore a Direct Partnership
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto mb-10 font-light">
              If you are a principal, family office, qualified private investor, or international capital partner, let’s discuss whether the model is a fit.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white border-none h-14 px-10 text-lg rounded-none"
            >
              <Link href="/contact">
                Invest With Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
