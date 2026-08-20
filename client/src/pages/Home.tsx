import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ArrowUpRight, Building2, TrendingUp, Users, Wrench, Settings2, BrainCircuit } from "lucide-react";
import { Link } from "wouter";
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// 3D Rotating Number Component
const RotatingNumber = ({ value, suffix = "" }: { value: string | number; suffix?: string }) => {
  return (
    <div className="flex items-baseline overflow-hidden h-[1.1em]">
      <motion.span
        initial={{ y: "100%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true }}
        transition={{ 
          type: "spring",
          stiffness: 50,
          damping: 20,
          duration: 1.5 
        }}
        className="inline-block"
      >
        {value}
      </motion.span>
      <span>{suffix}</span>
    </div>
  );
};

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-stone-950/40 z-10" /> {/* Overlay - Balanced opacity */}
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/hero-american-city.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="container relative z-20 pt-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 mb-8">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="text-sm font-medium tracking-wide uppercase">Institutional Discipline. Entrepreneurial Execution.</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-[0.95] tracking-tight mb-8">
                <span className="block">Direct Multifamily <span className="hidden sm:inline">Investing</span></span>
                <span className="block sm:hidden">Investing</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-300">
                  for Family Offices &amp; Private Capital
                </span>
              </h1>
              
              <p className="text-xl text-stone-200 max-w-2xl leading-relaxed mb-10 font-light">
                FoxRidge focuses on Class B+/A multifamily assets built in 2000 or later across the Texas Triangle — Houston, Dallas–Fort Worth, and San Antonio — partnering with one capital partner per deal.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white border-none h-14 px-8 text-lg rounded-none">
                  <Link href="/track-record">
                    View Track Record <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-transparent text-white border-white/30 hover:bg-white/10 h-14 px-8 text-lg rounded-none">
                  <Link href="/strategy">Our Strategy</Link>
                </Button>
              </div>
            </motion.div>

            {/* Animated Stats Ticker - Floating Card */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-4 hidden lg:block"
            >
              <div className="bg-stone-900/80 backdrop-blur-xl border border-white/10 p-8 space-y-8">
                <div>
                  <p className="text-stone-400 text-sm uppercase tracking-wider mb-1">Total Transaction Volume</p>
                  <div className="text-3xl sm:text-3xl md:text-5xl font-display font-bold text-white">
                    <RotatingNumber value="$1" suffix="B+" />
                  </div>
                </div>
                <div className="h-px bg-white/10" />
                <div>
                  <p className="text-stone-400 text-sm uppercase tracking-wider mb-1">Units Invested</p>
                  <div className="text-3xl sm:text-3xl md:text-5xl font-display font-bold text-white">
                    <RotatingNumber value="7,000" suffix="+" />
                  </div>
                </div>
                <div className="h-px bg-white/10" />
                <div>
                  <p className="text-stone-400 text-sm uppercase tracking-wider mb-1">Return Objective</p>
                  <p className="text-2xl font-display font-bold text-secondary leading-tight mt-2">Risk-Adjusted<br />Outperformance</p>
                  <p className="text-stone-500 text-xs mt-3 leading-relaxed">Targets vary by deal. Past performance is not indicative of future results.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pipeline Statement Band */}
      <section className="bg-stone-50 py-16 border-t border-b border-stone-200">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-12 h-0.5 bg-secondary mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
              Active in the Market
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-10">
              FoxRidge is actively underwriting acquisitions across Dallas–Fort Worth, Houston, and San Antonio. We pursue opportunities where our underwriting, diligence, and investment criteria are met. Qualified partners are welcome to begin a conversation with the General Partners.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-none px-10 py-5 font-bold text-base">
              <Link href="/contact">Invest With Us</Link>
            </Button>
            <div className="w-12 h-0.5 bg-secondary mx-auto mt-8" />
          </div>
        </div>
      </section>

      {/* International Investors Band */}
      <section className="bg-primary py-14">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
              </div>
              <div>
                <h3 className="text-white font-display text-xl font-bold mb-1">For International Investors</h3>
                <p className="text-white/60 text-sm">Direct partnership in U.S. Sun Belt multifamily real estate. Built for UHNW (Ultra-High-Net-Worth) individuals, global family offices, principals, and private capital partners outside the United States.</p>
              </div>
            </div>
            <Link href="/international-investors">
              <Button className="bg-secondary text-white hover:bg-secondary/90 rounded-none px-8 py-5 font-bold shrink-0 whitespace-nowrap">
                Learn About International Investing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How We Invest — Condensed Process Band */}
      <section className="py-12 md:py-24 bg-stone-100" id="how-we-invest-home">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-4">How We Invest</h2>
            <p className="text-stone-600 text-lg">A disciplined, six-step process — from sourcing to exit — applied to every asset.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { num: "01", name: "Source", desc: "Direct relationships with leading Sun Belt brokers." },
              { num: "02", name: "Underwrite", desc: "Rebuilt from actual operating data, not broker pro formas." },
              { num: "03", name: "Diligence", desc: "Full institutional review before closing." },
              { num: "04", name: "Structure", desc: "Capital stacks built deliberately for each deal." },
              { num: "05", name: "Operate", desc: "Hands-on management from day one." },
              { num: "06", name: "Exit / Hold / Refinance", desc: "Timing-driven, multi-path, and disciplined." },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-white border border-stone-200 p-6 flex flex-col gap-3 hover:shadow-md transition-shadow"
              >
                <span className="text-3xl font-display font-bold text-primary">{step.num}</span>
                <h3 className="text-base font-bold text-stone-900 font-display">{step.name}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/strategy#how-we-invest" className="text-secondary font-semibold hover:underline text-sm inline-flex items-center gap-1">
              See our full process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Sun Belt — Condensed Band */}
      <section className="py-12 md:py-24 bg-primary text-white" id="why-sunbelt-home">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Why Sun Belt. Why Now.</h2>
            <p className="text-white/75 text-lg leading-relaxed">
              The Sun Belt is the most structurally advantaged real estate market in the United States. Population growth, job growth, and household formation continue to outpace the rest of the country, while the supply pipeline that delivered a historic wave of new apartments in 2022–2025 has now collapsed to its lowest level in fifteen years. Demand is accelerating. Supply is contracting. The window to acquire institutional-quality multifamily at attractive basis is open right now — and it does not stay open long.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
            {[
              { stat: "+8.8%", title: "Population Growth", source: "U.S. Census Bureau, 2025" },
              { stat: "2.9%", title: "Job Growth", source: "BLS / WSJ, 2025" },
              { stat: "−50%", title: "Supply Pipeline at 15-Year Low", source: "RealPage, Q2 2025" },
              { stat: "+1.5%", title: "Rent Growth Re-Acceleration", source: "Yardi Matrix, 2026" },
              { stat: "$1.5T+", title: "Loan Maturity Tsunami — Distressed Assets at Favorable Pricing", source: "Trepp / MSCI, 2025" },
            ].map((tile, i) => (
              <motion.div
                key={tile.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white/10 border border-white/20 p-6 backdrop-blur-sm"
              >
                <div className="text-3xl md:text-5xl font-display font-bold text-secondary mb-2">{tile.stat}</div>
                <div className="text-white font-bold text-sm mb-3 uppercase tracking-wide">{tile.title}</div>
                <div className="text-white/40 text-xs">Source: {tile.source}</div>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/strategy#why-sunbelt" className="text-secondary font-semibold hover:underline text-sm inline-flex items-center gap-1">
              Read our full market thesis <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Dynamic Process Section - Video Grid */}
      <section className="py-16 md:py-32 bg-stone-950 text-white overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Hands-On <span className="text-secondary">Value Creation</span>
              </h2>
              <p className="text-stone-400 text-lg leading-relaxed mb-8">
                FoxRidge leads asset management from acquisition through exit. Our hands-on approach combines targeted capital improvements, capital-plan oversight, oversight of third-party property management, and AI-enabled operational tools.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center border border-secondary/30 shrink-0">
                    <Wrench className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Direct Oversight of Capital Improvements</h3>
                    <p className="text-stone-400">Targeted light renovations — cosmetic unit upgrades, common area enhancements, and curb appeal improvements — executed with direct hands-on oversight to drive rent premiums without heavy construction risk.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center border border-secondary/30 shrink-0">
                    <Settings2 className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Operational Repositioning</h3>
                    <p className="text-stone-400">Asset management and oversight of third-party property management, with a focus on disciplined operating plans, leasing performance, expenses, and reporting.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center border border-secondary/30 shrink-0">
                    <BrainCircuit className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">AI-Enabled Property Operations</h3>
                    <p className="text-stone-400">Using AI-enabled tools to support tenant communication, predictive maintenance, pricing analysis, and operational efficiency in coordination with third-party property management.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  style={{ y: isMobile ? 0 : y1 }}
                  className="space-y-4 lg:mt-12"
                >
                  <div className="relative aspect-[3/4] overflow-hidden group">
                    <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors z-10" />
                    <img 
                      src="/images/value-property-mgmt.jpg"
                      alt="Property Management"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute bottom-8 left-4 z-20">
                      <span className="bg-secondary text-white text-xs font-bold px-2 py-1 uppercase tracking-wider">Property Management</span>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  style={{ y: isMobile ? 0 : y2 }}
                  className="space-y-4"
                >
                  <div className="relative aspect-[3/4] overflow-hidden group">
                    <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors z-10" />
                    <img 
                      src="/images/value-ai-dashboard.jpg"
                      alt="AI-Driven Operations"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute bottom-8 left-4 z-20">
                      <span className="bg-secondary text-white text-xs font-bold px-2 py-1 uppercase tracking-wider">AI Operations</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Focus - Bento Grid */}
      <section className="py-16 md:py-32 bg-stone-100">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-stone-900 mb-6">
              Strategic <span className="text-primary">Focus</span>
            </h2>
            <p className="text-stone-600 text-lg">
              We target high-growth markets with strong employment drivers and favorable supply/demand dynamics.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-8 border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <Building2 className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-2xl font-display font-bold text-stone-900 mb-4">Multifamily Light Value-Add</h3>
              <p className="text-stone-600 mb-6 text-base md:text-lg">
                Acquiring underperforming assets and unlocking value through physical renovations and operational improvements.
              </p>
              <ul className="space-y-3 text-base text-stone-500">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                  Class B+/A Assets
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                  2000 Vintage and Later
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                  100+ Units
                </li>
              </ul>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-8 border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <TrendingUp className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-2xl font-display font-bold text-stone-900 mb-4">Risk-Adjusted Returns</h3>
              <p className="text-stone-600 mb-6 text-base md:text-lg">
                Prioritizing capital preservation through disciplined underwriting and risk-aware value creation.
              </p>
              <ul className="space-y-3 text-base text-stone-500">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                  Conservative Underwriting
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                  Long-Term Fixed Debt
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                  Multiple Exit Strategies
                </li>
              </ul>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-8 border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <Users className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-2xl font-display font-bold text-stone-900 mb-4">Hands-On Management</h3>
              <p className="text-stone-600 mb-6 text-base md:text-lg">
                Active asset management and vertically integrated construction oversight to ensure business plan execution.
              </p>
              <ul className="space-y-3 text-base text-stone-500">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                  Third-Party Property Management Oversight
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                  Weekly KPI Monitoring
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                  Transparent Reporting
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research & Insights Cross-Promotion */}
      <section className="py-20 bg-stone-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/20 border border-secondary/40 text-secondary text-xs font-bold uppercase tracking-widest mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                Research &amp; Insights
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">
                Research &amp; <span className="text-secondary">Insights</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Our investment team publishes research on Texas Triangle multifamily markets, investment cycles, and the considerations that inform our acquisition process.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Texas Triangle market conditions and multifamily trends",
                  "Supply, demand, and capital-market research",
                  "Asset-level diligence and investment considerations",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-secondary/20 border border-secondary/50 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    </span>
                    <span className="text-white/80 text-sm">{point}</span>
                  </div>
                ))}
              </div>
              <Link href="/investor-resources">
                <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-none px-8 py-5 font-bold text-base group">
                  Explore Research &amp; Insights <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <Link href="/investor-resources">
                <div className="group bg-white/5 border border-white/10 hover:border-secondary/60 transition-all duration-300 p-8 cursor-pointer hover:bg-white/10">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-3 py-1">Research Library</span>
                    <span className="text-xs text-white/40">Information Update</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                    Research &amp; Insights
                  </h3>
                  <p className="text-white/60 text-sm mb-6 leading-relaxed">
                    Public research materials are currently being reviewed to ensure their market focus, supporting data, and public availability remain aligned with FoxRidge’s approved messaging.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Texas Triangle", "Multifamily", "Research", "Due Diligence"].map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 bg-white/10 text-white/50">{tag}</span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-secondary text-sm font-bold group-hover:gap-3 transition-all">
                    View Research &amp; Insights <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="container relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
            Invest With Us
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10 font-light">
            Discuss whether a direct multifamily partnership is a fit for your investment objectives.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10 mb-12">
            <div className="flex flex-col items-center gap-4">
              <div className="w-32 sm:w-44 aspect-[3/4] overflow-hidden border-4 border-secondary shadow-xl">
                <img src="/images/mikhail.jpg" alt="Mikhail Pritsker" className="w-full h-full object-cover object-top" />
              </div>
              <div>
                <p className="text-white font-bold text-base">Mikhail Pritsker</p>
                <p className="text-white/60 text-sm">Co-Founder &amp; Managing Partner</p>
                <p className="text-secondary text-xs mt-1">MBA Chicago Booth · CCIM · 25+ yrs</p>
                <a
                  href="https://www.linkedin.com/in/mikhailpritsker/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Mikhail Pritsker on LinkedIn"
                  className="inline-flex items-center gap-1.5 text-white/40 hover:text-[#0A66C2] transition-colors mt-2 text-xs"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="hidden sm:block w-px h-32 bg-white/20"></div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-32 sm:w-44 aspect-[3/4] overflow-hidden border-4 border-secondary shadow-xl">
                <img src="/images/slava_new.webp" alt="Slava Davidenko" className="w-full h-full object-cover object-top" />
              </div>
              <div>
                <p className="text-white font-bold text-base">Slava Davidenko</p>
                <p className="text-white/60 text-sm">Chairman, Advisory Board</p>
                <p className="text-secondary text-xs mt-1">7,000+ Units Invested · 36 Properties</p>
                <a
                  href="https://www.linkedin.com/in/vdavidenko/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Slava Davidenko on LinkedIn"
                  className="inline-flex items-center gap-1.5 text-white/40 hover:text-[#0A66C2] transition-colors mt-2 text-xs"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white border-none h-16 px-10 text-xl rounded-none">
            <Link href="/contact">
              Invest With Us <ArrowUpRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
