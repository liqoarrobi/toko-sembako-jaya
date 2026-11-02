# Instruction
## Panduan Menjalankan dan Mengelola Website Sembako Jaya

### 1. Persiapan
Siapkan:
- Visual Studio Code.
- Browser seperti Google Chrome, Microsoft Edge, atau Firefox.
- Ekstensi Live Server pada Visual Studio Code.

### 2. Struktur Folder
Pastikan struktur proyek sesuai dengan susunan berikut:

```text
Sembako Jaya/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   └── products.js
└── images/
    └── file-file-gambar-produk
```

### 3. Cara Menjalankan Website
1. Buka Visual Studio Code.
2. Pilih **File > Open Folder**.
3. Pilih folder utama `Sembako Jaya`.
4. Pastikan seluruh file berada di folder yang benar.
5. Buka `index.html`.
6. Klik kanan pada area kode, lalu pilih **Open with Live Server**.
7. Website akan terbuka di browser.

Jangan menjalankan website dengan membuka file HTML langsung melalui alamat `file://`. Proyek ini menggunakan JavaScript ES Modules, sehingga lebih aman diuji melalui Live Server atau server lokal sejenis.

### 4. Cara Menambahkan atau Mengubah Produk
1. Buka file `js/products.js`.
2. Cari array `products`.
3. Tambahkan atau ubah objek produk dengan format yang sama seperti produk lainnya.
4. Pastikan setiap produk memiliki ID yang berbeda.
5. Isi nama, deskripsi, harga, kategori, satuan, badge, dan gambar.
6. Simpan file, lalu muat ulang halaman browser.

Contoh format data:

```javascript
{
  id: 21,
  name: "Nama Produk",
  desc: "Deskripsi singkat produk",
  price: 15000,
  category: "makanan",
  unit: "1 kemasan",
  badge: "",
  img: "./images/nama-gambar.jpg"
}
```

Kategori produk harus menggunakan ID kategori yang tersedia pada array `categories`, misalnya `pokok`, `minyak`, `beras`, `bumbu`, `makanan`, atau `kebersihan`.

### 5. Cara Menambahkan Gambar Produk
1. Simpan gambar ke folder `images` yang berada sejajar dengan folder `js`.
2. Buka `js/products.js`.
3. Isi properti `img` dengan alamat gambar yang dimulai dari folder utama website, contohnya:

```javascript
img: "./images/beras.jpg"
```

Alamat tersebut benar untuk struktur proyek ini karena gambar dimuat oleh halaman `index.html` yang berada di folder utama. Walaupun data ditulis di `products.js`, alamat gambar pada atribut `src` di browser diselesaikan berdasarkan alamat halaman website.

Pastikan:
- Nama file sama persis, termasuk huruf besar dan kecil.
- Ekstensi file benar, misalnya `.jpg`, `.png`, atau `.webp`.
- File gambar benar-benar berada di folder `images`.
- Nama file yang memiliki spasi harus ditulis sama persis, misalnya `./images/bawang merah.jpg`.

### 6. Cara Mengubah Harga
Harga ditulis sebagai angka tanpa tanda titik atau simbol Rupiah. Contoh:

```javascript
price: 25000
```

Website akan menampilkan angka tersebut dengan format Rupiah melalui fungsi `toRupiah()` di `js/app.js`.

### 7. Cara Mengubah Nomor WhatsApp Toko
1. Buka `js/app.js`.
2. Cari bagian `CONFIG` di awal file.
3. Ubah nilai `storePhone` dengan nomor WhatsApp toko.
4. Gunakan format kode negara Indonesia `62`, tanpa tanda plus, spasi, atau tanda hubung.

Contoh format:

```javascript
storePhone: "6281234567890"
```

Gunakan nomor WhatsApp toko yang benar sebelum website dipublikasikan.

### 8. Cara Mengubah Tampilan
- Ubah struktur atau teks halaman melalui `index.html`.
- Ubah warna, ukuran, jarak, kartu, dan tata letak melalui `css/style.css`.
- Ubah isi katalog melalui `js/products.js`.
- Ubah perilaku pencarian, keranjang, atau checkout melalui `js/app.js`.

Jika mengubah ID elemen di `index.html`, periksa juga apakah ID tersebut digunakan di `app.js`. ID yang terhubung dengan JavaScript sebaiknya tidak diganti sembarangan.

### 9. Cara Menguji Fitur
Lakukan pengujian berikut setelah perubahan:
1. Pastikan halaman utama dapat dibuka.
2. Pastikan gambar seluruh produk tampil.
3. Coba cari produk berdasarkan nama.
4. Coba cari produk berdasarkan deskripsi.
5. Coba pilih setiap kategori.
6. Tambahkan satu produk ke keranjang.
7. Tambahkan produk yang sama lebih dari sekali.
8. Tambah dan kurangi jumlah barang.
9. Hapus salah satu barang.
10. Kosongkan keranjang.
11. Muat ulang halaman dan periksa apakah isi keranjang tersimpan.
12. Isi nama serta alamat pengiriman.
13. Coba buat pratinjau pesanan dan buka WhatsApp.

### 10. Pemecahan Masalah

| Masalah | Hal yang perlu diperiksa |
|---|---|
| CSS tidak tampil | Periksa alamat `./css/style.css` dan nama file. |
| JavaScript tidak berjalan | Pastikan script menggunakan `type="module"` dan jalankan dengan Live Server. |
| Produk tidak muncul | Periksa Console browser dan data pada `products.js`. |
| Gambar tidak tampil | Periksa nama file, ekstensi, lokasi folder, dan nilai `img`. |
| Tombol tidak merespons | Periksa Console browser dan pastikan fungsi pada `window.SembakoApp` tersedia. |
| Keranjang tidak tersimpan | Periksa apakah localStorage di browser aktif dan tidak diblokir. |
| WhatsApp tidak terbuka | Periksa nomor `storePhone`, koneksi internet, dan aplikasi/browser WhatsApp. |

Untuk melihat pesan kesalahan, tekan `F12` pada browser lalu buka tab **Console**.

### 11. Catatan Sebelum Website Dipublikasikan
- Periksa kembali harga dan deskripsi semua produk.
- Pastikan gambar produk sesuai dengan nama barang.
- Pastikan nomor WhatsApp toko benar.
- Perbarui informasi jam operasional, area pengiriman, dan metode pembayaran sesuai kondisi toko.
- Uji website pada desktop dan ponsel.
- Pastikan seluruh informasi promosi dan layanan yang ditampilkan memang berlaku.

### 12. Batasan Versi Saat Ini
Website ini masih berupa aplikasi frontend. Produk dikelola melalui file JavaScript, keranjang disimpan pada browser, dan pemesanan diteruskan ke WhatsApp. Belum tersedia dashboard admin, database, login pelanggan, pembayaran otomatis, maupun pengelolaan stok secara langsung.
