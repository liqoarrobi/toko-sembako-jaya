/**
 * =========================================================
 * SEMBAKO JAYA - LOGIKA APLIKASI (js/app.js)
 * Modul JavaScript untuk pencarian, keranjang belanja,
 * filter kategori, dan integrasi WhatsApp Checkout.
 * =========================================================
 */

import { products, categories } from './products.js';

// ================= KONFIGURASI TOKO =================
export const CONFIG = {
  storeName: "Sembako Jaya",
  // Ganti nomor WhatsApp toko di sini (format internasional diawali kode negara 62)
  storePhone: "6289601041658",
  currencyPrefix: "Rp ",
  storageKey: "sembako_jaya_cart_v1"
};

// ================= STATE APLIKASI =================
let state = {
  cart: loadCartFromStorage(),
  activeCategory: "all",
  searchKeyword: ""
};

// ================= UTILITY & FORMATTING =================
export function toRupiah(num) {
  return CONFIG.currencyPrefix + Number(num || 0).toLocaleString("id-ID");
}

function loadCartFromStorage() {
  try {
    const raw = localStorage.getItem(CONFIG.storageKey);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.warn("Storage tidak tersedia, menggunakan memory state:", e);
    return [];
  }
}

function saveCartToStorage() {
  try {
    localStorage.setItem(CONFIG.storageKey, JSON.stringify(state.cart));
  } catch (e) {
    console.warn("Gagal menyimpan keranjang:", e);
  }
}

// ================= TOAST NOTIFIKASI =================
let toastTimeout = null;
export function showToast(message, icon = "✓") {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  toast.classList.add("show");

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

// ================= RENDER KATEGORI FILTER =================
export function renderCategories() {
  const container = document.getElementById("categoryTabs");
  if (!container) return;

  container.innerHTML = categories.map(cat => `
    <button 
      class="cat-btn ${cat.id === state.activeCategory ? 'active' : ''}" 
      data-category="${cat.id}"
      onclick="window.SembakoApp.filterCategory('${cat.id}')"
    >
      <span>${cat.icon}</span>
      <span>${cat.name}</span>
    </button>
  `).join("");
}

// ================= RENDER KATALOG PRODUK =================
export function renderProducts() {
  const grid = document.getElementById("productGrid");
  const countBar = document.getElementById("productCountBar");
  if (!grid) return;

  // Filter berdasarkan kategori & kata kunci pencarian
  const filtered = products.filter(item => {
    const matchCategory = state.activeCategory === "all" || item.category === state.activeCategory;
    const q = state.searchKeyword.toLowerCase().trim();
    const matchSearch = !q || 
      item.name.toLowerCase().includes(q) || 
      item.desc.toLowerCase().includes(q);
    return matchCategory && matchSearch;
  });

  if (countBar) {
    countBar.innerHTML = `
      <span>Menampilkan <strong>${filtered.length}</strong> dari <strong>${products.length}</strong> produk</span>
      ${state.searchKeyword || state.activeCategory !== 'all' ? `
        <button class="btn-clear-cart" style="text-decoration:none; color:var(--primary); font-weight:600;" onclick="window.SembakoApp.resetFilters()">
          ↺ Reset Filter
        </button>
      ` : ''}
    `;
  }

  // Jika produk tidak ditemukan
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <h3>Produk Tidak Ditemukan</h3>
        <p>Maaf, tidak ada produk sembako yang cocok dengan pencarian "<strong>${escapeHtml(state.searchKeyword)}</strong>".</p>
        <button class="btn-reset-filter" onclick="window.SembakoApp.resetFilters()">Tampilkan Semua Produk</button>
      </div>
    `;
    return;
  }

  // Render card produk
  grid.innerHTML = filtered.map(item => `
    <article class="product-card" data-id="${item.id}">
      <div class="card-img-wrap">
        <img 
          src="${item.img}" 
          alt="${escapeHtml(item.name)}" 
          class="product-img" 
          loading="lazy"
          onerror="this.src='https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&auto=format&fit=crop&q=80'"
        />
        ${item.badge ? `<span class="product-badge">${escapeHtml(item.badge)}</span>` : ''}
        ${item.unit ? `<span class="product-unit">${escapeHtml(item.unit)}</span>` : ''}
      </div>

      <div class="product-details">
        <h3 class="product-title">${escapeHtml(item.name)}</h3>
        <p class="product-desc">${escapeHtml(item.desc)}</p>

        <div class="product-footer">
          <div class="price-row">
            <span class="product-price">${toRupiah(item.price)}</span>
          </div>
          <button class="btn-add" onclick="window.SembakoApp.addToCart(${item.id})">
            <span>+</span> Keranjang
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

// ================= OPERASI KERANJANG BELANJA =================
export function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const existing = state.cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.img,
      unit: product.unit,
      qty: 1
    });
  }

  saveCartToStorage();
  updateCartUI();
  bounceBadge();
  showToast(`"${product.name}" ditambahkan ke keranjang`);
}

