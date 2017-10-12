
define(["exports", "util/root"], function (exports, root_1) {

    "use strict";

    var Symbol = root_1.root.Symbol;
    exports.rxSubscriber = (typeof Symbol === 'function' && typeof Symbol.for === 'function') ?
        Symbol.for('rxSubscriber') : '@@rxSubscriber';
    /**
     * @deprecated use rxSubscriber instead
     */
    exports.$$rxSubscriber = exports.rxSubscriber;

});