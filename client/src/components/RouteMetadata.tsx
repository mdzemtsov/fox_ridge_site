import { useEffect } from "react";
import { useLocation } from "wouter";
import { isChinesePath, toChinesePath, toEnglishPath } from "@/lib/locale";

const SITE_URL = "https://www.foxridgeequity.com";
const SOCIAL_IMAGE = `${SITE_URL}/favicon-512x512.png`;

type Metadata = {
  title: string;
  description: string;
  canonicalPath: string;
  noindex?: boolean;
};

const ENGLISH_METADATA: Record<string, Metadata> = {
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

const CHINESE_METADATA: Record<string, Metadata> = {
  "/": {
    title: "FoxRidge Equity Partners｜美国多户住宅直接合作",
    description: "面向家族办公室、企业家和合格私人投资者的美国多户住宅直接合作。一位投资者，一项交易，充分利益一致。",
    canonicalPath: "/",
  },
  "/our-investors": {
    title: "资本合作伙伴｜FoxRidge Equity Partners",
    description: "了解 FoxRidge 面向家族办公室、企业家和合格私人投资者的“一位投资者，一项交易”美国多户住宅直接合作模式。",
    canonicalPath: "/our-investors",
  },
  "/strategy": {
    title: "策略与市场｜FoxRidge Equity Partners",
    description: "FoxRidge 当前收购框架：逐项评估 2000 年或以后建成的 Texas Triangle Class B+/A 多户住宅资产。",
    canonicalPath: "/strategy",
  },
  "/international-investors": {
    title: "国际投资者｜FoxRidge Equity Partners",
    description: "面向全球家族办公室、企业家和合格私人投资者的美国多户住宅直接合作，须符合适用要求。",
    canonicalPath: "/international-investors",
  },
  "/track-record": {
    title: "过往经验｜FoxRidge Equity Partners",
    description: "经适当归因于过往发起实体的主要负责人历史经验节选。过往业绩不代表未来结果。",
    canonicalPath: "/track-record",
  },
  "/investor-resources": {
    title: "研究资料｜FoxRidge Equity Partners",
    description: "FoxRidge Equity Partners 提供的具日期标注的市场研究与收购框架背景资料。",
    canonicalPath: "/investor-resources",
  },
  "/research/current-acquisition-framework": {
    title: "当前收购框架｜FoxRidge Equity Partners",
    description: "FoxRidge 关于 Texas Triangle Class B+/A 多户住宅当前收购框架的具日期概览。",
    canonicalPath: "/research/current-acquisition-framework",
  },
  "/about": {
    title: "团队介绍｜FoxRidge Equity Partners",
    description: "认识 FoxRidge 的主要负责人，并了解其过往经验如何支持当前的多户住宅直接合作模式。",
    canonicalPath: "/about",
  },
  "/contact": {
    title: "申请保密初步沟通｜FoxRidge Equity Partners",
    description: "申请与 FoxRidge Equity Partners 就美国多户住宅直接合作进行保密初步沟通。",
    canonicalPath: "/contact",
  },
  "/privacy-policy": {
    title: "隐私政策｜FoxRidge Equity Partners",
    description: "阅读 FoxRidge Equity Partners 隐私政策及保密初步沟通相关数据处理说明。",
    canonicalPath: "/privacy-policy",
  },
  "/terms-of-service": {
    title: "使用条款｜FoxRidge Equity Partners",
    description: "阅读 FoxRidge Equity Partners 与 Consulting Point LLC 的使用条款。",
    canonicalPath: "/terms-of-service",
  },
  "/investor-portal": {
    title: "详细资料｜FoxRidge Equity Partners",
    description: "在完成保密初步沟通后，申请获取 FoxRidge 详细资料的说明路径。",
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

function upsertAlternateLanguage(hreflang: string, href: string) {
  const selector = `link[rel="alternate"][hreflang="${hreflang}"]`;
  let element = document.head.querySelector<HTMLLinkElement>(selector);
  if (!element) {
    element = document.createElement("link");
    element.rel = "alternate";
    element.hreflang = hreflang;
    document.head.appendChild(element);
  }
  element.href = href;
}

export default function RouteMetadata() {
  const [location] = useLocation();

  useEffect(() => {
    const path = location.split("?")[0] || "/";
    const chinese = isChinesePath(path);
    const basePath = chinese ? toEnglishPath(path) : path;
    const catalog = chinese ? CHINESE_METADATA : ENGLISH_METADATA;
    const fallback = chinese
      ? { title: "页面未找到｜FoxRidge Equity Partners", description: "您请求的页面暂不可用。", canonicalPath: basePath, noindex: true }
      : { title: "Page Not Found | FoxRidge Equity Partners", description: "The page you requested is not available.", canonicalPath: basePath, noindex: true };
    const metadata = catalog[basePath] ?? fallback;
    const localizedCanonicalPath = chinese ? toChinesePath(metadata.canonicalPath) : metadata.canonicalPath;
    const canonicalUrl = `${SITE_URL}${localizedCanonicalPath}`;
    const englishUrl = `${SITE_URL}${metadata.canonicalPath}`;
    const chineseUrl = `${SITE_URL}${toChinesePath(metadata.canonicalPath)}`;

    document.documentElement.lang = chinese ? "zh-CN" : "en";
    document.title = metadata.title;
    upsertMeta("name", "description", metadata.description);
    upsertMeta("name", "robots", metadata.noindex ? "noindex, nofollow" : "index, follow");
    upsertMeta("property", "og:title", metadata.title);
    upsertMeta("property", "og:description", metadata.description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", SOCIAL_IMAGE);
    upsertMeta("property", "og:image:alt", chinese ? "FoxRidge Equity Partners 标识" : "FoxRidge Equity Partners logo");
    upsertMeta("name", "twitter:card", "summary");
    upsertMeta("name", "twitter:title", metadata.title);
    upsertMeta("name", "twitter:description", metadata.description);
    upsertMeta("name", "twitter:image", SOCIAL_IMAGE);
    upsertCanonical(canonicalUrl);
    upsertAlternateLanguage("en", englishUrl);
    upsertAlternateLanguage("zh-CN", chineseUrl);
    upsertAlternateLanguage("x-default", englishUrl);
  }, [location]);

  return null;
}
