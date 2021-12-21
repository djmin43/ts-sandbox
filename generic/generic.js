"use strict";
var myName = "jay";
var count = 5;
var getNameOne = function (myName, count) {
    return myName;
};
var getNameTwo = function (value) {
    return value;
};
var getNameThree = function (value) {
    return value;
};
var mapNames = function (array, f) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        result[i] = f(array(i));
    }
    return result;
};
getNameOne(myName, count);
