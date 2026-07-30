import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, User, Mail, Key, CheckCircle2, Globe, FileText, ArrowUpRight, Shield, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ACCESS_CODE = "FOXRIDGE2026";
const STORAGE_KEY = "fr_investor_portal_access";
const STORAGE_TTL = 24 * 60 * 60 * 1000; // 24 hours

interface AccessRecord {
  name: string;
  email: string;
  timestamp: number;
}

function isAccessValid(): AccessRecord | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const record: AccessRecord & { timestamp: number } = JSON.parse(raw);
    if (Date.now() - record.timestamp > STORAGE_TTL) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return record;
  } catch {
    return null;
  }
}

export default function InvestorPortal() {
  const [access, setAccess] = useState<AccessRecord | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [showCode, setShowCode] = useState(false);
  const [accredited, setAccredited] = useState(false);
  const [understand, setUnderstand] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const record = isAccessValid();
    if (record) setAccess(record);
  }, []);

  function validate() {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = "Please enter your full name.";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Please enter a valid email address.";
    if (!code.trim()) e.code = "Access code is required.";
    else if (code.trim().toUpperCase() !== ACCESS_CODE) e.code = "Invalid access code. Please contact FoxRidge to obtain access.";
    if (!accredited) e.accredited = "You must confirm your accredited investor status to proceed.";
    if (!understand) e.understand = "You must acknowledge the investment risk disclosure.";
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSubmitting(true);
    setTimeout(() => {
      const record: AccessRecord = { name: name.trim(), email: email.trim().toLowerCase(), timestamp: Date.now() };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
      setAccess(record);
      setSubmitting(false);
    }, 800);
  }

  function handleRevoke() {
    localStorage.removeItem(STORAGE_KEY);
    setAccess(null);
    setName(""); setEmail(""); setCode(""); setAccredited(false); setUnderstand(false);
  }

  const presentations = [
    {
      lang: "English",
      flag: "🇺🇸",
      title: "FoxRidge Equity Partners",
      subtitle: "Direct Ownership of American Multifamily",
      desc: "Full investor presentation covering the Texas Triangle opportunity, deal structure, program terms, and the FoxRidge team. Designed for family offices and institutional investors.",
      sections: ["The Invitation", "The Opportunity", "How It Works", "Why Us", "The Structure", "The Program", "Who We Are"],
      file: "/presentations/investor-presentation-en.html",
      badge: "English",
      badgeColor: "bg-blue-600",
    },
    {
      lang: "Russian",
      flag: "🇷🇺",
      title: "FoxRidge Equity Partners",
      subtitle: "Прямое владение американской многоквартирной недвижимостью",
      desc: "Полная инвесторская презентация, охватывающая возможности Техасского Треугольника, структуру сделок, условия программы и команду FoxRidge. Разработана для семейных офисов и институциональных инвесторов.",
      sections: ["Приглашение", "Возможность", "Как это работает", "Почему мы", "Структура", "Программа", "О нас"],
      file: "/presentations/investor-presentation-ru.html",
      badge: "Русский",
      badgeColor: "bg-red-700",
    },
  ];

  return (
    <div className="min-h-screen bg-[#040C1D]">
      {/* Hero Header */}
      <div className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0E2148] via-[#081733] to-[#040C1D]" />
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "radial-gradient(ellipse at 60% 50%, rgba(201,168,70,0.15) 0%, transparent 70%)" }} />
        <div className="relative max-w-5xl mx-auto px-6 py-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 bg-[#C9A846]/10 border border-[#C9A846]/30 text-[#C9A846] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              <Shield className="w-3.5 h-3.5" />
              Restricted Access — Accredited Investors Only
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Investor Portal
            </h1>
            <p className="text-lg text-[#8899AA] max-w-2xl mx-auto leading-relaxed">
              Access FoxRidge Equity Partners' full investor presentations. Available in English and Russian for family offices and qualified investors worldwide.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <AnimatePresence mode="wait">
          {!access ? (
            /* ── GATE ── */
            <motion.div key="gate"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-lg mx-auto"
            >
              <div className="bg-[#0E2148]/60 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-[#C9A846]/10 border border-[#C9A846]/30 flex items-center justify-center">
                    <Lock className="w-5 h-5 text-[#C9A846]" />
                  </div>
                  <div>
                    <h2 className="text-white font-bold text-lg">Verify Your Access</h2>
                    <p className="text-[#8899AA] text-sm">Enter your details and access code to continue</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-[#8899AA] uppercase tracking-widest mb-2">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8899AA]" />
                      <Input
                        value={name} onChange={e => setName(e.target.value)}
                        placeholder="Your full name"
                        className="pl-10 bg-[#081733] border-white/10 text-white placeholder:text-white/30 focus:border-[#C9A846]/50 rounded-lg h-11"
                      />
                    </div>
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-[#8899AA] uppercase tracking-widest mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8899AA]" />
                      <Input
                        type="email" value={email} onChange={e => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="pl-10 bg-[#081733] border-white/10 text-white placeholder:text-white/30 focus:border-[#C9A846]/50 rounded-lg h-11"
                      />
                    </div>
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>

                  {/* Access Code */}
                  <div>
                    <label className="block text-xs font-bold text-[#8899AA] uppercase tracking-widest mb-2">Access Code</label>
                    <div className="relative">
                      <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8899AA]" />
                      <Input
                        type={showCode ? "text" : "password"} value={code} onChange={e => setCode(e.target.value)}
                        placeholder="Enter your access code"
                        className="pl-10 pr-10 bg-[#081733] border-white/10 text-white placeholder:text-white/30 focus:border-[#C9A846]/50 rounded-lg h-11"
                      />
                      <button type="button" onClick={() => setShowCode(!showCode)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8899AA] hover:text-white transition-colors">
                        {showCode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    {errors.code && <p className="text-red-400 text-xs mt-1">{errors.code}</p>}
                    <p className="text-[#8899AA] text-xs mt-1">Don't have an access code? <a href="/contact" className="text-[#C9A846] hover:underline">Contact us</a></p>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-white/10 pt-5 space-y-4">
                    {/* Accredited Investor */}
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div className={`mt-0.5 w-5 h-5 rounded border-2 flex-shrink-0 flex items-center justify-center transition-all ${accredited ? "bg-[#C9A846] border-[#C9A846]" : "border-white/30 group-hover:border-[#C9A846]/50"}`}
                        onClick={() => setAccredited(!accredited)}>
                        {accredited && <CheckCircle2 className="w-3.5 h-3.5 text-[#040C1D]" />}
                      </div>
                      <span className="text-sm text-[#C3D4E8] leading-relaxed">
                        I confirm that I am an <strong className="text-white">Accredited Investor</strong> as defined under SEC Rule 501 of Regulation D (net worth exceeding $1M excluding primary residence, or annual income exceeding $200K individually / $300K jointly), or a qualified institutional buyer.
                      </span>
                    </label>
                    {errors.accredited && <p className="text-red-400 text-xs -mt-2 ml-8">{errors.accredited}</p>}

                    {/* Risk Acknowledgment */}
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div className={`mt-0.5 w-5 h-5 rounded border-2 flex-shrink-0 flex items-center justify-center transition-all ${understand ? "bg-[#C9A846] border-[#C9A846]" : "border-white/30 group-hover:border-[#C9A846]/50"}`}
                        onClick={() => setUnderstand(!understand)}>
                        {understand && <CheckCircle2 className="w-3.5 h-3.5 text-[#040C1D]" />}
                      </div>
                      <span className="text-sm text-[#C3D4E8] leading-relaxed">
                        I understand that this presentation is <strong className="text-white">for informational purposes only</strong>, does not constitute an offer to sell securities, and that past performance is not indicative of future results. All investments involve risk, including possible loss of principal.
                      </span>
                    </label>
                    {errors.understand && <p className="text-red-400 text-xs -mt-2 ml-8">{errors.understand}</p>}
                  </div>

                  <Button type="submit" disabled={submitting}
                    className="w-full h-12 bg-[#C9A846] hover:bg-[#B8973A] text-[#040C1D] font-bold text-sm tracking-widest uppercase rounded-lg transition-all">
                    {submitting ? (
                      <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-[#040C1D]/30 border-t-[#040C1D] rounded-full animate-spin" />Verifying...</span>
                    ) : (
                      <span className="flex items-center gap-2"><Lock className="w-4 h-4" />Access Investor Portal</span>
                    )}
                  </Button>
                </form>

                <p className="text-center text-[#8899AA] text-xs mt-6 leading-relaxed">
                  By accessing this portal you agree to our{" "}
                  <a href="/terms-of-service" className="text-[#C9A846] hover:underline">Terms of Service</a> and{" "}
                  <a href="/privacy-policy" className="text-[#C9A846] hover:underline">Privacy Policy</a>.
                  This portal is intended for accredited investors only pursuant to Regulation D, Rule 506(c).
                </p>
              </div>
            </motion.div>
          ) : (
            /* ── PRESENTATIONS ── */
            <motion.div key="portal"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Welcome bar */}
              <div className="flex items-center justify-between mb-10 bg-[#0E2148]/40 border border-[#C9A846]/20 rounded-xl px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#C9A846]/10 border border-[#C9A846]/30 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-[#C9A846]" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Welcome, {access.name}</p>
                    <p className="text-[#8899AA] text-xs">Accredited investor access granted · {access.email}</p>
                  </div>
                </div>
                <button onClick={handleRevoke} className="text-[#8899AA] hover:text-white text-xs underline transition-colors">
                  Sign out
                </button>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Investor Presentations</h2>
                <p className="text-[#8899AA]">Select your preferred language to open the full presentation in a new tab.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {presentations.map((p) => (
                  <motion.div key={p.lang}
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    className="group bg-[#0E2148]/60 border border-white/10 hover:border-[#C9A846]/40 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,168,70,0.08)]"
                  >
                    {/* Card header */}
                    <div className="bg-gradient-to-r from-[#081733] to-[#0E2148] px-6 py-5 border-b border-white/10">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`${p.badgeColor} text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full`}>
                          {p.flag} {p.badge}
                        </span>
                        <Globe className="w-5 h-5 text-[#8899AA]" />
                      </div>
                      <h3 className="text-white font-bold text-xl mb-1">{p.title}</h3>
                      <p className="text-[#C9A846] text-sm font-medium">{p.subtitle}</p>
                    </div>

                    {/* Card body */}
                    <div className="px-6 py-5">
                      <p className="text-[#8899AA] text-sm leading-relaxed mb-5">{p.desc}</p>

                      <div className="mb-6">
                        <p className="text-xs font-bold text-[#8899AA] uppercase tracking-widest mb-3">7 Sections</p>
                        <div className="flex flex-wrap gap-2">
                          {p.sections.map((s, i) => (
                            <span key={s} className="flex items-center gap-1.5 bg-[#081733] border border-white/10 text-[#C3D4E8] text-xs px-3 py-1 rounded-full">
                              <span className="text-[#C9A846] font-mono text-[10px]">0{i + 1}</span>
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      <a href={p.file} target="_blank" rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full h-12 bg-[#C9A846] hover:bg-[#B8973A] text-[#040C1D] font-bold text-sm tracking-widest uppercase rounded-xl transition-all group-hover:shadow-[0_4px_20px_rgba(201,168,70,0.3)]">
                        <FileText className="w-4 h-4" />
                        Open Presentation
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Legal footer */}
              <div className="mt-12 bg-[#0E2148]/30 border border-white/5 rounded-xl p-6">
                <p className="text-[#8899AA] text-xs leading-relaxed text-center">
                  <strong className="text-white">Confidentiality Notice:</strong> The information contained in these presentations is confidential and proprietary to FoxRidge Equity Partners (a DBA of Consulting Point LLC). It is intended solely for the use of the individual or entity to whom it is addressed. Any reproduction, distribution, or disclosure to third parties is strictly prohibited. This material does not constitute an offer to sell or a solicitation of an offer to buy any securities. Past performance is not indicative of future results.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
