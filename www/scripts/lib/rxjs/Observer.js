
define(["exports"], function (exports) {
    "use strict";
    exports.empty = {
        closed: true,
        next: function (value) { },
        error: function (err) { throw err; },
        complete: function () { }
    };
});

