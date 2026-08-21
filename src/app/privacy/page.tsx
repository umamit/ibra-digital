import React from "react";

export const metadata = {
  title: "Kebijakan Privasi | Ibra Digital Engineering",
  description: "Kebijakan Privasi resmi Ibra Digital Engineering.",
  alternates: {
    canonical: "https://ibradigital.id/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "4rem 1.5rem", fontFamily: "var(--font-sans), sans-serif", lineHeight: 1.8, color: "var(--color-gray-900)" }}>
      <a href="/" style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "2rem", color: "var(--color-primary)", fontWeight: 700, textDecoration: "none", fontSize: "0.95rem" }}>
        ← Kembali ke Beranda
      </a>
      <h1 style={{ fontSize: "2.25rem", fontWeight: 800, marginBottom: "0.5rem", color: "var(--color-primary-dark)", letterSpacing: "-0.02em" }}>Kebijakan Privasi</h1>
      <p style={{ fontSize: "0.85rem", color: "var(--color-gray-500)", marginBottom: "2.5rem" }}>Terakhir Diperbarui: 18 Agustus 2026</p>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--color-primary)" }}>1. Pengumpulan Data Pribadi</h2>
        <p>
          Ibra Digital Engineering berkomitmen melindungi informasi pribadi Anda. Kami mengumpulkan data yang Anda berikan secara sukarela melalui formulir konsultasi, formulir pemesanan, atau komunikasi WhatsApp resmi. Data ini mencakup nama, alamat email, nomor telepon/WhatsApp, nama instansi/perusahaan, dan spesifikasi proyek yang dibutuhkan.
        </p>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--color-primary)" }}>2. Penggunaan Informasi</h2>
        <p>
          Setiap informasi yang kami kumpulkan digunakan secara eksklusif untuk kepentingan berikut:
        </p>
        <ul style={{ paddingLeft: "1.5rem", marginTop: "0.75rem", display: "flex", flexDirection: "column", gap: "8px" }}>
          <li>Memproses permohonan konsultasi, estimasi biaya proyek, dan pembuatan kontrak kerja.</li>
          <li>Mengirimkan laporan berkala perkembangan proyek (*progress reports*) dan penagihan SPP/proyek.</li>
          <li>Mengirimkan pemberitahuan status proyek otomatis melalui WhatsApp API Gateway.</li>
          <li>Menyediakan layanan pemeliharaan teknis (*technical maintenance*) dan bantuan darurat server.</li>
        </ul>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--color-primary)" }}>3. Keamanan Aset & Proteksi Data</h2>
        <p>
          Kami menerapkan standar keamanan teknis berlapis (arsitektur server terenkripsi SSL/HTTPS, pembatasan hak akses basis data lewat Supabase Row Level Security (RLS), proteksi DNS Cloudflare, serta enkripsi sandi JWT) untuk menjamin keamanan data pribadi dan kredensial sistem Anda dari potensi kebocoran informasi atau akses ilegal pihak ketiga.
        </p>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--color-primary)" }}>4. Batasan Tanggung Jawab Data Klien &amp; UU PDP</h2>
        <p>
          Untuk sistem aplikasi yang dipasang menggunakan akun database dan hosting mandiri milik Klien (seperti database Supabase milik instansi sekolah atau Dinas PUPR), Klien bertindak sepenuhnya sebagai Pengendali Data (*Data Controller*) sesuai UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP). Ibra Digital Engineering hanya bertindak sebagai Pengembang Sistem (*Data Processor*) dan tidak memiliki akses langsung, hak kepemilikan, maupun tanggung jawab hukum atas keamanan data pengguna akhir (seperti data siswa, guru, atau surveyor) yang disimpan di dalam infrastruktur mandiri milik Klien tersebut.
        </p>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--color-primary)" }}>5. Cookies &amp; Pelacakan Kunjungan</h2>
        <p>
          Situs web ini dapat menggunakan cookies fungsional untuk menyimpan preferensi tata letak visual (seperti tema gelap/terang otomatis) guna mengoptimalkan kenyamanan jelajah Anda di masa mendatang sesuai standar kenyamanan Apple HIG. Kami tidak menggunakan cookies untuk melacak aktivitas pribadi Anda di luar domain ibradigital.id.
        </p>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--color-primary)" }}>6. Kontak Keamanan Data</h2>
        <p>
          Apabila Anda memiliki pertanyaan, keberatan, atau ingin meminta penghapusan permanen atas data pribadi Anda dari sistem kami, silakan hubungi saluran WhatsApp Resmi Data Privacy Officers kami di: <strong>+62 813-5700-1357</strong>.
        </p>
      </section>
    </div>
  );
}
