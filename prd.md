# PRD Mobile App
## SmartRoad AI — Sistem Deteksi dan Pemetaan Jalan Berlubang di Kabupaten Kebumen

**Version:** 1.0  
**Author:** ChatGPT  
**Status:** Draft untuk hackathon  
**Target:** Find IT! 2026

---

## 1. Ringkasan Produk
SmartRoad AI adalah mobile app untuk membantu masyarakat dan pemerintah Kabupaten Kebumen mendeteksi, melaporkan, dan memetakan jalan berlubang atau jalan rusak secara cepat. Aplikasi ini menggabungkan **computer vision**, **GPS tagging**, **crowdsourced reporting**, dan **dashboard prioritas perbaikan** agar proses identifikasi kerusakan jalan menjadi lebih data-driven.

Produk ini dirancang sebagai solusi hackathon dengan fokus pada **demo yang kuat**, **impact sosial tinggi**, dan **MVP yang realistis**.

---

## 2. Latar Belakang Masalah
Kerusakan jalan sering terlambat terdeteksi karena:

- laporan warga masih manual dan tersebar
- inspeksi lapangan memakan waktu dan biaya
- data kerusakan tidak terkonsolidasi dalam satu sistem
- pemerintah sulit menentukan prioritas perbaikan

Dampaknya:

- risiko kecelakaan meningkat
- kendaraan rusak
- mobilitas warga terganggu
- biaya perbaikan menjadi lebih besar jika penanganan terlambat

Kabupaten Kebumen dipilih sebagai konteks wilayah agar solusi terasa konkret dan dekat dengan kebutuhan lokal.

---

## 3. Tujuan Produk
### Tujuan utama
Membangun aplikasi mobile yang dapat mendeteksi dan melaporkan jalan rusak secara cepat, akurat, dan mudah digunakan.

### Tujuan bisnis / produk
- Menyediakan data kerusakan jalan berbasis lokasi.
- Membantu pemerintah menentukan prioritas perbaikan.
- Mendorong partisipasi masyarakat dalam pelaporan infrastruktur.
- Menunjukkan potensi solusi smart city berbasis AI.

### Tujuan hackathon
- Menampilkan demo yang jelas dan mudah dipahami juri.
- Menunjukkan kombinasi AI + mobile + impact sosial.
- Menyelesaikan MVP yang bisa didemokan dalam waktu terbatas.

---

## 4. Definisi Masalah dan Solusi
### Problem Statement
Bagaimana cara membuat sistem mobile yang memungkinkan masyarakat mendeteksi dan melaporkan jalan berlubang secara otomatis atau semi-otomatis, lalu memetakan laporan tersebut agar pemerintah dapat memprioritaskan perbaikan secara lebih efisien?

### Solusi
SmartRoad AI menyediakan:
- deteksi jalan rusak dari foto/video
- pelaporan manual dengan lokasi GPS
- peta kerusakan jalan realtime
- sistem prioritas perbaikan berdasarkan tingkat kerusakan dan jumlah laporan

---

## 5. Target Pengguna
### Primary users
1. **Warga / pengendara**  
   Orang yang melewati jalan rusak dan ingin melapor dengan cepat.

2. **Petugas / admin pemerintah**  
   Pihak yang memantau laporan dan menentukan tindak lanjut perbaikan.

### Secondary users
3. **Tim teknis / operator sistem**  
   Mengelola data, moderasi laporan, dan memantau akurasi model.

---

## 6. Value Proposition
### Untuk warga
- mudah melapor hanya dengan foto/video
- tidak perlu isi laporan panjang
- melihat status laporan yang dikirim

### Untuk pemerintah
- data terpusat dan berbasis lokasi
- prioritas perbaikan lebih jelas
- dapat melihat tren kerusakan per wilayah

### Untuk hackathon / juri
- masalah nyata dan relevan
- ada AI yang terlihat nyata
- demo visual menarik lewat peta dan deteksi gambar

---

## 7. Ruang Lingkup Produk
### In scope untuk MVP hackathon
- login sederhana atau tanpa login
- ambil foto / upload gambar jalan
- deteksi pothole dari gambar
- kirim lokasi GPS
- tampilkan hasil pada peta
- list laporan kerusakan
- status laporan: pending / verified / fixed
- dashboard admin sederhana

### Out of scope untuk MVP
- integrasi resmi ke sistem pemerintah
- model prediksi kerusakan jangka panjang
- navigasi rute aman
- notifikasi otomatis ke dinas
- verifikasi lapangan penuh
- mode offline penuh

---

