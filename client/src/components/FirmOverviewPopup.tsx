import { useEffect, useState, useRef, useCallback } from "react";
import { X, Download, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SESSION_KEY = "fr_firm_overview_popup_dismissed";
const SHOW_DELAY_MS = 4000; // 4 seconds after page load

export default function FirmOverviewPopup() {
  const [visible, setVisible] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Show popup after delay, unless already dismissed this session
  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    const timer = setTimeout(() => setVisible(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  // Focus close button when popup opens
  useEffect(() => {
    if (visible) {
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    }
  }, [visible]);

  const dismiss = useCallback(() => {
    sessionStorage.setItem(SESSION_KEY, "1");
    setVisible(false);
  }, []);

  // Escape key handler
  useEffect(() => {
    if (!visible) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [visible, dismiss]);

  // Click outside to dismiss
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) dismiss();
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          ref={overlayRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="popup-heading"
          onClick={handleOverlayClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center sm:justify-end p-4 sm:p-8"
          style={{ background: "rgba(4, 12, 29, 0.55)", backdropFilter: "blur(4px)" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-sm bg-[#0E2148] border border-[#C9A846]/30 rounded-2xl shadow-[0_24px_64px_rgba(0,0,0,0.6)] overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* Gold top accent line */}
            <div className="h-0.5 w-full bg-gradient-to-r from-[#C9A846] via-[#E8C96A] to-[#C9A846]" />

            {/* Close button */}
            <button
              ref={closeButtonRef}
              onClick={dismiss}
              aria-label="Close popup"
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-[#C9A846]/50"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Content */}
            <div className="px-7 pt-7 pb-7">
              {/* Brand label */}
              <div className="inline-flex items-center gap-2 bg-[#C9A846]/10 border border-[#C9A846]/25 text-[#C9A846] text-[10px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A846]" />
                FoxRidge Equity Partners
              </div>

              {/* Icon + Heading */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-11 h-11 rounded-xl bg-[#C9A846]/10 border border-[#C9A846]/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FileText className="w-5 h-5 text-[#C9A846]" />
                </div>
                <div>
                  <h2 id="popup-heading" className="text-white font-bold text-lg leading-snug mb-1">
                    Firm Overview
                  </h2>
                  <p className="text-[#C9A846] text-xs font-medium tracking-wide">
                    Private Multifamily Real Estate
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-[#8899AA] text-sm leading-relaxed mb-6">
                A concise overview of FoxRidge Equity Partners — our investment strategy, Sun Belt focus, track record, and how we work with qualified investors.
              </p>

              {/* CTA */}
              <a
                href="/FoxRidge_Company_Overview.pdf"
                download
                onClick={dismiss}
                className="flex items-center justify-center gap-2.5 w-full bg-[#C9A846] hover:bg-[#B8973A] text-[#040C1D] font-bold text-sm tracking-wide uppercase py-3.5 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-[#C9A846]/60"
              >
                <Download className="w-4 h-4" />
                Download Firm Overview
              </a>

              {/* Dismiss link */}
              <button
                onClick={dismiss}
                className="w-full text-center text-[#8899AA] hover:text-white text-xs mt-3 py-1 transition-colors focus:outline-none focus:underline"
              >
                No thanks
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
