import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Globe,
  Users,
  Building2,
  Briefcase,
  Phone,
  Eye,
  Handshake,
  Shield,
  TrendingUp,
  MapPin,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const pillars = [
  {
    number: "01",
    icon: Users,
    title: "We choose the deal together. We do not pool you with strangers.",
    body: "FoxRidge evaluates one acquisition with one capital partner at a time. You review the specific asset, underwriting, and relevant diligence materials before deciding whether to approve that acquisition. Each opportunity is separate and subject to definitive documentation.",
  },
  {
    number: "02",
    icon: Building2,
    title: "We have built the operating infrastructure. You do not need to.",
    body: "FoxRidge brings acquisition, underwriting, asset-management, capital-plan, and market experience to each separate opportunity. After closing, FoxRidge leads day-to-day execution and oversees third-party property management as part of the asset-management process.",
  },
  {
    number: "03",
    icon: Shield,
    title: "We are a spin-off of a family office mindset. We treat your capital like our own.",
    body: "FoxRidge was built on the principle that capital deserves the same level of care and discipline that a principal would apply to their own balance sheet. We do not chase deals. We do not deploy to hit fundraising targets. We underwrite to ground truth — actual rents, actual expenses, actual market conditions — and we walk away from deals that do not meet our standard. Most do not.",
  },
  {
    number: "04",
    icon: Eye,
    title: "We are hands-on, every single day.",
    body: "The General Partners are personally engaged on every asset — every week, often every day. We are at the property. We are on the calls with the property manager. We are in the deal room with the lenders. Your asset is not delegated to a junior associate three layers down. It is run by the principals you partnered with.",
  },
  {
    number: "05",
    icon: Briefcase,
    title: "We build customized portfolios — not products.",
    body: "Some partners evaluate a single acquisition; others may consider future opportunities separately. FoxRidge’s current acquisition focus is the Texas Triangle — Dallas–Fort Worth, Houston, and San Antonio — with each acquisition reviewed on its own merits.",
  },
  {
    number: "06",
    icon: Phone,
    title: "The relationship is direct.",
    body: "FoxRidge maintains direct communication with the capital partner throughout the acquisition and asset-management process. Specific communication and reporting practices are established for each acquisition in the applicable governing documents.",
  },
];

const regions = [
  { region: "The Middle East", desc: "GCC family offices, principals, and private capital seeking long-duration, dollar-denominated U.S. real estate exposure" },
  { region: "Japan", desc: "Institutional and private capital looking for Sun Belt diversification beyond traditional gateway market exposure" },
  { region: "Australia", desc: "Family offices and self-directed investors building U.S. real estate allocations" },
  { region: "India", desc: "UHNW principals and family offices accessing U.S. multifamily directly, outside fund structures" },
  { region: "Canada", desc: "Private investors and family offices seeking direct U.S. exposure beyond domestic real estate" },
  { region: "Europe", desc: "UK, German, Swiss, and broader EU principals seeking direct ownership in U.S. assets" },
  { region: "Latin America", desc: "Mexican, Brazilian, Colombian, and Argentine capital seeking dollar income and capital preservation" },
  { region: "Southeast Asia", desc: "Singapore and Hong Kong-based family offices and private investors" },
];

const steps = [
  {
    number: "1",
    title: "We talk.",
    body: "An introductory conversation to understand your objectives, experience, and whether a direct multifamily partnership may be a fit. This discussion is informational only and is not an offer or solicitation.",
  },
  {
    number: "2",
    title: "We share the pipeline.",
    body: "We discuss FoxRidge’s current focus, investment process, and relevant market considerations. Opportunity-specific materials are shared only when appropriate and subject to the applicable process, review, and legal requirements.",
  },
  {
    number: "3",
    title: "We structure the partnership.",
    body: "Prospective partners should work with their own qualified legal, tax, and financial advisers. Any acquisition remains subject to diligence, financing, approval, and definitive documentation; no timing is guaranteed.",
  },
  {
    number: "4",
    title: "We operate. You hold the asset.",
    body: "After closing, FoxRidge leads day-to-day execution, asset management, capital-plan oversight, and oversight of third-party property management. Reporting and any site-visit discussions are handled as appropriate for the acquisition and its governing documents.",
  },
];

