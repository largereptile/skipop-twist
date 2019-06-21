// ==UserScript==
// @name        OP Skip
// @namespace   https://twist.moe
// @include     https://twist.moe/a/*
// @description Jumps ahead 90 seconds to skip anime openings
// @author      largereptile
// @version     1
// ==/UserScript==

var toSkip = 89; // not 90 because i have poor reaction time

function addButton() {
    var div = document.getElementsByClassName("controls")[0].children[0];
  
	  var but = document.createElement("button");
    but.className = "strong";
    but.id = "openingskip";
    but.innerHTML = "Skip Op";

    but.onclick = function skipOpening() {
        document.getElementsByClassName("AT-player")[0].children[0].currentTime += toSkip;
        var x = document.getElementById("openingskip");
        x.parentNode.removeChild(x);
    }
    
    div.insertBefore(but, div.firstChild);
}

addButton();

var buttons = document.querySelectorAll('[role="button"]'); 

for (var i = 0; i < buttons.length; i++) {
  
    buttons[i].addEventListener("click", addButton);
  
}

document.querySelector(".countdown > button:first-of-type").addEventListener("click", addButton);
