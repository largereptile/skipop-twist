// ==UserScript==
// @name        OP Skip
// @namespace   https://twist.moe
// @include     https://twist.moe/a/*
// @description Jumps ahead 90 seconds to skip anime openings
// @author      largereptile
// @version     1
// ==/UserScript==

var div = document.getElementsByClassName("controls")[0].children[0];
var but = document.createElement("button");
but.className = "strong";
but.id = "openingskip";
but.innerHTML = "Skip Op";

var toSkip = 89; // not 90 because i have poor reaction time

but.onclick = function skipOpening() {
    document.getElementsByClassName("AT-player")[0].children[0].currentTime += toSkip;
}
div.insertBefore(but, div.firstChild);
