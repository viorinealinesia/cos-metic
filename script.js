/* =====================================================
   RIN'S COSMETIC — Premium Beauty & Body Care Edit v2
   20 Products • Welcome Screen • Social • More Features
   ===================================================== */

const html = document.documentElement;
const WA_NUMBER = "6281234567890";

const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("rins-theme") || "light";
html.dataset.theme = savedTheme;
function updateThemeIcon() {
  if (!themeToggle) return;
  themeToggle.innerHTML = html.dataset.theme === "dark" ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
}
updateThemeIcon();
if (themeToggle) {
  themeToggle.onclick = () => {
    html.dataset.theme = html.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("rins-theme", html.dataset.theme);
    updateThemeIcon();
  };
}

const products = [
  { id: "airy-fit-cushion", name: "Airy Fit Cushion", category: "Face Collection", price: 129000, image: "airy-fit-cushion.jpg", rating: 4.9, reviews: 94, badge: "BEST SELLER", desc: "Cushion ringan coverage natural, soft glow, breathable & nyaman seharian.", bestseller: true },
  { id: "brightening-serum", name: "Brightening Serum", category: "Skincare", price: 149000, image: "brightening-serum.jpg", rating: 4.8, reviews: 76, badge: null, desc: "Serum pencerah gentle, meratakan warna kulit & glowing. Cepat meresap.", bestseller: true },
  { id: "velvet-lip-tint", name: "Velvet Lip Tint", category: "Lips Collection", price: 89000, image: "velvet-lip-tint.jpg", rating: 5.0, reviews: 128, badge: "NEW", desc: "Lip tint velvet warna soft, tahan lama, ringan & tidak kering.", bestseller: true },
  { id: "blooming-blush", name: "Blooming Blush", category: "Face Collection", price: 99000, image: "blooming-blush.jpg", rating: 4.7, reviews: 63, badge: null, desc: "Blush soft pink mudah blend, rona natural, silky & tahan lama.", bestseller: false },
  { id: "daily-sunscreen", name: "Daily Sunscreen SPF 50", category: "Sun Care", price: 109000, image: "daily-sunscreen.jpg", rating: 4.6, reviews: 42, badge: null, desc: "Sunscreen harian ringan, no sticky, no white cast. Perlindungan optimal.", bestseller: false },
  { id: "hydrating-toner", name: "Hydrating Toner", category: "Skincare", price: 95000, image: "hydrating-toner.jpg", rating: 4.8, reviews: 58, badge: null, desc: "Toner pelembap yang menenangkan & menyiapkan kulit untuk step berikutnya.", bestseller: true },
  { id: "gentle-cleanser", name: "Gentle Foam Cleanser", category: "Skincare", price: 79000, image: "cleanser.jpg", rating: 4.7, reviews: 81, badge: "BEST SELLER", desc: "Pembersih wajah lembut, bersihkan kotoran tanpa membuat kulit kering.", bestseller: true },
  { id: "face-serum-pro", name: "Vitamin C Face Serum", category: "Skincare", price: 159000, image: "face-serum.jpg", rating: 4.9, reviews: 112, badge: "NEW", desc: "Serum Vitamin C untuk cerahkan & antioxidation. Tekstur ringan.", bestseller: true },
  { id: "moisturizer-soft", name: "Soft Moisturizer", category: "Skincare", price: 119000, image: "moisturizer.jpg", rating: 4.8, reviews: 67, badge: null, desc: "Pelembap ringan yang mengunci kelembapan sepanjang hari tanpa lengket.", bestseller: false },
  { id: "night-cream", name: "Night Repair Cream", category: "Skincare", price: 139000, image: "night-cream.jpg", rating: 4.7, reviews: 45, badge: null, desc: "Krim malam yang memperbaiki barrier kulit saat tidur. Tekstur creamy.", bestseller: false },
  { id: "eye-cream", name: "Bright Eye Cream", category: "Skincare", price: 99000, image: "eye-cream.jpg", rating: 4.6, reviews: 39, badge: null, desc: "Krim mata yang mengurangi look lelah & melembapkan area under eye.", bestseller: false },
  { id: "face-mask", name: "Clay Detox Mask", category: "Skincare", price: 89000, image: "face-mask.jpg", rating: 4.5, reviews: 52, badge: null, desc: "Masker clay yang menyerap minyak berlebih & membersihkan pori.", bestseller: false },
  { id: "sheet-mask", name: "Glow Sheet Mask", category: "Skincare", price: 35000, image: "sheet-mask.jpg", rating: 4.8, reviews: 201, badge: "BEST SELLER", desc: "Sheet mask single use untuk glow instant. Cocok pre-event.", bestseller: true },
  { id: "essence", name: "Hydra Essence", category: "Skincare", price: 125000, image: "essence.jpg", rating: 4.7, reviews: 48, badge: null, desc: "Essence ringan yang menghidrasi mendalam & menyiapkan kulit.", bestseller: false },
  { id: "green-toner", name: "Green Tea Toner", category: "Skincare", price: 85000, image: "green-toner.jpg", rating: 4.6, reviews: 33, badge: null, desc: "Toner green tea untuk menenangkan & mengurangi kemerahan.", bestseller: false },
  { id: "foundation", name: "Soft Matte Foundation", category: "Face Collection", price: 165000, image: "foundation.jpg", rating: 4.8, reviews: 71, badge: "NEW", desc: "Foundation soft matte coverage medium, natural finish, tahan lama.", bestseller: true },
  { id: "primer", name: "Blur Primer", category: "Face Collection", price: 98000, image: "primer.jpg", rating: 4.7, reviews: 55, badge: null, desc: "Primer yang menghaluskan tekstur & membuat makeup lebih awet.", bestseller: false },
  { id: "mascara", name: "Length Mascara", category: "Face Collection", price: 89000, image: "mascara.jpg", rating: 4.6, reviews: 44, badge: null, desc: "Mascara untuk bulu mata lebih panjang & lentik, tidak mudah luntur.", bestseller: false },
  { id: "lipstick", name: "Matte Lipstick", category: "Lips Collection", price: 95000, image: "lipstick.jpg", rating: 4.8, reviews: 89, badge: null, desc: "Lipstik matte warna elegant, nyaman di bibir & pigmented.", bestseller: true },
  { id: "lip-balm", name: "Nourish Lip Balm", category: "Lips Collection", price: 45000, image: "lip-balm.jpg", rating: 4.9, reviews: 156, badge: "BEST SELLER", desc: "Lip balm pelembap yang melembutkan bibir kering & cracked.", bestseller: true }
];