## 8. User Persona
### Persona 1 — Warga Pengguna
**Nama:** Andi
**Usia:** 21–35 tahun
**Kebutuhan:** ingin melapor jalan rusak dengan cepat saat berkendara
**Pain point:** malas isi formulir panjang, takut laporan tidak ditindaklanjuti

### Persona 2 — Admin Pemerintah
**Nama:** Ibu Rina
**Usia:** 30–45 tahun
**Kebutuhan:** melihat sebaran jalan rusak dan menentukan prioritas
**Pain point:** data laporan tercecer, sulit melihat titik paling urgent

### Persona 3 — Tim Teknis
**Nama:** Bagas
**Usia:** 20–30 tahun
**Kebutuhan:** memantau data masuk dan memastikan sistem berjalan
**Pain point:** butuh dashboard ringkas dan mudah dipantau

---

## 9. Prinsip Desain Produk
- sederhana dan cepat digunakan
- minim langkah untuk user
- visual kuat dan mudah dipahami
- fokus pada lokasi dan bukti visual
- responsif untuk layar mobile kecil

---

## 10. Fitur Utama
### 10.1 Deteksi Jalan Rusak dari Kamera
Pengguna memotret jalan, lalu sistem mendeteksi adanya lubang atau kerusakan jalan.

**Output:**
- bounding box area rusak
- label pothole / crack / road damage
- confidence score

### 10.2 Pelaporan Manual
Jika AI tidak yakin, pengguna tetap bisa mengirim laporan manual dengan foto dan deskripsi singkat.

### 10.3 GPS Tagging
Setiap laporan otomatis menyimpan lokasi pengguna saat laporan dikirim.

### 10.4 Peta Kerusakan Jalan
Peta menampilkan titik-titik jalan rusak berdasarkan tingkat keparahan.

### 10.5 Prioritas Perbaikan
Sistem memberi skor prioritas berdasarkan:
- tingkat kerusakan
- jumlah laporan di lokasi yang sama
- frekuensi laporan

### 10.6 Dashboard Admin
Admin dapat melihat:
- total laporan
- lokasi paling rusak
- laporan yang belum diverifikasi
- status penanganan

---

## 11. User Journey
### A. Warga melaporkan jalan rusak
1. Buka aplikasi
2. Tekan tombol “Laporkan Jalan Rusak”
3. Ambil foto atau upload dari galeri
4. Sistem mendeteksi kerusakan secara otomatis
5. Lokasi diambil dari GPS
6. User menekan submit
7. Laporan muncul di peta dan daftar laporan

### B. Admin memantau laporan
1. Login ke dashboard admin
2. Melihat daftar laporan terbaru
3. Melihat peta titik kerusakan
4. Menentukan prioritas penanganan
5. Mengubah status laporan menjadi verified / fixed

---

## 12. Fitur MVP vs Nice to Have
### MVP
- upload foto
- AI detection hasil sederhana
- GPS location capture
- peta marker
- list laporan
- status laporan
- dashboard admin basic

### Nice to Have
- multi-image upload
- video detection
- notifikasi ke admin
- filter berdasarkan kecamatan/desa
- scoring otomatis prioritas
- riwayat laporan pengguna
- mode crowdsourcing dengan voting warga

---

## 13. Functional Requirements
### FR-01: Upload gambar
User dapat mengambil foto atau memilih gambar dari galeri.

### FR-02: AI detection
Sistem memproses gambar dan memberikan hasil deteksi jalan rusak.

### FR-03: Ambil lokasi otomatis
Aplikasi mengambil koordinat GPS saat laporan dikirim.

### FR-04: Kirim laporan
User dapat mengirim laporan dengan 1 tombol submit.

### FR-05: Lihat peta
User dan admin dapat melihat lokasi laporan pada peta.

### FR-06: Lihat detail laporan
Setiap laporan menampilkan foto, lokasi, waktu, dan status.

### FR-07: Kelola status laporan
Admin dapat mengubah status laporan.

---

## 14. Non-Functional Requirements
### Performance
- hasil upload dan respon awal maksimal beberapa detik untuk demo hackathon
- peta harus memuat marker dengan cepat

### Usability
- dapat digunakan oleh pengguna awam
- alur laporan maksimal 3–4 langkah

### Reliability
- laporan tidak hilang setelah dikirim
- data tersimpan aman di database

### Scalability
- struktur data harus memungkinkan ekspansi ke wilayah lain di luar Kebumen

### Security
- validasi input gambar dan lokasi
- role admin terpisah dari user umum

---

## 15. Data yang Disimpan
Setiap laporan minimal menyimpan:
- report_id
- user_id atau anonymous id
- image_url
- detected_label
- confidence_score
- latitude
- longitude
- address/area_name
- description
- status
- created_at

