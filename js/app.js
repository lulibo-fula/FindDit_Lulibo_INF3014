// ================= CART STORAGE =================

// Retrieve existing cart from localStorage or create new array
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ================= ADD TO CART =================

function addToCart(service) {
  // Add selected service
  cart.push(service);

  // Save updated cart
  localStorage.setItem("cart", JSON.stringify(cart));

  // Feedback to user
  alert(service + " added to cart");
}

// ================= SCOUT CHATBOT =================

function scoutHelp() {
  let input = document.getElementById("scout-input").value.toLowerCase();

  // Basic keyword matching
  if (input.includes("plumber")) {
    alert("Top-rated plumbers near you are available!");
  } else if (input.includes("electrician")) {
    alert("Trusted electricians are available nearby!");
  } else {
    alert("Try searching for a service like plumbing or catering.");
  }
}

// ================= LOAD CART =================

if (document.getElementById("cart-list")) {
  let list = document.getElementById("cart-list");

  // Display each item
  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });

  // Static total (can be improved later)
  document.getElementById("total").textContent = "Total: R500 (estimate)";
}

// ================= CHECKOUT =================

function checkout() {
  alert("Booking confirmed!");

  // Clear cart after confirmation
  localStorage.removeItem("cart");
}