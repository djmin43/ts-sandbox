"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sayShoes = void 0;
var BalletFlat = /** @class */ (function () {
    function BalletFlat() {
        this.purpose = "dancing";
    }
    return BalletFlat;
}());
var RunningShoes = /** @class */ (function () {
    function RunningShoes() {
        this.purpose = "running";
    }
    return RunningShoes;
}());
var Boot = /** @class */ (function () {
    function Boot() {
        this.purpose = "woodcutting";
    }
    return Boot;
}());
var Sneaker = /** @class */ (function () {
    function Sneaker() {
        this.purpose = "walking";
    }
    return Sneaker;
}());
var Shoe = {
    create: function (type) {
        switch (type) {
            case "balletFlat":
                return new BalletFlat();
            case "boot":
                return new Boot();
            case "sneaker":
                return new Sneaker();
            case "runner":
                return new RunningShoes();
        }
    },
};
var sayShoes = function () {
    var ballet = Shoe.create("balletFlat").purpose;
    console.log(ballet);
};
exports.sayShoes = sayShoes;
