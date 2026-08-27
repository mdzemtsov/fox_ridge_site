import { put } from "@vercel/blob";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const INVESTOR_TYPES = new Set([
  "Family Office",
  "Principal / UHNW Investor",
  "Qualified Private Investor",
  "Investment Adviser",
  "Other",
]);
const US_PERSON_STATUSES = new Set([
  "U.S. person",
  "Non-U.S. person",
  "Prefer to discuss",
]);
const CAPITAL_CAPACITIES = new Set([
  "Under $3m",
  "$3–8m",
  "$8–15m",
  "$15m+",
  "Prefer to discuss",
]);
const CURRENT_INTERESTS = new Set([
  "Direct co-investment",
  "Building a portfolio over time",
  "Research / market briefing",
  "Other",
]);

function cleanText(value, maxLength) {
  return typeof value === "string" ? value.trim().replace(/\s+/g, " ").slice(0, maxLength) : "";
}

function selectValue(value, allowed, maxLength = 96) {
  const cleaned = cleanText(value, maxLength);
  return allowed.has(cleaned) ? cleaned : "";
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
    return res.status(503).json({ error: "Confidential-introduction storage is not configured." });
  }

  const fullName = cleanText(req.body?.fullName, 120);
  const email = cleanText(req.body?.email, 254).toLowerCase();
  const investorType = selectValue(req.body?.investorType, INVESTOR_TYPES);
  const countryRegion = cleanText(req.body?.countryRegion, 120);
  const usPersonStatus = selectValue(req.body?.usPersonStatus, US_PERSON_STATUSES);
  const indicativeCapitalCapacity = selectValue(req.body?.indicativeCapitalCapacity, CAPITAL_CAPACITIES);
  const currentInterest = selectValue(req.body?.currentInterest, CURRENT_INTERESTS);
  const preferredTimeZone = cleanText(req.body?.preferredTimeZone, 96);
  const message = cleanText(req.body?.message, 2000);
  const privacyConsent = req.body?.privacyConsent === true;
  const website = cleanText(req.body?.website, 120); // Honeypot: must remain empty.

  if (website) {
    return res.status(400).json({ error: "Unable to process this submission." });
  }

  if (!fullName || !EMAIL_PATTERN.test(email) || !investorType || !countryRegion || !usPersonStatus || !indicativeCapitalCapacity || !currentInterest || !preferredTimeZone) {
    return res.status(400).json({ error: "Please complete all required fields with valid information." });
  }

  if (!privacyConsent) {
    return res.status(400).json({ error: "Privacy and contact consent is required." });
  }

  const submittedAt = new Date().toISOString();
  const record = {
    submittedAt,
    fullName,
    email,
    investorType,
    countryRegion,
    usPersonStatus,
    indicativeCapitalCapacity,
    currentInterest,
    preferredTimeZone,
    message,
    privacyConsent,
    source: "confidential-introduction-form",
    formVersion: "2026-08",
  };

  try {
    await put(
      `confidential-introductions/${submittedAt.slice(0, 10)}/${crypto.randomUUID()}.json`,
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
    console.error("Confidential introduction capture failed", error);
    return res.status(500).json({ error: "We could not save your inquiry. Please try again shortly." });
  }
}
