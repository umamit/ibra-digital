# RENCANA ANGGARAN BIAYA (RAB) DETIL
**PENGEMBANGAN EKOSISTEM DIGITAL SD NEGERI BOBONG**
*Disusun oleh: Lead Architect & Business Consultant (Ibra Digital Engineering)*

Dokumen ini berisi rincian item pekerjaan (*Line-Item Breakdown*), volume, harga satuan, dan total biaya pengerjaan untuk masing-masing modul sistem pada Ekosistem Digital SD Negeri Bobong.

---

## RINGKASAN RAB EKOSISTEM DIGITAL

| No. | Deskripsi Sistem | Biaya Jasa Pembuatan (Rupiah) | Biaya Infrastruktur & Lisensi (Tahunan) |
| :---: | :--- | :---: | :---: |
| 1 | Website Resmi & Portal Layanan Digital | Rp 15.000.000 | Rp 2.700.000 |
| 2 | Sistem Presensi Digital & Absensi Geofence GPS | Rp 25.000.000 | Rp 3.000.000 |
| 3 | Platform Ruang Ajar & Learning Hub (LMS) | Rp 20.000.000 | Rp 3.800.000 |
| **TOTAL** | **KUMULATIF HARGA SATUAN** | **Rp 60.000.000** | **Rp 9.500.000** |
| **DISCOUNT**| **BILA DIAMBIL PAKET TERPADU (SSO)** | **(Rp 15.000.000)** | **(Rp 2.000.000)** |
| **NETTO** | **NILAI PAKET KONTRAK TERPADU** | **Rp 45.000.000** | **Rp 7.500.000** |

---

## RINCIAN DETAIL TIAP MODUL

### DOKUMEN 1: WEBSITE RESMI & PORTAL LAYANAN DIGITAL
*(Sistem Informasi Terpadu, Portal PPDB Online, Rapor NISN, & Integrasi AI)*

#### A. Jasa Pengembangan Sistem (Sekali Bayar)
| No. | Item Pekerjaan / Spesifikasi Fitur | Volume | Satuan | Harga Satuan (Rp) | Total Harga (Rp) |
| :---: | :--- | :---: | :---: | :---: | :---: |
| 1 | **UI/UX & Desain Antarmuka**: Perancangan layout Bento Grid Apple HIG, Dual Theme (Otomatis Dark/Light), & Aset Ilustrasi. | 1 | Paket | 3.000.000 | 3.000.000 |
| 2 | **Frontend Engineering (Next.js)**: Implementasi beranda dinamis, animasi halus, integrasi visual, dan SEO metadata lokal Bobong. | 1 | Paket | 4.000.000 | 4.000.000 |
| 3 | **Modul Portal PPDB Online**: Formulir pendaftaran siswa baru, manajemen data pendaftar, dan fitur cetak PDF bukti daftar otomatis A4. | 1 | Paket | 3.500.000 | 3.500.000 |
| 4 | **Modul Rapor NISN Mandiri**: Integrasi basis data nilai rapor siswa, form pengecekan NISN, & proteksi akses keamanan JWT Jose. | 1 | Paket | 2.500.000 | 2.500.000 |
| 5 | **Integrasi API AI & Dasbor Guru**: Penyetelan Google Gemini AI Chatbot, generator berita otomatis, dan sistem Audit Log Admin. | 1 | Paket | 2.000.000 | 2.000.000 |
| | **SUBTOTAL JASA PEMBUATAN WEBSITE** | | | | **Rp 15.000.000** |

#### B. Operasional Cloud, Domain, & Lisensi API (Tahunan)
| No. | Kebutuhan Infrastruktur / Lisensi | Volume | Durasi | Harga / Satuan (Rp) | Total Tahunan (Rp) |
| :---: | :--- | :---: | :---: | :---: | :---: |
| 1 | Domain Resmi Indonesia (`.sch.id`) | 1 | Tahun | 200.000 | 200.000 |
| 2 | Cloud Hosting & Database Serverless (Vercel/Supabase) | 12 | Bulan | 100.000 | 1.200.000 |
| 3 | Lisensi WhatsApp API Gateway (Notifikasi Pendaftaran) | 12 | Bulan | 80.000 | 960.000 |
| 4 | Kuota Akses API Google Gemini (Chatbot & Generate Text) | 1 | Paket | 340.000 | 340.000 |
| | **SUBTOTAL TAHUNAN WEBSITE** | | | | **Rp 2.700.000** |

---

### DOKUMEN 2: SISTEM PRESENSI & ABSENSI GEOFENCE GPS GURU
*(Aplikasi Geolocation Presensi Guru Anti-Manipulasi)*

