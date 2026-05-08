import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Building2, TrendingUp, Search, Hammer, DollarSign, BarChart3 } from "lucide-react";

export default function Strategy() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      {/* Hero Section - Unified Style */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden bg-stone-950">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-stone-950/40 z-10" />
          <img 
            src="/images/hero-strategy-garden.jpg" 
            alt="Garden Style Multifamily" 
            className="w-full h-full object-cover opacity-80"
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
              <span className="text-sm font-medium tracking-wide uppercase">Investment Thesis</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Value Creation <br />
              <span className="text-secondary">Through Execution</span>
            </h1>
            <p className="text-xl text-stone-300 max-w-2xl font-light leading-relaxed">
              We identify underperforming assets in high-growth markets and unlock their potential through strategic renovation and operational excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fast Forward Value-Add Section - Timelapse */}
      <section className="py-32 bg-stone-900 text-white overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Accelerated <span className="text-secondary">Transformation</span>
              </h2>
              <p className="text-stone-400 text-lg leading-relaxed mb-8">
                Time is money. Our vertically integrated construction management allows us to execute complex renovations rapidly, minimizing downtime and maximizing immediate value creation.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-secondary/10 flex items-center justify-center border border-secondary/30 shrink-0 rounded-lg">
                    <Hammer className="w-7 h-7 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Rapid Deployment</h3>
                    <p className="text-stone-400">Mobilizing crews immediately upon acquisition to begin exterior and amenity upgrades.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-secondary/10 flex items-center justify-center border border-secondary/30 shrink-0 rounded-lg">
                    <BarChart3 className="w-7 h-7 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Forced Appreciation</h3>
                    <p className="text-stone-400">Driving NOI growth through proven value-add strategies, not just market appreciation.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-secondary/20 blur-2xl rounded-full opacity-50" />
              <div className="relative aspect-video rounded-xl overflow-hidden border border-stone-700 shadow-2xl">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/images/timelapse.mp4" type="video/mp4" />
                </video>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-bold uppercase tracking-wider text-sm">Renovation Timeline</span>
                    <span className="text-secondary font-mono text-sm">6-18 Months</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investment Criteria */}
      <section className="py-32 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900 mb-6">
              Acquisition <span className="text-primary">Criteria</span>
            </h2>
            <p className="text-stone-600 text-lg">
              We are disciplined buyers, focusing on assets where we can control the outcome.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Building2,
                title: "Asset Class",
                desc: "Class A & B Multifamily, 2000 vintage and up."
              },
              {
                icon: Search,
                title: "Size",
                desc: "100+ units, $10M - $50M deal size."
              },
              {
                icon: TrendingUp,
                title: "Markets",
                desc: "High-growth MSAs in Texas and Florida — landlord-friendly states with no state income tax and pro-business regulatory frameworks."
              },
              {
                icon: DollarSign,
                title: "Light Value-Add",
                desc: "Reasonable investments to achieve modest rent growth."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-stone-50 border border-stone-200 hover:border-secondary/50 transition-colors group"
              >
                <item.icon className="w-10 h-10 text-stone-400 group-hover:text-secondary transition-colors mb-6" />
                <h3 className="text-2xl font-bold text-stone-900 mb-4">{item.title}</h3>
                <p className="text-stone-600 leading-relaxed text-base md:text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sun Belt — Full Section */}
      <section className="py-32 bg-stone-950 text-white" id="why-sunbelt">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/30 text-secondary text-xs font-bold uppercase tracking-widest mb-8">
                Market Thesis
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">
                Why Sun Belt.<br /><span className="text-secondary">Why Now.</span>
              </h2>
              <p className="text-stone-400 text-lg leading-relaxed mb-6">
                The Sun Belt is the most structurally advantaged real estate market in the United States. Population growth, job growth, and household formation continue to outpace the rest of the country by a significant margin.
              </p>
              <p className="text-stone-400 text-lg leading-relaxed mb-6">
                The supply pipeline that delivered a historic wave of new apartments in 2022–2025 has now collapsed to its lowest level in fifteen years. Starts are down over 50% from the 2022 peak. The units being delivered today were financed at a different cost of capital, in a different rate environment, and by developers who no longer have access to the same debt markets. Texas and Florida remain landlord-friendly states with no state income tax, pro-business regulatory environments, and streamlined processes that protect asset performance.
              </p>
              <p className="text-stone-400 text-lg leading-relaxed">
                Demand is accelerating. Supply is contracting. The window to acquire institutional-quality multifamily at attractive basis is open right now — and it does not stay open long. FoxRidge is positioned to move when others cannot.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "+8.8%", title: "Population Growth", desc: "Texas 2020–2025 vs. ~3.1% national average", source: "U.S. Census Bureau, 2025" },
                { stat: "2.9%", title: "Job Growth", desc: "DFW job growth rate, tied 3rd among top 30 metros", source: "BLS / WSJ, 2025" },
                { stat: "−50%", title: "Supply Contraction", desc: "Multifamily starts from 2022 peak; decade-low pipeline", source: "RealPage, Q2 2025" },
                { stat: "+1.5%", title: "Rent Re-Acceleration", desc: "Forecast national rent growth in 2027 as supply clears", source: "Yardi Matrix, 2026" },
              ].map((tile, i) => (
                <motion.div
                  key={tile.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors"
                >
                  <div className="text-4xl font-display font-bold text-secondary mb-2">{tile.stat}</div>
                  <div className="text-white font-bold text-sm mb-2 uppercase tracking-wide">{tile.title}</div>
                  <p className="text-stone-500 text-xs leading-relaxed mb-3">{tile.desc}</p>
                  <div className="text-stone-600 text-xs">Source: {tile.source}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Invest — Full 6-Step Process */}
      <section className="py-32 bg-white" id="how-we-invest">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8">
              Our Process
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900 mb-6">
              How We <span className="text-primary">Invest</span>
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              Every acquisition follows the same disciplined framework. No shortcuts. No exceptions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                icon: <Search className="w-6 h-6 text-secondary" />,
                name: "Source",
                desc: "We source exclusively through direct broker relationships across DFW, Houston, San Antonio, Austin, and South Florida. We do not rely on listed deal flow. Our pipeline is built on years of consistent market presence and repeat transaction history."
              },
              {
                num: "02",
                icon: <BarChart3 className="w-6 h-6 text-secondary" />,
                name: "Underwrite",
                desc: "Every deal is underwritten from scratch using actual T-12 operating data, current market rents, and our own assumptions — never the broker's pro forma. We stress-test every scenario before submitting an LOI."
              },
              {
                num: "03",
                icon: <Building2 className="w-6 h-6 text-secondary" />,
                name: "Diligence",
                desc: "Full physical, financial, and legal diligence on every asset. We walk every unit. We review every lease. We verify every number. Our diligence process is designed to surface risk before it becomes our investor's problem."
              },
              {
                num: "04",
                icon: <DollarSign className="w-6 h-6 text-secondary" />,
                name: "Structure",
                desc: "We structure each deal around the specific capital partner — their return profile, governance preferences, hold period, and jurisdiction. No two deals are structured identically. We do not force investors into a pre-built fund box."
              },
              {
                num: "05",
                icon: <Hammer className="w-6 h-6 text-secondary" />,
                name: "Operate",
                desc: "Hands-on management from day one. In-house property management control, AI-driven operational tools, direct oversight of all capital improvements, and weekly KPI reporting to the capital partner. We run the asset like it is our own."
              },
              {
                num: "06",
                icon: <TrendingUp className="w-6 h-6 text-secondary" />,
                name: "Exit",
                desc: "We evaluate exit timing continuously against market conditions. We do not hold to an arbitrary fund timeline. When the market is right and the business plan is complete, we execute the exit that maximizes return for the capital partner."
              },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-stone-50 border border-stone-200 p-8 hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl font-display font-bold text-primary/20 group-hover:text-primary/40 transition-colors">{step.num}</span>
                  <div className="w-10 h-10 bg-secondary/10 border border-secondary/30 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold text-stone-900 mb-4">{step.name}</h3>
                <p className="text-stone-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* International Investors Cross-Reference */}
      <section className="bg-white">
        <div className="container">
          <div className="border-l-4 border-secondary bg-stone-50 px-8 py-6">
            <p className="text-stone-600 text-sm">
              <span className="font-bold text-stone-900">International capital partners are welcome.</span>{" "}
              We structure each partnership to align with your jurisdiction and wealth architecture — whether you are based in the Middle East, Asia-Pacific, Europe, or Latin America.{" "}
              <Link href="/international-investors" className="text-secondary font-semibold hover:underline">Learn about our international investor program →</Link>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">Have a Deal for Us?</h2>
          <Button asChild size="lg" className="bg-secondary text-white hover:bg-secondary/90 h-14 px-8 text-lg font-bold rounded-none">
            <Link href="/contact">Submit an Opportunity</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
