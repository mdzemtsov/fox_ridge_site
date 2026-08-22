import { Link } from "wouter";
import { useEffect, useState } from "react";
import { ArrowUpRight, CheckCircle2, Globe2, Loader2, LockKeyhole, Mail, ShieldCheck } from "lucide-react";

type IntroductionValues = {
  fullName: string;
  email: string;
  investorType: string;
  countryRegion: string;
  usPersonStatus: string;
  indicativeCapitalCapacity: string;
  currentInterest: string;
  preferredTimeZone: string;
  message: string;
  privacyConsent: boolean;
  website: string;
};

type FieldName = Exclude<keyof IntroductionValues, "website">;

const INITIAL_VALUES: IntroductionValues = {
  fullName: "",
  email: "",
  investorType: "",
  countryRegion: "",
  usPersonStatus: "",
  indicativeCapitalCapacity: "",
  currentInterest: "",
  preferredTimeZone: "",
  message: "",
  privacyConsent: false,
  website: "",
};

const INVESTOR_TYPES = ["Family Office", "Principal / UHNW Investor", "Qualified Private Investor", "Investment Adviser", "Other"];
const US_PERSON_STATUSES = ["U.S. person", "Non-U.S. person", "Prefer to discuss"];
const CAPITAL_CAPACITIES = ["Under $3m", "$3–8m", "$8–15m", "$15m+", "Prefer to discuss"];
const CURRENT_INTERESTS = ["Direct co-investment", "Building a portfolio over time", "Research / market briefing", "Other"];

const INPUT_CLASS = "mt-2 w-full border border-stone-300 bg-white px-3.5 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-secondary focus:ring-2 focus:ring-secondary/20";
const ERROR_INPUT_CLASS = "border-red-600 focus:border-red-600 focus:ring-red-500/20";