export default function InternationalInvestors() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50">

      {/* ── Section 1: Hero ── */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-stone-950">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/75 to-stone-950/40 z-10" />
          <img
            src="/images/hero-strategy-garden.jpg"
            alt="International investment partnership"
            className="w-full h-full object-cover opacity-70"
          />
        </div>
        <div className="container relative z-20 pt-24 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 mb-8">
              <Globe className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium tracking-wide uppercase">International Capital Partners</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Your Partner in U.S. Real Estate.{" "}
              <span className="text-secondary">Not Your Fund.</span>
            </h1>
            <p className="text-lg text-stone-300 max-w-2xl font-light leading-relaxed mb-6">
              FoxRidge Equity Partners welcomes capital from the Middle East, Japan, Australia, India, Canada, Europe, Latin America, Southeast Asia — and from anywhere serious investors are looking for a real partnership in U.S. multifamily real estate.
            </p>
            <p className="text-base text-stone-400 max-w-2xl leading-relaxed">
              FoxRidge works with one capital partner on one acquisition at a time. The investor reviews and approves each acquisition; after closing, FoxRidge leads day-to-day execution through asset management, capital-plan oversight, and oversight of third-party property management. Each acquisition is separate and subject to diligence, financing, approval, and definitive documentation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: Why U.S. Multifamily Now ── */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl font-bold text-primary mb-8">Why U.S. Multifamily. Why Now.</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              The U.S. economy is the largest, deepest, and most resilient capital market in the world — and U.S. multifamily real estate has demonstrated consistent structural resilience within it. Through every cycle of the last forty years — recessions, financial crises, pandemics, rate shocks — multifamily has been among the asset classes that institutional capital returns to first. The reason is structural: people need housing. As with all real estate investments, past performance is not indicative of future results.
            </p>

            <div className="border-l-4 border-secondary pl-6 mb-8">
              <p className="text-xl font-display font-bold text-stone-900">Current market conditions require careful underwriting.</p>
            </div>

            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              The multifamily market has experienced a large recent supply cycle, changing capital costs, and divergent conditions across metros and submarkets. FoxRidge evaluates Class B+/A multifamily opportunities in the Texas Triangle using asset-level underwriting, market research, and diligence. Market conditions and investment outcomes can change, and no result is assured.
            </p>

            <div className="border-l-4 border-secondary pl-6 mb-8">
              <p className="text-xl font-display font-bold text-stone-900">Each acquisition is evaluated separately.</p>
            </div>

            <p className="text-stone-600 text-lg leading-relaxed">
              FoxRidge evaluates acquisition opportunities individually, with attention to asset quality, basis, submarket conditions, financing, and the proposed business plan. Any transaction is subject to investor approval, diligence, financing, and definitive documentation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Section 3: 6 Pillars ── */}
      <section className="py-12 md:py-24 bg-stone-50">
        <div className="container">
          <div className="mb-14">
            <h2 className="font-display text-4xl font-bold text-primary mb-4">We Are Your Hands-On Partner. Not a Fund.</h2>
            <p className="text-stone-500 text-lg max-w-2xl">There is a fundamental difference between handing capital to a fund and partnering with an operator. We are not a fund.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white border border-stone-200 hover:border-secondary/40 transition-colors p-8 group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl font-display font-bold text-secondary/30 leading-none">{pillar.number}</span>
                  <pillar.icon className="w-5 h-5 text-primary group-hover:text-secondary transition-colors" />
                </div>
                <h3 className="font-display text-base font-bold text-stone-900 mb-3 leading-snug">{pillar.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{pillar.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Capital from Anywhere ── */}
      <section className="py-12 md:py-24 bg-primary text-white">
        <div className="container">
          <div className="mb-12">
            <h2 className="font-display text-4xl font-bold text-white mb-4">We Welcome Capital from Around the World.</h2>
            <p className="text-white/70 text-lg">FoxRidge actively partners with investors across the globe. We welcome capital from:</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-14">
            {regions.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex gap-4 p-5 border border-white/10 hover:border-secondary/50 transition-colors bg-white/5"
              >
                <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white">{r.region}</span>
                  <span className="text-white/60"> — {r.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="max-w-3xl">
            <p className="text-xl text-white font-display font-semibold mb-4">
              FoxRidge welcomes a conversation with family offices, principals, and qualified private investors interested in a direct multifamily partnership, including those based outside the United States.
            </p>
            <p className="text-white/60 leading-relaxed">
              FoxRidge does not provide legal, tax, financial, or cross-border structuring advice. Prospective partners should consult their own qualified advisers regarding their circumstances and any applicable laws, taxes, regulations, or capital-movement requirements.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 5: How a Partnership Begins ── */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container">
          <div className="mb-14">
            <h2 className="font-display text-4xl font-bold text-primary mb-3">A Conversation. Then a Deal. Then a Partnership.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-stone-200">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border-r border-stone-200 last:border-r-0 hover:bg-stone-50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors">
                  <span className="text-white font-display font-bold text-lg">{step.number}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-stone-900 mb-3">{step.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: Site Visits ── */}
      <section className="py-12 md:py-24 bg-stone-50">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row gap-12 items-start"
          >
            <div className="lg:w-1/3 shrink-0">
              <div className="w-14 h-14 bg-secondary/10 border border-secondary/30 flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-secondary" />
              </div>
              <h2 className="font-display text-3xl font-bold text-primary leading-tight">Come Walk the Property. We Host You.</h2>
            </div>
            <div className="lg:w-2/3">
              <p className="text-stone-600 text-lg leading-relaxed">
                Where appropriate, prospective partners may discuss an in-person property or market visit with FoxRidge. FoxRidge’s current acquisition focus is Dallas–Fort Worth, Houston, and San Antonio; any visit arrangements, if available, are considered case by case.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Regulation S / International Legal Disclaimer ── */}
      <section className="py-12 bg-stone-100 border-t border-stone-200">
        <div className="container max-w-4xl">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-secondary/20 border border-secondary/30 flex items-center justify-center shrink-0 mt-0.5">
              <Shield className="w-4 h-4 text-secondary" />
            </div>
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-secondary">Important Notice to Non-U.S. Persons</p>
              <p className="text-stone-600 text-sm leading-relaxed">
                <strong className="text-stone-800">Regulation S Notice:</strong> The information on this page is directed solely at persons who are not "U.S. persons" as defined in Rule 902(k) of Regulation S under the U.S. Securities Act of 1933, as amended. Any securities offered by FoxRidge Equity Partners / Consulting Point LLC have not been and will not be registered under the Securities Act and may not be offered or sold in the United States or to U.S. persons absent registration or an applicable exemption from registration.
              </p>
              <p className="text-stone-600 text-sm leading-relaxed">
                <strong className="text-stone-800">No Offer or Solicitation:</strong> Nothing on this page constitutes an offer to sell or a solicitation of an offer to buy any security in any jurisdiction where such offer or solicitation would be unlawful. Prospective non-U.S. investors are responsible for ensuring that any investment they make complies with all applicable laws and regulations in their home jurisdiction, including any foreign investment restrictions, currency controls, and securities regulations.
              </p>
              <p className="text-stone-600 text-sm leading-relaxed">
                <strong className="text-stone-800">Tax Considerations:</strong> Non-U.S. investors in U.S. real estate may be subject to FIRPTA withholding and other U.S. federal and state tax obligations. FoxRidge Equity Partners does not provide tax advice. Prospective investors are strongly encouraged to consult qualified legal and tax advisors in their home jurisdiction before making any investment decision.
              </p>
              <p className="text-stone-500 text-xs leading-relaxed">
                By continuing to engage with this page and our team, non-U.S. persons confirm that they are doing so in compliance with the laws of their jurisdiction and that they are not relying on this website as the basis for any investment decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 7: CTA ── */}
      <section className="py-12 md:py-24 bg-primary text-white">
        <div className="container text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Explore International Investing.</h2>
            <p className="text-white/70 text-lg mb-10">Discuss whether a direct multifamily partnership may be a fit for your objectives and circumstances.</p>
            <Link href="/contact">
              <Button className="bg-secondary text-white hover:bg-secondary/90 rounded-none px-10 py-6 text-lg font-bold">
                Invest With Us <ArrowUpRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
