# 🛒 Sembako Jaya - Web Pemesanan Sembako Online (WhatsApp Checkout)

Aplikasi web toko sembako modern, ringan, dan cepat untuk memudahkan warga memesan kebutuhan pokok dapur langsung dari rumah melalui WhatsApp. 

Proyek ini telah direfaktor dan dipisahkan secara modular ke dalam format **`.md`**, **`.html`**, **`.css`**, dan **`.js`** dengan struktur folder yang rapi dan bersih agar mudah dikembangkan lebih lanjut.

---

## 📁 Struktur Folder Proyek

```text
sembako-jaya/
├── README.md               # 📖 Dokumentasi lengkap, panduan setup & pengembangan (.md)
├── index.html              # 🌐 Struktur halaman web semantik & terorganisir (.html)
├── css/
│   └── style.css           # 🎨 Styling modular, CSS variable, responsif mobile (.css)
├── js/
│   ├── products.js         # 📦 Modul data 20 katalog produk & kategori sembako (.js)
│   └── app.js              # ⚡ Logika interaktif: keranjang, filter, pencarian, & WA checkout (.js)
├── metadata.json           # ⚙️ Metadata aplikasi
└── package.json            # 🛠️ Konfigurasi dependensi & skrip build
```

---

## 📦 Daftar 20 Produk Sembako

Total **20 produk sembako** (10 produk bawaan + 10 produk baru tambahan) yang siap dipesan:

| No | Nama Produk | Kategori | Satuan / Ukuran | Harga (Rp) | Badge |
|---|---|---|---|---|---|
| 1 | **Beras Sumo Merah 5kg** | Beras & Tepung | 5 kg | Rp 78.000 | Terlaris |
| 2 | **Gulaku Murni 1kg** | Bumbu Dapur | 1 kg | Rp 18.500 | Favorit |
| 3 | **Kecap Manis Bango 550ml** | Bumbu Dapur | 550 ml | Rp 24.500 | Rekomendasi |
| 4 | **Saus Sambal Indofood 335ml** | Bumbu Dapur | 335 ml | Rp 14.000 | - |
| 5 | **Telur Ayam Negeri 1kg** | Kebutuhan Pokok | 1 kg (16-17 butir) | Rp 29.000 | Segar |
| 6 | **Minyak Bimoli Klasik 2L** | Minyak & Mentega | Pouch 2 Liter | Rp 36.500 | Terlaris |
| 7 | **Tepung Segitiga Biru 1kg** | Beras & Tepung | 1 kg | Rp 13.000 | - |
| 8 | **Indomie Goreng (Isi 5 Bungkus)** | Makanan & Minuman | 5 Bungkus | Rp 15.500 | Paket Hemat |
| 9 | **Susu Frisian Flag Kental Manis 370g** | Makanan & Minuman | Kaleng 370g | Rp 12.500 | - |
| 10 | **Garam Dapur Cap Kapal 250g** | Bumbu Dapur | 250 gram | Rp 4.000 | - |
| 11 | **Kopi Kapal Api Spesial Mix (10 Sachet)** *(Baru)* | Makanan & Minuman | 10 x 24g | Rp 16.000 | Hemat |
| 12 | **Teh Celup Sosro (Isi 30 Kantong)** *(Baru)* | Makanan & Minuman | 30 Kantong | Rp 8.500 | - |
| 13 | **Margarin Blue Band Serbaguna 200g** *(Baru)* | Minyak & Mentega | Sachet 200g | Rp 11.500 | - |
| 14 | **Sirup Marjan Boudoin Cocopandan 460ml** *(Baru)* | Makanan & Minuman | Botol 460 ml | Rp 22.000 | Promo |
| 15 | **Sunlight Jeruk Nipis 100 700ml** *(Baru)* | Pembersih Rumah | Refill 700 ml | Rp 15.500 | Laris |
| 16 | **Deterjen Daia Putih Bersih 850g** *(Baru)* | Pembersih Rumah | 850 gram | Rp 19.500 | - |
| 17 | **Bawang Merah Brebes Super 500g** *(Baru)* | Bumbu Dapur | 500 gram | Rp 22.000 | Segar |
| 18 | **Bawang Putih Kating 500g** *(Baru)* | Bumbu Dapur | 500 gram | Rp 20.000 | Segar |
| 19 | **Minyak Goreng Tropical Botol 2L** *(Baru)* | Minyak & Mentega | Botol 2 Liter | Rp 38.000 | Kualitas Premium |
| 20 | **Santan Kelapa Kara 200ml (Isi 2)** *(Baru)* | Bumbu Dapur | 2 x 200 ml | Rp 10.000 | Praktis |

