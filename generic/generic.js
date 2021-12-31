"use strict";
var arrayify = function (value) { return [value]; };
var arrayFunctionerOne = function (value) {
    return [value];
};
var arrayFunctionerThree = function (value) {
    return value;
};
var arrayFunctionerTwo = function (value) {
    return [value];
};
var genericAliasObject = {
    target: 111,
    name: 'generic',
};
