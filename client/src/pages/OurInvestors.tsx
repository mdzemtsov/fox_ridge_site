import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const pillars = [
  {
    number: "01",
    title: "Decision-Making Control Without Operational Burden",
    body: "The investor retains meaningful governance rights — major decisions, refinance timing, disposition windows, capex approvals — without having to build an asset management team. FoxRidge becomes their operational extension. In a traditional syndication, an LP with $5M is one of forty voices and effectively has no say. As the sole LP, they have a seat at the table on every material decision.",
  },
  {
    number: "02",
    title: "Bespoke Deal Structuring Around the Investor's Profile",
    body: "Hold periods, distribution cadence, refinance vs. supplemental loan strategy, exit timing — all of it gets engineered around one balance sheet, not the lowest common denominator of forty LPs with conflicting timelines. A principal nearing a liquidity event and a 40-year-old founder reinvesting exit proceeds need fundamentally different outcomes from the same building. Single-LP structures let us deliver that.",
  },
  {
    number: "03",
    title: "Capital Certainty and Execution Speed",
    body: "With one committed investor per deal, FoxRidge moves from LOI to hard money in days, not weeks. No drip fundraising, no soft commitments falling through at week four, no \"we're 70% subscribed\" conversations with brokers. Brokers know who they are dealing with — committed equity, decisive sponsor — which materially improves our deal flow at the top of the funnel.",
  },
  {
    number: "04",
    title: "Alignment Without Syndication Overhead",
    body: "No PPM circulation to forty parties, no investor relations headcount, no quarterly webinars to a fragmented base, no preferred return tier conflicts among LPs. The reporting is direct, the relationship is direct, and the economics are cleaner — which often means the single investor captures more of the deal's upside than they would as one of many in a syndicated stack.",
  },
  {
    number: "05",
    title: "Confidentiality and Discretion",
    body: "For UHNW principals, family office heads, and post-exit founders, having their name on a forty-person cap table is not desirable. A single-LP structure keeps the investment confidential and the entity clean. This matters more than people acknowledge — particularly for physician groups, public-company executives, and family offices that prefer not to advertise their real estate exposure.",
  },
  {
    number: "06",
    title: "We Are the Family Office They Don't Need to Build",
    body: "Building an in-house multifamily team — acquisitions, underwriting, asset management, construction oversight, lender relationships, broker network — costs $2–3M annually and takes years to do well. FoxRidge is that team, deal-by-deal, without the fixed cost. The investor gets institutional-quality execution on Sun Belt multifamily without hiring a single person. We are their extension arm into a sector they want exposure to but don't want to operationalize.",
  },
  {
    number: "07",
    title: "Concentration Discipline as a Feature, Not a Bug",
    body: "$3–5M into one deal with one operator creates real conviction. The investor knows the asset, walks the property, meets the property manager. It's a relationship, not a line item buried in a diversified fund allocation. For sophisticated investors, this is the appeal — they want concentrated bets with operators they trust, not diluted exposure across deals they will never see.",
  },
];

export default function OurInvestors() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden bg-stone-950">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-stone-950/70 z-10" />
          <img
            src="/images/hero-city-skyline.jpg"
            alt="City Skyline"
            className="w-full h-full object-cover opacity-50"
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
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <span className="text-sm font-medium tracking-wide uppercase">Capital Partnership</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Our <br />
              <span className="text-secondary">Investors</span>
            </h1>
            <p className="text-xl text-stone-300 max-w-2xl font-light leading-relaxed">
              One partner. One deal. Institutional execution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white border-b border-stone-200">
        <div className="container max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-xl md:text-2xl text-stone-700 leading-relaxed font-light"
          >
            FoxRidge Equity Partners operates on a{" "}
            <span className="font-semibold text-primary">single-investor-per-deal model</span>. We partner with one
            ultra-high-net-worth individual, family office, or principal per acquisition — typical check size{" "}
            <span className="font-semibold text-primary">$3–5M per deal</span> — and serve as their dedicated
            operational arm in Sun Belt multifamily. We are not in a fundraising process; we deploy alongside committed
            capital partners who want institutional-quality execution without building an in-house team.
          </motion.p>
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
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
              Why Partners <span className="text-secondary">Choose This Model</span>
            </h2>
            <p className="text-stone-600 text-lg">
              Seven reasons sophisticated capital chooses a single-LP structure over traditional syndication.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white border border-stone-200 p-8 hover:border-secondary/50 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Gold number badge */}
                <div className="flex items-start gap-5 mb-5">
                  <span
                    className="text-3xl font-display font-bold shrink-0 leading-none"
                    style={{ color: "#B8942A" }}
                  >
                    {pillar.number}
                  </span>
                  <h3
                    className="text-xl font-display font-bold leading-snug"
                    style={{ color: "#1E3A6E" }}
                  >
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-stone-600 text-base leading-relaxed">{pillar.body}</p>
              </motion.div>
            ))}

            {/* 7th pillar spans full width on md+ */}
            {/* Already handled by the map — last card will naturally fill */}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Deploy Capital?
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-10 font-light">
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
        </div>
      </section>
    </div>
  );
}
