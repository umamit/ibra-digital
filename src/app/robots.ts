import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/static/"],
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-Web",
          "Google-Extended",
          "Googlebot",
          "Googlebot-Image",
          "PerplexityBot",
          "Applebot",
          "Applebot-Extended",
          "CCBot",
          "Amazonbot",
          "cohere-ai",
          "Bytespider",
          "Bingbot",
          "Slurp",
          "DuckDuckBot",
          "Baiduspider",
          "YandexBot",
          "facebookexternalhit",
          "Twitterbot",
          "LinkedInBot",
          "WhatsApp",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://ibradigital.id/sitemap.xml",
    host: "https://ibradigital.id",
  };
}
