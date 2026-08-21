import React from "react";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://ibradigital.id"),
  title: {
    default: "Ibra Digital Engineering | Jasa Pembuatan Website Premium",
    template: "%s | Ibra Digital Engineering",
  },
  applicationName: "Ibra Digital Engineering",
  appleWebApp: {
    title: "Ibra Digital Engineering",
  },
  description: "Layanan Pembuatan Website Premium & Arsitektur Sistem di Bobong, Pulau Taliabu, Maluku Utara.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/assets/favicon.png", type: "image/png", sizes: "48x48" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "512x512", type: "image/png" },
      { url: "/apple-touch-icon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    siteName: "Ibra Digital Engineering",
    title: "Ibra Digital Engineering | Jasa Pembuatan Website Premium",
    description: "Layanan Pembuatan Website Premium di Bobong, Pulau Taliabu, Maluku Utara.",
    url: "https://ibradigital.id",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const globalSiteNameSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://ibradigital.id/#website",
    "name": "Ibra Digital Engineering",
    "alternateName": [
      "Ibra Digital",
      "IDE",
      "IBRA Digital Engineering",
      "Ibra Digital Engineering Bobong"
    ],
    "url": "https://ibradigital.id/"
  };

  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="512x512" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/@flaticon/flaticon-uicons@3.3.1/css/all/all.min.css" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSiteNameSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
