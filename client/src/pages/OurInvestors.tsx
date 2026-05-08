import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Shield, Zap, Lock, Users, Building2, TrendingUp, Target } from "lucide-react";

const pillars = [
  {
    number: "01",
    icon: Users,
    title: "Decision-Making Control Without Operational Burden",
    body: "The investor retains meaningful governance rights — major decisions, refinance timing, disposition windows, capex approvals — without having to build an asset management team. FoxRidge becomes their operational extension. In a traditional syndication, an LP with $0.5M is one of forty voices and effectively has no say. As the sole LP, they have a seat at the table on every material decision.",
  },
  {
    number: "02",
    icon: Target,
    title: "Bespoke Deal Structuring Around the Investor's Profile",
    body: "Hold periods, distribution cadence, refinance vs. supplemental loan strategy, exit timing — all of it gets engineered around one balance sheet, not the lowest common denominator of forty LPs with conflicting timelines. A principal nearing a liquidity event and a 40-year-old founder reinvesting exit proceeds need fundamentally different outcomes from the same building. Single-LP structures let us deliver that.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Capital Certainty and Execution Speed",
    body: "With one committed investor per deal, FoxRidge moves from LOI to hard money in days, not weeks. No drip fundraising, no soft commitments falling through at week four, no \"we're 70% subscribed\" conversations with brokers. Brokers know who they are dealing with — committed equity, decisive sponsor — which materially improves our deal flow at the top of the funnel.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Alignment Without Syndication Overhead",
    body: "No PPM circulation to forty parties, no investor relations headcount, no quarterly webinars to a fragmented base, no preferred return tier conflicts among LPs. The reporting is direct, the relationship is direct, and the economics are cleaner — which often means the single investor captures more of the deal's upside than they would as one of many in a syndicated stack.",
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
    title: "We Are the Family Office They Don't Need to Build",
    body: "Building an in-house multifamily team — acquisitions, underwriting, asset management, construction oversight, lender relationships, broker network — costs $2–3M annually and takes years to do well. FoxRidge is that team, deal-by-deal, without the fixed cost. The investor gets institutional-quality execution on Sun Belt multifamily without hiring a single person. We are their extension arm into a sector they want exposure to but don't want to operationalize.",
  },
  {
    number: "07",
    icon: Shield,
    title: "Concentration Discipline as a Feature, Not a Bug",
    body: "$3–10M into one deal with one operator creates real conviction. The investor knows the asset, walks the property, meets the property manager. It's a relationship, not a line item buried in a diversified fund allocation. For sophisticated investors, this is the appeal — they want concentrated bets with operators they trust, not diluted exposure across deals they will never see.",
  },
];

const stats = [
  { value: "1", label: "Investor Per Deal" },
  { value: "$3–10M", label: "Typical Check Size" },
  { value: "100%", label: "Direct Governance" },
  { value: "Sun Belt", label: "Target Markets" },
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
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Our <br />
              <span className="text-secondary">Investors</span>
            </h1>
            <p className="text-xl text-stone-300 max-w-2xl font-light leading-relaxed">
              One partner. One deal. Institutional execution without the institutional overhead.
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
                <p className="text-white text-lg font-display font-bold leading-snug">Single Investor. Single Deal. Full Alignment.</p>
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
                <strong className="text-primary">single-investor-per-deal model</strong>. We partner with one
                ultra-high-net-worth individual, family office, or principal per acquisition — typical check size{" "}
                <strong className="text-primary">$3–10M per deal</strong> — and serve as their dedicated
                operational arm in Sun Belt multifamily.
              </p>
              <p className="text-stone-600 text-lg leading-relaxed">
                We are not in a fundraising process. We deploy alongside committed capital partners who want
                institutional-quality execution without building an in-house team.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-3 text-sm text-stone-500">
                  <span className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                  UHNW Individuals
                </div>
                <div className="flex items-center gap-3 text-sm text-stone-500">
                  <span className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                  Family Offices
                </div>
                <div className="flex items-center gap-3 text-sm text-stone-500">
                  <span className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                  Post-Exit Founders
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seven Pillars */}
      <section className="py-24 bg-stone-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4" style={{ color: "#1E3A6E" }}>
              Why Partners{" "}
              <span style={{ color: "#B8942A" }}>Choose This Model</span>
            </h2>
            <p className="text-stone-600 text-lg">
              Seven reasons sophisticated capital chooses a single-LP structure over traditional syndication.
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
                Learn More
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-stone-950 text-white text-center">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Deploy Capital?
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto mb-10 font-light">
              If you are a principal, family office, or UHNW investor looking for direct Sun Belt multifamily exposure, let's talk.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white border-none h-14 px-10 text-lg rounded-none"
            >
              <Link href="/contact">
                Start the Conversation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
