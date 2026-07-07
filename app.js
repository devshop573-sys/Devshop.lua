console.log("Marketplace JS Loaded");

window.addToCart = function(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (!cart) {
        cart = [];
    }

    cart.push({
        name: name,
        price: Number(price)
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart!");

    console.log(localStorage.getItem("cart"));
};