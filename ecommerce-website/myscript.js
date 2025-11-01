// ============================
// Homepage Product Loader
// ============================

// Load product data from localStorage
const products = JSON.parse(localStorage.getItem("products")) || [];

// Load and display all products dynamically
function renderProductGrid() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  if (products.length === 0) {
    grid.innerHTML = "<p>No products available yet.</p>";
    return;
  }

  grid.innerHTML = ""; // Clear existing content

  products.forEach((p) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>$${p.price.toFixed(2)}</p>
      <div class="card-buttons">
        <button onclick="viewProductById(${p.id})">View</button>
        <button onclick="addToCartById(${p.id})">Add to Cart</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// View product → go to product.html with info
function viewProductById(id) {
  const product = products.find(p => p.id === id);
  if (product) {
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    window.location.href = "product.html";
  }
}

// Add product to cart (no redirect)
function addToCartById(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart`);
}

// Auto-run when homepage loads
document.addEventListener("DOMContentLoaded", renderProductGrid);
