export const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://ibradigital.id/#organization",
  "name": "Ibra Digital Engineering",
  "alternateName": ["Ibra Digital", "IDE", "IBRA Digital"],
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
    { "@type": "City", "name": "Bobong" },
    { "@type": "AdministrativeArea", "name": "Kabupaten Pulau Taliabu" },
    { "@type": "AdministrativeArea", "name": "Provinsi Maluku Utara" },
    { "@type": "Country", "name": "Indonesia" }
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
