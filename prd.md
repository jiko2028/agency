# Product Requirements Document (PRD)

| Informasi | Detail |
|-----------|--------|
| **Produk** | Website Agensi Jasa Pembuatan Web |
| **Versi** | 1.0 |
| **Tanggal** | 29 Juni 2026 |
| **Status** | Draft |

---

# 1. Ringkasan Produk

Website company profile untuk agensi jasa pembuatan website yang memposisikan brand sebagai studio digital profesional, modern, dan kredibel. Website berfungsi sebagai etalase utama untuk menarik calon klien, menampilkan portofolio terbaik, serta mengubah pengunjung menjadi leads melalui konsultasi maupun formulir kontak.

## Target Audiens

- Profesional muda
- Founder startup
- Pemilik bisnis
- Milenial (±28–43 tahun)
- Gen Z (±18–27 tahun)

Karakteristik audiens:

- Mengutamakan estetika modern
- Menyukai website yang cepat
- Menghargai kualitas visual
- Mempercayai brand yang terlihat profesional

---

# 2. Tujuan & Sasaran

| Tujuan | Metrik Keberhasilan |
|---------|--------------------|
| Menghasilkan leads berkualitas | Conversion Rate Form Kontak ≥ **3%** |
| Membangun kredibilitas brand | Bounce Rate < **45%** |
| Menampilkan portofolio secara impresif | Average Session Duration ≥ **1,5 menit** |
| Memberikan pengalaman browsing premium | Core Web Vitals seluruhnya **Good** |

---

# 3. Design Philosophy

## Konsep Utama

Menggunakan pendekatan:

> **Typography-driven + Full Image Editorial Layout**

Website harus terasa seperti sebuah **digital design studio**, bukan template company profile biasa.

---

## Design Principles

### Typography First

- Headline berukuran besar (Oversized Typography)
- Display font yang memiliki karakter kuat
- Body font sederhana dan mudah dibaca
- Kontras yang jelas antara heading dan isi

---

### Neutral Color Palette

Gunakan warna netral seperti:

- Hitam
- Putih
- Off White
- Cream
- Abu-abu

Diperbolehkan maksimal **1 warna aksen**, misalnya:

- Deep Navy
- Warm Rust
- Forest Green

---

### Generous White Space

- Banyak ruang kosong
- Layout terasa lega
- Fokus pada konten

---

### Full Bleed Imagery

Portfolio ditampilkan menggunakan gambar besar berkualitas tinggi.

---

### Editorial Grid

Layout menggunakan grid editorial.

Boleh menggunakan:

- Asymmetric Layout
- Masonry Grid
- Split Layout

Selama tetap rapi dan mudah dibaca.

---

# Yang DILARANG (Anti AI Slop)

❌ Gradient mencolok

❌ Warna neon

❌ Glow effect

❌ Emoji sebagai elemen UI

❌ Glassmorphism berlebihan

❌ Shadow berlebihan

❌ Ilustrasi blob techno

❌ Ikon 3D generik

❌ Stock photo klise

❌ Animasi berlebihan yang mengganggu

---

# 4. Tech Stack

| Kategori | Teknologi | Catatan |
|----------|-----------|----------|
| Framework | React JS | Menggunakan Vite |
| Build Tool | Vite | Fast Development |
| Smooth Scroll | Lenis | Wajib digunakan |
| Styling | Tailwind CSS | Konsisten di seluruh project |
| Animasi | GSAP + ScrollTrigger *(atau Framer Motion)* | Reveal & Parallax |
| Routing | React Router | Multi-page |
| Deployment | Vercel / Netlify | Production Ready |

## Catatan Lenis

Jika menggunakan GSAP ScrollTrigger, Lenis harus disinkronkan menggunakan:

- `requestAnimationFrame()`
- `ScrollTrigger.update()`

Tujuannya agar posisi scroll tetap sinkron.

---

# 5. Sitemap

```
Home
│
├── Services
│
├── Works
│      └── Case Study (Dynamic)
│
├── About
│
└── Contact
```

---

# 6. Spesifikasi Fitur

---

## 6.1 Home

### Hero Section

- Headline typography besar
- Animasi reveal per kata/baris
- Fokus pada teks
- Maksimal satu visual utama

---

### Smooth Scroll

- Menggunakan Lenis
- Aktif di seluruh halaman

---

### Marquee

Menampilkan:

- layanan
- teknologi
- client
- value

Animasi:

- halus
- pause saat hover

---

### Featured Works

Menampilkan 3–4 proyek unggulan.

Hover Effect:

- image scale
- title muncul
- transition lembut

---

### Statement Section

Kalimat besar mengenai value proposition studio.

---

