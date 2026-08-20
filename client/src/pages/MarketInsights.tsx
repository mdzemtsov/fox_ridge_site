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

const resources: Resource[] = [];

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
        <div className="relative container py-12 md:py-16">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 bg-[#C9A846]/10 border border-[#C9A846]/30 text-[#C9A846] text-xs font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A846]" />
              Research &amp; Insights
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight tracking-tight">
              Research &amp; <span className="text-[#C9A846]">Insights</span>
            </h1>
            <p className="text-lg text-[#8899AA] max-w-2xl leading-relaxed">
              Research and analytical materials published by the FoxRidge investment team. These materials are provided for informational purposes only and do not constitute an offer, solicitation, recommendation, or investment advice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Resource Library ─────────────────────────────────────────────── */}
      <section className="py-8 md:py-12">
        <div className="container">

          {resources.length === 0 && (
            <div className="max-w-3xl bg-[#0E2148]/60 border border-white/10 rounded-xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-[#C9A846]/10 border border-[#C9A846]/30 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-[#C9A846]" />
                </div>
                <div>
                  <p className="text-[#C9A846] text-xs font-bold tracking-widest uppercase mb-2">Research Library Update</p>
                  <h2 className="text-white text-2xl font-bold mb-3">Materials Under Review</h2>
                  <p className="text-[#8899AA] text-sm leading-relaxed">
                    FoxRidge is reviewing public research materials to ensure their market focus, supporting data, and public availability remain aligned with its approved messaging. For additional information, please contact FoxRidge directly.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Featured resource */}
          {resources.filter(r => r.featured).map(r => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 md:mb-8 bg-[#0E2148]/60 border border-white/10 hover:border-[#C9A846]/40 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_32px_rgba(201,168,70,0.07)]"
            >
              {/* Featured label */}
              <div className="bg-[#C9A846]/10 border-b border-[#C9A846]/20 px-5 py-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A846] animate-pulse" />
                <span className="text-[#C9A846] text-xs font-bold tracking-widest uppercase">Featured Resource</span>
              </div>

              <div className="p-5 md:p-6 md:flex md:gap-8 md:items-start">
                {/* Left: meta */}
                <div className="md:w-48 flex-shrink-0 mb-5 md:mb-0">
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
          <div className="grid max-w-3xl gap-5">
            {resources.filter(r => !r.featured).map((r, idx) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-[#0E2148]/60 border border-white/10 hover:border-[#C9A846]/40 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_28px_rgba(201,168,70,0.06)] flex flex-col"
              >
                {/* Card header */}
                <div className="bg-[#081733] px-5 py-4 border-b border-white/10">
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
                <div className="px-5 py-4 flex flex-col flex-1">
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
                  Beyond our public research, qualified investors can request access to additional firm and market materials in English and Russian, subject to the applicable access process and review.
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
            Explore a Direct Partnership
          </h2>
          <p className="text-[#8899AA] text-lg mb-8 max-w-xl mx-auto">
            Our research informs our acquisition process. Let’s discuss whether a direct multifamily partnership may be a fit for your objectives.
          </p>
          <Link href="/contact">
            <button className="inline-flex items-center gap-2 bg-[#C9A846] hover:bg-[#B8973A] text-[#040C1D] font-bold px-8 py-4 text-sm tracking-widest uppercase rounded-lg transition-all">
              Invest With Us <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
}
