"use strict";
// type guard can narrow down types at if statements
// typescript knows about JS's substring prototype.
function doSomething(x) {
    if (typeof x === "string") {
        console.log(x.substring(1));
        // typescript tells the user substing does not exist in string prototype
        console.log(x.substing(1));
    }
    // this throws an error because it is not guaranteed that x is string
    x.substring(1);
}
