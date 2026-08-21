import React from "react";

export const metadata = {
  title: "Syarat & Ketentuan | Ibra Digital Engineering",
  description: "Syarat & Ketentuan Layanan resmi Ibra Digital Engineering.",
  alternates: {
    canonical: "https://ibradigital.id/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "4rem 1.5rem", fontFamily: "var(--font-sans), sans-serif", lineHeight: 1.8, color: "var(--color-gray-900)" }}>
      <a href="/" style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "2rem", color: "var(--color-primary)", fontWeight: 700, textDecoration: "none", fontSize: "0.95rem" }}>
        ← Kembali ke Beranda
      </a>
      <h1 style={{ fontSize: "2.25rem", fontWeight: 800, marginBottom: "0.5rem", color: "var(--color-primary-dark)", letterSpacing: "-0.02em" }}>Syarat &amp; Ketentuan Layanan</h1>
      <p style={{ fontSize: "0.85rem", color: "var(--color-gray-500)", marginBottom: "2.5rem" }}>Terakhir Diperbarui: 21 Agustus 2026</p>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--color-primary)" }}>1. Kesepakatan Awal, Alur Tahapan &amp; Pembayaran</h2>
        <p>
          Setiap pengerjaan website, landing page, maupun sistem aplikasi digital terbagi dalam 4 fase: (1) Analisis &amp; Desain, (2) Pengembangan Kode, (3) Pengujian UAT (maksimal 2 kali revisi minor), dan (4) Pelunasan &amp; Serah Terima. Pengerjaan dimulai secara sah setelah spesifikasi proyek disepakati dan pembayaran Uang Muka (DP 50%) diterima. Pelunasan sisa nilai kontrak (50%) wajib diselesaikan sebelum penyerahan kredensial akses penuh (*go-live*). Keterlambatan pembayaran pelunasan melebihi 7 hari kalender memberikan hak kepada kami untuk menangguhkan (*suspend*) akses operasional sistem.
        </p>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--color-primary)" }}>2. Batasan Waktu &amp; Keterlambatan Materi</h2>
        <p>
          Ibra Digital Engineering berkomitmen menyelesaikan pembuatan sistem dalam target waktu yang disepakati. Kecepatan penyelesaian sangat bergantung pada kelengkapan aset visual, logo, foto, dan salinan materi tertulis dari pihak Klien. Keterlambatan penyerahan materi dari pihak Klien secara otomatis menggeser estimasi tanggal peluncuran sistem tanpa sanksi denda keterlambatan bagi kami.
        </p>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--color-primary)" }}>3. Penambahan Fitur di Luar Ruang Lingkup (Anti Scope Creep)</h2>
        <p>
          Seluruh pengerjaan terbatas pada ruang lingkup yang disepakati di awal. Permintaan fitur baru, halaman baru, atau perombakan sistem di luar kesepakatan awal dikategorikan sebagai pekerjaan tambahan (*additional work*) dan wajib dituangkan dalam Adendum Kontrak tertulis dengan kesepakatan biaya tambahan sebelum dikerjakan.
        </p>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--color-primary)" }}>4. Hak Cipta, Lisensi &amp; Atribusi Portofolio</h2>
        <p>
          Untuk proyek kustom penuh (*custom development*), hak guna pakai dialihkan setelah pelunasan selesai. Untuk produk sistem berbasis lisensi, hak cipta kode inti tetap melekat pada pengembang. Kami memiliki hak mencantumkan kredit resmi di footer serta menggunakan tangkapan layar antarmuka sistem sebagai materi portofolio profesional, dengan tetap menjaga kerahasiaan data sensitif internal Klien.
        </p>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--color-primary)" }}>5. Biaya Infrastruktur Tahunan &amp; Layanan Pihak Ketiga</h2>
        <p>
          Klien berkewajiban menanggung biaya perpanjangan sewa domain resmi (.id / .sch.id / .com) dan cloud database/hosting tahunan secara tepat waktu untuk menjamin kelangsungan akses sistem. Biaya penggunaan modul pihak ketiga seperti kuota API WhatsApp Gateway dan token AI dibebankan secara transparan sesuai volume penggunaan sistem Klien masing-masing.
        </p>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--color-primary)" }}>6. Garansi Teknis &amp; Keadaan Kahar (Force Majeure)</h2>
        <p>
          Kami memberikan garansi gratis perbaikan kesalahan teknis (*bug/error fixes*) bawaan sistem selama 3 hingga 6 bulan pasca-serah terima (BAST). Garansi gugur apabila kode diubah oleh pihak ketiga tanpa izin kami. Keterlambatan akibat Keadaan Kahar (*Force Majeure*) seperti bencana alam, pemadaman listrik massal berkepanjangan, atau gangguan jaringan internet di wilayah kepulauan secara otomatis memperpanjang jadwal pengerjaan tanpa sanksi penalti.
        </p>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--color-primary)" }}>7. Konsultasi &amp; Informasi Layanan</h2>
        <p>
          Apabila terdapat pasal atau ketentuan yang memerlukan penjelasan lebih detail, Anda dapat berkonsultasi langsung dengan manajemen kami melalui WhatsApp Resmi di: <strong>+62 813-5700-1357</strong>.
        </p>
      </section>
    </div>
  );
}