let cart = JSON.parse(localStorage.getItem("rins-cart") || "[]");
let wishlist = JSON.parse(localStorage.getItem("rins-wishlist") || "[]");
let likes = JSON.parse(localStorage.getItem("rins-likes") || "{}");
let comments = JSON.parse(localStorage.getItem("rins-comments") || "{}");
let discount = 0;
let currentProduct = null;
let currentCat = "all";
let currentSort = "default";

function rupiah(n) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);
}
function saveCart() { localStorage.setItem("rins-cart", JSON.stringify(cart)); }
function saveWishlist() { localStorage.setItem("rins-wishlist", JSON.stringify(wishlist)); }
function saveLikes() { localStorage.setItem("rins-likes", JSON.stringify(likes)); }
function saveComments() { localStorage.setItem("rins-comments", JSON.stringify(comments)); }
function toast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2400);
}
function subtotal() { return cart.reduce((s, x) => s + x.price * x.qty, 0); }

function closeWelcome() {
  const welcome = document.getElementById("welcomeSplash");
  if (!welcome) return;
  const dont = document.getElementById("welcomeDontShow");
  if (dont && dont.checked) localStorage.setItem("rins-welcome-hide", "1");
  welcome.classList.add("hide");
  document.body.style.overflow = "";
  sessionStorage.setItem("rins-welcome-seen", "1");
}

