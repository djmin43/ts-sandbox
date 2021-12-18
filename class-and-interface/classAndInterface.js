"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testerFunction = void 0;
var StringDatabase = /** @class */ (function () {
    function StringDatabase() {
        this.state = {};
    }
    StringDatabase.prototype.get = function (key) {
        return key in this.state ? this.state[key] : null;
    };
    StringDatabase.prototype.set = function (key, value) {
        this.state[key] = value;
    };
    StringDatabase.from = function (state) {
        var db = new StringDatabase();
        for (var key in state) {
            db.set(key, state[key]);
        }
        return db;
    };
    return StringDatabase;
}());
var testerFunction = function () {
    console.log(typeof StringDatabase);
};
exports.testerFunction = testerFunction;
