
define(["exports"], function (exports) {
    "use strict";
    function isObject(x) {
        return x != null && typeof x === 'object';
    }
    exports.isObject = isObject;
});