function initWelcome() {
  const welcome = document.getElementById("welcomeSplash");
  if (!welcome) return;
  // Already dismissed?
  if (localStorage.getItem("rins-welcome-hide") === "1" || sessionStorage.getItem("rins-welcome-seen")) {
    welcome.classList.add("hide");
    document.body.style.overflow = "";
    return;
  }
  welcome.classList.remove("hide");
  document.body.style.overflow = "hidden";

  const enterBtn = document.getElementById("welcomeEnter");
  if (enterBtn) {
    enterBtn.onclick = closeWelcome;
  }
  // Also allow click outside content / ESC
  welcome.addEventListener("click", (e) => {
    if (e.target === welcome || e.target.classList.contains("welcome-bg")) closeWelcome();
  });
  document.addEventListener("keydown", function escWelcome(e) {
    if (e.key === "Escape") {
      closeWelcome();
      document.removeEventListener("keydown", escWelcome);
    }
  });
}
// Expose for inline HTML backup
window.closeWelcome = closeWelcome;

function cardHTML(p) {
  const inWish = wishlist.includes(p.id);
  return `<article class="card" data-id="${p.id}">
    <div class="card-image">
      ${p.badge ? `<span class="badge ${p.badge === "NEW" ? "new" : ""}">${p.badge}</span>` : ""}
      <button class="heart ${inWish ? "active" : ""}" data-id="${p.id}" aria-label="Wishlist"><i class="fa-${inWish ? "solid" : "regular"} fa-heart"></i></button>
      <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='rins-cosmetic-collection.png'">
    </div>
    <div class="card-info">
      <small>${p.category}</small>
      <h3>${p.name}</h3>
      <div class="rating">${"★".repeat(Math.round(p.rating))}${"☆".repeat(5 - Math.round(p.rating))} <em>(${p.reviews})</em></div>
      <div class="price-row">
        <strong>${rupiah(p.price)}</strong>
        <button class="add" data-id="${p.id}" aria-label="Add to cart">+</button>
      </div>
    </div>
  </article>`;
}

function renderProducts(list = products) {
  const grid = document.getElementById("productGrid");
  const noRes = document.getElementById("noResults");
  if (!list.length) { grid.innerHTML = ""; noRes.hidden = false; return; }
  noRes.hidden = true;
  grid.innerHTML = list.map(p => cardHTML(p)).join("");
  bindCardEvents();
}

function renderBestsellers() {
  const list = products.filter(p => p.bestseller).slice(0, 8);
  document.getElementById("bestsellerGrid").innerHTML = list.map(p => cardHTML(p)).join("");
  bindCardEvents();
}

function bindCardEvents() {
  document.querySelectorAll(".card").forEach(card => {
    card.onclick = (e) => {
      if (e.target.closest(".heart") || e.target.closest(".add")) return;
      openProduct(card.dataset.id);
    };
  });
  document.querySelectorAll(".card .heart").forEach(btn => {
    btn.onclick = (e) => { e.stopPropagation(); toggleWishlist(btn.dataset.id); };
  });
  document.querySelectorAll(".card .add").forEach(btn => {
    btn.onclick = (e) => { e.stopPropagation(); addToCart(btn.dataset.id); };
  });
}

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentCat = btn.dataset.cat;
    applyFilters();
  };
});
document.getElementById("sortSelect").onchange = (e) => { currentSort = e.target.value; applyFilters(); };

function applyFilters() {
  let list = [...products];
  if (currentCat !== "all") list = list.filter(p => p.category === currentCat);
  if (currentSort === "price-asc") list.sort((a, b) => a.price - b.price);
  else if (currentSort === "price-desc") list.sort((a, b) => b.price - a.price);
  else if (currentSort === "name") list.sort((a, b) => a.name.localeCompare(b.name));
  else if (currentSort === "rating") list.sort((a, b) => b.rating - a.rating);
  renderProducts(list);
}

