# Tech Stack
## Teknologi Website Sembako Jaya

### 1. HTML5
HTML5 digunakan untuk membangun struktur halaman website. Elemen HTML membentuk bagian navbar, banner utama, katalog produk, kolom pencarian, area kategori, keranjang belanja, formulir data pengiriman, modal konfirmasi, dan footer.

File utama: `index.html`.

### 2. CSS3
CSS3 digunakan untuk mengatur tampilan dan tata letak website. Pengaturan CSS mencakup warna, ukuran teks, jarak antarbagian, kartu produk, tombol, keranjang, modal, animasi sederhana, serta tampilan responsif.

File utama: `css/style.css`.

Warna utama yang digunakan:
- Hijau sebagai warna utama toko.
- Kuning sebagai warna aksen.
- Putih sebagai warna dasar kartu dan beberapa bagian halaman.
- Abu-abu muda sebagai latar dan warna pembatas.

CSS menggunakan custom properties pada bagian `:root` agar warna, radius, dan beberapa nilai tampilan lebih mudah diubah.

### 3. JavaScript (ES Modules)
JavaScript digunakan untuk membuat halaman menjadi interaktif. Kode dibagi menjadi dua file utama.

#### `js/products.js`
File ini berisi data katalog produk dan daftar kategori. Data produk disimpan dalam array `products`, sedangkan kategori disimpan dalam array `categories`.

Informasi produk meliputi ID, nama, deskripsi, harga, kategori, satuan, badge, dan alamat gambar.

#### `js/app.js`
File ini mengatur logika website, antara lain:
- Menampilkan produk dan kategori.
- Menjalankan pencarian dan filter.
- Mengatur keranjang belanja.
- Menghitung jumlah barang dan total harga.
- Menyimpan serta memuat keranjang.
- Menampilkan notifikasi.
- Menyiapkan pesan pemesanan WhatsApp.

File `app.js` mengambil data dengan `import` dari `products.js`. Karena menggunakan JavaScript module, halaman sebaiknya dijalankan melalui server lokal, bukan dibuka langsung menggunakan alamat `file://`.

### 4. Web Storage API (localStorage)
`localStorage` digunakan untuk menyimpan data keranjang pada browser. Data disimpan dalam format JSON dengan kunci `sembako_jaya_cart_v1`.

Penyimpanan ini membuat keranjang dapat dimuat kembali setelah halaman di-refresh pada browser dan perangkat yang sama. Data tidak otomatis tersinkronisasi ke perangkat lain.

### 5. WhatsApp Click to Chat
Website menggunakan tautan WhatsApp dengan format `https://wa.me/` untuk membuka percakapan toko. Rincian pesanan disusun oleh JavaScript dan diubah menjadi teks URL menggunakan `encodeURIComponent()`.

Nomor WhatsApp toko diatur pada objek `CONFIG` di `js/app.js`. Nomor harus menggunakan format internasional tanpa tanda plus, spasi, atau tanda hubung.

### 6. Browser dan Tools Pengembangan
- Browser modern digunakan untuk menjalankan website.
- Visual Studio Code dapat digunakan untuk mengedit file.
- Live Server dapat digunakan untuk menjalankan website melalui server lokal dan menguji JavaScript module.

### 7. Ringkasan Teknologi
| Teknologi | Penggunaan |
|---|---|
| HTML5 | Struktur dan konten halaman |
| CSS3 | Desain, tata letak, dan responsivitas |
| JavaScript ES Modules | Logika dan interaksi website |
| localStorage | Penyimpanan keranjang di browser |
| WhatsApp Click to Chat | Pengiriman rincian pesanan |
| VS Code + Live Server | Pengembangan dan pengujian lokal |

### 8. Teknologi yang Belum Digunakan
Pada versi saat ini belum terdapat PHP, framework JavaScript, database, API backend, sistem login, payment gateway, maupun dashboard admin. Pengelolaan produk masih dilakukan dengan mengubah data pada `js/products.js`.
