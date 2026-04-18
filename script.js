
let products = JSON.parse(localStorage.getItem("products")) || [];

let container =
document.getElementById("product-list");

function displayProducts(){

container.innerHTML = "";

products.forEach(p => {

container.innerHTML += `

<div class="product">

<img src="${p.image}">

<h3>${p.name}</h3>

<p class="price">

₹ ${p.price}

</p>

<button onclick="addToCart(${p.id})">

Add to Cart

</button>

</div>

`;

});

}

// function addToCart(id){

// let cart =
// JSON.parse(localStorage.getItem("cart")) || [];

// let product =
// products.find(p => p.id === id);

// cart.push(product);

// localStorage.setItem("cart",
// JSON.stringify(cart));

// alert("Added to Cart");

// }
displayProducts();
function addToCart(id){

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

let product =
products.find(p => p.id === id);

if(!product){

alert("Product not found");

return;

}

cart.push(product);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

updateCartCount();

alert("Added to Cart");

}


function updateCartCount(){

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

document.getElementById("cart-count").innerText =
cart.length;

}
// function displayProducts(){

// container.innerHTML = "";

// products.forEach(p => {

// container.innerHTML += `

// <div class="product"
// onclick="openProduct(${p.id})">

// <img src="${p.image}">

// <h3>${p.name}</h3>

// <p class="price">

// ₹ ${p.price}

// </p>

// <button onclick="addToCart(${p.id}); event.stopPropagation();">

// Add to Cart

// </button>

// </div>

// `;

// });

// }

updateCartCount();
function checkAdminLink(){

let isAdmin =
localStorage.getItem("isAdmin");

let adminLink =
document.getElementById("admin-link");

if(adminLink){

if(isAdmin !== "true"){

adminLink.style.display = "none";

}

}

}

checkAdminLink();
// Hero Slideshow

let slides =
document.querySelectorAll(".slide");

let index = 0;

function showSlides(){

slides.forEach(slide => {

slide.classList.remove("active");

});

index++;

if(index >= slides.length){

index = 0;

}

slides[index].classList.add("active");

}

// Auto slide every 3 seconds

setInterval(showSlides, 3000);