const searchOverlay = document.getElementById("searchOverlay");
const searchInput = document.getElementById("searchInput");
document.getElementById("searchToggle").onclick = () => { searchOverlay.classList.add("open"); searchInput.focus(); };
document.getElementById("closeSearch").onclick = () => searchOverlay.classList.remove("open");
searchOverlay.onclick = (e) => { if (e.target === searchOverlay) searchOverlay.classList.remove("open"); };

searchInput.oninput = () => {
  const q = searchInput.value.trim().toLowerCase();
  const results = document.getElementById("searchResults");
  if (!q) { results.innerHTML = ""; return; }
  const found = products.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
  results.innerHTML = found.length
    ? found.map(p => `<div class="search-item" data-id="${p.id}"><img src="${p.image}" alt="" onerror="this.src='rins-cosmetic-collection.png'"><div><strong>${p.name}</strong><span>${p.category} · ${rupiah(p.price)}</span></div></div>`).join("")
    : `<div class="search-item"><div><strong>Tidak ditemukan</strong><span>Coba kata kunci lain</span></div></div>`;
  results.querySelectorAll(".search-item[data-id]").forEach(item => {
    item.onclick = () => { searchOverlay.classList.remove("open"); openProduct(item.dataset.id); };
  });
};

function addToCart(id, qty = 1) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  const item = cart.find(x => x.id === id);
  if (item) item.qty += qty;
  else cart.push({ id: p.id, name: p.name, price: p.price, image: p.image, qty });
  saveCart(); renderCart();
  toast(`${p.name} ditambahkan ke bag ♡`);
}

function renderCart() {
  const count = cart.reduce((s, x) => s + x.qty, 0);
  document.getElementById("cartCount").textContent = count;
  const list = document.getElementById("cartList");
  if (!cart.length) list.innerHTML = '<p class="empty-state">Your bag is still empty ♡</p>';
  else {
    list.innerHTML = cart.map((x, i) => `
      <div class="cart-item">
        <img src="${x.image}" alt="${x.name}" onerror="this.src='rins-cosmetic-collection.png'">
        <div class="cart-item-info">
          <h4>${x.name}</h4><p>${rupiah(x.price)}</p>
          <div class="qty-controls">
            <button data-i="${i}" class="qty-minus">−</button><span>${x.qty}</span><button data-i="${i}" class="qty-plus">+</button>
          </div>
        </div>
        <button class="remove" data-i="${i}"><i class="fa-solid fa-trash"></i></button>
      </div>`).join("");
    list.querySelectorAll(".qty-minus").forEach(b => b.onclick = () => {
      if (cart[b.dataset.i].qty > 1) cart[b.dataset.i].qty--; else cart.splice(b.dataset.i, 1);
      saveCart(); renderCart();
    });
    list.querySelectorAll(".qty-plus").forEach(b => b.onclick = () => { cart[b.dataset.i].qty++; saveCart(); renderCart(); });
    list.querySelectorAll(".remove").forEach(b => b.onclick = () => { cart.splice(b.dataset.i, 1); saveCart(); renderCart(); });
  }
  const sub = subtotal();
  const disc = Math.round(sub * discount);
  document.getElementById("cartSubtotal").textContent = rupiah(sub);
  document.getElementById("cartDiscount").textContent = disc ? `-${rupiah(disc)}` : "-Rp0";
  document.getElementById("discountRow").hidden = !disc;
  document.getElementById("cartTotal").textContent = rupiah(sub - disc);
}

document.getElementById("openCart").onclick = () => {
  document.getElementById("cart").classList.add("open");
  document.getElementById("overlay").classList.add("show");
};
function closeCart() {
  document.getElementById("cart").classList.remove("open");
  document.getElementById("overlay").classList.remove("show");
}
document.getElementById("closeCart").onclick = closeCart;
document.getElementById("continueShopping").onclick = closeCart;
document.getElementById("overlay").onclick = () => {
  closeCart();
  document.getElementById("wishlist").classList.remove("open");
};

