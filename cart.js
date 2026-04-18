// Load cart from localStorage

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

let container =
document.getElementById("cart-items");

let total = 0;



// Display Cart Items

function displayCart(){

container.innerHTML = "";

total = 0;



// If cart empty

if(cart.length === 0){

container.innerHTML =
"<h3>Your cart is empty</h3>";

document.getElementById(
"cart-total"
).innerText = 0;

return;

}



// Show items

cart.forEach((item,index)=>{

container.innerHTML += `

<div class="cart-item">

<img src="${item.image}"
class="cart-img">

<div class="cart-details">

<h3>${item.name}</h3>

<p>
Price: ₹ ${item.price}
</p>

<button
onclick="removeItem(${index})">

Remove

</button>

</div>

</div>

`;

total += Number(item.price);

});



// Show total

document.getElementById(
"cart-total"
).innerText = total;

}



// Remove Item

function removeItem(index){

cart.splice(index,1);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

displayCart();

updateCartCount();

}



// Checkout

function goToCheckout(){

window.location.href =
"checkout.html";

}



// Update Cart Count

function updateCartCount(){

let cart =
JSON.parse(
localStorage.getItem("cart")
) || [];

let countElement =
document.getElementById(
"cart-count"
);

if(countElement){

countElement.innerText =
cart.length;

}

}



// Run functions

displayCart();

updateCartCount();