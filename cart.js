function getCart() {
  const stored = localStorage.getItem("veenu_shop_cart");
  return stored ? JSON.parse(stored) : [];
}

function saveCart(cart) {
  localStorage.setItem("veenu_shop_cart", JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(productId, quantity) {
  quantity = quantity || 1;
  const cart = getCart();
  const existing = cart.find(function (item) { return item.id === productId; });

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ id: productId, quantity: quantity });
  }
  saveCart(cart);
  showToast("Added to cart!");
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(function (item) { return item.id !== productId; });
  saveCart(cart);
}

function updateQuantity(productId, newQuantity) {
  const cart = getCart();
  const item = cart.find(function (i) { return i.id === productId; });
  if (item) {
    item.quantity = Math.max(1, newQuantity);
    saveCart(cart);
  }
}

function getCartCount() {
  return getCart().reduce(function (sum, item) { return sum + item.quantity; }, 0);
}

function getCartTotal() {
  const cart = getCart();
  return cart.reduce(function (sum, item) {
    const product = getProductById(item.id);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);
}

function updateCartBadge() {
  const badge = document.getElementById("cartBadge");
  if (badge) {
    const count = getCartCount();
    badge.textContent = count;
    badge.style.display = count > 0 ? "flex" : "none";
    badge.classList.remove("bump");
    void badge.offsetWidth;
    badge.classList.add("bump");
  }
}

function showToast(message) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(function () { toast.classList.remove("show"); }, 2000);
}

function ensureQuickViewModal() {
  if (document.getElementById("quickViewOverlay")) return;
  const modal = document.createElement("div");
  modal.id = "quickViewOverlay";
  modal.className = "modal-overlay quick-view-overlay";
  modal.innerHTML =
    '<div class="modal-box quick-view-box">' +
      '<button id="quickViewClose" class="qv-close">✕</button>' +
      '<div id="quickViewContent" class="quick-view-content"></div>' +
    '</div>';
  document.body.appendChild(modal);

  document.getElementById("quickViewClose").addEventListener("click", closeQuickView);
  modal.addEventListener("click", function (e) {
    if (e.target === modal) closeQuickView();
  });
}

function openQuickView(id) {
  ensureQuickViewModal();
  const p = getProductById(id);
  if (!p) return;

  const content = document.getElementById("quickViewContent");
  content.innerHTML =
    '<img src="' + p.image + '" alt="' + p.name + '">' +
    '<div class="qv-info">' +
      '<p class="product-category">' + p.category + '</p>' +
      '<h3>' + p.name + '</h3>' +
      '<p class="product-rating">⭐ ' + p.rating + '</p>' +
      '<p class="product-detail-price">₹' + p.price + '</p>' +
      '<p class="product-detail-desc">' + p.description + '</p>' +
      '<div class="qv-actions">' +
        '<button class="btn-primary qv-add-btn" data-id="' + p.id + '">Add to Cart</button>' +
        '<a href="product.html?id=' + p.id + '" class="btn-outline">Full Details</a>' +
      '</div>' +
    '</div>';

  document.getElementById("quickViewOverlay").classList.add("show");

  content.querySelector(".qv-add-btn").addEventListener("click", function () {
    addToCart(p.id, 1);
    closeQuickView();
  });
}

function closeQuickView() {
  const modal = document.getElementById("quickViewOverlay");
  if (modal) modal.classList.remove("show");
}

document.addEventListener("DOMContentLoaded", updateCartBadge);
