"use client";

import React, { useState } from "react";
import styles from "./AgencyFaq.module.css";

const FAQ_ITEMS = [
  {
    q: "Apakah harga jasa sudah termasuk domain, hosting, dan database?",
    a: "Untuk paket penawaran tahun pertama, pendaftaran domain resmi (.id / .sch.id / .com) dan konfigurasi cloud database Supabase/Vercel sudah kami tangani lengkap. Untuk tahun ke-2 dan seterusnya, Klien hanya perlu memperpanjang biaya sewa infrastruktur pihak ketiga secara transparan tanpa biaya jasa pengerjaan sistem lagi."
  },
  {
    q: "Bagaimana alur dan estimasi waktu pengerjaan proyek?",
    a: "Pengerjaan terstruktur dalam 4 Fase: (1) Analisis & Desain Wireframe, (2) Pengembangan Kode & Database, (3) Pengujian Bersama (UAT), dan (4) Pelunasan & Serah Terima Akses (Go-Live). Estimasi waktu berkisar 3-5 hari untuk Landing Page, 7-14 hari untuk Portal Instansi, dan 14-21 hari untuk Sistem LMS/Aplikasi Kustom."
  },
  {
    q: "Bagaimana skema pembayaran dan batasan revisinya?",
    a: "Pembayaran terbagi dalam 2 termin aman: DP 50% di awal setelah kontrak ditandatangani untuk memulai fase desain/coding, dan Pelunasan 50% setelah lolos uji fungsi (UAT). Pada fase UAT, Klien mendapatkan kuota revisi minor gratis sebanyak 2 kali dalam 5 hari kerja sebelum peluncuran sistem."
  },
  {
    q: "Bagaimana dengan kepemilikan kode sumber (Source Code) dan data?",
    a: "Klien menerima hak guna pakai penuh dan akses super admin mandiri. Sesuai UU PDP No. 27/2022, Klien bertindak sebagai Pengendali Data (Data Controller) atas data internal instansi. Untuk hak cipta arsitektur kode sumber inti tetap melekat pada pengembang, namun opsi pembelian kode secara putus (Source Code Buyout) tersedia melalui adendum khusus."
  },
  {
    q: "Apakah ada garansi teknis dan surat resmi serah terima?",
    a: "Tentu! Setiap proyek komersial maupun sosial disertai Surat Perjanjian Kontrak resmi dan diakhiri dengan Berita Acara Serah Terima (BAST). Kami memberikan garansi teknis perbaikan bug/error gratis selama 3 hingga 6 bulan pasca-penandatanganan BAST."
  }
];

export default function AgencyFaq() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq((prev) => (prev === index ? null : index));
  };

  return (
    <div className={styles.faqSectionWrapper}>
      <section id="faq" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Pertanyaan yang Sering Diajukan</h2>
          <p className={styles.sectionDesc}>
            Semua yang perlu Anda ketahui tentang layanan pembuatan website kami.
          </p>
        </div>
        <div className={styles.faqList}>
          {FAQ_ITEMS.map((item, index) => {
            const isActive = activeFaq === index;
            return (
              <div 
                key={index} 
                className={`${styles.faqItem} ${isActive ? styles.faqItemActive : ""}`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className={styles.faqButton}
                  aria-expanded={isActive}
                >
                  <span className={styles.faqQuestion}>{item.q}</span>
                  <svg
                    className={`${styles.faqChevron} ${isActive ? styles.faqChevronActive : ""}`}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div
                  className={styles.faqContent}
                  style={{
                    maxHeight: isActive ? "200px" : "0",
                  }}
                >
                  <p className={styles.faqAnswer}>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