### CTA Footer

Ajakan konsultasi yang jelas.

Contoh:

> Let's build something meaningful together.

---

## 6.2 Works / Portfolio

Layout:

- Editorial Grid
- Masonry
- Asymmetric

Fitur:

- Filter kategori
- Lazy Loading
- Hover Zoom
- Project Preview

Kategori contoh:

- Web App
- Landing Page
- Company Profile
- E-Commerce

---

## 6.3 Case Study

Layout editorial panjang.

Urutan konten:

1. Hero
2. Background
3. Problem
4. Solution
5. Design Process
6. Development
7. Result
8. Gallery
9. Next Project

Animasi:

- subtle parallax
- reveal section
- smooth transition

---

## 6.4 About

Berisi:

- Cerita studio
- Filosofi
- Nilai
- Cara bekerja

### Work Process

Menggunakan numbered steps.

Contoh:

```
01 Discovery

02 Strategy

03 Design

04 Development

05 Launch
```

### Team

Opsional.

Jika ada:

- Foto hitam putih
- Konsisten
- Tanpa efek berlebihan

---

## 6.5 Contact

### Contact Form

Field:

- Nama
- Email
- Jenis Proyek
- Budget
- Pesan

Validasi:

- Inline Validation
- Error Message
- Success Notification

Integrasi:

- EmailJS
- Formspree
- Backend Custom

Tambahkan informasi:

- Email
- WhatsApp
- Instagram
- LinkedIn

Disajikan dalam bentuk teks sederhana.

---

# 7. Persyaratan Non-Fungsional

## Performance

Target Lighthouse:

- Performance ≥ 90
- Accessibility ≥ 90
- Best Practice ≥ 90
- SEO ≥ 90

Optimasi:

- WebP
- AVIF
- Lazy Loading
- Code Splitting

---

## Responsive

Pendekatan:

- Mobile First

Smooth Scroll tetap nyaman.

Opsional:

- Menonaktifkan Lenis pada perangkat touch.

---

## Accessibility

Harus memenuhi:

- WCAG AA
- Keyboard Navigation
- Focus State
- prefers-reduced-motion

Jika pengguna memilih reduced motion:

- Nonaktifkan reveal animation
- Nonaktifkan smooth scroll

---

## SEO

Minimal:

- Semantic HTML
- Meta Title
- Meta Description
- Open Graph
- Sitemap.xml
- Robots.txt

---

## Browser Support

Mendukung browser terbaru:

- Chrome
- Firefox
- Safari
- Microsoft Edge

---

# 8. Motion & Animation Guidelines

Prinsip:

- Elegan
- Halus
- Profesional

Durasi:

- Micro Interaction: **200–300 ms**
- Reveal Animation: **400–600 ms**

Gunakan:

- Fade
- Translate Y kecil
- Scale ringan

Hindari:

- Bounce
- Elastic
- Cartoon animation

Selalu menghormati:

`prefers-reduced-motion`

---

# 9. Out of Scope (Phase 1)

Belum termasuk:

- Dashboard Admin
- CMS
- Multi Bahasa
- Blog
- Sistem Pembayaran Online
- Membership
- Authentication

Konten menggunakan data statis.

---

# 10. Milestone

| Fase | Deliverable |
|------|-------------|
| **1. Design** | Wireframe + UI Design (Figma) |
| **2. Setup** | React + Vite + Routing + Lenis |
| **3. Development** | Implementasi seluruh halaman dan animasi |
| **4. Content** | Portofolio, copywriting, gambar |
| **5. QA** | Testing performa, responsif, aksesibilitas |
| **6. Launch** | Deploy ke Vercel/Netlify dan monitoring |

---

# Success Criteria

Website dianggap berhasil apabila:

- Tampilan premium dan profesional
- Responsif di semua perangkat
- Lighthouse ≥ 90
- Core Web Vitals berstatus Good
- Navigasi terasa halus
- Portfolio menjadi fokus utama
- CTA mudah ditemukan
- Pengunjung terdorong untuk menghubungi studio
- Desain tidak terlihat seperti template generik maupun hasil AI
---

# 3.1 Visual Design Reference

Website ini harus mengacu pada gaya visual premium yang serupa dengan referensi desain yang telah disediakan. Referensi digunakan sebagai acuan estetika, tata letak, ritme visual, serta pendekatan tipografi, **bukan untuk menyalin desain secara identik**.

## Hero Section

Referensi menunjukkan hero section yang bersih dengan karakteristik berikut:

