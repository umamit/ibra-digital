import { Metadata } from "next";
import DigitalAgencyClient from "./DigitalAgencyClient";

export const metadata: Metadata = {
  metadataBase: new URL("https://ibradigital.id"),
  title: "Ibra Digital Engineering | Jasa Pembuatan Website Premium",
  description: "Jasa pembuatan website premium di Bobong, Pulau Taliabu, Maluku Utara. Desain berstandar Apple HIG, performa super cepat Next.js, dan keamanan tingkat tinggi.",
  alternates: {
    canonical: "https://ibradigital.id",
  },
  keywords: [
    "Jasa Pembuatan Website Bobong",
    "Jasa Pembuatan Website Taliabu",
    "Jasa Pembuatan Website",
    "Jasa Web Taliabu",
    "Jasa Web Bobong",
    "Website Sekolah Bobong",
    "Developer Web Maluku Utara",
    "Jasa Web Premium",
    "Next.js Developer Indonesia",
    "Jasa Landing Page",
    "Ibra Digital Engineering",
    "Sistem Informasi Sekolah",
    "Pembuatan Website Profesional",
    "Software House Indonesia",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Ibra Digital Engineering | Jasa Pembuatan Website Premium",
    description: "Jasa pembuatan website premium di Bobong, Pulau Taliabu, Maluku Utara. Desain berstandar Apple HIG, performa super cepat Next.js, dan keamanan tingkat tinggi.",
    url: "https://ibradigital.id",
    type: "website",
    images: [
      {
        url: "/assets/ibra-digital-logo-v3.png",
        width: 512,
        height: 512,
        alt: "Ibra Digital Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ibra Digital Engineering | Jasa Pembuatan Website Premium",
    description: "Jasa pembuatan website premium di Bobong, Pulau Taliabu, Maluku Utara. Desain berstandar Apple HIG, performa super cepat Next.js, dan keamanan tingkat tinggi.",
    images: ["/assets/ibra-digital-logo-v3.png"],
  },
};

export default function HomePage() {
  // Schema markup untuk mendefinisikan nama situs (Google Site Name)
  const siteNameJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Ibra Digital Engineering",
    "alternateName": ["Ibra Digital", "IDE"],
    "url": "https://ibradigital.id"
  };

  // Schema markup untuk detail profil bisnis / layanan profesional
  const professionalServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Ibra Digital Engineering",
    "image": "https://ibradigital.id/assets/ibra-digital-logo-v3.png",
    "url": "https://ibradigital.id",
    "telephone": "+6281357001357",
    "priceRange": "Rp5.000.000 - Rp50.000.000",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bobong",
      "addressRegion": "Pulau Taliabu, Maluku Utara",
      "addressCountry": "ID"
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Bobong"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Pulau Taliabu"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Maluku Utara"
      }
    ],
    "description": "Layanan Pembuatan Website Premium berstandar Apple HIG, performa super cepat dengan Next.js & Supabase, serta keamanan tingkat tinggi.",
    "sameAs": [
      "https://www.ibraglobalenglish.uk"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNameJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
      />
      <DigitalAgencyClient />
    </>
  );
}
