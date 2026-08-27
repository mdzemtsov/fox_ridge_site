import { put } from "@vercel/blob";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RESEND_EMAIL_ENDPOINT = "https://api.resend.com/emails";
const FOXRIDGE_SITE_URL = "https://www.foxridgeequity.com";
const NOTIFICATION_RECIPIENT = "partners@foxridgeequity.com";
const NOTIFICATION_SENDER = "FoxRidge Equity Partners <partners@foxridgeequity.com>";
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

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;",
  })[character]);
}

function formatTextField(label, value) {
  return `${label}: ${value || "Not provided"}`;
}

function formatHtmlField(label, value) {
  return `<tr><td style="padding:8px 14px 8px 0;color:#5f5a52;font-weight:600;vertical-align:top;white-space:nowrap;">${escapeHtml(label)}</td><td style="padding:8px 0;color:#1e293b;vertical-align:top;">${escapeHtml(value || "Not provided")}</td></tr>`;
}

function internalNotificationContent(record) {
  const fields = [
    ["Submitted", record.submittedAt],
    ["Full name", record.fullName],
    ["Email", record.email],
    ["Investor type", record.investorType],
    ["Country / region", record.countryRegion],
    ["U.S. person status", record.usPersonStatus],
    ["Indicative capital capacity", record.indicativeCapitalCapacity],
    ["Current interest", record.currentInterest],
    ["Preferred time zone", record.preferredTimeZone],
    ["Privacy/contact consent", record.privacyConsent ? "Confirmed" : "Not confirmed"],
  ];
  const textLines = [
    "A new confidential-introduction inquiry has been received through foxridgeequity.com.",
    "",
    ...fields.map(([label, value]) => formatTextField(label, value)),
    "",
    "Optional message:",
    record.message || "Not provided",
    "",
    "Reply to this email to respond directly to the inquirer.",
  ];
  const rows = fields.map(([label, value]) => formatHtmlField(label, value)).join("");
  const messageHtml = escapeHtml(record.message || "Not provided").replace(/\n/g, "<br />");

  return {
    text: textLines.join("\n"),
    html: `<!doctype html><html><body style="margin:0;background:#f7f5f2;font-family:Arial,sans-serif;color:#1e293b;"><div style="max-width:680px;margin:0 auto;padding:32px 20px;"><div style="background:#0e2148;padding:24px 28px;"><p style="margin:0;color:#d2ad52;font-size:12px;font-weight:700;letter-spacing:1.6px;text-transform:uppercase;">FoxRidge Equity Partners</p><h1 style="margin:10px 0 0;color:#ffffff;font-size:24px;line-height:1.3;">New confidential introduction</h1></div><div style="background:#ffffff;border:1px solid #e7e3dc;padding:28px;"><p style="margin:0 0 22px;color:#5f5a52;font-size:15px;line-height:1.6;">A new inquiry has been submitted through foxridgeequity.com. Reply to this email to respond directly to the inquirer.</p><table role="presentation" style="width:100%;border-collapse:collapse;font-size:14px;line-height:1.45;">${rows}</table><div style="margin-top:24px;padding-top:20px;border-top:1px solid #e7e3dc;"><p style="margin:0 0 8px;color:#5f5a52;font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">Optional message</p><p style="margin:0;color:#1e293b;font-size:14px;line-height:1.6;">${messageHtml}</p></div></div><p style="margin:16px 0 0;color:#7a746b;font-size:12px;line-height:1.5;">This operational notification contains confidential inquiry information. Please handle it in accordance with FoxRidge’s internal data-handling practices.</p></div></body></html>`,
  };
}