export function changeQty(id, delta) {
  const item = state.cart.find(i => i.id === id);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    state.cart = state.cart.filter(i => i.id !== id);
    showToast(`Produk dihapus dari keranjang`, "🗑️");
  }

  saveCartToStorage();
  updateCartUI();
}

export function removeFromCart(id) {
  const item = state.cart.find(i => i.id === id);
  if (!item) return;

  state.cart = state.cart.filter(i => i.id !== id);
  saveCartToStorage();
  updateCartUI();
  showToast(`Produk dihapus dari keranjang`, "🗑️");
}

export function clearCart() {
  if (state.cart.length === 0) return;
  state.cart = [];
  saveCartToStorage();
  updateCartUI();
  showToast("Keranjang belanja dikosongkan", "🗑️");
}

export function updateCartUI() {
  const container = document.getElementById("cartItems");
  const totalDisplay = document.getElementById("totalPrice");
  const badges = document.querySelectorAll(".cart-count-badge");
  const floatingBtn = document.getElementById("floatingCartBtn");

  const totalQty = state.cart.reduce((acc, curr) => acc + curr.qty, 0);
  const totalPrice = state.cart.reduce((acc, curr) => acc + (curr.price * curr.qty), 0);

  // Update badge counter di navbar & floating button
  badges.forEach(badge => {
    badge.textContent = totalQty;
  });

  // Tampilkan/sembunyikan floating button di mobile
  if (floatingBtn) {
    floatingBtn.style.display = totalQty > 0 ? "flex" : "none";
    const floatAmount = document.getElementById("floatingCartAmount");
    if (floatAmount) floatAmount.textContent = toRupiah(totalPrice);
  }

  if (totalDisplay) {
    totalDisplay.textContent = toRupiah(totalPrice);
  }

  if (!container) return;

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-box">
        <span class="cart-empty-icon">🛒</span>
        <p><strong>Keranjang Anda masih kosong</strong></p>
        <span style="font-size:0.85rem;">Pilih produk sembako kebutuhan Anda untuk mulai belanja.</span>
      </div>
    `;
    return;
  }

  container.innerHTML = state.cart.map(item => `
    <div class="cart-item">
      <img src="${item.img}" alt="${escapeHtml(item.name)}" class="cart-item-img" />
      <div class="cart-item-info">
        <h4 class="cart-item-name">${escapeHtml(item.name)}</h4>
        <div class="cart-item-price">${toRupiah(item.price)}</div>
        <div style="font-size:0.75rem; color:var(--text-muted); margin-top:2px;">Subtotal: ${toRupiah(item.price * item.qty)}</div>
      </div>
      <div class="cart-item-actions">
        <div class="qty-controls">
          <button class="qty-btn" title="Kurang" onclick="window.SembakoApp.changeQty(${item.id}, -1)">−</button>
          <span class="qty-number">${item.qty}</span>
          <button class="qty-btn" title="Tambah" onclick="window.SembakoApp.changeQty(${item.id}, 1)">+</button>
        </div>
        <button class="btn-clear-cart" style="font-size:0.72rem; padding:0;" onclick="window.SembakoApp.removeFromCart(${item.id})">
          Hapus
        </button>
      </div>
    </div>
  `).join("");
}

export function toggleCart(isOpen) {
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartOverlay");
  if (!drawer || !overlay) return;

  if (isOpen) {
    drawer.classList.add("open");
    overlay.classList.add("open");
    document.body.style.overflow = "hidden"; // cegah scroll background
  } else {
    drawer.classList.remove("open");
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }
}

function bounceBadge() {
  const badges = document.querySelectorAll(".cart-count-badge");
  badges.forEach(b => {
    b.classList.add("badge-bounce");
    setTimeout(() => b.classList.remove("badge-bounce"), 250);
  });
}

// ================= PENCARIAN & FILTER =================
export function handleSearch(keyword) {
  state.searchKeyword = keyword || "";
  const clearBtn = document.getElementById("clearSearchBtn");
  if (clearBtn) {
    if (state.searchKeyword) {
      clearBtn.classList.add("active");
    } else {
      clearBtn.classList.remove("active");
    }
  }
  renderProducts();
}

export function clearSearch() {
  const input = document.getElementById("searchInput");
  if (input) input.value = "";
  handleSearch("");
}

export function filterCategory(categoryId) {
  state.activeCategory = categoryId;
  renderCategories();
  renderProducts();
}

export function resetFilters() {
  state.activeCategory = "all";
  state.searchKeyword = "";
  const input = document.getElementById("searchInput");
  if (input) input.value = "";
  renderCategories();
  renderProducts();
}

// ================= PEMESANAN VIA WHATSAPP =================
export function submitToWhatsApp(event) {
  event.preventDefault();

  if (state.cart.length === 0) {
    showToast("Keranjang belanja masih kosong! Pilih produk dulu.", "⚠️");
    return;
  }

  const nameInput = document.getElementById("custName");
  const phoneInput = document.getElementById("custPhone");
  const addressInput = document.getElementById("custAddress");
  const notesInput = document.getElementById("custNotes");

  const name = nameInput ? nameInput.value.trim() : "";
  const phone = phoneInput ? phoneInput.value.trim() : "-";
  const address = addressInput ? addressInput.value.trim() : "";
  const notes = notesInput ? notesInput.value.trim() : "-";

  if (!name || !address) {
    showToast("Mohon lengkapi nama dan alamat pengiriman.", "⚠️");
    return;
  }

  // Kalkulasi total
  let totalBelanja = 0;
  let itemsText = "";

  state.cart.forEach((item, index) => {
    const subtotal = item.price * item.qty;
    totalBelanja += subtotal;
    itemsText += `${index + 1}. ${item.name} (${item.qty}x) = ${toRupiah(subtotal)}\n`;
  });

  // Susun Format Pesan WhatsApp yang rapi dan profesional
  let message = `*HALO ${CONFIG.storeName.toUpperCase()}, SAYA MAU PESAN SEMBAKO*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `👤 *Nama Pemesan:* ${name}\n`;
  if (phone && phone !== "-") {
    message += `📞 *No. Kontak:* ${phone}\n`;
  }
  message += `📍 *Alamat Pengantaran:* ${address}\n`;
  message += `📝 *Catatan Khusus:* ${notes || "-"}\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `🛒 *RINCIAN BELANJA (20 Pilihan Produk):*\n\n${itemsText}\n`;
  message += `💰 *TOTAL BELANJA:* *${toRupiah(totalBelanja)}*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `Mohon konfirmasi total tagihan + perkiraan ongkos kirim ke alamat saya ya. Terima kasih!`;

  const waUrl = `https://wa.me/${CONFIG.storePhone}?text=${encodeURIComponent(message)}`;

  // Tampilkan Modal Konfirmasi & Link Langsung
  showWhatsAppModal(message, waUrl);
}

