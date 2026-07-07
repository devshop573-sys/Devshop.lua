console.log("Marketplace Loaded");


function addToCart(name,price,id){


let quantity =
Number(document.getElementById(id).value);



if(quantity < 1){

alert("Invalid quantity");

return;

}



let cart =
JSON.parse(localStorage.getItem("cart")) || [];



cart.push({

name:name,

price:price,

quantity:quantity

});



localStorage.setItem(
"cart",
JSON.stringify(cart)
);



alert(
name + " x" + quantity + " added!"
);


}