document.getElementById("applyVoucher").onclick = () => {
  const code = document.getElementById("voucherInput").value.trim().toUpperCase();
  if (code === "RINLOVE15") { discount = 0.15; toast("Voucher RINLOVE15 diterapkan! Diskon 15% ♡"); }
  else if (code === "RIN10") { discount = 0.10; toast("Voucher RIN10 diterapkan! Diskon 10% ♡"); }
  else if (code) { discount = 0; toast("Kode voucher tidak valid"); }
  renderCart();
};

document.getElementById("checkoutBtn").onclick = () => {
  if (!cart.length) { toast("Keranjang masih kosong ♡"); return; }
  const sub = subtotal();
  const disc = Math.round(sub * discount);
  const total = sub - disc;
  let msg = `Halo Rin's Cosmetic ✨\n\nSaya ingin order:\n\n`;
  cart.forEach(x => { msg += `• ${x.name} × ${x.qty} = ${rupiah(x.price * x.qty)}\n`; });
  msg += `\nSubtotal: ${rupiah(sub)}`;
  if (disc) msg += `\nDiskon: -${rupiah(disc)}`;
  msg += `\n*Total: ${rupiah(total)}*\n\nMohon konfirmasi ketersediaan & ongkir ya. Terima kasih! ♡`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  toast("Membuka WhatsApp...");
};

function toggleWishlist(id) {
  const idx = wishlist.indexOf(id);
  if (idx > -1) { wishlist.splice(idx, 1); toast("Dihapus dari wishlist"); }
  else { wishlist.push(id); toast("Ditambahkan ke wishlist ♡"); }
  saveWishlist(); updateWishlistUI(); applyFilters(); renderBestsellers();
}

function updateWishlistUI() {
  document.getElementById("wishlistCount").textContent = wishlist.length;
  const list = document.getElementById("wishlistList");
  if (!wishlist.length) { list.innerHTML = '<p class="empty-state">Wishlist kamu masih kosong ♡</p>'; return; }
  list.innerHTML = wishlist.map(id => {
    const p = products.find(x => x.id === id);
    if (!p) return "";
    return `<div class="wishlist-item">
      <img src="${p.image}" alt="${p.name}" onerror="this.src='rins-cosmetic-collection.png'">
      <div class="wishlist-item-info"><h4>${p.name}</h4><p>${rupiah(p.price)}</p></div>
      <div class="actions">
        <button class="w-add" data-id="${p.id}"><i class="fa-solid fa-bag-shopping"></i></button>
        <button class="w-remove" data-id="${p.id}"><i class="fa-solid fa-trash"></i></button>
      </div>
    </div>`;
  }).join("");
  list.querySelectorAll(".w-add").forEach(b => b.onclick = () => addToCart(b.dataset.id));
  list.querySelectorAll(".w-remove").forEach(b => b.onclick = () => toggleWishlist(b.dataset.id));
}

document.getElementById("openWishlist").onclick = () => {
  updateWishlistUI();
  document.getElementById("wishlist").classList.add("open");
  document.getElementById("overlay").classList.add("show");
};
document.getElementById("closeWishlist").onclick = () => {
  document.getElementById("wishlist").classList.remove("open");
  document.getElementById("overlay").classList.remove("show");
};

