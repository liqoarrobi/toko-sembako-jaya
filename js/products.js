/**
 * Data Katalog 20 Produk Sembako Jaya
 * Format data terstruktur memudahkan penambahan, modifikasi, dan integrasi API
 */

export const products = [
  {
    id: 1,
    name: "Beras Sumo Merah 5kg",
    desc: "Beras pulen kualitas premium tanpa pemutih & pengawet",
    price: 78000,
    category: "beras",
    unit: "5 kg",
    badge: "Terlaris",
    img: "./images/beras.jpg"
  },
  {
    id: 2,
    name: "Gulaku Murni 1kg",
    desc: "Gula tebu murni kristal putih kemasan higienis",
    price: 18500,
    category: "bumbu",
    unit: "1 kg",
    badge: "Favorit",
    img: "./images/gula.jpg"
  },
  {
    id: 3,
    name: "Kecap Manis Bango 550ml",
    desc: "Kecap kental alami dari kedelai hitam Malika pilihan",
    price: 24500,
    category: "bumbu",
    unit: "550 ml",
    badge: "Rekomendasi",
    img: "./images/kecap.jpg"
  },
  {
    id: 4,
    name: "Saus Sambal Indofood 335ml",
    desc: "Pedas pas dan gurih diproses dari cabai merah segar",
    price: 14000,
    category: "bumbu",
    unit: "335 ml",
    badge: "",
    img: "./images/saos.jpg"
  },
  {
    id: 5,
    name: "Telur Ayam Negeri 1kg",
    desc: "Telur ayam negeri segar langsung dari peternakan binaan",
    price: 29000,
    category: "pokok",
    unit: "1 kg (16-17 butir)",
    badge: "Segar",
    img: "./images/telur.jpg"
  },
  {
    id: 6,
    name: "Minyak Bimoli Klasik 2L",
    desc: "Minyak goreng kelapa sawit jernih, tahan panas & renyah",
    price: 36500,
    category: "minyak",
    unit: "Pouch 2 Liter",
    badge: "Terlaris",
    img: "./images/minyak.jpg"
  },
  {
    id: 7,
    name: "Tepung Segitiga Biru 1kg",
    desc: "Tepung terigu serbaguna protein sedang untuk aneka olahan kue & gorengan",
    price: 13000,
    category: "beras",
    unit: "1 kg",
    badge: "",
    img: "./images/tepung.jpg"
  },
  {
    id: 8,
    name: "Indomie Goreng (Isi 5 Bungkus)",
    desc: "Mi instan goreng legendaris gurih dengan bumbu bawang lezat",
    price: 15500,
    category: "makanan",
    unit: "5 Bungkus",
    badge: "Paket Hemat",
    img: "./images/mie.jpg"
  },
  {
    id: 9,
    name: "Susu Frisian Flag Kental Manis 370g",
    desc: "Susu kental manis lezat kaya kalsium dan vitamin",
    price: 12500,
    category: "makanan",
    unit: "Kaleng 370g",
    badge: "",
    img: "./images/susu.jpg"
  },
  {
    id: 10,
    name: "Garam Dapur Cap Kapal 250g",
    desc: "Garam meja halus beryodium tinggi untuk nutrisi keluarga",
    price: 4000,
    category: "bumbu",
    unit: "250 gram",
    badge: "",
    img: "./images/garam.jpg"
  },
  // 10 PRODUK TAMBAHAN BARU (TOTAL 20 PRODUK)
  {
    id: 11,
    name: "Kopi Kapal Api Spesial Mix (10 Sachet)",
    desc: "Kopi bubuk robusta berpadu gula murni, seduh praktis dan harum",
    price: 16000,
    category: "makanan",
    unit: "10 x 24g",
    badge: "Hemat",
    img: "./images/kopi.jpg"
  },
  {
    id: 12,
    name: "Teh Celup Sosro (Isi 30 Kantong)",
    desc: "Teh hitam asli wangi melati alami, kesegaran khas Nusantara",
    price: 8500,
    category: "makanan",
    unit: "30 Kantong",
    badge: "",
    img: "./images/teh.jpg"
  },
  {
    id: 13,
    name: "Margarin Blue Band Serbaguna 200g",
    desc: "Margarin kaya Omega 3 & 6, ideal untuk olesan roti dan menumis masakan",
    price: 11500,
    category: "minyak",
    unit: "Sachet 200g",
    badge: "",
    img: "./images/blueband.jpg"
  },
  {
    id: 14,
    name: "Sirup Marjan Boudoin Cocopandan 460ml",
    desc: "Sirup manis segar dengan keharuman kelapa pandan istimewa",
    price: 22000,
    category: "makanan",
    unit: "Botol 460 ml",
    badge: "Promo",
    img: "./images/marjan.jpg"
  },
  {
    id: 15,
    name: "Sunlight Jeruk Nipis 100 700ml",
    desc: "Sabun pencuci piring ekstrak jeruk nipis asli bersihkan lemak membandel",
    price: 15500,
    category: "kebersihan",
    unit: "Refill 700 ml",
    badge: "Laris",
    img: "./images/sunlight.jpg"
  },
  {
    id: 16,
    name: "Deterjen Daia Putih Bersih 850g",
    desc: "Deterjen bubuk dengan busa melimpah, wangi tahan lama & menjaga warna baju",
    price: 19500,
    category: "kebersihan",
    unit: "850 gram",
    badge: "",
    img: "./images/daia.jpg"
  },
  {
    id: 17,
    name: "Bawang Merah 500g",
    desc: "Bawang merah segar pilihan tanpa busuk, rasa gurih pedas sedap masakan",
    price: 22000,
    category: "bumbu",
    unit: "500 gram",
    badge: "Segar",
    img: "./images/bawang merah.jpg"
  },
  {
    id: 18,
    name: "Bawang Putih 500g",
    desc: "Bawang putih siung besar, aroma tajam mantap untuk bumbu tumis",
    price: 20000,
    category: "bumbu",
    unit: "500 gram",
    badge: "Segar",
    img: "./images/bawang putih.jpg"
  },
  {
    id: 19,
    name: "Minyak Goreng Tropical Botol 2L",
    desc: "Minyak goreng 2x penyaringan bermutu tinggi dengan asam lemak tak jenuh",
    price: 38000,
    category: "minyak",
    unit: "Botol 2 Liter",
    badge: "Kualitas Premium",
    img: "./images/tropical.jpg"
  },
  {
    id: 20,
    name: "Santan Kelapa Kara 200ml (Isi 2)",
    desc: "Santan kelapa murni siap pakai, gurih kental cocok untuk gulai dan kolak",
    price: 10000,
    category: "bumbu",
    unit: "2 x 200 ml",
    badge: "Praktis",
    img: "./images/santan.jpg"
  }
];

export const categories = [
  { id: "all", name: "Semua Produk", icon: "🧺" },
  { id: "pokok", name: "Kebutuhan Pokok", icon: "🌾" },
  { id: "minyak", name: "Minyak & Mentega", icon: "🍳" },
  { id: "beras", name: "Beras & Tepung", icon: "🍚" },
  { id: "bumbu", name: "Bumbu Dapur", icon: "🧂" },
  { id: "makanan", name: "Makanan & Minuman", icon: "☕" },
  { id: "kebersihan", name: "Pembersih Rumah", icon: "✨" }
];
