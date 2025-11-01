// Product list
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    image: "images/product1.jpg",
    price: 99.00,
    description: "High-quality wireless headphones with noise cancellation."
  },
  {
    id: 2,
    name: "Smart Watch",
    image: "images/product2.jpg",
    price: 149.00,
    description: "Feature-rich smart watch with fitness tracking and heart rate monitor."
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    image: "images/product3.jpg",
    price: 59.00,
    description: "Portable Bluetooth speaker with deep bass and 10-hour battery life."
  }
];

// View button → go to product detail
function viewProductById(id) {
  const selected = products.find(p => p.id === id);
  if (selected) {
    localStorage.setItem("selectedProduct", JSON.stringify(selected));
    window.location.href = "product.html";
  }
}

// Add to Cart button → no redirect
function addToCartById(id) {
  const selected = products.find(p => p.id === id);
  if (!selected) return alert("Product not found!");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find(item => item.id === selected.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...selected, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${selected.name} added to cart!`);
}


function addToCart(productName, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingItem = cart.find(item => item.name === productName);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name: productName, price, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${productName} added to cart!`);
}

  function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
  }

function viewProduct(name, image, price, description) {
  const product = { name, image, price, description };
  localStorage.setItem("selectedProduct", JSON.stringify(product));
  window.location.href = "product.html";
}

