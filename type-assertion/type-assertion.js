"use strict";
// 1. Type Assertion
// One note to consider -> a type should on be asserted by its super-type or sub-type
// for example, number cannot assert string
function formatInput(input) {
    return input;
}
function getUserInput() {
    return 'user';
}
var input = getUserInput();
formatInput(input);
formatInput(input);
// same as 'as'
// this is not recommended to avoid confusion with TSX syntax.
formatInput(input);
function closeDialog(dialog) {
    if (!('id' in dialog)) {
        return;
    }
    setTimeout(function () {
        return removeFromDOM(dialog, document.getElementById(dialog.id));
    });
}
function removeFromDOM(dialog, element) {
    element.parentNode.removeChild(element);
    delete dialog.id;
}
var userId = 'austin lee';
userId.toUpperCase();
userId.toString();
