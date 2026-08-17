import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle2, Award, Briefcase, GraduationCap, ArrowUpRight, Mail, Linkedin } from "lucide-react";

// ─── Shared typography constants ────────────────────────────────────────────
// Applied identically to both profile sections to guarantee visual consistency.
const NAME_CLASS    = "font-display text-3xl md:text-5xl font-bold text-stone-900 mb-3 leading-tight";
const TITLE_CLASS   = "font-mono text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-10";
const LEAD_CLASS    = "text-xl text-stone-700 font-light leading-[1.75] mb-8";
const BODY_CLASS    = "text-base text-stone-500 leading-[1.85] mb-6";
const BOX_CLASS     = "bg-stone-50 p-8 border border-stone-200 my-10";
const BOX_HDR_CLASS = "font-display font-bold text-sm text-stone-900 mb-6 uppercase tracking-[0.12em]";
const CRED_CLASS    = "flex items-center gap-4 text-sm text-stone-500";
// ────────────────────────────────────────────────────────────────────────────

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      {/* Hero Section */}
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
            <h1 className="text-4xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Our <br />
              <span className="text-secondary">Team</span>
            </h1>
            <p className="text-xl text-stone-300 max-w-2xl font-light leading-relaxed">
              Led by Mikhail Pritsker and Slava Davidenko, FoxRidge Equity Partners brings over $1 billion in combined transaction experience and a hands-on approach to every asset.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Mikhail Pritsker Profile ─────────────────────────────────────── */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">

            {/* Photo column — left */}
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <div className="aspect-[3/4] bg-stone-100 mb-8 relative overflow-hidden group border border-stone-200">
                  <img 
                    src="/images/mikhail.jpg" 
                    alt="Mikhail Pritsker" 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
                <div className="flex flex-col gap-4 border-t border-stone-200 pt-6">
                  <div className={CRED_CLASS}>
                    <GraduationCap className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>MBA, University of Chicago Booth</span>
                  </div>
                  <div className={CRED_CLASS}>
                    <Award className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>CCIM Designation</span>
                  </div>
                  <div className={CRED_CLASS}>
                    <Briefcase className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>25+ Years Experience</span>
                  </div>
                  <div className="pt-2">
                    <a
                      href="https://www.linkedin.com/in/mikhailpritsker/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Mikhail Pritsker on LinkedIn"
                      className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-[#0A66C2] transition-colors group"
                    >
                      <Linkedin className="w-4 h-4 group-hover:text-[#0A66C2] transition-colors" />
                      <span>LinkedIn Profile</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio column — right */}
            <div className="lg:col-span-7">
              <h2 className={NAME_CLASS}>Mikhail Pritsker</h2>
              <div className="flex items-center gap-4 mb-6">
                <p className={TITLE_CLASS} style={{marginBottom: 0}}>Co-Founder &amp; Managing Partner</p>
                <a
                  href="https://www.linkedin.com/in/mikhailpritsker/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Mikhail Pritsker on LinkedIn"
                  className="inline-flex items-center gap-2 bg-[#0A66C2] hover:bg-[#004182] text-white text-xs font-bold tracking-wide uppercase px-3 py-2 rounded-lg transition-all flex-shrink-0"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
              </div>

              <p className={LEAD_CLASS}>
                Mikhail operates at the intersection of capital, operations, and trust. His career reflects a rare blend of hands-on asset management, strategic portfolio oversight, and institutional-grade investor communication.
              </p>

              <p className={BODY_CLASS}>
                As a senior real estate investment executive with over 25 years of experience, Mikhail has overseen more than <strong>$1 billion in real estate transactions</strong> across multiple market cycles. He is particularly strong where many operators struggle: investor confidence and communication.
              </p>

              <div className={BOX_CLASS}>
                <h4 className={BOX_HDR_CLASS}>Core Strengths</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 list-none pl-0 m-0">
                  {[
                    "Asset & Portfolio Leadership",
                    "NOI Optimization",
                    "Investor Relations",
                    "Capital Strategy",
                    "AI & Analytics",
                    "Complex Development"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-stone-700 font-medium text-sm">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className={BODY_CLASS}>
                He has designed quarterly reporting frameworks, validated monthly LP cash flow distributions, and built investor communication systems focused on transparency and long-term partnership.
              </p>
            </div>

          </div>
        </div>
      </section>

      <div className="container">
        <div className="h-px w-full bg-stone-200" />
      </div>

      {/* ── Slava Davidenko Profile ──────────────────────────────────────── */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">

            {/* Bio column — left on desktop */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <h2 className={NAME_CLASS}>Slava Davidenko</h2>
              <div className="flex items-center gap-4 mb-6">
                <p className={TITLE_CLASS} style={{marginBottom: 0}}>Chairman, Advisory Board</p>
                <a
                  href="https://www.linkedin.com/in/vdavidenko/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Slava Davidenko on LinkedIn"
                  className="inline-flex items-center gap-2 bg-[#0A66C2] hover:bg-[#004182] text-white text-xs font-bold tracking-wide uppercase px-3 py-2 rounded-lg transition-all flex-shrink-0"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
              </div>

              <p className={LEAD_CLASS}>
                Slava combines disciplined underwriting with an operator's mentality—understanding both the capital stack and the operational levers that drive NOI.
              </p>

              <p className={BODY_CLASS}>
                A serial entrepreneur and investor with over 25 years of experience, Slava has managed and invested more than <strong>$600 million across diversified projects</strong>. Over his career, he has been involved in a portfolio exceeding <strong>7,000 units across 36 properties</strong>, including activity under prior sponsoring entities.
              </p>

              <div className={BOX_CLASS}>
                <h4 className={BOX_HDR_CLASS}>Core Strengths</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 list-none pl-0 m-0">
                  {[
                    "Institutional Wealth Mgmt",
                    "Real Estate at Scale",
                    "Entrepreneurship",
                    "AI & Modern Practices",
                    "Capital Raising",
                    "Cross-Industry Experience"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-stone-700 font-medium text-sm">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className={BODY_CLASS}>
                His background includes serving as Managing Director at Renaissance Capital ($500M AUM) and successfully exiting 8 full-cycle deals as a General Partner across multiple market cycles.
              </p>
            </div>

            {/* Photo column — right on desktop */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="sticky top-32">
                <div className="aspect-[3/4] bg-stone-100 mb-8 relative overflow-hidden group border border-stone-200">
                  <img 
                    src="/images/slava_new.webp" 
                    alt="Slava Davidenko" 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
                <div className="flex flex-col gap-4 border-t border-stone-200 pt-6">
                  <div className={CRED_CLASS}>
                    <GraduationCap className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>MBA, University of Chicago Booth</span>
                  </div>
                  <div className={CRED_CLASS}>
                    <GraduationCap className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Engineering Degree, MEPhI</span>
                  </div>
                  <div className={CRED_CLASS}>
                    <Briefcase className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>7,000+ Units Invested</span>
                  </div>
                  <div className="pt-2">
                    <a
                      href="https://www.linkedin.com/in/vdavidenko/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Slava Davidenko on LinkedIn"
                      className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-[#0A66C2] transition-colors group"
                    >
                      <Linkedin className="w-4 h-4 group-hover:text-[#0A66C2] transition-colors" />
                      <span>LinkedIn Profile</span>
                    </a>
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

      {/* Research & Insights Banner */}
      <section className="py-10 bg-stone-100 border-t border-stone-200">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-1 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" /> New Research Published
              </p>
              <h3 className="text-primary font-display font-bold text-xl">Read Our Research & Insights — The Texas Triangle Advantage</h3>
              <p className="text-stone-500 text-sm mt-1">Institutional-grade analysis on why Texas multifamily is the most compelling opportunity of 2026.</p>
            </div>
            <Link href="/investor-resources" className="shrink-0">
              <button className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white font-bold px-6 py-3 text-sm whitespace-nowrap transition-colors">
                View Research →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
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
