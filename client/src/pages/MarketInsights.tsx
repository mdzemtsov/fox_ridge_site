import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, FileText, BarChart2, Download, ExternalLink, BookOpen, Lock } from "lucide-react";

interface Resource {
  id: string;
  title: string;
  subtitle: string;
  type: "Report" | "PDF" | "Interactive Dashboard";
  typeIcon: React.ReactNode;
  typeColor: string;
  description: string;
  tags: string[];
  date: string;
  readTime: string;
  file: string;
  ctaLabel: string;
  ctaIcon: React.ReactNode;
  featured?: boolean;
}

const resources: Resource[] = [
  {
    id: "texas-triangle-advantage",
    title: "The Texas Triangle Advantage",
    subtitle: "Why Texas Is the Most Compelling Multifamily Market Right Now",
    type: "Report",
    typeIcon: <BookOpen className="w-3.5 h-3.5" />,
    typeColor: "bg-blue-900/40 text-blue-300 border-blue-700/40",
    description:
      "A comprehensive investment thesis covering the Texas Triangle multifamily opportunity: supply cliff dynamics, demographic tailwinds, capital market dislocation, and market-by-market verdicts for Houston, San Antonio, DFW, and Austin. Includes macro data, submarket analysis, and FoxRidge's positioning rationale.",
    tags: ["Texas Triangle", "Multifamily", "Value-Add", "Market Cycle"],
    date: "May 22, 2026",
    readTime: "12 min read",
    file: "/research/texas-triangle-advantage.html",
    ctaLabel: "View Report",
    ctaIcon: <ExternalLink className="w-4 h-4" />,
    featured: true,
  },
  {
    id: "texas-triangle-teaser",
    title: "Texas Triangle Multifamily 2026: Why the Window Is Open",
    subtitle: "2-Page Investment Thesis Summary",
    type: "PDF",
    typeIcon: <FileText className="w-3.5 h-3.5" />,
    typeColor: "bg-amber-900/30 text-amber-300 border-amber-700/40",
    description:
      "A concise 2-page thesis summarizing the once-in-a-generation entry window: −56% U.S. multifamily starts from peak, +391K Texas net new residents, $162B in maturing loans, and market verdicts for Houston, San Antonio, DFW, and Austin. The institutional buy signal — when Freddie Mac and Fannie Mae converge on the same call.",
    tags: ["Texas Triangle", "Supply Cliff", "Entry Window"],
    date: "May 2026",
    readTime: "2 pages",
    file: "/research/texas-triangle-2026-teaser.pdf",
    ctaLabel: "Download PDF",
    ctaIcon: <Download className="w-4 h-4" />,
  },
  {
    id: "class-b-a-dashboard",
    title: "Class B+/A Multifamily Intelligence Dashboard",
    subtitle: "Acquisition Verdict: Deploy Now into Houston, South Florida & San Antonio",
    type: "Interactive Dashboard",
    typeIcon: <BarChart2 className="w-3.5 h-3.5" />,
    typeColor: "bg-emerald-900/30 text-emerald-300 border-emerald-700/40",
    description:
      "A 10-module interactive dashboard covering the full Class B+/A investment thesis: macro framework, capital markets, supply & demand dynamics, market rankings, scenario analysis (base/bull/bear), renovation economics, risk matrix, and GSE data sources. Class B+/A outperforms on risk-adjusted returns across every cycle — and the window is open now.",
    tags: ["Class B+/A", "Houston", "South Florida", "San Antonio", "Acquisition"],
    date: "May 22, 2026",
    readTime: "10 modules",
    file: "/research/class-b-a-intelligence-dashboard.html",
    ctaLabel: "Open Dashboard",
    ctaIcon: <ExternalLink className="w-4 h-4" />,
  },
];

const TYPE_ICON_MAP: Record<Resource["type"], React.ReactNode> = {
  "Report": <BookOpen className="w-4 h-4" />,
  "PDF": <FileText className="w-4 h-4" />,
  "Interactive Dashboard": <BarChart2 className="w-4 h-4" />,
};