Opsional:
- severity_level
- priority_score
- reviewer_notes

---

## 16. Prioritization Logic
Skor prioritas dapat dihitung dari kombinasi:
- severity level dari AI
- jumlah laporan pada titik yang sama
- jarak ke fasilitas vital
- frekuensi kendaraan atau kawasan padat

Contoh sederhana:
- severity tinggi = +3
- laporan lebih dari 5 di lokasi sama = +3
- dekat jalan utama = +2
- belum diverifikasi = +1

Hasil akhir:
- skor 0–3 = rendah
- skor 4–6 = sedang
- skor 7+ = tinggi

---

## 17. Screen List
### User App
1. Splash Screen
2. Home / Dashboard Ringkas
3. Camera / Upload Screen
4. Detection Result Screen
5. Submit Report Screen
6. Map View
7. Report Detail Screen
8. My Reports Screen

### Admin Panel
1. Admin Login
2. Admin Dashboard
3. Map Monitoring
4. Report List
5. Report Detail
6. Status Management

---

## 18. UI / UX Direction
- tampilan bersih, modern, dan tegas
- warna utama: biru atau hijau untuk kesan smart city
- warna status: hijau, kuning, merah
- elemen peta harus menjadi fokus utama
- tombol utama jelas dan besar
- gunakan card layout untuk laporan

---

## 19. Architecture Overview
### Client
- Mobile app Android/iOS

### Backend
- REST API untuk laporan, user, dan status

### AI Service
- model deteksi pothole menerima gambar dan mengembalikan hasil deteksi

### Database
- menyimpan laporan, lokasi, status, dan hasil analisis

### Map Service
- menampilkan marker dan area laporan

---

## 20. Tech Stack Rekomendasi
### Mobile App
- Flutter atau React Native

### AI / CV
- Python
- OpenCV
- YOLOv8 atau model deteksi serupa

### Backend
- FastAPI atau Flask

### Database
- PostgreSQL atau Firebase

### Map
- Leaflet atau Mapbox

### Storage
- Cloud storage untuk gambar

---

## 21. Success Metrics
### Produk
- jumlah laporan yang berhasil dikirim
- jumlah lokasi yang terpetakan
- persentase laporan dengan lokasi valid

### Demo hackathon
- AI detection berhasil tampil di demo
- peta menunjukkan titik kerusakan
- alur user dapat dipahami dalam 1 menit

### Dampak
- solusi dianggap relevan untuk smart city
- juri memahami manfaat sosialnya

---

## 22. Acceptance Criteria MVP
Produk dianggap berhasil untuk demo hackathon jika:
- user dapat upload foto jalan
- sistem menampilkan hasil deteksi
- lokasi otomatis tersimpan
- laporan muncul di peta
- admin dapat melihat dan mengubah status laporan

---

## 23. Risiko dan Mitigasi
### Risiko 1: Model AI kurang akurat
**Mitigasi:** gunakan dataset yang sudah ada dan demo dengan sample gambar yang sudah dipilih.

### Risiko 2: Waktu pengembangan terbatas
**Mitigasi:** fokus pada MVP inti dan hindari fitur berlebihan.

### Risiko 3: GPS tidak akurat
**Mitigasi:** tambahkan konfirmasi lokasi manual pada peta.

### Risiko 4: Demo kurang meyakinkan
**Mitigasi:** siapkan dataset demo yang bersih, UI rapi, dan alur presentasi yang singkat.

---

## 24. Roadmap Pengembangan
### Phase 1 — Hackathon MVP
- upload gambar
- AI detection
- GPS
- peta
- dashboard admin sederhana

### Phase 2 — Pilot Lokal
- validasi pengguna nyata
- filter wilayah
- prioritization scoring
- verifikasi laporan

### Phase 3 — Scale Up
- integrasi dinas
- notifikasi otomatis
- prediksi kerusakan
- perluasan ke kabupaten lain

---

## 25. Pitch Satu Kalimat
**SmartRoad AI adalah aplikasi mobile berbasis AI yang mendeteksi dan memetakan jalan berlubang secara real-time untuk membantu masyarakat dan pemerintah Kabupaten Kebumen mempercepat perbaikan infrastruktur jalan.**

---

## 26. Catatan Penting untuk Tim
Untuk hackathon, jangan kejar fitur terlalu banyak. Fokus utama adalah:
1. demo AI deteksi gambar
2. peta lokasi kerusakan
3. dashboard prioritas
4. presentasi dampak sosial

Kalau empat hal ini kuat, proposal akan terlihat matang dan layak menang.

