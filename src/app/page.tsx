import { Metadata } from "next";
import DigitalAgencyClient from "./DigitalAgencyClient";

export const metadata: Metadata = {
  metadataBase: new URL("https://ibradigital.id"),
  title: "Ibra Digital Engineering | Jasa Pembuatan Website Premium",
  description: "Desain website premium berstandar Apple HIG, performa super cepat dengan Next.js & Supabase, serta keamanan tingkat tinggi. Portofolio lengkap dan pemesanan online.",
  alternates: {
    canonical: "https://ibradigital.id",
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
};

export default function HomePage() {
  return <DigitalAgencyClient />;
}
