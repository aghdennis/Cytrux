

define(["require", "exports", "rxjs/Subscriber", "symbol/rxSubscriber", "rxjs/Observer"],
    function (require, exports, Subscriber_1, rxSubscriber_1, Observer_1) {
        "use strict";

        function toSubscriber(nextOrObserver, error, complete) {
            if (nextOrObserver) {
                if (nextOrObserver instanceof Subscriber_1.Subscriber) {
                    return nextOrObserver;
                }
                if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
                    return nextOrObserver[rxSubscriber_1.rxSubscriber]();
                }
            }
            if (!nextOrObserver && !error && !complete) {
                return new Subscriber_1.Subscriber(Observer_1.empty);
            }
            return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
        }
        exports.toSubscriber = toSubscriber;
});


