define(["exports"], function (exports) {
    "use strict";
    exports.isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
});