function openProduct(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  currentProduct = p;
  document.getElementById("detailImg").src = p.image;
  document.getElementById("detailImg").alt = p.name;
  document.getElementById("detailCat").textContent = p.category;
  document.getElementById("detailName").textContent = p.name;
  document.getElementById("detailStars").textContent = "★".repeat(Math.round(p.rating)) + "☆".repeat(5 - Math.round(p.rating));
  document.getElementById("detailReviews").textContent = `(${p.reviews})`;
  document.getElementById("detailPrice").textContent = rupiah(p.price);
  document.getElementById("detailDesc").textContent = p.desc;
  const badge = document.getElementById("detailBadge");
  if (p.badge) { badge.textContent = p.badge; badge.className = "badge" + (p.badge === "NEW" ? " new" : ""); badge.hidden = false; }
  else badge.hidden = true;
  const likeBtn = document.getElementById("detailLike");
  const likeCount = likes[p.id] || 0;
  const isLiked = localStorage.getItem(`rins-liked-${p.id}`) === "1";
  likeBtn.classList.toggle("liked", isLiked);
  likeBtn.innerHTML = `<i class="fa-${isLiked ? "solid" : "regular"} fa-heart"></i> <span id="likeCount">${likeCount}</span> likes`;
  const wBtn = document.getElementById("detailWishlist");
  wBtn.innerHTML = `<i class="fa-${wishlist.includes(p.id) ? "solid" : "regular"} fa-heart"></i>`;
  renderComments(p.id);
  document.getElementById("productModal").classList.add("open");
  document.body.style.overflow = "hidden";
}

document.getElementById("closeProductModal").onclick = closeProductModal;
document.getElementById("productModal").onclick = (e) => { if (e.target.id === "productModal") closeProductModal(); };
function closeProductModal() {
  document.getElementById("productModal").classList.remove("open");
  document.body.style.overflow = "";
  currentProduct = null;
}
document.getElementById("detailAddCart").onclick = () => { if (currentProduct) addToCart(currentProduct.id); };
document.getElementById("detailWishlist").onclick = () => {
  if (currentProduct) {
    toggleWishlist(currentProduct.id);
    document.getElementById("detailWishlist").innerHTML = `<i class="fa-${wishlist.includes(currentProduct.id) ? "solid" : "regular"} fa-heart"></i>`;
  }
};
document.getElementById("detailLike").onclick = () => {
  if (!currentProduct) return;
  const id = currentProduct.id;
  const key = `rins-liked-${id}`;
  let count = likes[id] || 0;
  if (localStorage.getItem(key) === "1") { localStorage.removeItem(key); count = Math.max(0, count - 1); document.getElementById("detailLike").classList.remove("liked"); }
  else { localStorage.setItem(key, "1"); count++; document.getElementById("detailLike").classList.add("liked"); }
  likes[id] = count; saveLikes();
  document.getElementById("detailLike").innerHTML = `<i class="fa-${localStorage.getItem(key) === "1" ? "solid" : "regular"} fa-heart"></i> <span id="likeCount">${count}</span> likes`;
};

function renderComments(id) {
  const list = comments[id] || [];
  const el = document.getElementById("commentsList");
  el.innerHTML = list.length
    ? list.map(c => `<div class="comment-item"><strong>${c.name}</strong><span>${c.text}</span></div>`).join("")
    : `<p style="font-size:13px;color:var(--muted)">Belum ada komentar. Jadilah yang pertama ✨</p>`;
}
document.getElementById("commentForm").onsubmit = (e) => {
  e.preventDefault();
  if (!currentProduct) return;
  const input = document.getElementById("commentInput");
  const text = input.value.trim();
  if (!text) return;
  if (!comments[currentProduct.id]) comments[currentProduct.id] = [];
  comments[currentProduct.id].push({ name: "Kamu", text });
  saveComments(); renderComments(currentProduct.id);
  input.value = ""; toast("Komentar ditambahkan ♡");
};

const questions = [
  { text: "Apa yang paling ingin kamu fokuskan?", answers: ["Kulit kusam & noda hitam", "Bibir lebih fresh", "Pipi lebih merona", "Base makeup yang ringan", "Perlindungan dari matahari", "Kulit kering / pelembap"] },
  { text: "Kamu paling suka hasil seperti apa?", answers: ["Natural & glowing", "Fresh & playful", "Soft pink", "Smooth & flawless", "Simple sehari-hari", "Melembapkan & nyaman"] },
  { text: "Produk apa yang paling sering kamu butuhkan?", answers: ["Skincare", "Lip product", "Blush / Face", "Complexion", "Sunscreen", "Body Care"] }
];
let qIndex = 0, selected = [];

