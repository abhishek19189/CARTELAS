// // // let orders = JSON.parse(localStorage.getItem("orders")) || [];

// // // let container = document.getElementById("orders-list");

// // // orders.forEach(order => {

// // // let itemsHTML = "";

// // // order.items.forEach(item => {

// // // itemsHTML += `

// // // <li>

// // // ${item.name} - ₹ ${item.price}

// // // </li>

// // // `;

// // // });

// // // container.innerHTML += `

// // // <div class="order-item">

// // // <h3>Customer: ${order.customer}</h3>

// // // <p>Address: ${order.address}</p>

// // // <p>Phone: ${order.phone}</p>

// // // <ul>

// // // ${itemsHTML}

// // // </ul>

// // // </div>

// // // `;

// // // });

// // // Load Orders

// // let orders =
// // JSON.parse(localStorage.getItem("orders")) || [];

// // let container =
// // document.getElementById("orders-list");



// // // Display Orders

// // function displayOrders(){

// // container.innerHTML = "";



// // // If no orders

// // if(orders.length === 0){

// // container.innerHTML =
// // "<h3>No orders placed yet</h3>";

// // return;

// // }



// // // Loop Orders

// // orders.forEach((order,index)=>{

// // let itemsHTML = "";



// // // Loop Items

// // order.items.forEach(item => {

// // itemsHTML += `

// // <li>

// // ${item.name}
// // - ₹ ${item.price}

// // </li>

// // `;

// // });



// // // Show Order Card

// // container.innerHTML += `

// // <div class="order-item">

// // <h3>
// // Order #${index + 1}
// // </h3>

// // <p>
// // Customer:
// // ${order.customer}
// // </p>

// // <p>
// // Address:
// // ${order.address}
// // </p>

// // <p>
// // Phone:
// // ${order.phone}
// // </p>

// // <p>
// // Items:
// // </p>

// // <ul>

// // ${itemsHTML}

// // </ul>

// // </div>

// // `;

// // });

// // }



// // // Update Cart Count

// // function updateCartCount(){

// // let cart =
// // JSON.parse(localStorage.getItem("cart")) || [];

// // let countElement =
// // document.getElementById("cart-count");

// // if(countElement){

// // countElement.innerText =
// // cart.length;

// // }

// // }



// // // Run Functions

// // displayOrders();

// // updateCartCount();

// let container =
// document.getElementById("orders-list");

// let orders =
// JSON.parse(localStorage.getItem("orders")) || [];

// function displayOrders(){

// container.innerHTML = "";

// // No orders
// if(orders.length === 0){

// container.innerHTML =
// "<h3>No orders placed yet</h3>";

// return;

// }

// // Loop orders
// orders.forEach((order,index)=>{

// let itemsHTML = "";

// // Safe check (important fix)
// if(order.items && order.items.length > 0){

// order.items.forEach(item => {

// itemsHTML += `

// <li>
// ${item.name} - ₹ ${item.price}
// </li>

// `;

// });

// }else{

// itemsHTML =
// "<li>No items found</li>";

// }

// // Show order
// container.innerHTML += `

// <div class="order-item">

// <h3>Order ${index+1}</h3>

// <p>
// <b>Customer:</b> ${order.customer}
// </p>

// <p>
// <b>Address:</b> ${order.address}
// </p>

// <p>
// <b>Phone:</b> ${order.phone}
// </p>

// <h4>Items:</h4>

// <ul>
// ${itemsHTML}
// </ul>

// </div>

// `;

// });

// }

// displayOrders();



let container =
document.getElementById("orders-list");

let orders =
JSON.parse(localStorage.getItem("orders")) || [];

function displayOrders(){

container.innerHTML = "";

// No orders
if(orders.length === 0){

container.innerHTML =
"<h3>No orders placed yet</h3>";

return;

}

// Loop orders
orders.forEach((order,index)=>{

let itemsHTML = "";

// Items loop
if(order.items && order.items.length > 0){

order.items.forEach(item => {

itemsHTML += `

<li class="order-product">

<img src="${item.image}"
class="order-img">

<div>

<h4>${item.name}</h4>

<p>₹ ${item.price}</p>

</div>

</li>

`;

});

}else{

itemsHTML =
"<li>No items found</li>";

}

// Show order
container.innerHTML += `

<div class="order-item">

<h3>Order ${index+1}</h3>

<p>
<b>Customer:</b> ${order.customer}
</p>

<p>
<b>Address:</b> ${order.address}
</p>

<p>
<b>Phone:</b> ${order.phone}
</p>

<h4>Items:</h4>

<ul class="order-list">
${itemsHTML}
</ul>

</div>

`;

});

}

displayOrders();