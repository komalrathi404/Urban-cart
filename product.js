const PRODUCTS = [
  { id: 1, name: "Wireless Headphones", category: "Electronics", price: 2499, rating: 4.5, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80&fit=crop", description: "Over-ear wireless headphones with noise cancellation and 30-hour battery life.", tags: "headphones audio wireless bluetooth music" },
  { id: 2, name: "Smart Watch", category: "Electronics", price: 3999, rating: 4.2, image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80&fit=crop", description: "Fitness tracking smart watch with heart-rate monitor and sleep tracking.", tags: "watch fitness tracker smart wearable" },
  { id: 3, name: "Bluetooth Speaker", category: "Electronics", price: 1799, rating: 4.0, image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500&q=80&fit=crop", description: "Portable Bluetooth speaker with rich bass and 12-hour playtime.", tags: "speaker audio bluetooth portable music" },
  { id: 4, name: "Wireless Mouse", category: "Electronics", price: 899, rating: 4.3, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80&fit=crop", description: "Ergonomic wireless mouse with silent clicks and long battery life.", tags: "mouse computer accessory wireless" },
  { id: 5, name: "Mechanical Keyboard", category: "Electronics", price: 3299, rating: 4.6, image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80&fit=crop", description: "RGB backlit mechanical keyboard with tactile switches.", tags: "keyboard computer accessory rgb typing" },
  { id: 6, name: "Cotton T-Shirt", category: "Fashion", price: 599, rating: 4.3, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80&fit=crop", description: "100% breathable cotton t-shirt, available in multiple colors.", tags: "shirt clothing casual cotton" },
  { id: 7, name: "Denim Jacket", category: "Fashion", price: 1999, rating: 4.6, image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=500&q=80&fit=crop", description: "Classic denim jacket, durable and stylish for all seasons.", tags: "jacket denim clothing outerwear" },
  { id: 8, name: "Running Shoes", category: "Fashion", price: 2799, rating: 4.4, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80&fit=crop", description: "Lightweight running shoes with breathable mesh and cushioned sole.", tags: "shoes footwear running sports" },
  { id: 9, name: "Leather Wallet", category: "Fashion", price: 799, rating: 4.5, image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80&fit=crop", description: "Genuine leather bifold wallet with multiple card slots.", tags: "wallet leather accessory" },
  { id: 10, name: "Sunglasses", category: "Fashion", price: 1299, rating: 4.2, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80&fit=crop", description: "UV-protected polarized sunglasses with a classic frame.", tags: "sunglasses eyewear accessory summer" },
  { id: 11, name: "Ceramic Mug Set", category: "Home", price: 699, rating: 4.4, image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&q=80&fit=crop", description: "Set of 2 handcrafted ceramic mugs, microwave safe.", tags: "mug kitchen home ceramic" },
  { id: 12, name: "Table Lamp", category: "Home", price: 1499, rating: 4.3, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80&fit=crop", description: "Warm-light table lamp with adjustable brightness.", tags: "lamp lighting home decor" },
  { id: 13, name: "Throw Pillow Cover", category: "Home", price: 449, rating: 4.1, image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500&q=80&fit=crop", description: "Soft woven cushion cover, fits standard 16x16 inserts.", tags: "pillow cushion home decor" },
  { id: 14, name: "Indoor Plant Pot", category: "Home", price: 549, rating: 4.6, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&q=80&fit=crop", description: "Minimalist ceramic pot, perfect for succulents and small plants.", tags: "plant pot home decor garden" },
  { id: 15, name: "Vitamin C Serum", category: "Beauty", price: 599, rating: 4.5, image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&q=80&fit=crop", description: "Brightening face serum with vitamin C and hyaluronic acid.", tags: "serum skincare beauty face" },
  { id: 16, name: "Matte Lipstick", category: "Beauty", price: 399, rating: 4.3, image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&q=80&fit=crop", description: "Long-lasting matte lipstick in a rich shade.", tags: "lipstick makeup beauty cosmetics" },
  { id: 17, name: "Hair Dryer", category: "Beauty", price: 1899, rating: 4.4, image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=500&q=80&fit=crop", description: "Fast-drying hair dryer with multiple heat settings.", tags: "hair dryer beauty appliance" },
  { id: 18, name: "Mastering JavaScript Essentials", category: "Books", price: 499, rating: 4.7, image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=500&q=80&fit=crop", description: "A practical guide to writing clean, effective JavaScript.", tags: "book javascript programming coding" },
  { id: 19, name: "The Art of Clean Code", category: "Books", price: 649, rating: 4.8, image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500&q=80&fit=crop", description: "A handbook of good software craftsmanship practices.", tags: "book programming coding software" },
  { id: 20, name: "The Habit Blueprint", category: "Books", price: 399, rating: 4.9, image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=500&q=80&fit=crop", description: "A practical guide to building lasting habits and breaking unproductive patterns.", tags: "book self-help habits productivity" },
  { id: 21, name: "Design Thinking Basics", category: "Books", price: 549, rating: 4.5, image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=500&q=80&fit=crop", description: "An introduction to solving problems through user-centered design.", tags: "book design ux thinking" },
  { id: 22, name: "Yoga Mat", category: "Sports", price: 899, rating: 4.6, image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&q=80&fit=crop", description: "Non-slip yoga mat with extra cushioning for comfort.", tags: "yoga mat fitness sports exercise" },
  { id: 23, name: "Adjustable Dumbbells", category: "Sports", price: 2999, rating: 4.4, image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&q=80&fit=crop", description: "Space-saving adjustable dumbbells for home workouts.", tags: "dumbbell fitness gym weights" },
  { id: 24, name: "Water Bottle", category: "Sports", price: 349, rating: 4.3, image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80&fit=crop", description: "Insulated stainless steel bottle, keeps drinks cold for 24 hours.", tags: "bottle water fitness sports" }
];

const CATEGORIES = ["Electronics", "Fashion", "Home", "Beauty", "Books", "Sports"];

function getProductById(id) {
  return PRODUCTS.find(function (p) { return p.id === parseInt(id); });
}

function searchProducts(query) {
  const q = query.toLowerCase().trim();
  if (q === "") return PRODUCTS;
  return PRODUCTS.filter(function (p) {
    return p.name.toLowerCase().includes(q) ||
           p.category.toLowerCase().includes(q) ||
           (p.tags && p.tags.toLowerCase().includes(q));
  });
}

function renderProductCard(p) {
  return '<div class="product-card reveal">' +
    '<div class="product-img-wrap">' +
      '<a href="product.html?id=' + p.id + '"><img src="' + p.image + '" alt="' + p.name + '" loading="lazy"></a>' +
      '<button class="quick-view-btn" data-id="' + p.id + '">Quick View</button>' +
    '</div>' +
    '<div class="product-card-body">' +
      '<p class="product-category">' + p.category + '</p>' +
      '<h3>' + p.name + '</h3>' +
      '<p class="product-price">₹' + p.price + '</p>' +
      '<p class="product-rating">⭐ ' + p.rating + '</p>' +
      '<div class="card-actions">' +
        '<a href="product.html?id=' + p.id + '" class="btn-outline">View</a>' +
        '<button class="btn-primary add-btn" data-id="' + p.id + '">Add to Cart</button>' +
      '</div>' +
    '</div>' +
  '</div>';
}

function attachAddToCartHandlers() {
  document.querySelectorAll(".add-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const id = parseInt(btn.getAttribute("data-id"));
      addToCart(id, 1);
    });
  });
  document.querySelectorAll(".quick-view-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      openQuickView(parseInt(btn.getAttribute("data-id")));
    });
  });
}

function renderSkeletons(container, count) {
  let html = "";
  for (let i = 0; i < count; i++) {
    html += '<div class="skeleton-card">' +
      '<div class="skeleton-img"></div>' +
      '<div class="skeleton-line"></div>' +
      '<div class="skeleton-line short"></div>' +
      '<div class="skeleton-line"></div>' +
    '</div>';
  }
  container.innerHTML = html;
}
