function placeOrder(){

let name =
document.getElementById("name").value;

let address =
document.getElementById("address").value;

let phone =
document.getElementById("phone").value;

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

// Validation

if(!name || !address || !phone){

alert("Please fill all details");
return;

}

if(cart.length === 0){

alert("Cart is empty");
return;

}

// Load orders

let orders =
JSON.parse(localStorage.getItem("orders")) || [];

// Create order

let newOrder = {

customer: name,
address: address,
phone: phone,

// ⭐ MOST IMPORTANT
items: cart

};

// Save

orders.push(newOrder);

localStorage.setItem(
"orders",
JSON.stringify(orders)
);

// Clear cart

localStorage.removeItem("cart");

alert("Order placed successfully!");

window.location.href =
"orders.html";

}