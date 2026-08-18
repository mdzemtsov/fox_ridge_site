import { useCallback, useEffect, useRef, useState } from "react";
import { BriefcaseBusiness, CheckCircle2, Loader2, Send, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "wouter";

const SESSION_KEY = "fr_investor_list_popup_handled";
const SHOW_DELAY_MS = 7000;

const INVESTOR_TYPES = [
  "Family Office",
  "Private Investor",
  "International Principal",
  "Investment Advisor",
  "Other",
] as const;

type FormValues = {
  fullName: string;
  email: string;
  investorType: string;
  privacyConsent: boolean;
  website: string;
};

const INITIAL_VALUES: FormValues = {
  fullName: "",
  email: "",
  investorType: "",
  privacyConsent: false,
  website: "",
};

export default function InvestorListPopup() {
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
      const response = await fetch("/api/investor-list-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(payload.error || "We could not save your information. Please try again.");
      }

      sessionStorage.setItem(SESSION_KEY, "1");
      setSubmitted(true);
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : "We could not save your information. Please try again.");
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
          aria-labelledby="investor-list-heading"
          onClick={handleOverlayClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[9999] flex items-end justify-center p-3 sm:items-center sm:justify-end sm:p-8"
          style={{ background: "rgba(4, 12, 29, 0.55)", backdropFilter: "blur(4px)" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-md max-h-[calc(100dvh-1.5rem)] overflow-y-auto bg-[#0E2148] border border-[#C9A846]/30 rounded-2xl shadow-[0_24px_64px_rgba(0,0,0,0.6)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 z-10 h-0.5 w-full bg-gradient-to-r from-[#C9A846] via-[#E8C96A] to-[#C9A846]" />
            <button
              type="button"
              onClick={dismiss}
              aria-label="Close investor list form"
              className="absolute top-3 right-3 z-20 flex h-10 w-10 items-center justify-center rounded-full text-white/55 transition-all hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#C9A846]/60 sm:top-4 sm:right-4"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>

            {submitted ? (
              <div className="px-6 py-10 text-center sm:px-9 sm:py-12">
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#C9A846]/30 bg-[#C9A846]/10">
                  <CheckCircle2 className="h-6 w-6 text-[#C9A846]" aria-hidden="true" />
                </div>
                <h2 id="investor-list-heading" className="mb-3 text-2xl font-bold leading-tight text-white">
                  You’re on the Investor List
                </h2>
                <p className="mx-auto mb-7 max-w-sm text-sm leading-relaxed text-[#AAB8C8]">
                  Thank you. FoxRidge will be in touch when an appropriate multifamily opportunity opens to a capital partner.
                </p>
                <button
                  type="button"
                  onClick={dismiss}
                  className="inline-flex items-center justify-center rounded-xl bg-[#C9A846] px-6 py-3 text-sm font-bold text-[#040C1D] transition-all hover:bg-[#B8973A] focus:outline-none focus:ring-2 focus:ring-[#C9A846]/60"
                >
                  Close
                </button>
              </div>
            ) : (
              <div className="px-5 pt-6 pb-6 sm:px-8 sm:pt-8 sm:pb-8">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C9A846]/25 bg-[#C9A846]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#C9A846]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C9A846]" />
                  FoxRidge Equity Partners
                </div>

                <div className="mb-3 flex items-start gap-4 pr-10">
                  <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#C9A846]/25 bg-[#C9A846]/10">
                    <BriefcaseBusiness className="h-5 w-5 text-[#C9A846]" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 id="investor-list-heading" className="mb-1 text-xl font-bold leading-snug text-white">
                      Private Multifamily Opportunities
                    </h2>
                  </div>
                </div>

                <p className="mb-6 text-sm leading-relaxed text-[#AAB8C8]">
                  Get notified when FoxRidge opens a new multifamily investment opportunity to a capital partner.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <label className="block">
                    <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-white/65">Full Name <span aria-hidden="true">*</span></span>
                    <input
                      ref={fullNameRef}
                      required
                      autoComplete="name"
                      value={values.fullName}
                      onChange={(event) => updateValue("fullName", event.target.value)}
                      className="w-full rounded-lg border border-white/15 bg-white/[0.05] px-3 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#C9A846] focus:ring-2 focus:ring-[#C9A846]/20"
                      placeholder="Your name"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-white/65">Email Address <span aria-hidden="true">*</span></span>
                    <input
                      required
                      type="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={(event) => updateValue("email", event.target.value)}
                      className="w-full rounded-lg border border-white/15 bg-white/[0.05] px-3 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#C9A846] focus:ring-2 focus:ring-[#C9A846]/20"
                      placeholder="you@example.com"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-white/65">Investor Type <span aria-hidden="true">*</span></span>
                    <select
                      required
                      value={values.investorType}
                      onChange={(event) => updateValue("investorType", event.target.value)}
                      className="w-full rounded-lg border border-white/15 bg-[#102850] px-3 py-3 text-sm text-white outline-none transition focus:border-[#C9A846] focus:ring-2 focus:ring-[#C9A846]/20"
                    >
                      <option value="" disabled>Select type</option>
                      {INVESTOR_TYPES.map((type) => <option key={type}>{type}</option>)}
                    </select>
                  </label>

                  <label className="flex cursor-pointer items-start gap-3 pt-1">
                    <input
                      required
                      type="checkbox"
                      checked={values.privacyConsent}
                      onChange={(event) => updateValue("privacyConsent", event.target.checked)}
                      className="mt-0.5 h-4 w-4 shrink-0 accent-[#C9A846]"
                    />
                    <span className="text-xs leading-relaxed text-[#AAB8C8]">
                      I agree to the <Link href="/privacy-policy" className="text-[#E8C96A] underline underline-offset-2 hover:text-white" target="_blank">Privacy Policy</Link> and consent to FoxRidge contacting me about this request.
                    </span>
                  </label>

                  <div className="sr-only" aria-hidden="true">
                    <label>Website <input tabIndex={-1} autoComplete="off" value={values.website} onChange={(event) => updateValue("website", event.target.value)} /></label>
                  </div>

                  {error && <p role="alert" className="rounded-lg border border-red-400/30 bg-red-400/10 px-3 py-2 text-xs leading-relaxed text-red-200">{error}</p>}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#C9A846] py-3.5 text-sm font-bold uppercase tracking-wide text-[#040C1D] transition-all hover:bg-[#B8973A] focus:outline-none focus:ring-2 focus:ring-[#C9A846]/60 disabled:cursor-not-allowed disabled:opacity-65"
                  >
                    {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <Send className="h-4 w-4" aria-hidden="true" />}
                    {isSubmitting ? "Joining Investor List" : "Join Investor List"}
                  </button>
                </form>

                <button type="button" onClick={dismiss} className="mt-4 w-full py-1 text-center text-xs text-[#8899AA] transition-colors hover:text-white focus:outline-none focus:underline">
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
