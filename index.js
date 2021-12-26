"use strict";
var overLoadFunctionOne = function (stringValue, numberValue) {
    if (numberValue === void 0) { numberValue = 3; }
    console.log(numberValue);
    console.log(stringValue);
    return stringValue;
};
overLoadFunctionOne("hello", 2);
