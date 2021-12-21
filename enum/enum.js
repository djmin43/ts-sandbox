"use strict";
var person = {
    hands: 2,
    legs: 2,
    head: 1,
};
var Person;
(function (Person) {
    Person[Person["hands"] = 2] = "hands";
    Person[Person["legs"] = 2] = "legs";
    Person[Person["head"] = 1] = "head";
})(Person || (Person = {}));