document.getElementById("startQuiz").onclick = () => {
  qIndex = 0; selected = [];
  document.getElementById("quizIntro").hidden = true;
  document.getElementById("quizResult").hidden = true;
  document.getElementById("quizCard").hidden = false;
  showQuestion();
};
function showQuestion() {
  const q = questions[qIndex];
  document.getElementById("questionNumber").textContent = `Question ${qIndex + 1} of ${questions.length}`;
  document.getElementById("questionText").textContent = q.text;
  document.getElementById("progressBar").style.width = ((qIndex + 1) / questions.length * 100) + "%";
  const answersEl = document.getElementById("answers");
  answersEl.innerHTML = q.answers.map(a => `<button class="answer ${selected[qIndex] === a ? "selected" : ""}" data-answer="${a}">${a}</button>`).join("");
  answersEl.querySelectorAll(".answer").forEach(b => {
    b.onclick = () => {
      selected[qIndex] = b.dataset.answer;
      answersEl.querySelectorAll(".answer").forEach(x => x.classList.remove("selected"));
      b.classList.add("selected");
    };
  });
  document.getElementById("quizBack").disabled = qIndex === 0;
  document.getElementById("quizNext").textContent = qIndex === questions.length - 1 ? "See My Match ✨" : "Next →";
}
document.getElementById("quizBack").onclick = () => { if (qIndex > 0) { qIndex--; showQuestion(); } };
document.getElementById("quizNext").onclick = () => {
  if (!selected[qIndex]) { toast("Pilih satu jawaban dulu ya ♡"); return; }
  if (qIndex < questions.length - 1) { qIndex++; showQuestion(); } else showResult();
};
function showResult() {
  const text = selected.join(" ").toLowerCase();
  let p = products.find(x => x.id === "brightening-serum");
  if (text.includes("bibir") || text.includes("lip")) p = products.find(x => x.id === "velvet-lip-tint") || products.find(x => x.id === "lipstick");
  else if (text.includes("pipi") || text.includes("merona") || text.includes("blush")) p = products.find(x => x.id === "blooming-blush");
  else if (text.includes("base") || text.includes("complexion") || text.includes("flawless") || text.includes("ringan")) p = products.find(x => x.id === "airy-fit-cushion") || products.find(x => x.id === "foundation");
  else if (text.includes("matahari") || text.includes("sunscreen")) p = products.find(x => x.id === "daily-sunscreen");
  else if (text.includes("kering") || text.includes("pelembap") || text.includes("body")) p = products.find(x => x.id === "moisturizer-soft") || products.find(x => x.id === "hydrating-toner");
  document.getElementById("resultName").textContent = p.name;
  document.getElementById("resultDesc").textContent = p.desc;
  document.getElementById("resultImage").src = p.image;
  document.getElementById("resultAdd").onclick = () => addToCart(p.id);
  document.getElementById("quizCard").hidden = true;
  document.getElementById("quizResult").hidden = false;
}
document.getElementById("quizAgain").onclick = () => {
  document.getElementById("quizResult").hidden = true;
  document.getElementById("quizIntro").hidden = false;
};

