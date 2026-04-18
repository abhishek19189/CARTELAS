// Admin Protection

let isAdmin =
localStorage.getItem("isAdmin");

if(isAdmin !== "true"){

alert("Access Denied ❌");

window.location.href = "index.html";

}


// Get Products

let products =
JSON.parse(localStorage.getItem("products")) || [];

// Get Orders

let orders =
JSON.parse(localStorage.getItem("orders")) || [];


// Total Products

document.getElementById("total-products").innerText =
products.length;


// Total Orders

document.getElementById("total-orders").innerText =
orders.length;


// Calculate Revenue

let revenue = 0;

orders.forEach(order => {

order.items.forEach(item => {

revenue += Number(item.price);

});

});

document.getElementById("total-revenue").innerText =
revenue;


// Navigation

function goProducts(){

window.location.href =
"admin.html";

}

function goOrders(){

window.location.href =
"orders.html";

}


// Logout

function logout(){

localStorage.removeItem("loggedUser");

localStorage.removeItem("isAdmin");

window.location.href =
"login.html";

}
// Display Recent Orders

let orderContainer =
document.getElementById("recent-orders-list");

function displayRecentOrders(){

if(!orderContainer) return;

orderContainer.innerHTML = "";

orders.forEach(order => {

order.items.forEach(item => {

orderContainer.innerHTML += `

<div class="order-card">

<img src="${item.image}"
class="order-img">

<div class="order-details">

<h3>${item.name}</h3>

<p>Price: ₹ ${item.price}</p>

<p><strong>Customer:</strong>
${order.customer}</p>

<p><strong>Address:</strong>
${order.address}</p>

<p><strong>Phone:</strong>
${order.phone}</p>

</div>

</div>

`;

});

});

}

displayRecentOrders();