import React from "react";

export const metadata = {
  title: "Kebijakan Privasi | Ibra Digital Engineering",
  description: "Kebijakan Privasi resmi Ibra Digital Engineering.",
};

export default function PrivacyPage() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "3rem 1.5rem", fontFamily: "sans-serif", lineHeight: 1.7, color: "#1d1d1f" }}>
      <a href="/" style={{ display: "inline-block", marginBottom: "1.5rem", color: "#216c7e", fontWeight: 700, textDecoration: "none" }}>
        ← Kembali ke Beranda
      </a>
      <h1 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1rem", color: "#164d57" }}>Kebijakan Privasi</h1>
      <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "2rem" }}>Terakhir Diperbarui: 17 Agustus 2026</p>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>1. Pengumpulan Informasi</h2>
        <p>
          Ibra Digital Engineering menghormati privasi Anda. Kami hanya mengumpulkan informasi yang secara sukarela Anda berikan melalui formulir pemesanan atau kontak resmi kami (seperti Nama, Email, Nomor WhatsApp, dan Detail Proyek) untuk tujuan komunikasi dan pelaksanaan layanan.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>2. Penggunaan Informasi</h2>
        <p>
          Informasi yang dikumpulkan digunakan semata-mata untuk:
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginTop: "0.5rem" }}>
          <li>Memproses konsultasi dan pemesanan pembuatan website/sistem.</li>
          <li>Mengirimkan laporan perkembangan proyek (*progress report*).</li>
          <li>Layanan dukungan teknis dan pemeliharaan sistem.</li>
        </ul>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>3. Keamanan Data</h2>
        <p>
          Kami mengimplementasikan standar keamanan arsitektur web berstandar tinggi (enkripsi SSL/HTTPS, proteksi basis data, dan aturan akses ketat) untuk melindungi data pribadi dan aset digital klien dari akses tanpa izin.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>4. Kontak Kami</h2>
        <p>
          Jika Anda memiliki pertanyaan mengenai Kebijakan Privasi ini, silakan hubungi tim kami melalui WhatsApp resmi: <strong>+62 813-5700-1357</strong>.
        </p>
      </section>
    </div>
  );
}
