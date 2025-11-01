// Load cart from localStorage
const cart = JSON.parse(localStorage.getItem("cart")) || [];

const summaryDiv = document.getElementById("order-summary");
let total = 0;

if (cart.length === 0) {
  summaryDiv.innerHTML = "<p>Your cart is empty.</p>";
} else {
  summaryDiv.innerHTML = "<ul>" + cart.map(item => {
    total += item.price * item.quantity;
    return `<li>${item.name} x ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}</li>`;
  }).join("") + "</ul><p><strong>Total: $" + total.toFixed(2) + "</strong></p>";
}

document.getElementById("checkout-form").addEventListener("submit", function(e) {
  e.preventDefault();

  // Capture user input
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const address = document.getElementById("address").value.trim();

  if (!name || !email || !address) {
    alert("Please fill all fields.");
    return;
  }

  // Simulate placing order
  alert(`Thank you for your purchase, ${name}!\nOrder placed successfully.`);

  // Clear cart
  localStorage.removeItem("cart");

  // Redirect to home
  window.location.href = "index.html";
});
