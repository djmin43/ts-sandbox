"use strict";
setTimeout(function () { return console.info("A"); }, 1);
setTimeout(function () { return console.info("B"); }, 2);
console.info("C");
setTimeout(function () { return console.info("D"); }, 1);
setTimeout(function () { return console.info("E"); }, 2);
