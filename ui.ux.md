# UI/UX Design
## Website Sembako Jaya

### 1. Konsep Desain
Desain website Sembako Jaya dibuat sederhana, bersih, dan mudah digunakan. Tampilan menggunakan warna hijau sebagai identitas utama toko karena memberikan kesan segar, serta warna kuning sebagai aksen untuk menarik perhatian pada elemen tertentu.

Susunan halaman dibuat agar pelanggan dapat langsung memahami fungsi website: melihat katalog, mencari barang, memasukkan produk ke keranjang, dan melakukan pemesanan.

### 2. Identitas Visual
| Elemen | Penggunaan |
|---|---|
| Hijau | Warna utama, tombol, kategori aktif, dan harga |
| Kuning | Aksen dan penanda jumlah keranjang |
| Putih | Latar kartu, navbar, dan area konten |
| Abu-abu muda | Latar halaman, garis pembatas, dan elemen pendukung |
| Merah | Penanda tindakan berbahaya atau penghapusan |

Warna dikelola menggunakan CSS custom properties pada bagian `:root` di `css/style.css`, sehingga dapat diubah tanpa harus mencari setiap aturan warna satu per satu.

### 3. Susunan Halaman

#### 3.1 Navbar
Bagian paling atas halaman menampilkan identitas Sembako Jaya dan tombol keranjang. Navbar dibuat tetap berada di bagian atas ketika halaman digulir agar akses ke keranjang tetap mudah.

#### 3.2 Hero Banner
Hero banner berisi slogan utama, penjelasan singkat layanan, dan informasi pendukung seperti jumlah produk, pemesanan WhatsApp, layanan antar, serta pilihan pembayaran yang diinformasikan pada halaman.

#### 3.3 Katalog Produk
Bagian katalog menampilkan judul, deskripsi singkat, kolom pencarian, tombol kategori, jumlah hasil, dan grid kartu produk.

Setiap kartu produk menampilkan gambar, nama, deskripsi, harga, satuan, badge jika tersedia, serta tombol untuk menambahkan barang ke keranjang.

#### 3.4 Keranjang Belanja
Keranjang ditampilkan dalam bentuk panel geser dari sisi kanan layar dengan lapisan overlay. Bagian ini menampilkan item yang dipilih, harga, subtotal, kontrol jumlah, tombol hapus, total belanja, dan formulir data pengiriman.

#### 3.5 Konfirmasi WhatsApp
Sebelum berpindah ke WhatsApp, website menampilkan modal berisi pratinjau pesan pesanan. Pengguna dapat menyalin teks atau membuka percakapan WhatsApp toko.

#### 3.6 Footer
Footer menampilkan informasi toko, jam operasional, kontak WhatsApp, area pengantaran, metode pembayaran, dan informasi hak cipta.

### 4. Responsivitas
CSS menyediakan penyesuaian tampilan pada ukuran layar tablet dan ponsel melalui media query. Grid produk menyesuaikan lebar layar, elemen navigasi dan katalog dapat menyesuaikan ruang yang tersedia, serta tombol keranjang mengambang disediakan untuk akses pada perangkat mobile ketika keranjang berisi barang.

### 5. Prinsip UX yang Digunakan
- **Mudah ditemukan:** pencarian dan kategori ditempatkan dekat bagian katalog.
- **Informasi jelas:** harga, nama, deskripsi, dan satuan produk ditampilkan pada kartu.
- **Umpan balik:** notifikasi muncul setelah tindakan seperti menambahkan barang ke keranjang.
- **Kontrol pengguna:** jumlah barang dapat ditambah, dikurangi, atau dihapus.
- **Transparansi pesanan:** total belanja dan pratinjau pesan ditampilkan sebelum membuka WhatsApp.
- **Konsistensi:** warna tombol, kartu, jarak, dan bentuk komponen dibuat konsisten.
- **Responsif:** tampilan disesuaikan agar tetap nyaman digunakan pada desktop maupun ponsel.

### 6. Alur Pengalaman Pengguna
Pengguna membuka website, melihat informasi toko, mencari atau memilih kategori produk, menambahkan barang, memeriksa keranjang, mengisi alamat, lalu melihat pratinjau pesanan sebelum melanjutkan ke WhatsApp.

### 7. Catatan Pengembangan UI/UX
Apabila ingin mengubah desain, lakukan perubahan utama pada `css/style.css`. Pertahankan ID elemen HTML yang digunakan oleh `app.js`, seperti `productGrid`, `categoryTabs`, `searchInput`, `cartItems`, `totalPrice`, dan `orderForm`, agar fungsi JavaScript tetap berjalan.
