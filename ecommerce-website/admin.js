let products = JSON.parse(localStorage.getItem("products")) || [];

const form = document.getElementById("adminForm");
const nameInput = document.getElementById("productName");
const imageInput = document.getElementById("productImage");
const priceInput = document.getElementById("productPrice");
const descInput = document.getElementById("productDescription");
const productList = document.getElementById("productList");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const product = {
    id: Date.now(),
    name: nameInput.value.trim(),
    image: imageInput.value.trim(),
    price: parseFloat(priceInput.value),
    description: descInput.value.trim(),
  };

  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));
  renderProducts();
  form.reset();
});

function renderProducts() {
  productList.innerHTML = "";

  if (products.length === 0) {
    productList.innerHTML = "<p>No products found.</p>";
    return;
  }

  products.forEach((p, index) => {
    const card = document.createElement("div");
    card.className = "admin-product-card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <p>${p.description}</p>
      <button onclick="deleteProduct(${p.id})">Delete</button>
    `;
    productList.appendChild(card);
  });
}

function deleteProduct(id) {
  products = products.filter(p => p.id !== id);
  localStorage.setItem("products", JSON.stringify(products));
  renderProducts();
}

renderProducts();
