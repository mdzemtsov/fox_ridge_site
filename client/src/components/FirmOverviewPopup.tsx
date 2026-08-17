import { useCallback, useEffect, useRef, useState } from "react";
import { CheckCircle2, FileText, Loader2, Send, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "wouter";

const SESSION_KEY = "fr_firm_overview_request_handled";
const SHOW_DELAY_MS = 4000;

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  entityType: string;
  language: string;
  accreditedInvestorConfirmed: boolean;
  privacyConsent: boolean;
  website: string;
};

const INITIAL_VALUES: FormValues = {
  fullName: "",
  email: "",
  phone: "",
  country: "",
  entityType: "",
  language: "English",
  accreditedInvestorConfirmed: false,
  privacyConsent: false,
  website: "",
};

export default function FirmOverviewPopup() {
  const [visible, setVisible] = useState(false);
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const overlayRef = useRef<HTMLDivElement>(null);
  const fullNameRef = useRef<HTMLInputElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    const timer = window.setTimeout(() => setVisible(true), SHOW_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) return;
    previouslyFocusedElement.current = document.activeElement as HTMLElement;
    const timer = window.setTimeout(() => fullNameRef.current?.focus(), 50);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
      previouslyFocusedElement.current?.focus?.();
    };
  }, [visible]);

  const dismiss = useCallback(() => {
    if (isSubmitting) return;
    sessionStorage.setItem(SESSION_KEY, "1");
    setVisible(false);
  }, [isSubmitting]);

  useEffect(() => {
    if (!visible) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismiss();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [visible, dismiss]);

  const updateValue = <K extends keyof FormValues>(key: K, value: FormValues[K]) => {
    setValues((current) => ({ ...current, [key]: value }));
  };

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === overlayRef.current) dismiss();
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/firm-overview-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(payload.error || "We could not save your request. Please try again.");
      }

      sessionStorage.setItem(SESSION_KEY, "1");
      setSubmitted(true);
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : "We could not save your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          ref={overlayRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="firm-overview-heading"
          onClick={handleOverlayClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center sm:justify-end p-3 sm:p-8"
          style={{ background: "rgba(4, 12, 29, 0.55)", backdropFilter: "blur(4px)" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg max-h-[calc(100dvh-1.5rem)] overflow-y-auto bg-[#0E2148] border border-[#C9A846]/30 rounded-2xl shadow-[0_24px_64px_rgba(0,0,0,0.6)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 z-10 h-0.5 w-full bg-gradient-to-r from-[#C9A846] via-[#E8C96A] to-[#C9A846]" />
            <button
              type="button"
              onClick={dismiss}
              aria-label="Close Firm Overview request form"
              className="absolute top-3 right-3 z-20 w-10 h-10 sm:top-4 sm:right-4 rounded-full flex items-center justify-center text-white/55 hover:text-white hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-[#C9A846]/60"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>

            {submitted ? (
              <div className="px-6 py-10 sm:px-9 sm:py-12 text-center">
                <div className="w-12 h-12 mx-auto mb-5 rounded-full bg-[#C9A846]/10 border border-[#C9A846]/30 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-[#C9A846]" aria-hidden="true" />
                </div>
                <h2 id="firm-overview-heading" className="text-white font-bold text-2xl leading-tight mb-3">
                  Thank You
                </h2>
                <p className="text-[#AAB8C8] text-sm leading-relaxed max-w-sm mx-auto mb-7">
                  Your request has been received. A member of the FoxRidge team will follow up with access to the Firm Overview.
                </p>
                <button
                  type="button"
                  onClick={dismiss}
                  className="inline-flex items-center justify-center bg-[#C9A846] hover:bg-[#B8973A] text-[#040C1D] font-bold text-sm px-6 py-3 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-[#C9A846]/60"
                >
                  Close
                </button>
              </div>
            ) : (
              <div className="px-5 pt-6 pb-6 sm:px-8 sm:pt-8 sm:pb-8">
                <div className="inline-flex items-center gap-2 bg-[#C9A846]/10 border border-[#C9A846]/25 text-[#C9A846] text-[10px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A846]" />
                  FoxRidge Equity Partners
                </div>

                <div className="flex items-start gap-4 mb-3 pr-10">
                  <div className="w-11 h-11 rounded-xl bg-[#C9A846]/10 border border-[#C9A846]/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FileText className="w-5 h-5 text-[#C9A846]" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 id="firm-overview-heading" className="text-white font-bold text-xl leading-snug mb-1">
                      Request the Firm Overview
                    </h2>
                    <p className="text-[#C9A846] text-xs font-medium tracking-wide">
                      Private Multifamily Real Estate
                    </p>
                  </div>
                </div>

                <p className="text-[#AAB8C8] text-sm leading-relaxed mb-6">
                  Learn about our acquisition strategy, target markets, and approach to working with qualified investors.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-white/65 mb-2">Full Name <span aria-hidden="true">*</span></span>
                      <input ref={fullNameRef} required autoComplete="name" value={values.fullName} onChange={(event) => updateValue("fullName", event.target.value)} className="w-full rounded-lg border border-white/15 bg-white/[0.05] px-3 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-[#C9A846] focus:ring-2 focus:ring-[#C9A846]/20" placeholder="Your name" />
                    </label>
                    <label className="block">
                      <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-white/65 mb-2">Email <span aria-hidden="true">*</span></span>
                      <input required type="email" autoComplete="email" value={values.email} onChange={(event) => updateValue("email", event.target.value)} className="w-full rounded-lg border border-white/15 bg-white/[0.05] px-3 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-[#C9A846] focus:ring-2 focus:ring-[#C9A846]/20" placeholder="you@example.com" />
                    </label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-white/65 mb-2">Phone</span>
                      <input type="tel" autoComplete="tel" value={values.phone} onChange={(event) => updateValue("phone", event.target.value)} className="w-full rounded-lg border border-white/15 bg-white/[0.05] px-3 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-[#C9A846] focus:ring-2 focus:ring-[#C9A846]/20" placeholder="Optional" />
                    </label>
                    <label className="block">
                      <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-white/65 mb-2">Country / Residence <span aria-hidden="true">*</span></span>
                      <input required autoComplete="country-name" value={values.country} onChange={(event) => updateValue("country", event.target.value)} className="w-full rounded-lg border border-white/15 bg-white/[0.05] px-3 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-[#C9A846] focus:ring-2 focus:ring-[#C9A846]/20" placeholder="Country" />
                    </label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-white/65 mb-2">Investor Type <span aria-hidden="true">*</span></span>
                      <select required value={values.entityType} onChange={(event) => updateValue("entityType", event.target.value)} className="w-full rounded-lg border border-white/15 bg-[#102850] px-3 py-3 text-sm text-white outline-none transition focus:border-[#C9A846] focus:ring-2 focus:ring-[#C9A846]/20">
                        <option value="" disabled>Select type</option>
                        <option>Family Office</option>
                        <option>Private Investor</option>
                        <option>International Principal</option>
                        <option>Other</option>
                      </select>
                    </label>
                    <label className="block">
                      <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-white/65 mb-2">Preferred Language <span aria-hidden="true">*</span></span>
                      <select required value={values.language} onChange={(event) => updateValue("language", event.target.value)} className="w-full rounded-lg border border-white/15 bg-[#102850] px-3 py-3 text-sm text-white outline-none transition focus:border-[#C9A846] focus:ring-2 focus:ring-[#C9A846]/20">
                        <option>English</option>
                        <option>Russian</option>
                      </select>
                    </label>
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer pt-1">
                    <input required type="checkbox" checked={values.accreditedInvestorConfirmed} onChange={(event) => updateValue("accreditedInvestorConfirmed", event.target.checked)} className="mt-0.5 h-4 w-4 shrink-0 accent-[#C9A846]" />
                    <span className="text-xs text-[#AAB8C8] leading-relaxed">I confirm that I am an accredited investor or qualified purchaser, as applicable, and understand that this material is for informational purposes only.</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input required type="checkbox" checked={values.privacyConsent} onChange={(event) => updateValue("privacyConsent", event.target.checked)} className="mt-0.5 h-4 w-4 shrink-0 accent-[#C9A846]" />
                    <span className="text-xs text-[#AAB8C8] leading-relaxed">I agree to the <Link href="/privacy-policy" className="text-[#E8C96A] underline underline-offset-2 hover:text-white" target="_blank">Privacy Policy</Link> and consent to FoxRidge contacting me about this request.</span>
                  </label>

                  <div className="sr-only" aria-hidden="true">
                    <label>Website <input tabIndex={-1} autoComplete="off" value={values.website} onChange={(event) => updateValue("website", event.target.value)} /></label>
                  </div>

                  {error && <p role="alert" className="rounded-lg border border-red-400/30 bg-red-400/10 px-3 py-2 text-xs leading-relaxed text-red-200">{error}</p>}

                  <button type="submit" disabled={isSubmitting} className="flex items-center justify-center gap-2.5 w-full bg-[#C9A846] hover:bg-[#B8973A] disabled:cursor-not-allowed disabled:opacity-65 text-[#040C1D] font-bold text-sm tracking-wide uppercase py-3.5 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-[#C9A846]/60">
                    {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" /> : <Send className="w-4 h-4" aria-hidden="true" />}
                    {isSubmitting ? "Sending Request" : "Request Firm Overview"}
                  </button>
                </form>

                <button type="button" onClick={dismiss} className="w-full text-center text-[#8899AA] hover:text-white text-xs mt-4 py-1 transition-colors focus:outline-none focus:underline">
                  No thanks
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
