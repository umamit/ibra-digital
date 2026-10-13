import { Metadata } from "next";
import DigitalAgencyClient from "./DigitalAgencyClient";
import { professionalServiceJsonLd } from "@/data/agencySchema";

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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
      />
      <DigitalAgencyClient />
    </>
  );
}
