import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Building2, TrendingUp, Users, Wrench, Settings2, BrainCircuit } from "lucide-react";
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
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[0.9] tracking-tight mb-8">
                Building <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-300">
                  Generational Wealth
                </span>
              </h1>
              
              <p className="text-xl text-stone-200 max-w-2xl leading-relaxed mb-10 font-light">
                Fox Ridge Equity Partners is a private real estate investment firm specializing in 
                value-add multifamily opportunities across high-growth markets in Texas and Florida.
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
                  <div className="text-5xl font-display font-bold text-white">
                    <RotatingNumber value="$1" suffix="B+" />
                  </div>
                </div>
                <div className="h-px bg-white/10" />
                <div>
                  <p className="text-stone-400 text-sm uppercase tracking-wider mb-1">Units Acquired</p>
                  <div className="text-5xl font-display font-bold text-white">
                    <RotatingNumber value="7,000" suffix="+" />
                  </div>
                </div>
                <div className="h-px bg-white/10" />
                <div>
                  <p className="text-stone-400 text-sm uppercase tracking-wider mb-1">Target IRR</p>
                  <div className="text-5xl font-display font-bold text-secondary">
                    <RotatingNumber value="18" suffix="%" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dynamic Process Section - Video Grid */}
      <section className="py-32 bg-stone-950 text-white overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Hands-On <span className="text-secondary">Value Creation</span>
              </h2>
              <p className="text-stone-400 text-lg leading-relaxed mb-8">
                We don't just acquire assets — we actively manage them. Our hands-on approach combines targeted capital improvements, institutional-grade property management, and AI-driven operational tools to maximize NOI and protect investor capital.
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
                    <p className="text-stone-400">In-house property management control with institutional discipline — optimizing lease-up velocity, reducing vacancy, and tightening expense ratios to grow NOI from day one.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center border border-secondary/30 shrink-0">
                    <BrainCircuit className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">AI-Driven Property Management</h3>
                    <p className="text-stone-400">Deploying AI-powered tools for tenant communication, predictive maintenance, dynamic pricing, and on-site operational efficiency — delivering institutional-grade management at every asset.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  style={{ y: y1 }}
                  className="space-y-4 mt-12"
                >
                  <div className="relative aspect-[3/4] overflow-hidden group">
                    <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors z-10" />
                    <img 
                      src="/images/value-property-mgmt.jpg"
                      alt="Property Management"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                      <span className="bg-secondary text-white text-xs font-bold px-2 py-1 uppercase tracking-wider">Property Management</span>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  style={{ y: y2 }}
                  className="space-y-4"
                >
                  <div className="relative aspect-[3/4] overflow-hidden group">
                    <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors z-10" />
                    <img 
                      src="/images/value-ai-dashboard.jpg"
                      alt="AI-Driven Operations"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
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
      <section className="py-32 bg-stone-100">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900 mb-6">
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
                  Class A & B Assets
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                  2000s and Up
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
                Prioritizing capital preservation while delivering strong cash-on-cash returns and long-term appreciation.
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
                  In-House Property Management Control
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

      {/* CTA Section */}
      <section className="py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="container relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
            Partner With Us
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 font-light">
            Join our network of investors and gain access to exclusive off-market multifamily opportunities.
          </p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white border-none h-16 px-10 text-xl rounded-none">
            <Link href="/contact">
              Get in Touch <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
