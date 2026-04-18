// Admin credentials (fixed)

let adminEmail = "admin@gmail.com";
let adminPassword = "12345";
function signup() {

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

let user = {
name,
email,
password
};

localStorage.setItem(email, JSON.stringify(user));

alert("Signup Successful");

window.location.href = "login.html";

}
function login(){

let email =
document.getElementById("email").value;

let password =
document.getElementById("password").value;

// Admin Login Check

// Admin Login

if(email === adminEmail &&
password === adminPassword){

localStorage.setItem("isAdmin","true");

localStorage.setItem("loggedUser",email);

alert("Admin Login Successful");

window.location.href =
"admin-dashboard.html";

return;

}

// Normal User Login

let user =
JSON.parse(localStorage.getItem(email));

if(user && user.password === password){

localStorage.setItem("loggedUser", email);

localStorage.setItem("isAdmin","false");

alert("User Login Successful");

window.location.href = "index.html";

}
else{

alert("Invalid Credentials");

}

}