export default function MarketInsights() {
  return (
    <div className="flex flex-col min-h-screen bg-[#040C1D]">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0E2148] via-[#081733] to-[#040C1D]" />
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "radial-gradient(ellipse at 70% 50%, rgba(201,168,70,0.12) 0%, transparent 65%)" }} />
        <div className="relative container py-20 pt-24">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 bg-[#C9A846]/10 border border-[#C9A846]/30 text-[#C9A846] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A846]" />
              Investor Resources
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight tracking-tight">
              Research &amp; <span className="text-[#C9A846]">Investor Materials</span>
            </h1>
            <p className="text-lg text-[#8899AA] max-w-2xl leading-relaxed">
              Institutional-grade research, investment theses, and analytical tools published by the FoxRidge investment team. These materials are intended for qualified investors evaluating the Texas Triangle multifamily opportunity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Resource Library ─────────────────────────────────────────────── */}
      <section className="py-10 md:py-16">
        <div className="container">

          {/* Featured resource */}
          {resources.filter(r => r.featured).map(r => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10 bg-[#0E2148]/60 border border-white/10 hover:border-[#C9A846]/40 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,168,70,0.07)]"
            >
              {/* Featured label */}
              <div className="bg-[#C9A846]/10 border-b border-[#C9A846]/20 px-6 py-2.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A846] animate-pulse" />
                <span className="text-[#C9A846] text-xs font-bold tracking-widest uppercase">Featured Resource</span>
              </div>

              <div className="p-8 md:flex md:gap-10 md:items-start">
                {/* Left: meta */}
                <div className="md:w-56 flex-shrink-0 mb-6 md:mb-0">
                  <span className={`inline-flex items-center gap-1.5 text-xs font-bold tracking-wide uppercase px-3 py-1.5 rounded-full border ${r.typeColor} mb-4`}>
                    {r.typeIcon}
                    {r.type}
                  </span>
                  <p className="text-[#8899AA] text-xs mb-1">{r.date}</p>
                  <p className="text-[#8899AA] text-xs">{r.readTime}</p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {r.tags.map(t => (
                      <span key={t} className="bg-white/5 border border-white/10 text-[#8899AA] text-xs px-2 py-0.5 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Right: content */}
                <div className="flex-1">
                  <h2 className="text-white text-2xl font-bold mb-1 leading-snug">{r.title}</h2>
                  <p className="text-[#C9A846] text-sm font-medium mb-4">{r.subtitle}</p>
                  <p className="text-[#8899AA] text-sm leading-relaxed mb-6">{r.description}</p>
                  <a
                    href={r.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#C9A846] hover:bg-[#B8973A] text-[#040C1D] font-bold text-sm tracking-wide uppercase px-6 py-3 rounded-lg transition-all"
                  >
                    {r.ctaIcon}
                    {r.ctaLabel}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Resource grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {resources.filter(r => !r.featured).map((r, idx) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-[#0E2148]/60 border border-white/10 hover:border-[#C9A846]/40 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,70,0.06)] flex flex-col"
              >
                {/* Card header */}
                <div className="bg-[#081733] px-6 py-5 border-b border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-bold tracking-wide uppercase px-3 py-1.5 rounded-full border ${r.typeColor}`}>
                      {r.typeIcon}
                      {r.type}
                    </span>
                    <span className="text-[#8899AA] text-xs">{r.readTime}</span>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug mb-1">{r.title}</h3>
                  <p className="text-[#C9A846] text-sm font-medium">{r.subtitle}</p>
                </div>

                {/* Card body */}
                <div className="px-6 py-5 flex flex-col flex-1">
                  <p className="text-[#8899AA] text-sm leading-relaxed mb-5 flex-1">{r.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {r.tags.map(t => (
                      <span key={t} className="bg-white/5 border border-white/10 text-[#8899AA] text-xs px-2 py-0.5 rounded-full">{t}</span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-[#8899AA] text-xs">{r.date}</span>
                    <a
                      href={r.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#C9A846] hover:bg-[#B8973A] text-[#040C1D] font-bold text-xs tracking-wide uppercase px-4 py-2.5 rounded-lg transition-all"
                    >
                      {r.ctaIcon}
                      {r.ctaLabel}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Investor Portal Cross-Promo ───────────────────────────────────── */}
      <section className="py-10 md:py-14 bg-gradient-to-r from-[#040C1D] via-[#0E2148] to-[#040C1D] border-y border-[#C9A846]/20">
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
                <h3 className="text-white text-2xl font-bold mb-2">Go Deeper — Full Investor Presentations</h3>
                <p className="text-[#8899AA] max-w-xl leading-relaxed text-sm">
                  Beyond our public research, qualified investors can access complete deal presentations in English and Russian — including structure, program terms, and direct investment details.
                </p>
              </div>
            </div>
            <div className="flex-shrink-0">
              <Link href="/investor-portal">
                <button className="inline-flex items-center gap-2 bg-[#C9A846] hover:bg-[#B8973A] text-[#040C1D] font-bold px-8 py-3 text-sm tracking-widest uppercase rounded-lg transition-all whitespace-nowrap">
                  Access Portal →
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-12 md:py-20 bg-[#0E2148]">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to invest based on the data?
          </h2>
          <p className="text-[#8899AA] text-lg mb-8 max-w-xl mx-auto">
            Our research informs every acquisition decision. Let's discuss how you can participate.
          </p>
          <Link href="/contact">
            <button className="inline-flex items-center gap-2 bg-[#C9A846] hover:bg-[#B8973A] text-[#040C1D] font-bold px-8 py-4 text-sm tracking-widest uppercase rounded-lg transition-all">
              Schedule a Call <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
}