function showWhatsAppModal(message, waUrl) {
  const modal = document.getElementById("waModal");
  const preview = document.getElementById("waPreviewText");
  const btnOpen = document.getElementById("waDirectBtn");

  if (preview) preview.textContent = message;
  if (btnOpen) {
    btnOpen.href = waUrl;
    btnOpen.onclick = () => {
      closeWhatsAppModal();
    };
  }

  if (modal) modal.classList.add("open");
}

export function closeWhatsAppModal() {
  const modal = document.getElementById("waModal");
  if (modal) modal.classList.remove("open");
}

export function copyOrderText() {
  const preview = document.getElementById("waPreviewText");
  if (!preview) return;

  navigator.clipboard.writeText(preview.textContent).then(() => {
    showToast("Teks pesanan berhasil disalin ke clipboard!", "📋");
  }).catch(() => {
    showToast("Gagal menyalin otomatis, silakan salin manual.", "⚠️");
  });
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ================= EXPOSE GLOBAL OBJECT =================
window.SembakoApp = {
  addToCart,
  changeQty,
  removeFromCart,
  clearCart,
  toggleCart,
  handleSearch,
  clearSearch,
  filterCategory,
  resetFilters,
  submitToWhatsApp,
  closeWhatsAppModal,
  copyOrderText
};

// ================= INISIALISASI =================
document.addEventListener("DOMContentLoaded", () => {
  renderCategories();
  renderProducts();
  updateCartUI();

  // Search input binding
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      handleSearch(e.target.value);
    });
  }

  // Order form binding
  const orderForm = document.getElementById("orderForm");
  if (orderForm) {
    orderForm.addEventListener("submit", submitToWhatsApp);
  }
});
