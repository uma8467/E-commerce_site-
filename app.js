import Home from "./pages/home.js";
import Products from "./pages/products.js";
import Cart from "./pages/cart.js";
import About from "./pages/about.js";
import { products } from "./data/products.js";

const routes = {
    "/": Home,
    "/products": Products,
    "/cart": Cart,
    "/about": About
};

function router(){

    const path =
    location.hash.slice(1) || "/";

    const page =
    routes[path] || Home;

    document.getElementById("app")
    .innerHTML = page();
}

window.addEventListener("hashchange",router);
window.addEventListener("load",router);

window.addToCart = function(id){

    const product =
    products.find(p=>p.id===id);

    let cart =
    JSON.parse(localStorage.getItem("cart"))
    || [];

    cart.push(product);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert("Product Added to Cart");
}