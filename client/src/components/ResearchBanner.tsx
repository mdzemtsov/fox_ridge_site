import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, FileText, BarChart2, TrendingUp } from "lucide-react";

const REPORTS = [
  {
    id: "texas-triangle-advantage",
    icon: TrendingUp,
    label: "Market Analysis",
    title: "The Texas Triangle Advantage",
    teaser: "Six converging forces creating a rare trough-cycle entry window.",
    cta: "Read Report",
    href: "/research/texas-triangle-advantage.html",
  },
  {
    id: "texas-triangle-teaser",
    icon: FileText,
    label: "2-Page PDF",
    title: "Texas Triangle 2026: Why the Window Is Open",
    teaser: "−56% starts · +391K new residents · $162B maturing loans.",
    cta: "Download PDF",
    href: "/research/texas-triangle-2026-teaser.pdf",
  },
  {
    id: "class-b-a-dashboard",
    icon: BarChart2,
    label: "Intelligence Dashboard",
    title: "Class B+/A Multifamily Intelligence Dashboard",
    teaser: "10-module interactive report: macro, capital markets, risk matrix & more.",
    cta: "Open Dashboard",
    href: "/research/class-b-a-intelligence-dashboard.html",
  },
];

const STORAGE_KEY = "fr_banner_index";

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
    // Set the per-visit starting index on mount
    setCurrent(getInitialIndex());
    setMounted(true);
  }, []);

  // Auto-rotate every 7 seconds within the session
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
      style={{ borderBottom: "1px solid rgba(201,168,76,0.25)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 py-2 min-h-[42px]">

          {/* Prev button */}
          <button
            onClick={prev}
            className="shrink-0 p-1 text-white/30 hover:text-amber-400 transition-colors"
            aria-label="Previous report"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>

          {/* Main content */}
          <div className="flex-1 flex items-center justify-center gap-2 sm:gap-3 min-w-0">
            {/* Pulse dot + label */}
            <div className="shrink-0 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-amber-400 text-[10px] font-bold uppercase tracking-widest hidden sm:block whitespace-nowrap">
                {item.label}
              </span>
            </div>

            {/* Separator */}
            <span className="hidden sm:block w-px h-3 bg-white/20 shrink-0" />

            {/* Icon + title */}
            <div className="flex items-center gap-1.5 min-w-0">
              <Icon className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="text-white text-xs font-semibold truncate">
                {item.title}
              </span>
            </div>

            {/* Teaser — hidden on small screens */}
            <span className="text-white/40 text-xs hidden lg:block truncate shrink">
              — {item.teaser}
            </span>

            {/* CTA button */}
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-1 bg-amber-500 hover:bg-amber-400 text-stone-950 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 transition-colors whitespace-nowrap ml-1"
            >
              {item.cta} →
            </a>
          </div>

          {/* Dot indicators */}
          <div className="shrink-0 hidden sm:flex items-center gap-1 mx-1">
            {REPORTS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-3 h-1.5 bg-amber-400"
                    : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to report ${i + 1}`}
              />
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={next}
            className="shrink-0 p-1 text-white/30 hover:text-amber-400 transition-colors"
            aria-label="Next report"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>

          {/* Dismiss */}
          <button
            onClick={() => setDismissed(true)}
            className="shrink-0 p-1 text-white/20 hover:text-white/60 transition-colors ml-1"
            aria-label="Dismiss"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Animated progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber-900/30">
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
