import { useEffect } from "react";
import { useLocation } from "wouter";

const SITE_URL = "https://www.foxridgeequity.com";
const SOCIAL_IMAGE = `${SITE_URL}/favicon-512x512.png`;

type Metadata = {
  title: string;
  description: string;
  canonicalPath: string;
  noindex?: boolean;
};

const ROUTE_METADATA: Record<string, Metadata> = {
  "/": {
    title: "FoxRidge Equity Partners | Direct U.S. Multifamily Partnerships",
    description: "Direct U.S. multifamily partnerships for family offices, principals, and qualified private investors. One investor. One deal. Full alignment.",
    canonicalPath: "/",
  },
  "/our-investors": {
    title: "Capital Partners | FoxRidge Equity Partners",
    description: "Explore FoxRidge's one-investor, one-deal model for direct U.S. multifamily partnerships with family offices, principals, and qualified private investors.",
    canonicalPath: "/our-investors",
  },
  "/strategy": {
    title: "Strategy & Markets | FoxRidge Equity Partners",
    description: "FoxRidge's current acquisition framework: Texas Triangle Class B+/A multifamily assets built in 2000 or later, evaluated one acquisition at a time.",
    canonicalPath: "/strategy",
  },
  "/international-investors": {
    title: "International Investors | FoxRidge Equity Partners",
    description: "Direct U.S. multifamily partnerships for family offices, principals, and qualified private investors worldwide, subject to applicable requirements.",
    canonicalPath: "/international-investors",
  },
  "/track-record": {
    title: "Track Record | FoxRidge Equity Partners",
    description: "Selected historical principal experience, clearly attributed to prior sponsoring entities where applicable. Past performance is not indicative of future results.",
    canonicalPath: "/track-record",
  },
  "/investor-resources": {
    title: "Research & Insights | FoxRidge Equity Partners",
    description: "Dated, current research and acquisition-framework context from FoxRidge Equity Partners.",
    canonicalPath: "/investor-resources",
  },
  "/research/current-acquisition-framework": {
    title: "Current Acquisition Framework | FoxRidge Equity Partners",
    description: "A dated overview of FoxRidge's current Texas Triangle, Class B+/A multifamily acquisition framework.",
    canonicalPath: "/research/current-acquisition-framework",
  },
  "/about": {
    title: "Our Team | FoxRidge Equity Partners",
    description: "Meet the FoxRidge principals and learn how their prior experience informs the current direct multifamily partnership model.",
    canonicalPath: "/about",
  },
  "/contact": {
    title: "Request a Confidential Introduction | FoxRidge Equity Partners",
    description: "Request a confidential introduction to discuss a direct U.S. multifamily partnership with FoxRidge Equity Partners.",
    canonicalPath: "/contact",
  },
  "/privacy-policy": {
    title: "Privacy Policy | FoxRidge Equity Partners",
    description: "Read the FoxRidge Equity Partners Privacy Policy and confidential-introduction data-practice information.",
    canonicalPath: "/privacy-policy",
  },
  "/terms-of-service": {
    title: "Terms of Service | FoxRidge Equity Partners",
    description: "Read the Terms of Service for FoxRidge Equity Partners and Consulting Point LLC.",
    canonicalPath: "/terms-of-service",
  },
  "/investor-portal": {
    title: "Detailed Materials | FoxRidge Equity Partners",
    description: "A contextual path for requesting access to detailed FoxRidge materials after a confidential introduction.",
    canonicalPath: "/investor-portal",
    noindex: true,
  },
};

function upsertMeta(attribute: "name" | "property", key: string, content: string) {
  const selector = `meta[${attribute}="${key}"]`;
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

function upsertCanonical(href: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!element) {
    element = document.createElement("link");
    element.rel = "canonical";
    document.head.appendChild(element);
  }
  element.href = href;
}

export default function RouteMetadata() {
  const [location] = useLocation();

  useEffect(() => {
    const path = location.split("?")[0] || "/";
    const metadata = ROUTE_METADATA[path] ?? {
      title: "Page Not Found | FoxRidge Equity Partners",
      description: "The page you requested is not available.",
      canonicalPath: path,
      noindex: true,
    };
    const canonicalUrl = `${SITE_URL}${metadata.canonicalPath}`;

    document.documentElement.lang = "en";
    document.title = metadata.title;
    upsertMeta("name", "description", metadata.description);
    upsertMeta("name", "robots", metadata.noindex ? "noindex, nofollow" : "index, follow");
    upsertMeta("property", "og:title", metadata.title);
    upsertMeta("property", "og:description", metadata.description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", SOCIAL_IMAGE);
    upsertMeta("property", "og:image:alt", "FoxRidge Equity Partners logo");
    upsertMeta("name", "twitter:card", "summary");
    upsertMeta("name", "twitter:title", metadata.title);
    upsertMeta("name", "twitter:description", metadata.description);
    upsertMeta("name", "twitter:image", SOCIAL_IMAGE);
    upsertCanonical(canonicalUrl);
  }, [location]);

  return null;
}
