

require.config({  
    baseUrl: '/',
    nodeRequire: require,
    paths:
    {
        'Zone': 'scripts/lib/zone',      
        'Reflect': 'scripts/lib/Reflect',
        'core': 'scripts/lib/core',
        'platform-browser': 'scripts/lib/platform-browser',
        'animations-browser': 'scripts/lib/animations-browser',
        'platform-browser-animations': 'scripts/lib/platform-browser-animations',
        'animations': 'scripts/lib/animations',
        'platform-browser-dynamic': 'scripts/lib/platform-browser-dynamic',
        'router': 'scripts/lib/router',
        'common': 'scripts/lib/common',
        'compiler': 'scripts/lib/compiler',
        'forms' : 'scripts/lib/forms',
        'rxjs/Observable': 'scripts/lib/rxjs/Observable',
        'rxjs/Observer': 'scripts/lib/rxjs/Observer',
        'rxjs/BehaviorSubject': 'scripts/lib/rxjs/BehaviorSubject',
        'rxjs/Subscriber': 'scripts/lib/rxjs/Subscriber',
        'rxjs/Subscription': 'scripts/lib/rxjs/Subscription',
        'rxjs/SubjectSubscription': 'scripts/lib/rxjs/SubjectSubscription',
        'rxjs/Subject': 'scripts/lib/rxjs/Subject',
        'rxjs/OuterSubscriber': 'scripts/lib/rxjs/OuterSubscriber',
        'rxjs/InnerSubscriber': 'scripts/lib/rxjs/InnerSubscriber',
        'rxjs/Notification': 'scripts/lib/rxjs/Notification',
        'observable/merge': 'scripts/lib/rxjs/observable/merge',
        'observable/from': 'scripts/lib/rxjs/observable/from',
        'observable/fromPromise': 'scripts/lib/rxjs/observable/fromPromise',
        'observable/forkJoin': 'scripts/lib/rxjs/observable/forkJoin',
        'observable/ForkJoinObservable': 'scripts/lib/rxjs/observable/ForkJoinObservable',
        'observable/ArrayObservable': 'scripts/lib/rxjs/observable/ArrayObservable',
        'observable/of': 'scripts/lib/rxjs/observable/of',
        'observable/FromObservable': 'scripts/lib/rxjs/observable/FromObservable',
        'observable/ErrorObservable': 'scripts/lib/rxjs/observable/ErrorObservable',
        'observable/FromEventObservable': 'scripts/lib/rxjs/observable/FromEventObservable',
        'observable/throw': 'scripts/lib/rxjs/observable/throw',
        'observable/fromEvent': 'scripts/lib/rxjs/observable/fromEvent',
        'observable/PromiseObservable': 'scripts/lib/rxjs/observable/PromiseObservable',
        'observable/IteratorObservable': 'scripts/lib/rxjs/observable/IteratorObservable',        
        'observable/ArrayLikeObservable': 'scripts/lib/rxjs/observable/ArrayLikeObservable',
        'observable/ConnectableObservable': 'scripts/lib/rxjs/observable/ConnectableObservable',
        'observable/EmptyObservable': 'scripts/lib/rxjs/observable/EmptyObservable',
        'observable/ScalarObservable': 'scripts/lib/rxjs/observable/ScalarObservable',
        'operator/mergeAll': 'scripts/lib/rxjs/operator/mergeAll',
        'operator/share': 'scripts/lib/rxjs/operator/share',
        'operator/merge': 'scripts/lib/rxjs/operator/merge',
        'operator/first': 'scripts/lib/rxjs/operator/first',
        'operator/reduce': 'scripts/lib/rxjs/operator/reduce',
        'operator/every': 'scripts/lib/rxjs/operator/every',
        'operator/last': 'scripts/lib/rxjs/operator/last',
        'operator/map': 'scripts/lib/rxjs/operator/map',
        'operator/filter': 'scripts/lib/rxjs/operator/filter',
        'operator/concatAll': 'scripts/lib/rxjs/operator/concatAll',
        'operator/catch': 'scripts/lib/rxjs/operator/catch',
        'operator/observeOn': 'scripts/lib/rxjs/operator/observeOn',
        'operator/mergeMap': 'scripts/lib/rxjs/operator/mergeMap',
        'operator/concatMap': 'scripts/lib/rxjs/operator/concatMap',
        'operator/multicast': 'scripts/lib/rxjs/operator/multicast',
        'util/isScheduler': 'scripts/lib/rxjs/util/isScheduler',
        'util/isArrayLike': 'scripts/lib/rxjs/util/isArrayLike',
        'util/isPromise': 'scripts/lib/rxjs/util/isPromise',
        'util/isArray': 'scripts/lib/rxjs/util/isArray',
        'util/root': 'scripts/lib/rxjs/util/root',
        'util/isObject': 'scripts/lib/rxjs/util/isObject',
        'util/subscribeToResult': 'scripts/lib/rxjs/util/subscribeToResult',
        'util/EmptyError': 'scripts/lib/rxjs/util/EmptyError',
        'util/errorObject': 'scripts/lib/rxjs/util/errorObject',
        'util/isFunction': 'scripts/lib/rxjs/util/isFunction',
        'util/tryCatch': 'scripts/lib/rxjs/util/tryCatch', 
        'util/ObjectUnsubscribedError': 'scripts/lib/rxjs/util/ObjectUnsubscribedError',
        'util/UnsubscriptionError': 'scripts/lib/rxjs/util/UnsubscriptionError',
        'util/toSubscriber': 'scripts/lib/rxjs/util/toSubscriber',
        'symbol/iterator': 'scripts/lib/rxjs/symbol/iterator', 
        'symbol/observable': 'scripts/lib/rxjs/symbol/observable',
        'symbol/rxSubscriber': 'scripts/lib/rxjs/symbol/rxSubscriber',
        'ionic-native/plugin': 'scripts/lib/ionic-native/core/plugin',
        'ionic-native/bootstrap': 'scripts/lib/ionic-native/core/bootstrap',
        'ionic-native/decorators': 'scripts/lib/ionic-native/core/decorators',
        'ionic-native/util': 'scripts/lib/ionic-native/core/util',
        'ionic-native/ionic-native-plugin': 'scripts/lib/ionic-native/core/ionic-native-plugin',
        'ionic-native-geolocation': 'scripts/lib/ionic-native/geolocation',
        'ionic-native-device': 'scripts/lib/ionic-native/device'

    }
});

(function () {   
    /*Is 
    Testing with Rxjs and test.js 
    require(['test'],       
        function (sym) {      
            console.log("symbol in require");
            console.log(sym.f);
        });*/ 
    
    require(['../scripts/startups/startup', 'Zone', 'Reflect'],       
        function (startup, zone, reflect) {      
           
        });
})();