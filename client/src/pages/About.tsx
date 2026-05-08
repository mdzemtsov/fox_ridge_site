import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle2, Award, Briefcase, GraduationCap, ArrowUpRight, Mail, Linkedin } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      {/* Hero Section - Unified Style */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden bg-stone-950">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-stone-950/40 z-10" />
          <img 
            src="/images/hero-modern-interior.jpg" 
            alt="Modern Interior" 
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
              <span className="text-sm font-medium tracking-wide uppercase">Our Team</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Experienced <br />
              <span className="text-secondary">Leadership</span>
            </h1>
            <p className="text-xl text-stone-300 max-w-2xl font-light leading-relaxed">
              Led by Mikhail Pritsker and Slava Davidenko, Fox Ridge Equity Partners brings over $1 billion in combined transaction experience and a hands-on approach to every asset.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mikhail Pritsker Profile */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <div className="aspect-[3/4] bg-stone-100 mb-8 relative overflow-hidden group border border-stone-200">
                  <img 
                    src="/images/mikhail.jpg" 
                    alt="Mikhail Pritsker" 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
                
                <div className="flex flex-col gap-4 border-t border-stone-200 pt-6">
                  <div className="flex items-center gap-4 text-sm text-stone-500">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <span>MBA, University of Chicago Booth</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-stone-500">
                    <Award className="w-5 h-5 text-primary" />
                    <span>CCIM Designation</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-stone-500">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <span>25+ Years Experience</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <h2 className="font-display text-4xl font-bold text-stone-900 mb-2">Mikhail Pritsker</h2>
              <p className="text-secondary font-mono uppercase tracking-widest text-sm mb-10">Co-Founder & Managing Partner</p>
              
              <div className="prose prose-lg prose-stone max-w-none">
                <p className="text-xl text-stone-700 font-light leading-relaxed mb-8">
                  Mikhail operates at the intersection of capital, operations, and trust. His career reflects a rare blend of hands-on asset management, strategic portfolio oversight, and institutional-grade investor communication.
                </p>
                
                <p className="mb-6 text-stone-500">
                  As a senior real estate investment executive with over 25 years of experience, Mikhail has overseen more than <strong>$1 billion in real estate transactions</strong> across multiple market cycles. He is particularly strong where many operators struggle: investor confidence and communication.
                </p>
                
                <div className="bg-stone-50 p-8 border border-stone-200 my-10">
                  <h4 className="font-display font-bold text-lg text-stone-900 mb-6 uppercase tracking-wide">Core Strengths</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 list-none pl-0 m-0">
                    {[
                      "Asset & Portfolio Leadership",
                      "NOI Optimization",
                      "Investor Relations",
                      "Capital Strategy",
                      "AI & Analytics",
                      "Complex Development"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-stone-700 font-medium">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-stone-500">
                  He has designed quarterly reporting frameworks, validated monthly LP cash flow distributions, and improved LP satisfaction and retention by 30%+.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="h-px w-full bg-stone-200"></div>
      </div>

      {/* Slava Davidenko Profile */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <h2 className="font-display text-4xl font-bold text-stone-900 mb-2">Slava Davidenko</h2>
              <p className="text-secondary font-mono uppercase tracking-widest text-sm mb-10">Co-Founder & Managing Partner</p>
              
              <div className="prose prose-lg prose-stone max-w-none">
                <p className="text-xl text-stone-700 font-light leading-relaxed mb-8">
                  Slava combines disciplined underwriting with an operator's mentality—understanding both the capital stack and the operational levers that drive NOI.
                </p>
                
                <p className="mb-6 text-stone-500">
                  A serial entrepreneur and investor with over 25 years of experience, Slava has managed and invested more than <strong>$600 million across diversified projects</strong>. As a leading multifamily sponsor, he has built a portfolio exceeding <strong>7,000 units across 36 properties</strong>.
                </p>
                
                <div className="bg-stone-50 p-8 border border-stone-200 my-10">
                  <h4 className="font-display font-bold text-lg text-stone-900 mb-6 uppercase tracking-wide">Core Strengths</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 list-none pl-0 m-0">
                    {[
                      "Institutional Wealth Mgmt",
                      "Real Estate at Scale",
                      "Entrepreneurship",
                      "AI & Modern Practices",
                      "Capital Raising",
                      "Cross-Industry Experience"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-stone-700 font-medium">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-stone-500">
                  His background includes serving as Managing Director at Renaissance Capital ($500M AUM) and successfully exiting 8 full-cycle deals as a General Partner, with his best-performing deal generating a <strong>42% IRR</strong>.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="sticky top-32">
                <div className="aspect-[3/4] bg-stone-100 mb-8 relative overflow-hidden group border border-stone-200">
                  <img 
                    src="/images/slava.webp" 
                    alt="Slava Davidenko" 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
                
                <div className="flex flex-col gap-4 border-t border-stone-200 pt-6">
                  <div className="flex items-center gap-4 text-sm text-stone-500">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <span>MBA, University of Chicago Booth</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-stone-500">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <span>Engineering Degree, MEPhI</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-stone-500">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <span>7,000+ Units Invested</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Investors Cross-Reference */}
      <section className="bg-white">
        <div className="container">
          <div className="border-l-4 border-secondary bg-stone-50 px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-stone-600 text-sm">
              <span className="font-bold text-stone-900">Based outside the United States?</span>{" "}
              We work with international family offices and principals across the Middle East, Asia-Pacific, Europe, and Latin America.{" "}
              <Link href="/international-investors" className="text-secondary font-semibold hover:underline">See our international investor program →</Link>
            </p>
          </div>
        </div>
      </section>

      {/* CTA - Minimal */}
      <section className="py-24 bg-primary text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h2 className="font-display text-3xl font-bold mb-2">Partner with Experienced Operators</h2>
              <p className="text-emerald-100">Institutional discipline. Entrepreneurial execution.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <a
                href="/FoxRidge_Company_Overview.pdf"
                download
                className="flex items-center gap-2 border border-white/40 text-white hover:bg-white/10 transition-colors px-8 py-4 text-base font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download Firm Overview
              </a>
              <Link href="/contact">
                <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90 px-8 py-6 text-lg rounded-none transition-colors duration-300 font-bold">
                  Get in Touch <ArrowUpRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
