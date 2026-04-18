// Protect Admin Page

let isAdmin =
localStorage.getItem("isAdmin");

if(isAdmin !== "true"){

alert("Access Denied ❌");

window.location.href = "index.html";

}
let products = JSON.parse(localStorage.getItem("products")) || [

{
id:1,
name:"Luxury Sofa",
price:25000,
image:"https://images.unsplash.com/photo-1582582429416-4b6d3b3c1b07"
},

{
id:2,
name:"Wireless Headphones",
price:3000,
image:"https://images.unsplash.com/photo-1567016526105-22da7c13b9a8"
},

{
id:3,
name:"Smart Watch",
price:4500,
image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30"
}

];

function displayProducts(){

let container =
document.getElementById("admin-product-list");

container.innerHTML = "";

products.forEach((p,index)=>{

container.innerHTML += `

<div class="product">

<img src="${p.image}">

<h3>${p.name}</h3>

<p class="price">
₹ ${p.price}
</p>

<button onclick="deleteProduct(${index})">

Delete

</button>

</div>

`;

});

localStorage.setItem("products",
JSON.stringify(products));

}

function addProduct(){

let name =
document.getElementById("pname").value;

let price =
document.getElementById("pprice").value;

let image =
document.getElementById("pimage").value;

if(name=="" || price=="" || image==""){

alert("Fill all fields");

return;

}

let newProduct = {

id: Date.now(),
name:name,
price:price,
image:image

};

products.push(newProduct);

localStorage.setItem("products",
JSON.stringify(products));

displayProducts();

}

function deleteProduct(index){

products.splice(index,1);

localStorage.setItem("products",
JSON.stringify(products));

displayProducts();

}

displayProducts();