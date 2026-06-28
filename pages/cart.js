export default function Cart(){

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

return `

<h2>Your Cart</h2>

${cart.length===0

? "<p>Cart is Empty</p>"

:

cart.map(item=>`

<div class="card">
<h3>${item.name}</h3>
<p>₹${item.price}</p>
</div>

`).join("")

}

`;

}