---

## ✨ Fitur-Fitur Utama

1. **Pemisahan File Bersih & Terisolasi**:
   - `index.html`: Bebas dari tag `<style>` dan skrip inline raksasa. Menghubungkan CSS dan JS modular.
   - `css/style.css`: Memanfaatkan variabel CSS (`--primary`, `--accent`, `--border-color`), layout grid responsif, transisi drawer halus, dan styling form modern.
   - `js/products.js`: Data produk tersimpan sebagai array of objects yang siap dipindahkan ke REST API/Database jika diperlukan.
   - `js/app.js`: Logika aplikasi bersih menggunakan ES Modules, event listeners, dan state management.
2. **Pencarian Real-Time (Instant Search)**: Pengguna dapat mencari produk berdasarkan nama atau deskripsi dengan tombol reset kilat.
3. **Filter Kategori Dinamis**: Tab kategori (Semua, Kebutuhan Pokok, Minyak & Mentega, Beras & Tepung, Bumbu Dapur, Makanan & Minuman, Pembersih Rumah).
4. **Keranjang Belanja Interaktif (Drawer)**:
   - Tambah produk dengan 1 klik.
   - Ubah jumlah (+ / −) atau hapus item langsung dari drawer.
   - Penyimpanan lokal (*localStorage*) agar isi keranjang tidak hilang saat halaman di-refresh.
   - Indikator badge bergerak (*bounce animation*) pada ikon keranjang.
5. **Floating Cart Button**: Tombol melayang di pojok kanan bawah khusus layar smartphone untuk mempermudah akses keranjang saat scroll.
6. **Integrasi WhatsApp Checkout Pintar**:
   - Form data penerima: Nama, No. WhatsApp/HP, Alamat lengkap, dan Catatan pengantaran.
   - Menghasilkan format pesan WhatsApp rapi lengkap dengan rincian belanja, subtotal, dan total tagihan.
   - Disertai modal konfirmasi yang menyediakan link langsung ke chat WhatsApp toko (`https://wa.me/...`) serta tombol **Salin Teks** untuk kenyamanan pengguna.

---

## 🚀 Panduan Kustomisasi & Pengembangan Lanjutan

### 1. Mengganti Nomor WhatsApp Toko
Buka file `js/app.js`, cari konfigurasi `CONFIG`:
```javascript
export const CONFIG = {
  storeName: "Sembako Jaya",
  storePhone: "6281234567890", // Ganti dengan nomor WhatsApp pemilik toko (awali dengan 62)
  currencyPrefix: "Rp ",
  storageKey: "sembako_jaya_cart_v1"
};
```

### 2. Menambah Produk Baru
Buka file `js/products.js`, tambahkan objek produk baru ke dalam array `products`:
```javascript
{
  id: 21,
  name: "Gula Jawa Aren Asli 500g",
  desc: "Gula aren asli cetak bulat legit untuk kolak dan masakan",
  price: 17000,
  category: "bumbu",
  unit: "500 gram",
  badge: "Baru",
  img: "https://images.unsplash.com/photo-1581441363689-1f3c3c414635?w=500&auto=format&fit=crop&q=80"
}
```

### 3. Mengubah Tema Warna Toko
Buka file `css/style.css`, sesuaikan variabel CSS di `:root`:
```css
:root {
  --primary: #16a34a;          /* Ganti warna utama brand */
  --primary-hover: #15803d;
  --accent: #facc15;           /* Warna aksen highlight */
}
```

---

## 🛠️ Menjalankan Proyek Secara Lokal

```bash
# Jalankan development server
npm run dev

# Periksa validitas build
npm run build
```

Aplikasi dapat langsung diakses melalui browser pada `http://localhost:3000`.
