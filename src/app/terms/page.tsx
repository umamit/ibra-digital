import React from "react";

export const metadata = {
  title: "Syarat & Ketentuan | Ibra Digital Engineering",
  description: "Syarat & Ketentuan Layanan resmi Ibra Digital Engineering.",
  alternates: {
    canonical: "https://ibradigital.id/terms",
  },
};

export default function TermsPage() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "4rem 1.5rem", fontFamily: "var(--font-sans), sans-serif", lineHeight: 1.8, color: "var(--color-gray-900)" }}>
      <a href="/" style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "2rem", color: "var(--color-primary)", fontWeight: 700, textDecoration: "none", fontSize: "0.95rem" }}>
        ← Kembali ke Beranda
      </a>
      <h1 style={{ fontSize: "2.25rem", fontWeight: 800, marginBottom: "0.5rem", color: "var(--color-primary-dark)", letterSpacing: "-0.02em" }}>Syarat &amp; Ketentuan Layanan</h1>
      <p style={{ fontSize: "0.85rem", color: "var(--color-gray-500)", marginBottom: "2.5rem" }}>Terakhir Diperbarui: 18 Agustus 2026</p>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--color-primary)" }}>1. Kesepakatan Awal &amp; Pengerjaan Proyek</h2>
        <p>
          Setiap pengerjaan website, landing page, maupun sistem aplikasi khusus dimulai secara sah setelah spesifikasi kebutuhan proyek disepakati secara tertulis oleh kedua belah pihak dan Klien melakukan pembayaran uang muka (*down payment*) sesuai dengan invoice resmi yang kami terbitkan.
        </p>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--color-primary)" }}>2. Batasan Waktu &amp; Keterlambatan Konten</h2>
        <p>
          Ibra Digital Engineering berkomitmen menyelesaikan pembuatan sistem dalam target waktu yang disepakati (misal: paket kilat 3-5 hari). Kecepatan penyelesaian ini sangat bergantung pada kelengkapan aset visual, logo, dan salinan materi tertulis dari pihak Klien. Keterlambatan penyerahan materi dari pihak Klien dapat menggeser estimasi tanggal peluncuran sistem.
        </p>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--color-primary)" }}>3. Hak Cipta &amp; Kepemilikan Kode (Source Code)</h2>
        <p>
          Untuk proyek pengembangan kustom penuh (*custom development*), hak kepemilikan kode aplikasi kustom, berkas basis data, dan hak cipta materi visual dialihkan sepenuhnya kepada Klien setelah pelunasan pembayaran diselesaikan. Namun, untuk sistem yang dikembangkan berbasis sewa atau lisensi (seperti modul LMS / Sekolah Pintar Suite), hak cipta kode inti sistem tetap milik Ibra Digital Engineering dan Klien hanya menerima hak guna pakai (lisensi akses). Pembelian hak cipta kode secara penuh (*Source Code Buyout*) untuk sistem berlisensi tunduk pada kontrak dan biaya kesepakatan khusus di luar paket standar.
        </p>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--color-primary)" }}>4. Biaya Infrastruktur Tahunan &amp; Layanan Pihak Ketiga</h2>
        <p>
          Klien berkewajiban menanggung biaya perpanjangan sewa domain dan hosting tahunan secara tepat waktu (baik melakukan pembayaran mandiri langsung ke penyedia layanan maupun melalui manajemen kami) untuk menjamin keberlangsungan hidup website. Biaya penggunaan modul premium pihak ketiga seperti kuota API WhatsApp Gateway dan token API Kecerdasan Buatan (AI) dibebankan secara transparan sesuai volume penggunaan sistem Klien masing-masing.
        </p>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--color-primary)" }}>5. Garansi Perbaikan Bug &amp; Dukungan Pemeliharaan</h2>
        <p>
          Kami memberikan garansi gratis perbaikan kesalahan teknis (*bug/error fixes*) pasca-peluncuran sesuai dengan jangka waktu dan cakupan paket kontrak yang dipilih. Garansi ini dapat gugur secara otomatis apabila terjadi perubahan/modifikasi kode inti secara tidak sah oleh pihak ketiga di luar tim Ibra Digital Engineering. Biaya jasa pemeliharaan rutin bulanan/tahunan (*maintenance SLA*) diatur secara terpisah sesuai kesepakatan kontrak.
        </p>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--color-primary)" }}>6. Konsultasi &amp; Informasi Layanan</h2>
        <p>
          Apabila terdapat pasal atau ketentuan yang memerlukan penjelasan lebih detail, Anda dapat berkonsultasi langsung dengan manajemen kami melalui WhatsApp Resmi di: <strong>+62 813-5700-1357</strong>.
        </p>
      </section>
    </div>
  );
}
