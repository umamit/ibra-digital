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
          "Googlebot",
          "Googlebot-Image",
          "Bingbot",
          "Slurp",
          "DuckDuckBot",
          "Baiduspider",
          "YandexBot",
          "facebookexternalhit",
          "Twitterbot",
          "LinkedInBot",
          "WhatsApp",
          "Applebot",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://ibradigital.id/sitemap.xml",
    host: "https://ibradigital.id",
  };
}
