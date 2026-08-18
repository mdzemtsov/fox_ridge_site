import { put } from "@vercel/blob";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_INVESTOR_TYPES = new Set([
  "Family Office",
  "Private Investor",
  "International Principal",
  "Investment Advisor",
  "Other",
]);

function cleanText(value, maxLength) {
  return typeof value === "string" ? value.trim().replace(/\s+/g, " ").slice(0, maxLength) : "";
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }

  const rawOidcToken = req.headers["x-vercel-oidc-token"];
  const runtimeOidcToken = Array.isArray(rawOidcToken) ? rawOidcToken[0] : rawOidcToken;
  const hasBlobAuth = Boolean(
    process.env.BLOB_READ_WRITE_TOKEN ||
    (process.env.BLOB_STORE_ID && runtimeOidcToken),
  );

  if (!hasBlobAuth) {
    return res.status(503).json({ error: "Lead storage is not configured." });
  }

  const fullName = cleanText(req.body?.fullName, 120);
  const email = cleanText(req.body?.email, 254).toLowerCase();
  const investorType = cleanText(req.body?.investorType, 64);
  const privacyConsent = req.body?.privacyConsent === true;
  const website = cleanText(req.body?.website, 120); // Honeypot: should remain empty.

  if (website) {
    return res.status(400).json({ error: "Unable to process this submission." });
  }

  if (!fullName || !EMAIL_PATTERN.test(email) || !ALLOWED_INVESTOR_TYPES.has(investorType)) {
    return res.status(400).json({ error: "Please complete all required fields with valid information." });
  }

  if (!privacyConsent) {
    return res.status(400).json({ error: "Privacy consent is required." });
  }

  const submittedAt = new Date().toISOString();
  const record = {
    submittedAt,
    fullName,
    email,
    investorType,
    privacyConsent,
    source: "capital-partner-investor-list-popup",
  };

  try {
    await put(
      `investor-list-leads/${submittedAt.slice(0, 10)}/${crypto.randomUUID()}.json`,
      JSON.stringify(record, null, 2),
      {
        access: "private",
        contentType: "application/json",
        addRandomSuffix: false,
        ...(runtimeOidcToken && process.env.BLOB_STORE_ID
          ? { oidcToken: runtimeOidcToken, storeId: process.env.BLOB_STORE_ID }
          : {}),
      },
    );

    return res.status(201).json({ success: true });
  } catch (error) {
    console.error("Investor-list lead capture failed", error);
    return res.status(500).json({ error: "We could not save your information. Please try again shortly." });
  }
}
