import { put } from "@vercel/blob";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_ENTITY_TYPES = new Set([
  "Family Office",
  "Private Investor",
  "International Principal",
  "Other",
]);
const ALLOWED_LANGUAGES = new Set(["English", "Russian"]);

function cleanText(value, maxLength) {
  return typeof value === "string" ? value.trim().replace(/\s+/g, " ").slice(0, maxLength) : "";
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return res.status(503).json({ error: "Lead storage is not configured." });
  }

  const fullName = cleanText(req.body?.fullName, 120);
  const email = cleanText(req.body?.email, 254).toLowerCase();
  const phone = cleanText(req.body?.phone, 48);
  const country = cleanText(req.body?.country, 96);
  const entityType = cleanText(req.body?.entityType, 64);
  const language = cleanText(req.body?.language, 32);
  const accreditedInvestorConfirmed = req.body?.accreditedInvestorConfirmed === true;
  const privacyConsent = req.body?.privacyConsent === true;
  const website = cleanText(req.body?.website, 120); // Honeypot: should remain empty.

  if (website) {
    return res.status(400).json({ error: "Unable to process this submission." });
  }

  if (!fullName || !EMAIL_PATTERN.test(email) || !country || !ALLOWED_ENTITY_TYPES.has(entityType) || !ALLOWED_LANGUAGES.has(language)) {
    return res.status(400).json({ error: "Please complete all required fields with valid information." });
  }

  if (!accreditedInvestorConfirmed || !privacyConsent) {
    return res.status(400).json({ error: "Required confirmations are missing." });
  }

  const submittedAt = new Date().toISOString();
  const record = {
    fullName,
    email,
    phone: phone || null,
    country,
    entityType,
    language,
    accreditedInvestorConfirmed,
    privacyConsent,
    submittedAt,
    source: "firm-overview-popup",
  };

  try {
    await put(
      `firm-overview-leads/${submittedAt.slice(0, 10)}/${crypto.randomUUID()}.json`,
      JSON.stringify(record, null, 2),
      {
        access: "private",
        contentType: "application/json",
        addRandomSuffix: false,
      },
    );

    return res.status(201).json({ success: true });
  } catch (error) {
    console.error("Firm Overview lead capture failed", error);
    return res.status(500).json({ error: "We could not save your request. Please try again shortly." });
  }
}
