"use strict";
// INFER
// typescript infers x is number
var x = 3;
var Animal = /** @class */ (function () {
    function Animal() {
        this.isAlive = true;
    }
    return Animal;
}());
var Rhino = /** @class */ (function () {
    function Rhino() {
        this.type = 'animal';
    }
    return Rhino;
}());
var Elephant = /** @class */ (function () {
    function Elephant() {
        this.type = 'animal';
    }
    return Elephant;
}());
var Snake = /** @class */ (function () {
    function Snake() {
        this.type = 'animal';
    }
    return Snake;
}());
// this infers type
var zoo = [new Rhino(), new Elephant(), new Snake()];
// Contextual Typing
window.onmousedown = function (mouseEvent) {
    console.log(mouseEvent.button);
};
