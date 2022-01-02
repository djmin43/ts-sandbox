"use strict";
var Currency = {
    DEFAULT: 'USD',
    from: function (value, unit) {
        if (unit === void 0) { unit = Currency.DEFAULT; }
        return { unit: unit, value: value };
    }
};
