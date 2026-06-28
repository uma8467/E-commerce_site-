import { products } from "../data/products.js";

export default function Products(){

return `

<h2>Products</h2>

<div class="products">

${products.map(product=>`

<div class="card">

<img src="${product.image}" alt="${product.name}">

<h3>${product.name}</h3>

<p>₹${product.price}</p>

<button onclick="addToCart(${product.id})">
Add to Cart
</button>

</div>

`).join("")}

</div>

`;

}