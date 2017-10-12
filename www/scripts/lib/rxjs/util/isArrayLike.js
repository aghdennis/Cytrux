define(["exports"], function (exports) {

    "use strict";
    exports.isArrayLike = (function (x) { return x && typeof x.length === 'number'; });

});

