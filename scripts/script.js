// JavaScript Document
// var achtergrond = document.querySelector('body main > img:first-of-type')

var deButton = document.querySelector("ol li:nth-of-type(1) button");
deButton.addEventListener("click", veranderen);

function veranderen() { 
    deButton.classList.toggle("veranderen");
    document.body.classList.toggle("detailstonen");

    var snoopy1 = document.querySelector('ol li:nth-of-type(1) button img')

    // achtergrond
    document.body.classList.toggle("snoopy1");

}

var deTweedeButton = document.querySelector("ol li:nth-of-type(2) button");
deTweedeButton.addEventListener("click", veranderen2);
function veranderen2() { 
    deTweedeButton.classList.toggle("veranderen");
    document.body.classList.toggle("detailstonen");

    // achtergrond
    // document.body.classList.toggle("snoopy2");

}

var deDerdeButton = document.querySelector("ol li:nth-of-type(3) button");
deDerdeButton.addEventListener("click", veranderen3);
function veranderen3() { 
    deDerdeButton.classList.toggle("veranderen");
    document.body.classList.toggle("detailstonen");

    // achtergrond
    document.body.classList.toggle("snoopy3");
}


var deVierdeButton = document.querySelector("ol li:nth-of-type(4) button");
deVierdeButton.addEventListener("click", veranderen4);
function veranderen4() { 
    deVierdeButton.classList.toggle("veranderen");
    document.body.classList.toggle("detailstonen");

    // achtergrond
    document.body.classList.toggle("snoopy4");
}