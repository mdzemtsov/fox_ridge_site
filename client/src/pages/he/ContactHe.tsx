import { Link } from "wouter";
import { useEffect, useState } from "react";
import { ArrowUpLeft, CheckCircle2, Globe2, Loader2, LockKeyhole, Mail, ShieldCheck } from "lucide-react";

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

const INVESTOR_TYPES = [
  { value: "Family Office", label: "משרד משפחה" },
  { value: "Principal / UHNW Investor", label: "משקיע ראשי / משקיע UHNW" },
  { value: "Qualified Private Investor", label: "משקיע פרטי מוסמך" },
  { value: "Investment Adviser", label: "יועץ השקעות" },
  { value: "Other", label: "אחר" },
];
const US_PERSON_STATUSES = [
  { value: "U.S. person", label: "אדם אמריקאי" },
  { value: "Non-U.S. person", label: "לא אדם אמריקאי" },
  { value: "Prefer to discuss", label: "מעדיף לדון" },
];
const CAPITAL_CAPACITIES = [
  { value: "Under $3m", label: "פחות מ-$3m" },
  { value: "$3–8m", label: "$3–8m" },
  { value: "$8–15m", label: "$8–15m" },
  { value: "$15m+", label: "$15m או יותר" },
  { value: "Prefer to discuss", label: "מעדיף לדון" },
];
const CURRENT_INTERESTS = [
  { value: "Direct co-investment", label: "השקעה משותפת ישירה" },
  { value: "Building a portfolio over time", label: "בניית תיק השקעות לאורך זמן" },
  { value: "Research / market briefing", label: "מחקר / עדכון שוק" },
  { value: "Other", label: "אחר" },
];

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
    if (!values.fullName.trim()) next.fullName = "אנא הזן את שמך המלא.";
    if (!values.email.trim()) next.email = "אנא הזן את כתובת הדוא״ל שלך.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) next.email = "אנא הזן כתובת דוא״ל תקינה.";
    if (!values.investorType) next.investorType = "אנא בחר את סוג המשקיע המתאים.";
    if (!values.countryRegion.trim()) next.countryRegion = "אנא ציין את המדינה או האזור.";
    if (!values.usPersonStatus) next.usPersonStatus = "אנא בחר את הסטטוס של אדם אמריקאי או בחר 'מעדיף לדון'.";
    if (!values.indicativeCapitalCapacity) next.indicativeCapitalCapacity = "אנא בחר טווח הון משוער או בחר 'מעדיף לדון'.";
    if (!values.currentInterest) next.currentInterest = "אנא בחר את תחום העניין הנוכחי שלך.";
    if (!values.preferredTimeZone.trim()) next.preferredTimeZone = "אנא ציין את אזור הזמן המועדף.";
    if (!values.privacyConsent) next.privacyConsent = "נדרשת הסכמה למדיניות הפרטיות ולשימוש בפרטי התקשרות כדי לשלוח בקשה זו.";
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
        body: JSON.stringify({ ...values, locale: "he" }),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(payload.error || "לא ניתן לשמור את הבקשה שלך. אנא נסה שוב מאוחר יותר.");
      }
      setSubmitted(true);
      setValues(INITIAL_VALUES);
    } catch (submissionError) {
      setFormError(submissionError instanceof Error ? submissionError.message : "לא ניתן לשמור את הבקשה שלך. אנא נסה שוב מאוחר יותר.");
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
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">היכרות ראשונית חסויה</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl">הגש בקשה להיכרות ראשונית חסויה.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl">
            שיחת היכרות ראשונית וסודית המותאמת למשרדי משפחות, משקיעים ראשיים ומשקיעים פרטיים מוסמכים המתעניינים בהשתתפות ישירה בשותפויות נדל"ן רב-יחידתיות בארצות הברית.
          </p>
        </div>
      </section>

      <main className="container grid max-w-6xl gap-10 py-12 md:py-16 lg:grid-cols-[.82fr_1.18fr] lg:gap-16">
        <aside className="space-y-7 lg:pt-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">צעד ראשון שקול</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-primary">התחל בהתאמה הדדית.</h2>
            <p className="mt-4 text-base leading-relaxed text-stone-600">טופס זה משמש כדי לסייע ל-FoxRidge להבין את ההקשר של ההיכרות הראשונית. הוא אינו טופס לאימות זהות המשקיעים, ואינו מהווה הצעה או התחייבות להשקעה.</p>
          </div>

          <div className="border-r-2 border-secondary bg-white p-5">
            <div className="flex gap-3">
              <Globe2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-stone-600">אנו מקבלים פניות בינלאומיות. <Link href="/he/international-investors" className="font-semibold text-secondary underline underline-offset-2">מידע למשקיעים בינלאומיים</Link>, ואז הגש בקשה להיכרות ראשונית.</p>
            </div>
          </div>

          <div className="space-y-4 border-t border-stone-200 pt-7 text-sm text-stone-600">
            <div className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" /><span>מעדיפים תקשורת בדוא&quot;ל? <a href="mailto:partners@foxridgeequity.com" className="font-semibold text-primary underline underline-offset-2">partners@foxridgeequity.com</a></span></div>
            <div className="flex gap-3"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" /><span>כל פנייה נבדקת בנפרד ומטופלת כיוזמה לשם בחינת התאמה ראשונית.</span></div>
          </div>
        </aside>

        <section aria-labelledby="introduction-form-heading" className="border border-stone-200 bg-white p-6 shadow-[0_18px_50px_rgba(14,33,72,0.07)] md:p-9">
          {submitted ? (
            <div className="py-6 text-center md:py-10" role="status" aria-live="polite">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-secondary/30 bg-secondary/10"><CheckCircle2 className="h-7 w-7 text-secondary" aria-hidden="true" /></div>
              <h2 id="introduction-form-heading" className="mt-6 font-display text-3xl font-bold text-primary">תודה.</h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-stone-600">נבחן כל בקשה בנפרד. אם יימצא התאמה, אחד מחברי צוות FoxRidge ייצור עמך קשר כדי לתאם היכרות ראשונית חסויה.</p>
              <button type="button" onClick={() => setSubmitted(false)} className="mt-8 inline-flex items-center gap-2 border border-primary px-5 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2">שלח בקשה נוספת <ArrowUpLeft className="h-4 w-4" aria-hidden="true" /></button>
            </div>
          ) : (
            <>
              <div className="border-b border-stone-200 pb-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">טופס היכרות ראשונית</p>
                <h2 id="introduction-form-heading" className="mt-2 font-display text-3xl font-bold text-primary">ספק מידע בסיסי.</h2>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">השדות המסומנים ב-<span aria-hidden="true">*</span><span className="sr-only">חובה</span> הינם דרושים. שדות טווח ההון וזהות משמשים לסקירה ראשונית בלבד; אם מתאים, בחר 'מעדיף לדון'.</p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-6">
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="שם מלא" name="fullName" required error={fieldError("fullName")}>
                    <input id="fullName" name="fullName" autoComplete="name" value={values.fullName} onChange={(event) => updateValue("fullName", event.target.value)} className={fieldClass("fullName")} aria-invalid={Boolean(fieldError("fullName"))} aria-describedby={fieldError("fullName") ? "fullName-error" : undefined} />
                  </Field>
                  <Field label="דוא״ל" name="email" required error={fieldError("email")}>
                    <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={(event) => updateValue("email", event.target.value)} className={fieldClass("email")} aria-invalid={Boolean(fieldError("email"))} aria-describedby={fieldError("email") ? "email-error" : undefined} />
                  </Field>
                  <SelectField label="סוג המשקיע" name="investorType" required options={INVESTOR_TYPES} value={values.investorType} onChange={(value) => updateValue("investorType", value)} error={fieldError("investorType")} />
                  <Field label="מדינה / אזור" name="countryRegion" required error={fieldError("countryRegion")}>
                    <input id="countryRegion" name="countryRegion" autoComplete="country-name" value={values.countryRegion} onChange={(event) => updateValue("countryRegion", event.target.value)} className={fieldClass("countryRegion")} aria-invalid={Boolean(fieldError("countryRegion"))} aria-describedby={fieldError("countryRegion") ? "countryRegion-error" : undefined} placeholder="לדוגמה: בריטניה או מדינות המפרץ" />
                  </Field>
                  <SelectField label="האם אדם אמריקאי" name="usPersonStatus" required options={US_PERSON_STATUSES} value={values.usPersonStatus} onChange={(value) => updateValue("usPersonStatus", value)} error={fieldError("usPersonStatus")} />
                  <SelectField label="טווח הון משוער" name="indicativeCapitalCapacity" required options={CAPITAL_CAPACITIES} value={values.indicativeCapitalCapacity} onChange={(value) => updateValue("indicativeCapitalCapacity", value)} error={fieldError("indicativeCapitalCapacity")} />
                  <SelectField label="תחום עניין נוכחי" name="currentInterest" required options={CURRENT_INTERESTS} value={values.currentInterest} onChange={(value) => updateValue("currentInterest", value)} error={fieldError("currentInterest")} />
                  <Field label="אזור זמן מועדף" name="preferredTimeZone" required error={fieldError("preferredTimeZone")}>
                    <input id="preferredTimeZone" name="preferredTimeZone" value={values.preferredTimeZone} onChange={(event) => updateValue("preferredTimeZone", event.target.value)} className={fieldClass("preferredTimeZone")} aria-invalid={Boolean(fieldError("preferredTimeZone"))} aria-describedby={fieldError("preferredTimeZone") ? "preferredTimeZone-error" : undefined} placeholder="לדוגמה: GMT+1 / לונדון" />
                  </Field>
                </div>

                <Field label="הודעה אופציונלית" name="message" error={undefined}>
                  <textarea id="message" name="message" value={values.message} onChange={(event) => updateValue("message", event.target.value)} className={`${INPUT_CLASS} min-h-32 resize-y`} placeholder="האם יש מידע שיכול להיות מועיל בהיכרות הראשונית?" />
                </Field>

                <div className="sr-only" aria-hidden="true">
                  <label htmlFor="website">אתר אינטרנט</label>
                  <input id="website" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={(event) => updateValue("website", event.target.value)} />
                </div>

                <div>
                  <label className="flex cursor-pointer items-start gap-3">
                    <input type="checkbox" checked={values.privacyConsent} onChange={(event) => updateValue("privacyConsent", event.target.checked)} className="mt-1 h-4 w-4 shrink-0 accent-secondary" aria-invalid={Boolean(fieldError("privacyConsent"))} aria-describedby={fieldError("privacyConsent") ? "privacyConsent-error" : undefined} />
                    <span className="text-sm leading-relaxed text-stone-600">קראתי את <Link href="/he/privacy-policy" className="font-semibold text-secondary underline underline-offset-2">מדיניות הפרטיות</Link>, ואני מסכים ש-FoxRidge Equity Partners / Consulting Point LLC ישתמשו במידע שלמעלה כדי לסקור ולהגיב לבקשת ההיכרות הראשונית החסויה הזו. <span aria-hidden="true">*</span></span>
                  </label>
                  {fieldError("privacyConsent") && <p id="privacyConsent-error" role="alert" className="mt-2 text-sm text-red-700">{fieldError("privacyConsent")}</p>}
                </div>

                {formError && <p role="alert" className="border border-red-200 bg-red-50 px-4 py-3 text-sm leading-relaxed text-red-800">{formError}</p>}

                <button type="submit" disabled={isSubmitting} className="inline-flex min-h-12 w-full items-center justify-center gap-2 bg-secondary px-6 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-65 md:w-auto">
                  {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <LockKeyhole className="h-4 w-4" aria-hidden="true" />}
                  {isSubmitting ? "שולח את הבקשה" : "בקשה להיכרות ראשונית חסויה"}
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
      <label htmlFor={name} className="text-xs font-bold uppercase tracking-[0.12em] text-primary">{label}{required && <span className="mr-1 text-secondary" aria-hidden="true">*</span>}</label>
      {children}
      {error && <p id={`${name}-error`} role="alert" className="mt-2 text-sm text-red-700">{error}</p>}
    </div>
  );
}

function SelectField({ label, name, required, options, value, onChange, error }: { label: string; name: FieldName; required?: boolean; options: Array<{ value: string; label: string }>; value: string; onChange: (value: string) => void; error?: string }) {
  return (
    <Field label={label} name={name} required={required} error={error}>
      <select id={name} name={name} value={value} onChange={(event) => onChange(event.target.value)} className={`${INPUT_CLASS} ${error ? ERROR_INPUT_CLASS : ""}`} aria-invalid={Boolean(error)} aria-describedby={error ? `${name}-error` : undefined}>
        <option value="" disabled>בחר אפשרות</option>
        {options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
      </select>
    </Field>
  );
}