export default function Contact() {
  const [values, setValues] = useState<IntroductionValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const interest = new URLSearchParams(window.location.search).get("interest");
    if (interest === "research") {
      setValues((current) => ({ ...current, currentInterest: "Research / market briefing" }));
    }
  }, []);

  const updateValue = <K extends keyof IntroductionValues>(key: K, value: IntroductionValues[K]) => {
    setValues((current) => ({ ...current, [key]: value }));
    if (key !== "website") {
      setErrors((current) => ({ ...current, [key]: undefined }));
    }
    setFormError("");
  };

  const validate = () => {
    const next: Partial<Record<FieldName, string>> = {};
    if (!values.fullName.trim()) next.fullName = "Please enter your full name.";
    if (!values.email.trim()) next.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) next.email = "Enter a valid email address.";
    if (!values.investorType) next.investorType = "Please select the description that fits best.";
    if (!values.countryRegion.trim()) next.countryRegion = "Please enter your country or region.";
    if (!values.usPersonStatus) next.usPersonStatus = "Please select a U.S. person status or choose ‘Prefer to discuss.’";
    if (!values.indicativeCapitalCapacity) next.indicativeCapitalCapacity = "Please select an indicative capacity or choose ‘Prefer to discuss.’";
    if (!values.currentInterest) next.currentInterest = "Please select your current interest.";
    if (!values.preferredTimeZone.trim()) next.preferredTimeZone = "Please share a preferred time zone.";
    if (!values.privacyConsent) next.privacyConsent = "Privacy and contact consent is required to submit this inquiry.";
    return next;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    setFormError("");
    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/confidential-introduction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(payload.error || "We could not save your inquiry. Please try again shortly.");
      }
      setSubmitted(true);
      setValues(INITIAL_VALUES);
    } catch (submissionError) {
      setFormError(submissionError instanceof Error ? submissionError.message : "We could not save your inquiry. Please try again shortly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldError = (name: FieldName) => errors[name];
  const fieldClass = (name: FieldName) => `${INPUT_CLASS} ${fieldError(name) ? ERROR_INPUT_CLASS : ""}`;

  return (
    <div className="bg-stone-50">
      <section className="border-b border-stone-200 bg-primary py-16 text-white md:py-24">
        <div className="container max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Confidential introduction</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl">Request a confidential introduction.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl">
            A private, initial conversation for family offices, principals, and qualified private investors considering direct U.S. multifamily partnerships.
          </p>
        </div>
      </section>

      <main className="container grid max-w-6xl gap-10 py-12 md:py-16 lg:grid-cols-[.82fr_1.18fr] lg:gap-16">
        <aside className="space-y-7 lg:pt-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">A considered first step</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-primary">Start with mutual fit.</h2>
            <p className="mt-4 text-base leading-relaxed text-stone-600">This form helps FoxRidge understand the context for an initial conversation. It is not investor verification, an offering process, or an investment commitment.</p>
          </div>

          <div className="border-l-2 border-secondary bg-white p-5">
            <div className="flex gap-3">
              <Globe2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-stone-600">International inquiries are welcome. <Link href="/international-investors" className="font-semibold text-secondary underline underline-offset-2">Learn about international partnerships</Link> before requesting an introduction.</p>
            </div>
          </div>

          <div className="space-y-4 border-t border-stone-200 pt-7 text-sm text-stone-600">
            <div className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" /><span>Prefer email? <a href="mailto:partners@foxridgeequity.com" className="font-semibold text-primary underline underline-offset-2">partners@foxridgeequity.com</a></span></div>
            <div className="flex gap-3"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" /><span>Each inquiry is reviewed individually and handled as an initial mutual-fit conversation.</span></div>
          </div>
        </aside>

        <section aria-labelledby="introduction-form-heading" className="border border-stone-200 bg-white p-6 shadow-[0_18px_50px_rgba(14,33,72,0.07)] md:p-9">
          {submitted ? (
            <div className="py-6 text-center md:py-10" role="status" aria-live="polite">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-secondary/30 bg-secondary/10"><CheckCircle2 className="h-7 w-7 text-secondary" aria-hidden="true" /></div>
              <h2 id="introduction-form-heading" className="mt-6 font-display text-3xl font-bold text-primary">Thank you.</h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-stone-600">We review each inquiry personally. If there is mutual fit, a member of the FoxRidge team will contact you to arrange a confidential introductory conversation.</p>
              <button type="button" onClick={() => setSubmitted(false)} className="mt-8 inline-flex items-center gap-2 border border-primary px-5 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2">Submit another inquiry <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></button>
            </div>
          ) : (
            <>
              <div className="border-b border-stone-200 pb-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Initial introduction form</p>
                <h2 id="introduction-form-heading" className="mt-2 font-display text-3xl font-bold text-primary">Share the essentials.</h2>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">Fields marked <span aria-hidden="true">*</span><span className="sr-only">required</span> are required. Capacity and status fields are for initial context only; choose “Prefer to discuss” where appropriate.</p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-6">
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Full name" name="fullName" required error={fieldError("fullName")}>
                    <input id="fullName" name="fullName" autoComplete="name" value={values.fullName} onChange={(event) => updateValue("fullName", event.target.value)} className={fieldClass("fullName")} aria-invalid={Boolean(fieldError("fullName"))} aria-describedby={fieldError("fullName") ? "fullName-error" : undefined} />
                  </Field>
                  <Field label="Email address" name="email" required error={fieldError("email")}>
                    <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={(event) => updateValue("email", event.target.value)} className={fieldClass("email")} aria-invalid={Boolean(fieldError("email"))} aria-describedby={fieldError("email") ? "email-error" : undefined} />
                  </Field>
                  <SelectField label="Investor type" name="investorType" required options={INVESTOR_TYPES} value={values.investorType} onChange={(value) => updateValue("investorType", value)} error={fieldError("investorType")} />
                  <Field label="Country / region" name="countryRegion" required error={fieldError("countryRegion")}>
                    <input id="countryRegion" name="countryRegion" autoComplete="country-name" value={values.countryRegion} onChange={(event) => updateValue("countryRegion", event.target.value)} className={fieldClass("countryRegion")} aria-invalid={Boolean(fieldError("countryRegion"))} aria-describedby={fieldError("countryRegion") ? "countryRegion-error" : undefined} placeholder="e.g., United Kingdom or GCC" />
                  </Field>
                  <SelectField label="U.S. person status" name="usPersonStatus" required options={US_PERSON_STATUSES} value={values.usPersonStatus} onChange={(value) => updateValue("usPersonStatus", value)} error={fieldError("usPersonStatus")} />
                  <SelectField label="Indicative capital capacity" name="indicativeCapitalCapacity" required options={CAPITAL_CAPACITIES} value={values.indicativeCapitalCapacity} onChange={(value) => updateValue("indicativeCapitalCapacity", value)} error={fieldError("indicativeCapitalCapacity")} />
                  <SelectField label="Current interest" name="currentInterest" required options={CURRENT_INTERESTS} value={values.currentInterest} onChange={(value) => updateValue("currentInterest", value)} error={fieldError("currentInterest")} />
                  <Field label="Preferred time zone" name="preferredTimeZone" required error={fieldError("preferredTimeZone")}>
                    <input id="preferredTimeZone" name="preferredTimeZone" value={values.preferredTimeZone} onChange={(event) => updateValue("preferredTimeZone", event.target.value)} className={fieldClass("preferredTimeZone")} aria-invalid={Boolean(fieldError("preferredTimeZone"))} aria-describedby={fieldError("preferredTimeZone") ? "preferredTimeZone-error" : undefined} placeholder="e.g., GMT+1 / London" />
                  </Field>
                </div>

                <Field label="Optional message" name="message" error={undefined}>
                  <textarea id="message" name="message" value={values.message} onChange={(event) => updateValue("message", event.target.value)} className={`${INPUT_CLASS} min-h-32 resize-y`} placeholder="Anything useful for an initial conversation?" />
                </Field>

                <div className="sr-only" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input id="website" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={(event) => updateValue("website", event.target.value)} />
                </div>

                <div>
                  <label className="flex cursor-pointer items-start gap-3">
                    <input type="checkbox" checked={values.privacyConsent} onChange={(event) => updateValue("privacyConsent", event.target.checked)} className="mt-1 h-4 w-4 shrink-0 accent-secondary" aria-invalid={Boolean(fieldError("privacyConsent"))} aria-describedby={fieldError("privacyConsent") ? "privacyConsent-error" : undefined} />
                    <span className="text-sm leading-relaxed text-stone-600">I have read the <Link href="/privacy-policy" className="font-semibold text-secondary underline underline-offset-2">Privacy Policy</Link> and consent to FoxRidge Equity Partners / Consulting Point LLC using the information above to review and respond to this confidential-introduction request. <span aria-hidden="true">*</span></span>
                  </label>
                  {fieldError("privacyConsent") && <p id="privacyConsent-error" role="alert" className="mt-2 text-sm text-red-700">{fieldError("privacyConsent")}</p>}
                </div>

                {formError && <p role="alert" className="border border-red-200 bg-red-50 px-4 py-3 text-sm leading-relaxed text-red-800">{formError}</p>}

                <button type="submit" disabled={isSubmitting} className="inline-flex min-h-12 w-full items-center justify-center gap-2 bg-secondary px-6 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-65 md:w-auto">
                  {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <LockKeyhole className="h-4 w-4" aria-hidden="true" />}
                  {isSubmitting ? "Submitting inquiry" : "Request a confidential introduction"}
                </button>
              </form>
            </>
          )}
        </section>
      </main>
    </div>
  );
}

function Field({ label, name, required, error, children }: { label: string; name: FieldName; required?: boolean; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-bold uppercase tracking-[0.12em] text-primary">{label}{required && <span className="ml-1 text-secondary" aria-hidden="true">*</span>}</label>
      {children}
      {error && <p id={`${name}-error`} role="alert" className="mt-2 text-sm text-red-700">{error}</p>}
    </div>
  );
}

function SelectField({ label, name, required, options, value, onChange, error }: { label: string; name: FieldName; required?: boolean; options: string[]; value: string; onChange: (value: string) => void; error?: string }) {
  return (
    <Field label={label} name={name} required={required} error={error}>
      <select id={name} name={name} value={value} onChange={(event) => onChange(event.target.value)} className={`${INPUT_CLASS} ${error ? ERROR_INPUT_CLASS : ""}`} aria-invalid={Boolean(error)} aria-describedby={error ? `${name}-error` : undefined}>
        <option value="" disabled>Select an option</option>
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    </Field>
  );
}