function acknowledgementContent(record) {
  const safeName = escapeHtml(record.fullName);
  const resourcesUrl = `${FOXRIDGE_SITE_URL}/investor-resources`;

  return {
    text: `Hello ${record.fullName},\n\nThank you for requesting a confidential introduction with FoxRidge Equity Partners. We have received your inquiry and will review it personally. If there is mutual fit, a member of the FoxRidge team will contact you to arrange a confidential introductory conversation.\n\nIn the meantime, you may review our Investor Resources: ${resourcesUrl}\n\nThis email confirms receipt of your inquiry only. It is not an offer, solicitation, or invitation to invest.\n\nFoxRidge Equity Partners\n${FOXRIDGE_SITE_URL}`,
    html: `<!doctype html><html><body style="margin:0;background:#f7f5f2;font-family:Arial,sans-serif;color:#1e293b;"><div style="max-width:680px;margin:0 auto;padding:32px 20px;"><div style="background:#0e2148;padding:24px 28px;"><p style="margin:0;color:#d2ad52;font-size:12px;font-weight:700;letter-spacing:1.6px;text-transform:uppercase;">FoxRidge Equity Partners</p><h1 style="margin:10px 0 0;color:#ffffff;font-size:24px;line-height:1.3;">We received your inquiry.</h1></div><div style="background:#ffffff;border:1px solid #e7e3dc;padding:28px;"><p style="margin:0 0 18px;color:#1e293b;font-size:16px;line-height:1.6;">Hello ${safeName},</p><p style="margin:0 0 18px;color:#5f5a52;font-size:15px;line-height:1.65;">Thank you for requesting a confidential introduction with FoxRidge Equity Partners. We have received your inquiry and will review it personally.</p><p style="margin:0 0 24px;color:#5f5a52;font-size:15px;line-height:1.65;">If there is mutual fit, a member of the FoxRidge team will contact you to arrange a confidential introductory conversation.</p><div style="border-left:2px solid #d2ad52;background:#fbfaf8;padding:18px 20px;"><p style="margin:0 0 7px;color:#0e2148;font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">In the meantime</p><p style="margin:0;color:#5f5a52;font-size:14px;line-height:1.6;">You may review our <a href="${resourcesUrl}" style="color:#0e2148;font-weight:700;text-decoration:underline;">Investor Resources</a>.</p></div></div><p style="margin:16px 0 0;color:#7a746b;font-size:12px;line-height:1.55;">This email confirms receipt of your inquiry only. It is not an offer, solicitation, or invitation to invest.</p></div></body></html>`,
  };
}

async function sendEmail({ to, replyTo, subject, content, idempotencyKey, category }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("Resend notification is not configured.");
  }

  const response = await fetch(RESEND_EMAIL_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": idempotencyKey,
    },
    body: JSON.stringify({
      from: NOTIFICATION_SENDER,
      to: [to],
      ...(replyTo ? { reply_to: replyTo } : {}),
      subject,
      text: content.text,
      html: content.html,
      tags: [{ name: "source", value: "confidential-introduction" }, { name: "category", value: category }],
    }),
  });

  if (!response.ok) {
    console.error("Confidential introduction email failed", {
      category,
      status: response.status,
      statusText: response.statusText,
    });
    throw new Error("Confidential introduction email could not be delivered.");
  }
}

async function sendInternalNotification(record, submissionId) {
  await sendEmail({
    to: NOTIFICATION_RECIPIENT,
    replyTo: record.email,
    subject: `New confidential introduction — ${record.fullName}`,
    content: internalNotificationContent(record),
    idempotencyKey: `foxridge-confidential-introduction/internal/${submissionId}`,
    category: "internal-notification",
  });
}

async function sendApplicantAcknowledgement(record, submissionId) {
  await sendEmail({
    to: record.email,
    subject: "We received your confidential introduction request",
    content: acknowledgementContent(record),
    idempotencyKey: `foxridge-confidential-introduction/applicant-acknowledgement/${submissionId}`,
    category: "applicant-acknowledgement",
  });
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

  if (!process.env.RESEND_API_KEY) {
    return res.status(503).json({ error: "Confidential-introduction notifications are not configured." });
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
  const submissionId = crypto.randomUUID();
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
      `confidential-introductions/${submittedAt.slice(0, 10)}/${submissionId}.json`,
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

    await sendInternalNotification(record, submissionId);
    await sendApplicantAcknowledgement(record, submissionId);
    return res.status(201).json({ success: true });
  } catch (error) {
    console.error("Confidential introduction capture failed", {
      message: error instanceof Error ? error.message : "Unknown error",
      submissionId,
    });
    return res.status(500).json({ error: "We could not complete your inquiry. Please try again shortly." });
  }
}
