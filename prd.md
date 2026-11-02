# Product Requirements Document (PRD)
## Website Sembako Jaya

### 1. Gambaran Umum
Sembako Jaya merupakan website katalog toko sembako yang membantu pelanggan melihat berbagai kebutuhan rumah tangga dan melakukan pemesanan dari rumah. Website menampilkan daftar produk beserta harga, deskripsi, kategori, dan gambar produk. Pelanggan dapat memasukkan produk ke keranjang, mengatur jumlah barang, lalu mengirimkan rincian pesanan melalui WhatsApp toko.

Website ini dibuat untuk mempermudah pelanggan melihat pilihan sembako tanpa harus datang langsung ke toko.

### 2. Tujuan Website
- Menampilkan katalog produk sembako secara rapi dan mudah dipahami.
- Memudahkan pelanggan mencari produk berdasarkan nama atau deskripsi.
- Memudahkan pelanggan menyaring produk berdasarkan kategori.
- Menyediakan keranjang untuk menghitung jumlah dan total belanja.
- Membantu pelanggan mengirimkan pesanan melalui WhatsApp.
- Menyediakan tampilan yang dapat digunakan melalui komputer maupun perangkat mobile.

### 3. Target Pengguna
Target pengguna website ini adalah masyarakat atau pelanggan yang membutuhkan bahan pangan, bumbu dapur, makanan dan minuman, minyak, serta produk kebersihan rumah tangga. Website juga ditujukan bagi pelanggan yang ingin memesan barang tanpa harus datang langsung ke toko.

### 4. Fitur Utama

#### 4.1 Katalog Produk
Website menampilkan 20 produk sembako. Setiap produk memiliki informasi:
- Nama produk.
- Deskripsi singkat.
- Harga dalam Rupiah.
- Kategori.
- Satuan atau ukuran kemasan.
- Label produk jika tersedia.
- Gambar produk.

Data produk disimpan dalam file `js/products.js`, sehingga nama, harga, deskripsi, kategori, dan gambar dapat diperbarui dari satu tempat.

#### 4.2 Pencarian Produk
Pelanggan dapat mencari produk melalui kolom pencarian. Pencarian mencocokkan kata kunci dengan nama dan deskripsi produk.

#### 4.3 Filter Kategori
Pelanggan dapat memilih kategori untuk menampilkan produk yang sesuai. Kategori yang tersedia:
- Semua Produk.
- Kebutuhan Pokok.
- Minyak & Mentega.
- Beras & Tepung.
- Bumbu Dapur.
- Makanan & Minuman.
- Pembersih Rumah.

#### 4.4 Keranjang Belanja
Pelanggan dapat:
- Menambahkan produk ke keranjang.
- Menambah atau mengurangi jumlah produk.
- Menghapus produk tertentu.
- Mengosongkan seluruh keranjang.
- Melihat jumlah barang dan total harga belanja.

Data keranjang disimpan menggunakan `localStorage`, sehingga isi keranjang dapat tetap tersedia ketika halaman dimuat ulang pada browser yang sama.

#### 4.5 Pemesanan melalui WhatsApp
Pelanggan mengisi nama penerima dan alamat pengiriman. Nomor telepon dan catatan tambahan juga disediakan. Website menyusun rincian barang, jumlah, subtotal, dan total belanja menjadi pesan WhatsApp, kemudian menampilkan pratinjau sebelum pelanggan membuka WhatsApp toko.

#### 4.6 Notifikasi
Website menampilkan notifikasi singkat ketika produk ditambahkan atau dihapus dari keranjang dan ketika tindakan tertentu berhasil atau perlu diperiksa.

### 5. Alur Penggunaan
1. Pelanggan membuka halaman Sembako Jaya.
2. Pelanggan melihat katalog atau mencari produk.
3. Pelanggan memilih kategori jika ingin mempersempit daftar produk.
4. Pelanggan menambahkan produk ke keranjang.
5. Pelanggan membuka keranjang dan memeriksa jumlah serta total belanja.
6. Pelanggan mengisi data pengiriman.
7. Pelanggan menekan tombol pemesanan melalui WhatsApp.
8. Website menampilkan pratinjau pesan.
9. Pelanggan membuka WhatsApp untuk mengirimkan pesanan kepada toko.

### 6. Kebutuhan Fungsional
| Kode | Kebutuhan |
|---|---|
| FR-01 | Website menampilkan katalog 20 produk. |
| FR-02 | Website menampilkan gambar, nama, deskripsi, harga, dan satuan produk. |
| FR-03 | Pengguna dapat mencari produk berdasarkan nama atau deskripsi. |
| FR-04 | Pengguna dapat memfilter produk berdasarkan kategori. |
| FR-05 | Pengguna dapat menambahkan produk ke keranjang. |
| FR-06 | Pengguna dapat mengubah jumlah produk di keranjang. |
| FR-07 | Pengguna dapat menghapus produk atau mengosongkan keranjang. |
| FR-08 | Website menghitung jumlah barang, subtotal, dan total belanja. |
| FR-09 | Website menyimpan keranjang pada localStorage browser. |
| FR-10 | Pengguna dapat mengisi data pengiriman. |
| FR-11 | Website menyusun rincian pesanan untuk dikirim melalui WhatsApp. |
| FR-12 | Website menampilkan pratinjau pesan sebelum membuka WhatsApp. |

### 7. Kebutuhan Nonfungsional
- Tampilan mudah dipahami dan digunakan.
- Tata letak menyesuaikan ukuran layar desktop dan mobile.
- Kode dipisahkan berdasarkan fungsi ke dalam file HTML, CSS, dan JavaScript.
- Informasi produk mudah diperbarui.
- Website dapat dijalankan melalui browser dengan server lokal seperti VS Code Live Server.
- Website menggunakan bahasa Indonesia dan format harga Rupiah.

### 8. Batasan Sistem
- Website belum menggunakan backend atau database server.
- Data katalog disimpan secara statis di file JavaScript.
- Keranjang disimpan di browser pengguna melalui `localStorage`.
- Pemesanan diteruskan melalui WhatsApp, bukan diproses oleh sistem pembayaran online.
- Website tidak melakukan pembayaran, verifikasi transaksi, atau pelacakan pengiriman secara otomatis.
- Ketersediaan stok dan biaya pengiriman perlu dikonfirmasi langsung dengan toko.

### 9. Indikator Keberhasilan
Website dianggap berjalan sesuai tujuan apabila katalog tampil, pencarian dan filter bekerja, produk dapat dimasukkan ke keranjang, jumlah dan total belanja terhitung dengan benar, isi keranjang tersimpan di browser, serta pesan pesanan dapat disiapkan dan dibuka melalui WhatsApp.
