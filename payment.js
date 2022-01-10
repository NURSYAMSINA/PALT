"use strict";
console.log('hi');

document.addEventListener('DOMContentLoaded',function(){
 

document.getElementById('cart-hplus').addEventListener("submit",estimateTotal)
var btnEstimate = document.getElementById('btn-estimate');
btnEstimate.disabled = true

});

function estimateTotal(event){
    event.preventDefault();
    console.log("You submitted the form");
    let itemBook1 = document.getElementById("txt-q-book1").value;
    let itemBook2 = document.getElementById("txt-q-book2").value;
    let itemBook3 = document.getElementById("txt-q-book3").value;
    let itemBook4 = document.getElementById("txt-q-book4").value;
    let itemBook5 = document.getElementById("txt-q-book5").value;

    let shippingMethod = document.querySelector("[name = r_method]:checked").value;
    let totalQty = itemBook1 + itemBook2 + itemBook3 + itemBook4 + itemBook5;
    console.log(totalQty);

    let shippingCost;
    switch (shippingMethod){
        case "delivery":
            shippingCost = 4;
            break;
        case "pos":
            shippingCost = 12;
            break;
            default:
                shippingCost = 0;
                break;
    }

    let TotalShippingCost = shippingCost * totalQty
    
    let totalItemPrice = 35 * itemBook1 + 28 * itemBook2 + 50.80 * itemBook3 + 38.50 * itemBook4 + 45.60 * itemBook5 ;

    let results = document.getElementById("results");
    results.innerHTML = "Total price RM " + totalItemPrice;
    results.innerHTML += " Total Shipping " + TotalShippingCost
}