// Routine step clicker (matches HTML structure)
function initRoutine() {
  const steps = document.querySelectorAll(".routine-step");
  const stepMap = {
    cleanse: "gentle-cleanser",
    treat: "brightening-serum",
    base: "airy-fit-cushion",
    color: "velvet-lip-tint",
    protect: "daily-sunscreen"
  };
  steps.forEach(btn => {
    btn.onclick = () => {
      steps.forEach(s => s.classList.remove("active"));
      btn.classList.add("active");
      const id = stepMap[btn.dataset.step] || "brightening-serum";
      const p = products.find(x => x.id === id);
      if (!p) return;
      const img = document.getElementById("routineImg");
      const name = document.getElementById("routineName");
      const desc = document.getElementById("routineDesc");
      const label = document.getElementById("routineStepLabel");
      if (img) img.src = p.image;
      if (name) name.textContent = p.name;
      if (desc) desc.textContent = p.desc;
      if (label) label.textContent = btn.querySelector("span")?.textContent || btn.dataset.step;
      const addBtn = document.getElementById("routineAdd");
      if (addBtn) addBtn.onclick = () => addToCart(p.id);
    };
  });
  // trigger first
  if (steps[0]) steps[0].click();
}


document.querySelectorAll(".faq-q").forEach(btn => {
  btn.onclick = () => {
    const item = btn.parentElement;
    const wasOpen = item.classList.contains("open");
    document.querySelectorAll(".faq-item").forEach(i => i.classList.remove("open"));
    if (!wasOpen) item.classList.add("open");
  };
});

document.getElementById("subscribeForm").onsubmit = (e) => {
  e.preventDefault();
  toast("Berhasil subscribe! Terima kasih ♡");
  e.target.reset();
};

document.getElementById("closePromo")?.addEventListener("click", () => {
  document.getElementById("promoBanner").style.display = "none";
});
document.getElementById("copyVoucher")?.addEventListener("click", () => {
  navigator.clipboard?.writeText("RINLOVE15").then(() => toast("Kode RINLOVE15 disalin!"));
});

document.getElementById("menuBtn").onclick = () => {
  document.getElementById("navLinks").classList.toggle("open");
};
document.querySelectorAll(".nav-link").forEach(link => {
  link.onclick = () => document.getElementById("navLinks").classList.remove("open");
});

window.addEventListener("scroll", () => {
  document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 20);
  let current = "";
  document.querySelectorAll("section[id]").forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  document.querySelectorAll(".nav-link").forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
  });
});

const waBtn = document.getElementById("floatingWa");
let isDragging = false, startX, startY, startLeft, startTop;
waBtn.addEventListener("pointerdown", (e) => {
  isDragging = true;
  waBtn.setPointerCapture(e.pointerId);
  const rect = waBtn.getBoundingClientRect();
  startX = e.clientX; startY = e.clientY;
  startLeft = rect.left; startTop = rect.top;
  waBtn.style.transition = "none";
});
waBtn.addEventListener("pointermove", (e) => {
  if (!isDragging) return;
  let newLeft = Math.max(8, Math.min(window.innerWidth - 64, startLeft + (e.clientX - startX)));
  let newTop = Math.max(8, Math.min(window.innerHeight - 64, startTop + (e.clientY - startY)));
  waBtn.style.left = newLeft + "px";
  waBtn.style.top = newTop + "px";
  waBtn.style.right = "auto";
  waBtn.style.bottom = "auto";
});
waBtn.addEventListener("pointerup", (e) => {
  if (!isDragging) return;
  isDragging = false;
  waBtn.style.transition = "";
  if (Math.abs(e.clientX - startX) < 8 && Math.abs(e.clientY - startY) < 8) {
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Halo Rin's Cosmetic! Saya ingin tanya tentang produk ✨")}`, "_blank");
  }
});

document.querySelectorAll("[data-social]").forEach(el => {
  el.onclick = (e) => {
    e.preventDefault();
    const type = el.dataset.social;
    const urls = { ig: "https://instagram.com/", tiktok: "https://tiktok.com/", wa: `https://wa.me/${WA_NUMBER}`, shopee: "https://shopee.co.id/", tokopedia: "https://www.tokopedia.com/" };
    if (urls[type]) window.open(urls[type], "_blank");
    else toast("Link sosmed segera hadir ✨");
  };
});

initWelcome();
renderProducts();
renderBestsellers();
renderCart();
updateWishlistUI();
initRoutine();
