import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, FileText, TrendingUp, Calendar, Clock } from "lucide-react";

const reports = [
  {
    id: "texas-triangle-advantage",
    title: "The Texas Triangle Advantage",
    subtitle: "Why Texas Is the Most Compelling Multifamily Market Right Now",
    date: "May 22, 2026",
    readTime: "12 min read",
    category: "Market Analysis",
    description:
      "A deep-dive into the six converging forces creating a rare trough-cycle entry opportunity across Dallas–Fort Worth, Houston, San Antonio, and Austin. Supply cliff, debt maturity wall, demand engine — all analyzed with institutional rigor.",
    tags: ["Texas Triangle", "Multifamily", "Value-Add", "Market Cycle"],
    href: "/market-insights/texas-triangle-advantage",
    file: "/research/texas-triangle-advantage.html",
    featured: true,
  },
];

export default function MarketInsights() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-32 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(255,255,255,0.3) 80px, rgba(255,255,255,0.3) 81px), repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(255,255,255,0.3) 80px, rgba(255,255,255,0.3) 81px)"
          }} />
        </div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 mb-8">
              <BookOpen className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium tracking-wide uppercase">Proprietary Research</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              Market <span className="text-secondary">Insights</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
              Institutional-grade research on multifamily real estate markets, investment cycles, and emerging opportunities — published by the FoxRidge investment team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-secondary py-6">
        <div className="container">
          <div className="flex flex-wrap gap-8 items-center justify-center md:justify-start text-white text-sm font-medium">
            <span className="flex items-center gap-2"><TrendingUp className="w-4 h-4" /> Data-driven analysis</span>
            <span className="w-px h-4 bg-white/30 hidden md:block" />
            <span className="flex items-center gap-2"><FileText className="w-4 h-4" /> Institutional methodology</span>
            <span className="w-px h-4 bg-white/30 hidden md:block" />
            <span className="flex items-center gap-2"><BookOpen className="w-4 h-4" /> Updated regularly</span>
          </div>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="py-24 bg-stone-50">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl font-display font-bold text-primary mb-2">Latest Research</h2>
            <div className="w-16 h-1 bg-secondary" />
          </div>

          <div className="grid gap-8">
            {reports.map((report, i) => (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <a href={report.file} target="_blank" rel="noopener noreferrer">
                  <div className={`group bg-white border-2 rounded-none overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${report.featured ? "border-secondary" : "border-stone-200 hover:border-secondary"}`}>
                    {report.featured && (
                      <div className="bg-secondary px-6 py-2 flex items-center gap-2">
                        <span className="text-white text-xs font-bold uppercase tracking-widest">Featured Report</span>
                      </div>
                    )}
                    <div className="p-8 md:p-10">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-3 py-1">
                          <TrendingUp className="w-3 h-3" />
                          {report.category}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-stone-400">
                          <Calendar className="w-3 h-3" />
                          {report.date}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-stone-400">
                          <Clock className="w-3 h-3" />
                          {report.readTime}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                        {report.title}
                      </h3>
                      <p className="text-secondary font-medium mb-4">{report.subtitle}</p>
                      <p className="text-stone-600 leading-relaxed mb-6 max-w-3xl">{report.description}</p>

                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap gap-2">
                          {report.tags.map((tag) => (
                            <span key={tag} className="text-xs px-3 py-1 bg-stone-100 text-stone-500 font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className="inline-flex items-center gap-2 text-secondary font-bold text-sm group-hover:gap-3 transition-all">
                          Read Full Report <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Coming soon placeholder */}
          <div className="mt-8 p-8 border-2 border-dashed border-stone-300 text-center">
            <BookOpen className="w-8 h-8 text-stone-300 mx-auto mb-3" />
            <p className="text-stone-400 font-medium">More research reports coming soon</p>
            <p className="text-stone-300 text-sm mt-1">Subscribe to be notified when new reports are published</p>
            <Link href="/contact">
              <button className="mt-4 px-6 py-2 bg-primary text-white text-sm font-medium hover:bg-secondary transition-colors">
                Get Notified
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to invest based on the data?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Our research informs every acquisition decision. Let's discuss how you can participate.
          </p>
          <Link href="/contact">
            <button className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-bold px-8 py-4 transition-all group">
              Schedule a Call <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
