import { Metadata } from "next";
import DigitalAgencyClient from "./DigitalAgencyClient";

export const metadata: Metadata = {
  metadataBase: new URL("https://ibradigital.id"),
  title: "Ibra Digital Engineering | Jasa Pembuatan Website Premium",
  description: "Desain website premium berstandar Apple HIG, performa super cepat dengan Next.js & Supabase, serta keamanan tingkat tinggi. Portofolio lengkap dan pemesanan online.",
  alternates: {
    canonical: "https://ibradigital.id",
  },
  keywords: [
    "Jasa Pembuatan Website",
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
    description: "Desain website premium berstandar Apple HIG, performa super cepat dengan Next.js & Supabase, serta keamanan tingkat tinggi.",
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
    description: "Desain website premium berstandar Apple HIG, performa super cepat dengan Next.js & Supabase, serta keamanan tingkat tinggi.",
    images: ["/assets/ibra-digital-logo-v3.png"],
  },
};

export default function HomePage() {
  const jsonLd = {
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
      "addressRegion": "Maluku Utara",
      "addressCountry": "ID"
    },
    "description": "Layanan Pembuatan Website Premium berstandar Apple HIG, performa super cepat dengan Next.js & Supabase, serta keamanan tingkat tinggi.",
    "sameAs": [
      "https://www.ibraglobalenglish.uk"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DigitalAgencyClient />
    </>
  );
}
