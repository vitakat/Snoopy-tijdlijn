// JavaScript Document

// var deButton = document.querySelector("ul li:nth-of-type(1) img");
// deButton.addEventListener("click", verplaatsen)
// function verplaatsen() {
// deButton.classList.toggle("snoopys");
// }
var deButton = document.querySelector("ol li:nth-of-type(1) button");

deButton.addEventListener("click", veranderen);

function veranderen() { 
    deButton.classList.toggle("veranderen");
}

var deTweedeButton = document.querySelector("ol li:nth-of-type(2) button");
deTweedeButton.addEventListener("click", veranderen2);
function veranderen2() { 
    deTweedeButton.classList.toggle("Geklikt");
}