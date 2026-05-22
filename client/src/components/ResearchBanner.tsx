import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, FileText, BarChart2, TrendingUp } from "lucide-react";

const REPORTS = [
  {
    id: "texas-triangle-advantage",
    icon: TrendingUp,
    label: "Market Analysis",
    title: "The Texas Triangle Advantage",
    teaser: "Six converging forces creating a rare trough-cycle entry window in Texas multifamily.",
    cta: "Read Report",
    href: "/research/texas-triangle-advantage.html",
  },
  {
    id: "texas-triangle-teaser",
    icon: FileText,
    label: "2-Page PDF",
    title: "Texas Triangle 2026: Why the Window Is Open",
    teaser: "−56% starts from peak · +391K new Texas residents · $162B in maturing loans.",
    cta: "Download PDF",
    href: "/research/texas-triangle-2026-teaser.pdf",
  },
  {
    id: "class-b-a-dashboard",
    icon: BarChart2,
    label: "Intelligence Dashboard",
    title: "Class B+/A Multifamily Intelligence Dashboard",
    teaser: "10-module interactive report: macro, capital markets, scenario analysis & risk matrix.",
    cta: "Open Dashboard",
    href: "/research/class-b-a-intelligence-dashboard.html",
  },
];

const STORAGE_KEY = "fr_banner_index";
const BANNER_HEIGHT = 64; // px — exported so Layout can use it

function getInitialIndex(): number {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const prev = stored !== null ? parseInt(stored, 10) : -1;
    const next = (prev + 1) % REPORTS.length;
    localStorage.setItem(STORAGE_KEY, String(next));
    return next;
  } catch {
    return 0;
  }
}

export default function ResearchBanner() {
  const [current, setCurrent] = useState<number>(0);
  const [dismissed, setDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setCurrent(getInitialIndex());
    setMounted(true);
  }, []);

  // Auto-rotate every 7 seconds
  useEffect(() => {
    if (!mounted || dismissed) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % REPORTS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [mounted, dismissed]);

  const prev = () => setCurrent((c) => (c - 1 + REPORTS.length) % REPORTS.length);
  const next = () => setCurrent((c) => (c + 1) % REPORTS.length);

  if (dismissed || !mounted) return null;

  const item = REPORTS[current];
  const Icon = item.icon;

  return (
    <div
      className="relative bg-stone-950 text-white overflow-hidden"
      style={{ borderBottom: "2px solid rgba(201,168,76,0.4)", minHeight: `${BANNER_HEIGHT}px` }}
    >
      {/* Background subtle texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 60px)"
      }} />

      <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 sm:gap-3 py-3" style={{ minHeight: `${BANNER_HEIGHT}px` }}>

          {/* Prev button */}
          <button
            onClick={prev}
            className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-white/10 text-white/40 hover:text-amber-400 hover:border-amber-400/40 transition-all"
            aria-label="Previous report"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Main content */}
          <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 min-w-0">

            {/* Label row (mobile: above title) */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-amber-400 text-[11px] font-bold uppercase tracking-widest whitespace-nowrap">
                {item.label}
              </span>
              <span className="hidden sm:block w-px h-4 bg-white/20" />
            </div>

            {/* Icon + title + teaser */}
            <div className="flex items-start sm:items-center gap-2 min-w-0 flex-1">
              <Icon className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 sm:mt-0" />
              <div className="min-w-0">
                <span className="text-white text-sm font-bold leading-tight block sm:inline">
                  {item.title}
                </span>
                <span className="text-white/50 text-xs hidden md:inline ml-2">
                  — {item.teaser}
                </span>
                {/* Teaser on its own line on tablet */}
                <span className="text-white/50 text-xs block md:hidden mt-0.5 leading-snug">
                  {item.teaser}
                </span>
              </div>
            </div>

            {/* CTA button */}
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-stone-950 text-xs font-bold uppercase tracking-wider px-4 py-2 transition-colors whitespace-nowrap self-start sm:self-auto"
            >
              {item.cta}
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Dot indicators — visible on sm+ */}
          <div className="shrink-0 hidden sm:flex items-center gap-1.5 mx-1">
            {REPORTS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-4 h-2 bg-amber-400"
                    : "w-2 h-2 bg-white/20 hover:bg-white/50"
                }`}
                aria-label={`Go to report ${i + 1}`}
              />
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={next}
            className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-white/10 text-white/40 hover:text-amber-400 hover:border-amber-400/40 transition-all"
            aria-label="Next report"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Dismiss */}
          <button
            onClick={() => setDismissed(true)}
            className="shrink-0 w-7 h-7 flex items-center justify-center text-white/25 hover:text-white/70 transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Animated gold progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-amber-900/30">
        <div
          key={`${current}-progress`}
          className="h-full bg-amber-400"
          style={{ animation: "fr-progress 7s linear forwards" }}
        />
      </div>

      <style>{`
        @keyframes fr-progress {
          from { width: 0% }
          to   { width: 100% }
        }
      `}</style>
    </div>
  );
}