#### A. Jasa Pengembangan Sistem (Sekali Bayar)
| No. | Item Pekerjaan / Spesifikasi Fitur | Volume | Satuan | Harga Satuan (Rp) | Total Harga (Rp) |
| :---: | :--- | :---: | :---: | :---: | :---: |
| 1 | **UI/UX Mobile App Design**: Perancangan layout aplikasi PWA, alur login cepat guru, dan antarmuka verifikasi kehadiran. | 1 | Paket | 4.000.000 | 4.000.000 |
| 2 | **Modul Geofence GPS Tracker**: Sistem pemetaan koordinat lokasi sekolah (radius presisi 10m) & enkripsi pengunci anti-Fake GPS. | 1 | Paket | 6.500.000 | 6.500.000 |
| 3 | **Modul Liveness Selfie Detection**: Verifikasi kamera depan dengan deteksi kedipan mata (*Eye-Blink*) anti-spoofing gambar statis. | 1 | Paket | 7.000.000 | 7.000.000 |
| 4 | **Modul Time Gate & Form Perizinan**: Pembatasan jam masuk/pulang otomatis & pengajuan cuti/sakit paperless (unggah bukti surat). | 1 | Paket | 3.500.000 | 3.500.000 |
| 5 | **Modul Rekapitulasi & Ekspor Excel**: Rekap absensi NIP guru per bulan, persentase kehadiran, dan fitur unduh berkas 1-klik. | 1 | Paket | 2.000.000 | 2.000.000 |
| 6 | **Build Android APK (Native Wrapper)**: Pengemasan aplikasi menjadi berkas installer APK ringan (5.6MB) siap unduh. | 1 | Paket | 2.000.000 | 2.000.000 |
| | **SUBTOTAL JASA PEMBUATAN PRESENSI** | | | | **Rp 25.000.000** |

#### B. Operasional Cloud & Keamanan Server (Tahunan)
| No. | Kebutuhan Infrastruktur / Lisensi | Volume | Durasi | Harga / Satuan (Rp) | Total Tahunan (Rp) |
| :---: | :--- | :---: | :---: | :---: | :---: |
| 1 | Subdomain Registrasi (`presensi.sdnegeribobong.sch.id`) | 1 | Paket | Gratis (Pointer) | Rp 0 |
| 2 | Real-time Geolocation Database & Auth Server (Supabase) | 12 | Bulan | 250.000 | 3.000.000 |
| | **SUBTOTAL TAHUNAN PRESENSI** | | | | **Rp 3.000.000** |

---

### DOKUMEN 3: PLATFORM RUANG AJAR & LEARNING HUB (LMS)
*(Sistem Manajemen Pembelajaran Digital Guru & Siswa)*

#### A. Jasa Pengembangan Sistem (Sekali Bayar)
| No. | Item Pekerjaan / Spesifikasi Fitur | Volume | Satuan | Harga Satuan (Rp) | Total Harga (Rp) |
| :---: | :--- | :---: | :---: | :---: | :---: |
| 1 | **UI/UX LMS Portal**: Desain layout ruang kelas digital, repositori bahan ajar, dan modul pengumpulan tugas interaktif. | 1 | Paket | 3.500.000 | 3.500.000 |
| 2 | **Modul Repositori Bahan Ajar**: Pengunggahan materi pelajaran oleh guru (PDF/Doc/Video) & otentikasi unduh aman siswa. | 1 | Paket | 4.500.000 | 4.500.000 |
| 3 | **Modul Pengumpulan & Penugasan**: Manajemen tugas, batas waktu pengumpulan, & panel koreksi nilai guru. | 1 | Paket | 4.500.000 | 4.500.000 |
| 4 | **Modul Bank Soal & Kuis**: Pembuatan bank soal kuis (pilihan ganda/isian) dengan sistem penilaian otomatis. | 1 | Paket | 5.500.000 | 5.500.000 |
| 5 | **Modul Kalender Akademik & Jadwal**: Integrasi jadwal pelajaran real-time harian kelas masing-masing siswa. | 1 | Paket | 2.000.000 | 2.000.000 |
| | **SUBTOTAL JASA PEMBUATAN LMS** | | | | **Rp 20.000.000** |

#### B. Operasional Cloud, CDN, & Object Storage (Tahunan)
| No. | Kebutuhan Infrastruktur / Lisensi | Volume | Durasi | Harga / Satuan (Rp) | Total Tahunan (Rp) |
| :---: | :--- | :---: | :---: | :---: | :---: |
| 1 | Subdomain Registrasi (`ajar.sdnegeribobong.sch.id`) | 1 | Paket | Gratis (Pointer) | Rp 0 |
| 2 | High Capacity Cloud Object Storage (Supabase S3-Compatible) | 12 | Bulan | 200.000 | 2.400.000 |
| 3 | Cloud Server Compute & Database Server (Supabase/Vercel) | 12 | Bulan | 100.000 | 1.200.000 |
| 4 | CDN bandwidth (Cloudflare Cache untuk dokumen belajar) | 1 | Paket | 200.000 | 200.000 |
| | **SUBTOTAL TAHUNAN LMS** | | | | **Rp 3.800.000** |

---

## 🔧 KETENTUAN KHUSUS & PEMELIHARAAN (SLA)
1.  **Garansi Kerusakan (Bug)**: Bebas biaya perbaikan bug/error selama 6 (enam) bulan pertama setelah peluncuran.
2.  **Layanan Pemeliharaan Sistem & Backup Berkala**: Rp 1.000.000 / bulan (opsional, disepakati setelah masa garansi habis). Layanan mencakup backup data otomatis mingguan, optimasi performa database, dan update keamanan JWT.
3.  **Metode Pembayaran Kontrak Terpadu**:
    *   **Termin I (DP 50%)**: Rp 22.500.000 dibayarkan setelah penandatanganan SPK.
    *   **Termin II (Pelunasan 50%)**: Rp 22.500.000 dibayarkan setelah uji coba bersama (UAT) selesai sebelum sistem go-live.
