let login =
localStorage.getItem("adminLoggedIn");



if(login !== "true"){


window.location.href="admin-login.html";


}



let orders =
JSON.parse(localStorage.getItem("orders")) || [];



let box =
document.getElementById("orders");




function loadOrders(){


box.innerHTML="";



if(orders.length === 0){


box.innerHTML=

`

<div class="card">

<h3>
No Orders Yet
</h3>

</div>

`;


return;


}




orders.forEach((order,index)=>{


let div =
document.createElement("div");


div.className="card";



div.innerHTML=

`

<h3>
Customer
</h3>


<p>
Name:
${order.name}
</p>



<p>
Discord:
${order.discord}
</p>



<p>
Date:
${order.date}
</p>




<button

class="delete-btn"

onclick="deleteOrder(${index})">

Remove 

</button>


`;



box.appendChild(div);



});



}





function deleteOrder(index){



orders.splice(index,1);



localStorage.setItem(

"orders",

JSON.stringify(orders)

);



loadOrders();



}





function back(){


window.location.href="index.html";


}





loadOrders();