- Typography menjadi fokus utama halaman.
- Headline berukuran sangat besar (oversized).
- Maksimal terdiri dari 2–3 baris.
- Memiliki whitespace yang luas di sekelilingnya.
- CTA ditempatkan tepat di bawah headline.
- Visual utama berupa gambar produk atau karya dengan ukuran besar (full focus).
- Navigasi minimalis dan tipis di bagian atas.

Hero tidak menggunakan background yang ramai. Latar belakang tetap menggunakan warna netral agar perhatian pengunjung langsung tertuju pada tipografi dan visual utama.

---

## Layout

Layout mengikuti pendekatan editorial modern.

Karakteristik:

- Banyak ruang kosong (generous whitespace).
- Section memiliki tinggi yang cukup sehingga setiap konten terasa eksklusif.
- Grid tidak selalu simetris tetapi tetap memiliki alignment yang jelas.
- Visual dapat dibuat overlap ringan apabila tetap menjaga keterbacaan.
- Container lebar dengan margin yang konsisten.

Website harus terasa seperti website studio desain modern, bukan landing page template.

---

## Typography

Tipografi merupakan identitas utama website.

Karakteristik:

- Headline sangat dominan.
- Menggunakan font sans-serif modern dengan karakter kuat.
- Kontras ukuran heading dan body text cukup jauh.
- Body text tetap sederhana dan mudah dibaca.
- Tracking dan line-height dibuat lega agar terasa premium.

Contoh hierarki:

- Hero Heading : 72–120px
- Section Heading : 42–64px
- Sub Heading : 24–32px
- Body : 16–18px
- Caption : 14px

---

## Warna

Palet warna mengikuti nuansa yang terlihat pada referensi.

### Primary

- Hitam (#111111)
- Putih (#FFFFFF)

### Secondary

- Off White
- Light Gray
- Neutral Gray

### Accent

Gunakan maksimal satu warna aksen yang elegan, misalnya:

- Deep Navy
- Forest Green
- Warm Rust

Aksen hanya digunakan untuk:

- hover
- garis tipis
- indicator
- link aktif
- elemen kecil

Bukan sebagai warna dominan.

---

## Button Style

Button mengikuti gaya minimalis.

Karakteristik:

- Rounded penuh (pill button).
- Warna hitam dengan teks putih.
- Hover menggunakan transisi sederhana.
- Tidak menggunakan glow maupun shadow besar.
- Secondary button menggunakan outline tipis.

---

## Navigation

Navbar memiliki karakteristik:

- Tinggi relatif kecil.
- Logo sederhana di kiri.
- Menu berada di tengah atau kanan.
- CTA berada di sisi kanan.
- Sticky ketika scroll.
- Background transparan saat hero, kemudian berubah menjadi solid ketika pengguna melakukan scroll.

---

## Card & Portfolio

Section portfolio mengikuti pendekatan visual pada referensi.

Karakteristik:

- Foto proyek berukuran besar.
- Rasio gambar bervariasi.
- Grid editorial atau masonry.
- Hover hanya menggunakan:
  - image scale ringan
  - perubahan opacity
  - reveal judul proyek
- Tidak menggunakan border mencolok.

Portfolio menjadi elemen visual terbesar setelah Hero.

---

## Motion Design

Animasi mengikuti gaya premium yang tenang.

Animasi yang digunakan:

- Fade In
- Mask Reveal
- Text Reveal
- Scale Image
- Smooth Parallax
- Horizontal Marquee
- Section Reveal ketika scroll

Animasi harus:

- Halus
- Konsisten
- Tidak mengganggu pembacaan konten

Hindari:

- Bounce
- Elastic
- Spin
- Flash
- Zoom berlebihan

---

## Image Style

Visual mengikuti karakteristik berikut:

- High resolution.
- Clean.
- Kontras tinggi.
- Dominan foto asli hasil proyek.
- Tidak menggunakan stock photo klise.
- Full-bleed image pada beberapa section.
- Menggunakan crop editorial.

---

## Spacing

Gunakan spacing yang lega.

Panduan umum:

- Section Padding:
  - Desktop: 120–180px
  - Tablet: 96px
  - Mobile: 72px

- Content Width:
  - 1200–1400px

- Grid Gap:
  - 24–48px

---

## Kesan Visual yang Ingin Dicapai

Website harus memberikan kesan:

- Premium
- Modern
- Minimalis
- Editorial
- Professional
- Creative Studio
- High-end Digital Agency

Pengunjung harus langsung mendapatkan impresi bahwa studio memiliki kemampuan desain dan pengembangan website dengan kualitas tinggi melalui tampilan website itu sendiri.

Referensi visual digunakan sebagai acuan arah desain, namun implementasi akhir tetap harus memiliki identitas visual yang unik dan tidak meniru secara langsung layout, aset, maupun komposisi dari referensi tersebut.