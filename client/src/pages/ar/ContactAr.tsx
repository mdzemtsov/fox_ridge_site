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
  { value: "Family Office", label: "مكتب عائلة" },
  { value: "Principal / UHNW Investor", label: "مستثمر رئيسي / مستثمر ذو ثروة فائقة (UHNW)" },
  { value: "Qualified Private Investor", label: "مستثمر خاص مؤهل" },
  { value: "Investment Adviser", label: "مستشار استثماري" },
  { value: "Other", label: "أخرى" },
];
const US_PERSON_STATUSES = [
  { value: "U.S. person", label: "شخص أمريكي" },
  { value: "Non-U.S. person", label: "غير أمريكي" },
  { value: "Prefer to discuss", label: "يفضل مناقشته" },
];
const CAPITAL_CAPACITIES = [
  { value: "Under $3m", label: "أقل من $3m" },
  { value: "$3–8m", label: "$3–8m" },
  { value: "$8–15m", label: "$8–15m" },
  { value: "$15m+", label: "$15m أو أكثر" },
  { value: "Prefer to discuss", label: "يفضل مناقشته" },
];
const CURRENT_INTERESTS = [
  { value: "Direct co-investment", label: "الاستثمار المشترك المباشر" },
  { value: "Building a portfolio over time", label: "بناء محفظة مع مرور الوقت" },
  { value: "Research / market briefing", label: "بحث / إحاطة سوقية" },
  { value: "Other", label: "أخرى" },
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
    if (!values.fullName.trim()) next.fullName = "يرجى إدخال اسمك الكامل.";
    if (!values.email.trim()) next.email = "يرجى إدخال عنوان بريدك الإلكتروني.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) next.email = "يرجى إدخال عنوان بريد إلكتروني صالح.";
    if (!values.investorType) next.investorType = "يرجى اختيار الوصف الأنسب لوضعك.";
    if (!values.countryRegion.trim()) next.countryRegion = "يرجى إدخال البلد أو المنطقة.";
    if (!values.usPersonStatus) next.usPersonStatus = "يرجى اختيار حالة الشخص الأمريكي أو اختيار 'يفضل مناقشته'.";
    if (!values.indicativeCapitalCapacity) next.indicativeCapitalCapacity = "يرجى اختيار مستوى رأسمال تقريبي أو اختيار 'يفضل مناقشته'.";
    if (!values.currentInterest) next.currentInterest = "يرجى اختيار المجال الذي تهتم به حاليًا.";
    if (!values.preferredTimeZone.trim()) next.preferredTimeZone = "يرجى تحديد المنطقة الزمنية المفضلة.";
    if (!values.privacyConsent) next.privacyConsent = "الموافقة على سياسة الخصوصية وبيانات الاتصال مطلوبة لإرسال هذا الاستفسار.";
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
        body: JSON.stringify({ ...values, locale: "ar" }),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(payload.error || "تعذر حفظ استفسارك. يرجى المحاولة لاحقًا.");
      }
      setSubmitted(true);
      setValues(INITIAL_VALUES);
    } catch (submissionError) {
      setFormError(submissionError instanceof Error ? submissionError.message : "تعذر حفظ استفسارك. يرجى المحاولة لاحقًا.");
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
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">تعريف أولي سري</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl">قدّم طلبًا لتعريف أولي سري.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl">
            حوار أولي سري مخصّص لمكاتب العائلات، المستثمرين الرئيسيين والمستثمرين الخاصين المؤهلين الذين ينظرون في المشاركة المباشرة في شراكات عقارية متعددة الوحدات في الولايات المتحدة.
          </p>
        </div>
      </section>

      <main className="container grid max-w-6xl gap-10 py-12 md:py-16 lg:grid-cols-[.82fr_1.18fr] lg:gap-16">
        <aside className="space-y-7 lg:pt-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">خطوة أولى متأنية</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-primary">ابدأ بالتوافق المتبادل.</h2>
            <p className="mt-4 text-base leading-relaxed text-stone-600">يُستخدم هذا النموذج لمساعدة FoxRidge على فهم سياق التعارف الأولي. لا يُعد هذا نموذجًا للتحقق من هوية المستثمرين، ولا يمثل إجراء عرض أو التزامًا بالاستثمار.</p>
          </div>

          <div className="border-r-2 border-secondary bg-white p-5">
            <div className="flex gap-3">
              <Globe2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-stone-600">نرحب بالاستفسارات الدولية. <Link href="/ar/international-investors" className="font-semibold text-secondary underline underline-offset-2">اطلع على التعاون الدولي</Link>، ثم قدّم طلبًا للتعريف الأولي.</p>
            </div>
          </div>

          <div className="space-y-4 border-t border-stone-200 pt-7 text-sm text-stone-600">
            <div className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" /><span>تفضل التواصل عبر البريد الإلكتروني؟ <a href="mailto:partners@foxridgeequity.com" className="font-semibold text-primary underline underline-offset-2">partners@foxridgeequity.com</a></span></div>
            <div className="flex gap-3"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" /><span>يُراجع كل استفسار على حدة ويُعالج كمبادرة للتأكد من التوافق المبدئي.</span></div>
          </div>
        </aside>

        <section aria-labelledby="introduction-form-heading" className="border border-stone-200 bg-white p-6 shadow-[0_18px_50px_rgba(14,33,72,0.07)] md:p-9">
          {submitted ? (
            <div className="py-6 text-center md:py-10" role="status" aria-live="polite">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-secondary/30 bg-secondary/10"><CheckCircle2 className="h-7 w-7 text-secondary" aria-hidden="true" /></div>
              <h2 id="introduction-form-heading" className="mt-6 font-display text-3xl font-bold text-primary">شكرًا لك.</h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-stone-600">سنراجع كل استفسار على حدة. إذا وُجد توافق، سيتواصل معك أحد أعضاء فريق FoxRidge لترتيب تعريف أولي سري.</p>
              <button type="button" onClick={() => setSubmitted(false)} className="mt-8 inline-flex items-center gap-2 border border-primary px-5 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2">إرسال استفسار آخر <ArrowUpLeft className="h-4 w-4" aria-hidden="true" /></button>
            </div>
          ) : (
            <>
              <div className="border-b border-stone-200 pb-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">نموذج التعريف الأولي</p>
                <h2 id="introduction-form-heading" className="mt-2 font-display text-3xl font-bold text-primary">قدّم المعلومات الأساسية.</h2>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">الحقول التي تحمل <span aria-hidden="true">*</span><span className="sr-only">مطلوب</span> إلزامية. تُستخدم حقول السعة والهوية للمراجعة الأولية فقط؛ إذا كان ذلك مناسبًا، اختر 'يفضل مناقشته'.</p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-6">
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="الاسم الكامل" name="fullName" required error={fieldError("fullName")}>
                    <input id="fullName" name="fullName" autoComplete="name" value={values.fullName} onChange={(event) => updateValue("fullName", event.target.value)} className={fieldClass("fullName")} aria-invalid={Boolean(fieldError("fullName"))} aria-describedby={fieldError("fullName") ? "fullName-error" : undefined} />
                  </Field>
                  <Field label="البريد الإلكتروني" name="email" required error={fieldError("email")}>
                    <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={(event) => updateValue("email", event.target.value)} className={fieldClass("email")} aria-invalid={Boolean(fieldError("email"))} aria-describedby={fieldError("email") ? "email-error" : undefined} />
                  </Field>
                  <SelectField label="نوع المستثمر" name="investorType" required options={INVESTOR_TYPES} value={values.investorType} onChange={(value) => updateValue("investorType", value)} error={fieldError("investorType")} />
                  <Field label="البلد / المنطقة" name="countryRegion" required error={fieldError("countryRegion")}>
                    <input id="countryRegion" name="countryRegion" autoComplete="country-name" value={values.countryRegion} onChange={(event) => updateValue("countryRegion", event.target.value)} className={fieldClass("countryRegion")} aria-invalid={Boolean(fieldError("countryRegion"))} aria-describedby={fieldError("countryRegion") ? "countryRegion-error" : undefined} placeholder="مثال: المملكة المتحدة أو دول مجلس التعاون الخليجي" />
                  </Field>
                  <SelectField label="حالة الشخص الأمريكي" name="usPersonStatus" required options={US_PERSON_STATUSES} value={values.usPersonStatus} onChange={(value) => updateValue("usPersonStatus", value)} error={fieldError("usPersonStatus")} />
                  <SelectField label="نطاق رأس المال التقريبي" name="indicativeCapitalCapacity" required options={CAPITAL_CAPACITIES} value={values.indicativeCapitalCapacity} onChange={(value) => updateValue("indicativeCapitalCapacity", value)} error={fieldError("indicativeCapitalCapacity")} />
                  <SelectField label="الاهتمام الحالي" name="currentInterest" required options={CURRENT_INTERESTS} value={values.currentInterest} onChange={(value) => updateValue("currentInterest", value)} error={fieldError("currentInterest")} />
                  <Field label="المنطقة الزمنية المفضلة" name="preferredTimeZone" required error={fieldError("preferredTimeZone")}>
                    <input id="preferredTimeZone" name="preferredTimeZone" value={values.preferredTimeZone} onChange={(event) => updateValue("preferredTimeZone", event.target.value)} className={fieldClass("preferredTimeZone")} aria-invalid={Boolean(fieldError("preferredTimeZone"))} aria-describedby={fieldError("preferredTimeZone") ? "preferredTimeZone-error" : undefined} placeholder="مثال: GMT+1 / لندن" />
                  </Field>
                </div>

                <Field label="رسالة اختيارية" name="message" error={undefined}>
                  <textarea id="message" name="message" value={values.message} onChange={(event) => updateValue("message", event.target.value)} className={`${INPUT_CLASS} min-h-32 resize-y`} placeholder="هل هناك أي معلومات قد تكون مفيدة في التعارف الأولي؟" />
                </Field>

                <div className="sr-only" aria-hidden="true">
                  <label htmlFor="website">موقع إلكتروني</label>
                  <input id="website" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={(event) => updateValue("website", event.target.value)} />
                </div>

                <div>
                  <label className="flex cursor-pointer items-start gap-3">
                    <input type="checkbox" checked={values.privacyConsent} onChange={(event) => updateValue("privacyConsent", event.target.checked)} className="mt-1 h-4 w-4 shrink-0 accent-secondary" aria-invalid={Boolean(fieldError("privacyConsent"))} aria-describedby={fieldError("privacyConsent") ? "privacyConsent-error" : undefined} />
                    <span className="text-sm leading-relaxed text-stone-600">لقد قرأت <Link href="/ar/privacy-policy" className="font-semibold text-secondary underline underline-offset-2">سياسة الخصوصية</Link>، وأوافق على أن تستخدم FoxRidge Equity Partners / Consulting Point LLC المعلومات أعلاه لمراجعة والرد على طلب التعريف الأولي السري هذا. <span aria-hidden="true">*</span></span>
                  </label>
                  {fieldError("privacyConsent") && <p id="privacyConsent-error" role="alert" className="mt-2 text-sm text-red-700">{fieldError("privacyConsent")}</p>}
                </div>

                {formError && <p role="alert" className="border border-red-200 bg-red-50 px-4 py-3 text-sm leading-relaxed text-red-800">{formError}</p>}

                <button type="submit" disabled={isSubmitting} className="inline-flex min-h-12 w-full items-center justify-center gap-2 bg-secondary px-6 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-65 md:w-auto">
                  {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <LockKeyhole className="h-4 w-4" aria-hidden="true" />}
                  {isSubmitting ? "جاري إرسال الاستفسار" : "طلب تعريف أولي سري"}
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
        <option value="" disabled>اختر خيارًا</option>
        {options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
      </select>
    </Field>
  );
}
