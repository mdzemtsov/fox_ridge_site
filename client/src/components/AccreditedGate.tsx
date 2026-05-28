import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Lock, ArrowRight, X } from "lucide-react";
import { Link } from "wouter";

const GATE_KEY = "foxridge_accredited_verified";
const GATE_EXPIRY_HOURS = 24;

function isGateCleared(): boolean {
  try {
    const raw = localStorage.getItem(GATE_KEY);
    if (!raw) return false;
    const { timestamp } = JSON.parse(raw);
    const ageMs = Date.now() - timestamp;
    return ageMs < GATE_EXPIRY_HOURS * 60 * 60 * 1000;
  } catch {
    return false;
  }
}

function clearGate() {
  localStorage.removeItem(GATE_KEY);
}

function setGateCleared() {
  localStorage.setItem(GATE_KEY, JSON.stringify({ timestamp: Date.now() }));
}

interface AccreditedGateProps {
  children: React.ReactNode;
}

export default function AccreditedGate({ children }: AccreditedGateProps) {
  const [cleared, setCleared] = useState<boolean | null>(null);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setCleared(isGateCleared());
  }, []);

  const allChecked = checked1 && checked2 && checked3;

  const handleConfirm = () => {
    if (!allChecked) {
      setError(true);
      return;
    }
    setGateCleared();
    setCleared(true);
  };

  // While checking localStorage, render nothing to avoid flash
  if (cleared === null) return null;

  return (
    <>
      {/* Always render children but blur/hide them behind the gate */}
      <div className={cleared ? "" : "pointer-events-none select-none filter blur-sm opacity-30"}>
        {children}
      </div>

      <AnimatePresence>
        {!cleared && (
          <motion.div
            key="gate"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ backdropFilter: "blur(12px)", backgroundColor: "rgba(15,23,42,0.85)" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white max-w-xl w-full shadow-2xl border border-stone-200 overflow-hidden"
            >
              {/* Header */}
              <div className="bg-stone-950 px-8 py-7 flex items-start gap-4">
                <div className="w-10 h-10 bg-secondary/20 border border-secondary/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Lock className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-1">Restricted Access</p>
                  <h2 className="text-white font-display text-2xl font-bold leading-tight">
                    Track Record &amp; Performance Data
                  </h2>
                  <p className="text-stone-400 text-sm mt-2 leading-relaxed">
                    This section contains historical performance information that is available only to accredited investors as defined under Rule 501 of Regulation D.
                  </p>
                </div>
              </div>

              {/* Body */}
              <div className="px-8 py-7 space-y-5">
                <p className="text-stone-600 text-sm leading-relaxed">
                  To access this information, please confirm each of the following statements by checking the boxes below. This self-certification is required each session.
                </p>

                {/* Checkbox 1 */}
                <label className={`flex items-start gap-3 cursor-pointer group p-4 border transition-colors ${checked1 ? "border-secondary/40 bg-secondary/5" : "border-stone-200 hover:border-stone-300"}`}>
                  <input
                    type="checkbox"
                    checked={checked1}
                    onChange={e => { setChecked1(e.target.checked); setError(false); }}
                    className="mt-0.5 w-4 h-4 accent-secondary cursor-pointer shrink-0"
                  />
                  <span className="text-sm text-stone-700 leading-relaxed">
                    <strong className="text-stone-900">I am an Accredited Investor</strong> as defined under Rule 501 of Regulation D — meaning I have a net worth exceeding $1 million (excluding primary residence), or annual income exceeding $200,000 ($300,000 jointly with spouse) in each of the last two years.
                  </span>
                </label>

                {/* Checkbox 2 */}
                <label className={`flex items-start gap-3 cursor-pointer group p-4 border transition-colors ${checked2 ? "border-secondary/40 bg-secondary/5" : "border-stone-200 hover:border-stone-300"}`}>
                  <input
                    type="checkbox"
                    checked={checked2}
                    onChange={e => { setChecked2(e.target.checked); setError(false); }}
                    className="mt-0.5 w-4 h-4 accent-secondary cursor-pointer shrink-0"
                  />
                  <span className="text-sm text-stone-700 leading-relaxed">
                    <strong className="text-stone-900">I understand past performance is not indicative of future results.</strong> All returns shown are illustrative of prior experience and do not constitute a guarantee or promise of future performance. Real estate investments involve substantial risk, including possible loss of principal.
                  </span>
                </label>

                {/* Checkbox 3 */}
                <label className={`flex items-start gap-3 cursor-pointer group p-4 border transition-colors ${checked3 ? "border-secondary/40 bg-secondary/5" : "border-stone-200 hover:border-stone-300"}`}>
                  <input
                    type="checkbox"
                    checked={checked3}
                    onChange={e => { setChecked3(e.target.checked); setError(false); }}
                    className="mt-0.5 w-4 h-4 accent-secondary cursor-pointer shrink-0"
                  />
                  <span className="text-sm text-stone-700 leading-relaxed">
                    <strong className="text-stone-900">This information is for my personal review only.</strong> I acknowledge that this page does not constitute an offer to sell or solicitation to buy any security, and that any investment opportunity would be made only through formal offering documents.
                  </span>
                </label>

                {error && (
                  <p className="text-red-600 text-sm font-medium flex items-center gap-2">
                    <X className="w-4 h-4" /> Please confirm all three statements to proceed.
                  </p>
                )}

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={handleConfirm}
                    className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-200 ${allChecked ? "bg-secondary text-white hover:bg-secondary/90" : "bg-stone-200 text-stone-400 cursor-not-allowed"}`}
                    disabled={!allChecked}
                  >
                    <ShieldCheck className="w-4 h-4" />
                    I Confirm — View Track Record
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <Link href="/">
                    <button className="w-full sm:w-auto px-6 py-4 text-sm font-medium text-stone-500 border border-stone-200 hover:border-stone-400 hover:text-stone-700 transition-colors">
                      Return to Home
                    </button>
                  </Link>
                </div>

                <p className="text-stone-400 text-xs leading-relaxed pt-1">
                  Your confirmation is stored locally for 24 hours. By confirming, you agree to the{" "}
                  <Link href="/terms-of-service" className="text-secondary underline hover:text-secondary/80">Terms of Service</Link>
                  {" "}and{" "}
                  <Link href="/privacy-policy" className="text-secondary underline hover:text-secondary/80">Privacy Policy</Link>.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
