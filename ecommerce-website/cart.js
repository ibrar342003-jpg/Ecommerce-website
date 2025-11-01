let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartDisplay() {
  const cartTable = document.getElementById("cart-items");
  const totalPriceElem = document.getElementById("total-price");
  cartTable.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const subtotal = item.price * item.quantity;
    total += subtotal;

    cartTable.innerHTML += `
      <tr>
        <td>${item.name}</td>
        <td>$${item.price.toFixed(2)}</td>
        <td>
          <input type="number" value="${item.quantity}" min="1" onchange="changeQty(${index}, this.value)" />
        </td>
        <td>$${subtotal.toFixed(2)}</td>
        <td><button onclick="removeItem(${index})">❌</button></td>
      </tr>
    `;
  });

  totalPriceElem.textContent = total.toFixed(2);
}

function changeQty(index, newQty) {
  cart[index].quantity = parseInt(newQty);
  saveCart();
  updateCartDisplay();
}

function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
  updateCartDisplay();
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// On page load
updateCartDisplay();
