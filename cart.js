let cart =
JSON.parse(localStorage.getItem("cart")) || [];



let box =
document.getElementById("cartBox");



function loadCart(){


box.innerHTML="";



if(cart.length===0){

box.innerHTML=
`
<div class="card">

<h3>
Your cart is empty
</h3>

</div>
`;

return;

}



cart.forEach((item,index)=>{


let div=document.createElement("div");


div.className="card";



div.innerHTML=`

<h3>
${item.name}
</h3>


<p>
Quantity:
${item.quantity}
</p>


<p>
Price:
$${item.price}
</p>


<p>
Total:
$${item.price * item.quantity}
</p>



<button 
class="delete-btn"
onclick="removeItem(${index})">

🗑 Remove

</button>


`;



box.appendChild(div);



});


}




function removeItem(index){


cart.splice(index,1);



localStorage.setItem(
"cart",
JSON.stringify(cart)
);



loadCart();

}




function checkout(){


window.location.href="checkout.html";


}



loadCart();