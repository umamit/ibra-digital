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
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "3rem 1.5rem", fontFamily: "sans-serif", lineHeight: 1.7, color: "#1d1d1f" }}>
      <a href="/" style={{ display: "inline-block", marginBottom: "1.5rem", color: "#216c7e", fontWeight: 700, textDecoration: "none" }}>
        ← Kembali ke Beranda
      </a>
      <h1 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1rem", color: "#164d57" }}>Syarat &amp; Ketentuan Layanan</h1>
      <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "2rem" }}>Terakhir Diperbarui: 17 Agustus 2026</p>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>1. Ketentuan Pemesanan</h2>
        <p>
          Setiap proyek pembuatan website atau pengembangan sistem di Ibra Digital Engineering dimulai setelah kesepakatan spesifikasi proyek dan pembayaran uang muka (*down payment*) sesuai paket yang dipilih.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>2. Hak Cipta &amp; Kepemilikan Kode</h2>
        <p>
          Setelah seluruh kewajiban pembayaran diselesaikan oleh Klien, seluruh hak cipta konten, aset visual, dan kode aplikasi sepenuhnya menjadi milik Klien, kecuali modul kode berlisensi pihak ketiga.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>3. Garansi &amp; Pemeliharaan (Maintenance)</h2>
        <p>
          Setiap paket pengerjaan mendapatkan fasilitas garansi perbaikan bug/eror gratis dan pemeliharaan teknis sesuai dengan jangka waktu paket yang disepakati.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>4. Pertanyaan &amp; Konsultasi</h2>
        <p>
          Untuk pertanyaan lebih lanjut mengenai syarat dan ketentuan ini, hubungi WhatsApp kami: <strong>+62 813-5700-1357</strong>.
        </p>
      </section>
    </div>
  );
}
