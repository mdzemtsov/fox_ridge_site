import { useState, useEffect } from "react";
import { Link } from "wouter";
import { X, ChevronLeft, ChevronRight, FileText, BarChart2, TrendingUp } from "lucide-react";

const announcements = [
  {
    id: "texas-triangle-advantage",
    icon: TrendingUp,
    label: "Market Analysis",
    title: "The Texas Triangle Advantage",
    teaser: "Six converging forces creating a rare trough-cycle entry window — read the full thesis.",
    cta: "Read Report",
    href: "/research/texas-triangle-advantage.html",
    external: true,
    color: "secondary",
  },
  {
    id: "texas-triangle-teaser",
    icon: FileText,
    label: "2-Page PDF",
    title: "Why the Window Is Open — Texas Triangle 2026",
    teaser: "−56% starts from peak · +391K new residents · $162B maturing loans. Download the teaser.",
    cta: "Download PDF",
    href: "/research/texas-triangle-2026-teaser.pdf",
    external: true,
    color: "amber",
  },
  {
    id: "class-b-a-dashboard",
    icon: BarChart2,
    label: "Intelligence Dashboard",
    title: "Class B+/A Multifamily Dashboard",
    teaser: "10-module interactive report: macro, capital markets, scenario analysis, risk matrix & more.",
    cta: "Open Dashboard",
    href: "/research/class-b-a-intelligence-dashboard.html",
    external: true,
    color: "secondary",
  },
];

export default function ResearchBanner() {
  const [current, setCurrent] = useState(0);
  const [dismissed, setDismissed] = useState(false);
  const [visible, setVisible] = useState(true);

  // Auto-rotate every 6 seconds
  useEffect(() => {
    if (dismissed) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % announcements.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [dismissed]);

  const prev = () => setCurrent((c) => (c - 1 + announcements.length) % announcements.length);
  const next = () => setCurrent((c) => (c + 1) % announcements.length);

  if (dismissed || !visible) return null;

  const item = announcements[current];
  const Icon = item.icon;

  return (
    <div className="relative bg-primary border-b border-secondary/30 text-white z-40">
      <div className="container">
        <div className="flex items-center gap-3 py-2.5 min-h-[44px]">
          {/* Left nav */}
          <button
            onClick={prev}
            className="shrink-0 w-6 h-6 flex items-center justify-center text-white/40 hover:text-secondary transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Content */}
          <div className="flex-1 flex items-center justify-center gap-3 overflow-hidden">
            <div className="shrink-0 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              <span className="text-secondary text-[10px] font-bold uppercase tracking-widest hidden sm:inline">
                {item.label}
              </span>
            </div>

            <div className="flex items-center gap-2 overflow-hidden">
              <Icon className="w-3.5 h-3.5 text-secondary shrink-0" />
              <span className="text-white text-xs font-semibold truncate">
                {item.title}
              </span>
              <span className="text-white/40 text-xs hidden md:inline truncate">
                — {item.teaser}
              </span>
            </div>

            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-1 bg-secondary hover:bg-secondary/80 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 transition-colors whitespace-nowrap"
            >
              {item.cta} →
            </a>
          </div>

          {/* Right nav + dots */}
          <div className="shrink-0 flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1">
              {announcements.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    i === current ? "bg-secondary scale-125" : "bg-white/25 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-6 h-6 flex items-center justify-center text-white/40 hover:text-secondary transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setDismissed(true)}
              className="w-6 h-6 flex items-center justify-center text-white/30 hover:text-white/70 transition-colors ml-1"
              aria-label="Dismiss"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-secondary/20 w-full">
        <div
          key={current}
          className="h-full bg-secondary"
          style={{
            animation: "progress-bar 6s linear forwards",
          }}
        />
      </div>

      <style>{`
        @keyframes progress-bar {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}
