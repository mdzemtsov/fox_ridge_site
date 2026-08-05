import { useParams, Link } from "wouter";
import { ArrowLeft, Calendar, Clock, TrendingUp, Share2, Download } from "lucide-react";
import { motion } from "framer-motion";

const reportMeta: Record<string, {
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  category: string;
  file: string;
}> = {
  "texas-triangle-advantage": {
    title: "The Texas Triangle Advantage",
    subtitle: "Why Texas Is the Most Compelling Multifamily Market Right Now",
    date: "May 22, 2026",
    readTime: "12 min read",
    category: "Market Analysis",
    file: "/research/texas-triangle-advantage.html",
  },
};

export default function ReportViewer() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const meta = reportMeta[slug];

  if (!meta) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50">
        <div className="text-center">
          <h1 className="text-3xl font-display font-bold text-primary mb-4">Report Not Found</h1>
          <Link href="/investor-resources">
            <button className="inline-flex items-center gap-2 text-secondary font-medium hover:underline">
              <ArrowLeft className="w-4 h-4" /> Back to Investor Resources
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      {/* Top bar */}
      <div className="bg-primary text-white py-4 border-b border-white/10">
        <div className="container flex items-center justify-between gap-4 flex-wrap">
          <Link href="/investor-resources">
            <button className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-medium group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Investor Resources
            </button>
          </Link>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" /> {meta.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> {meta.readTime}
            </span>
            <span className="flex items-center gap-1.5 text-secondary font-semibold">
              <TrendingUp className="w-3.5 h-3.5" /> {meta.category}
            </span>
          </div>
        </div>
      </div>

      {/* Report header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white border-b border-stone-200 py-10"
      >
        <div className="container max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest mb-4">
            <TrendingUp className="w-3 h-3" /> {meta.category}
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-primary mb-3 leading-tight">
            {meta.title}
          </h1>
          <p className="text-xl text-secondary font-medium mb-6">{meta.subtitle}</p>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">FR</div>
            <div>
              <p className="text-sm font-semibold text-primary">FoxRidge Investment Team</p>
              <p className="text-xs text-stone-400">{meta.date} · {meta.readTime}</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Report content */}
      <div className="flex-1 container max-w-6xl py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white shadow-sm border border-stone-200 overflow-hidden"
        >
          <iframe
            src={meta.file}
            title={meta.title}
            className="w-full border-0"
            style={{ minHeight: "calc(100vh - 200px)", height: "1200px" }}
            sandbox="allow-same-origin allow-scripts"
          />
        </motion.div>
      </div>

      {/* Bottom nav */}
      <div className="bg-white border-t border-stone-200 py-6">
        <div className="container flex items-center justify-between flex-wrap gap-4">
          <Link href="/investor-resources">
            <button className="inline-flex items-center gap-2 text-primary font-medium hover:text-secondary transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Investor Resources
            </button>
          </Link>
          <Link href="/contact">
            <button className="inline-flex items-center gap-2 bg-secondary hover:bg-primary text-white font-bold px-6 py-3 transition-colors text-sm">
              Discuss This Opportunity →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
