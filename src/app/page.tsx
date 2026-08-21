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

  // Schema markup untuk detail profil bisnis / layanan profesional berstandar Google Rich Results
  const professionalServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://ibradigital.id/#organization",
    "name": "Ibra Digital Engineering",
    "alternateName": ["Ibra Digital", "IDE"],
    "image": "https://ibradigital.id/assets/ibra-digital-logo-v3.png",
    "logo": "https://ibradigital.id/assets/ibra-digital-logo-v3.png",
    "url": "https://ibradigital.id",
    "telephone": "+6281357001357",
    "email": "contact@ibradigital.id",
    "priceRange": "Rp1.500.000 - Rp50.000.000",
    "currenciesAccepted": "IDR",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "08:00",
        "closes": "21:00"
      }
    ],
    "founder": {
      "@type": "Person",
      "name": "Anhar Ekho Sulasmin Umamit, S.T.",
      "jobTitle": "Lead Website Architect & Software Engineer",
      "alumniOf": "Universitas / Software Engineering"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bobong",
      "addressLocality": "Bobong",
      "addressRegion": "Pulau Taliabu, Maluku Utara",
      "postalCode": "97794",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-1.9328",
      "longitude": "124.3789"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Bobong"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Kabupaten Pulau Taliabu"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Provinsi Maluku Utara"
      },
      {
        "@type": "Country",
        "name": "Indonesia"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Layanan Pembuatan Website & Sistem Digital",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Jasa Pembuatan Landing Page Kilat",
            "description": "Pembuatan landing page konversi tinggi standar Apple HIG selesai dalam 3-5 hari."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Jasa Pembuatan Website Profil Instansi & Sekolah",
            "description": "Website resmi sekolah / profil perusahaan dengan optimasi SEO lokal Google."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pengembangan Sistem Informasi & LMS Kustom",
            "description": "Sistem presensi GPS geofence, manajemen data Supabase, dan platform belajar digital."
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "18",
      "bestRating": "5",
      "worstRating": "1"
    },
    "description": "Layanan Pembuatan Website Premium di Bobong, Pulau Taliabu, Maluku Utara berstandar Apple HIG, performa super cepat Next.js & Supabase, serta keamanan tingkat tinggi.",
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
