function submitOrder(){


let order={


name:
document.getElementById("name").value,


discord:
document.getElementById("discord").value,


date:
new Date().toLocaleString()


};



let orders =
JSON.parse(localStorage.getItem("orders")) || [];



orders.push(order);



localStorage.setItem(
"orders",
JSON.stringify(orders)
);



localStorage.removeItem("cart");



alert("Order Submitted Successfully!");



window.location.href="index.html";


}