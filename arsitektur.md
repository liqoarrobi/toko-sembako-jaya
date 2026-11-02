# Arsitektur Sistem
## Website Sembako Jaya

### 1. Gambaran Arsitektur
Website Sembako Jaya menggunakan arsitektur frontend sederhana. HTML menjadi struktur halaman, CSS mengatur tampilan, dan JavaScript menangani data serta interaksi pengguna.

Tidak ada server backend atau database pada versi saat ini. Data produk disimpan di file JavaScript, sedangkan data keranjang disimpan di browser menggunakan `localStorage`.

### 2. Struktur Folder
Struktur folder proyek yang digunakan:

```text
Sembako Jaya/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── app.js
│   └── products.js
│
└── images/
    ├── beras.jpg
    ├── gula.jpg
    ├── kecap.jpg
    ├── saos.jpg
    ├── telur.jpg
    ├── minyak.jpg
    ├── tepung.jpg
    ├── mie.jpg
    ├── susu.jpg
    ├── garam.jpg
    ├── kopi.jpg
    ├── teh.jpg
    ├── blueband.jpg
    ├── marjan.jpg
    ├── sunlight.jpg
    ├── daia.jpg
    ├── bawang merah.jpg
    ├── bawang putih.jpg
    ├── tropical.jpg
    └── santan.jpg
```

Nama file gambar di atas mengikuti referensi gambar yang tercantum dalam data produk. Pastikan nama file dan ekstensi di folder `images` sama persis dengan yang ditulis pada `products.js`.

### 3. Penjelasan Komponen

#### 3.1 `index.html`
Berfungsi sebagai halaman utama dan tempat elemen website ditampilkan. File ini memanggil stylesheet `./css/style.css` dan modul JavaScript `./js/app.js`.

#### 3.2 `css/style.css`
Berisi aturan desain untuk seluruh komponen halaman, termasuk navbar, hero, pencarian, kategori, kartu produk, keranjang, formulir, modal, notifikasi, footer, dan penyesuaian layar kecil.

#### 3.3 `js/products.js`
Berperan sebagai sumber data katalog. File ini mengekspor array `products` dan `categories` agar dapat digunakan oleh `app.js`.

#### 3.4 `js/app.js`
Berperan sebagai pengendali utama aplikasi. File ini mengimpor data produk dan kategori, kemudian menjalankan proses render, pencarian, filter, keranjang, penyimpanan, dan checkout WhatsApp.

#### 3.5 `images/`
Menyimpan file gambar produk yang digunakan pada kartu katalog dan tampilan item keranjang.

### 4. Alur Data dan Proses

#### 4.1 Saat Halaman Dibuka
1. Browser membaca `index.html`.
2. Browser memuat `css/style.css`.
3. Browser menjalankan `js/app.js` sebagai JavaScript module.
4. `app.js` mengimpor data dari `products.js`.
5. Setelah DOM siap, aplikasi menampilkan kategori, produk, dan isi keranjang.
6. Data keranjang dibaca dari `localStorage` jika tersedia.

#### 4.2 Saat Pengguna Mencari atau Memfilter Produk
1. Pengguna mengetik kata kunci atau memilih kategori.
2. `app.js` memperbarui state pencarian atau kategori.
3. Data produk disaring berdasarkan nama/deskripsi dan kategori.
4. Hasil yang sesuai ditampilkan kembali pada area katalog.

#### 4.3 Saat Pengguna Mengelola Keranjang
1. Pengguna menekan tombol tambah pada produk.
2. `app.js` mencari data produk berdasarkan ID.
3. Produk ditambahkan ke state keranjang atau jumlah produk yang sudah ada ditambah.
4. Data keranjang disimpan ke `localStorage`.
5. Tampilan keranjang, badge jumlah barang, dan total belanja diperbarui.

#### 4.4 Saat Pengguna Melakukan Pemesanan
1. Pengguna membuka keranjang.
2. Pengguna mengisi nama dan alamat pengiriman.
3. `app.js` memeriksa data wajib dan isi keranjang.
4. Sistem menghitung subtotal setiap produk dan total belanja.
5. Sistem menyusun pesan pesanan dan membuat tautan WhatsApp.
6. Pesan ditampilkan pada modal pratinjau.
7. Pengguna memilih tombol untuk membuka WhatsApp toko.

### 5. Diagram Arsitektur

```text
                  PENGGUNA
                      |
                      v
                index.html
                      |
          +-----------+-----------+
          |                       |
          v                       v
    css/style.css             js/app.js
      (tampilan)                  |
                                  |
                     +------------+------------+
                     |                         |
                     v                         v
              js/products.js              localStorage
             (produk/kategori)           (data keranjang)
                     |
                     v
              Katalog ditampilkan
                     |
                     v
              Keranjang & Checkout
                     |
                     v
               WhatsApp Toko
```

### 6. Penyimpanan Data
Data produk dan kategori bersumber dari `products.js`. Data keranjang disimpan pada browser menggunakan `localStorage` dengan kunci `sembako_jaya_cart_v1`. Informasi pesanan tidak disimpan ke database website; pengguna meneruskannya melalui WhatsApp.

### 7. Batasan Arsitektur
- Semua proses utama berjalan di sisi frontend.
- Tidak ada autentikasi pengguna.
- Tidak ada database pusat untuk produk, stok, atau pesanan.
- Perubahan data produk perlu dilakukan langsung pada `products.js`.
- Keranjang hanya tersedia pada browser dan perangkat tempat data tersebut disimpan.
- Pengiriman pesanan bergantung pada WhatsApp dan tindakan pengguna.
