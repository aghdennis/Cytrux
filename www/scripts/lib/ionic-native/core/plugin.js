

define(['exports', 'ionic-native/util', 'ionic-native/bootstrap', 'rxjs/Observable', 'observable/fromEvent'],
    function (exports, ionic_native_util, ionic_native_bootstrap, rxjs_Observable, observable_fromEvent) {

        'use strict'

        ionic_native_bootstrap.checkReady();
        // declare const window;
        // declare var Promise;
        var ERR_CORDOVA_NOT_AVAILABLE = { error: 'cordova_not_available' };
        var ERR_PLUGIN_NOT_INSTALLED = { error: 'plugin_not_installed' };

        function checkAvailability(plugin, methodName, pluginName) {
            var pluginRef, pluginInstance, pluginPackage;
            if (typeof plugin === 'string') {
                pluginRef = plugin;
            }
            else {
                pluginRef = plugin.constructor.getPluginRef();
                pluginName = plugin.constructor.getPluginName();
                pluginPackage = plugin.constructor.getPluginInstallName();
            }                      

            pluginInstance = ionic_native_util.getPlugin(pluginRef);
            
            if (!pluginInstance || (!!methodName && typeof pluginInstance[methodName] === 'undefined')) {
                if (!window.cordova) {
                    ionic_native_util.cordovaWarn(pluginName, methodName);
                    return ERR_CORDOVA_NOT_AVAILABLE;
                }
                ionic_native_util.pluginWarn(pluginName, pluginPackage, methodName);
                return ERR_PLUGIN_NOT_INSTALLED;
            }
            return true;
        }
        /**
         * Checks if _objectInstance exists and has the method/property
         * @private
         */
        function instanceAvailability(pluginObj, methodName) {
            return pluginObj._objectInstance && (!methodName || typeof pluginObj._objectInstance[methodName] !== 'undefined');
        }

        function setIndex(args, opts, resolve, reject) {
            if (opts === void 0) { opts = {}; }
            // ignore resolve and reject in case sync
            if (opts.sync) {
                return args;
            }
            // If the plugin method expects myMethod(success, err, options)
            if (opts.callbackOrder === 'reverse') {
                // Get those arguments in the order [resolve, reject, ...restOfArgs]
                args.unshift(reject);
                args.unshift(resolve);
            }
            else if (opts.callbackStyle === 'node') {
                args.push(function (err, result) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(result);
                    }
                });
            }
            else if (opts.callbackStyle === 'object' && opts.successName && opts.errorName) {
                var obj = {};
                obj[opts.successName] = resolve;
                obj[opts.errorName] = reject;
                args.push(obj);
            }
            else if (typeof opts.successIndex !== 'undefined' || typeof opts.errorIndex !== 'undefined') {
                var setSuccessIndex = function () {
                    // If we've specified a success/error index
                    if (opts.successIndex > args.length) {
                        args[opts.successIndex] = resolve;
                    }
                    else {
                        args.splice(opts.successIndex, 0, resolve);
                    }
                };
                var setErrorIndex = function () {
                    // We don't want that the reject cb gets spliced into the position of an optional argument that has not been defined and thus causing non expected behaviour.
                    if (opts.errorIndex > args.length) {
                        args[opts.errorIndex] = reject; // insert the reject fn at the correct specific index
                    }
                    else {
                        args.splice(opts.errorIndex, 0, reject); // otherwise just splice it into the array
                    }
                };
                if (opts.successIndex > opts.errorIndex) {
                    setErrorIndex();
                    setSuccessIndex();
                }
                else {
                    setSuccessIndex();
                    setErrorIndex();
                }
            }
            else {
                // Otherwise, let's tack them on to the end of the argument list
                // which is 90% of cases
                args.push(resolve);
                args.push(reject);
            }
            return args;
        }
        function callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject) {
            if (opts === void 0) { opts = {}; }
            // Try to figure out where the success/error callbacks need to be bound
            // to our promise resolve/reject handlers.
            args = setIndex(args, opts, resolve, reject);
            var availabilityCheck = checkAvailability(pluginObj, methodName);
            if (availabilityCheck === true) {
                var pluginInstance = ionic_native_util.getPlugin(pluginObj.constructor.getPluginRef());
                return pluginInstance[methodName].apply(pluginInstance, args);
            }
            else {
                return availabilityCheck;
            }
        }
        function wrapPromise(pluginObj, methodName, args, opts) {
            if (opts === void 0) { opts = {}; }
            var pluginResult, rej;    
            var cbk = function (resolve, reject) {
                if (opts.destruct) {
                    pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return resolve(args);
                    }, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return reject(args);
                    });
                }
                else {
                    pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject);
                }
                rej = reject;
            }
            var p = ionic_native_util.getPromise(cbk);
            // Angular throws an error on unhandled rejection, but in this case we have already printed
            // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
            // to error
            if (pluginResult && pluginResult.error) {
                p.catch(function () { });
                typeof rej === 'function' && rej(pluginResult.error);
            }
            return p;
        }
        function wrapOtherPromise(pluginObj, methodName, args, opts) {
            if (opts === void 0) { opts = {}; }
            return ionic_native_util.getPromise(function (resolve, reject) {
                var pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts);
                if (pluginResult) {
                    if (pluginResult.error) {
                        reject(pluginResult.error);
                    }
                    else if (pluginResult.then) {
                        pluginResult.then(resolve).catch(reject);
                    }
                }
                else {
                    reject({ error: 'unexpected_error' });
                }
            });
        }
        function wrapObservable(pluginObj, methodName, args, opts) {
            if (opts === void 0) { opts = {}; }
            return new rxjs_Observable.Observable(function (observer) {
                var pluginResult;
                if (opts.destruct) {
                    pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return observer.next(args);
                    }, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return observer.error(args);
                    });
                }
                else {
                    pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
                }
                if (pluginResult && pluginResult.error) {
                    observer.error(pluginResult.error);
                    observer.complete();
                }
                return function () {
                    try {
                        if (opts.clearFunction) {
                            if (opts.clearWithArgs) {
                                return callCordovaPlugin(pluginObj, opts.clearFunction, args, opts, observer.next.bind(observer), observer.error.bind(observer));
                            }
                            return callCordovaPlugin(pluginObj, opts.clearFunction, []);
                        }
                    }
                    catch (e) {
                        console.warn('Unable to clear the previous observable watch for', pluginObj.constructor.getPluginName(), methodName);
                        console.warn(e);
                    }
                };
            });
        }
        function callInstance(pluginObj, methodName, args, opts, resolve, reject) {
            if (opts === void 0) { opts = {}; }
            args = setIndex(args, opts, resolve, reject);
            if (instanceAvailability(pluginObj, methodName)) {
                return pluginObj._objectInstance[methodName].apply(pluginObj._objectInstance, args);
            }
        }
        /**
         * Wrap the event with an observable
         * @private
         * @param event even name
         * @param element The element to attach the event listener to
         * @returns {Observable}
         */
        function wrapEventObservable(event, element) {
            if (element === void 0) { element = window; }
            return observable_fromEvent.fromEvent(element, event);
        }
        /**
         * Certain plugins expect the user to override methods in the plugin. For example,
         * window.cordova.plugins.backgroundMode.onactivate = function() { ... }.
         *
         * Unfortunately, this is brittle and would be better wrapped as an Observable. overrideFunction
         * does just this.
         * @private
         */
        function overrideFunction(pluginObj, methodName, args, opts) {
            if (opts === void 0) { opts = {}; }
            return new rxjs_Observable.Observable(function (observer) {
                var availabilityCheck = checkAvailability(pluginObj, methodName);
                if (availabilityCheck === true) {
                    var pluginInstance_1 = ionic_native_util.getPlugin(pluginObj.constructor.getPluginRef());
                    pluginInstance_1[methodName] = observer.next.bind(observer);
                    return function () { return pluginInstance_1[methodName] = function () { }; };
                }
                else {
                    observer.error(availabilityCheck);
                    observer.complete();
                }
            });
        }
        /**
         * @private
         */
        var wrap = function (pluginObj, methodName, opts) {
            if (opts === void 0) { opts = {}; }
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (opts.sync) {
                    // Sync doesn't wrap the plugin with a promise or observable, it returns the result as-is
                    return callCordovaPlugin(pluginObj, methodName, args, opts);
                }
                else if (opts.observable) {
                    return wrapObservable(pluginObj, methodName, args, opts);
                }
                else if (opts.eventObservable && opts.event) {
                    return wrapEventObservable(opts.event, opts.element);
                }
                else if (opts.otherPromise) {
                    return wrapOtherPromise(pluginObj, methodName, args, opts);
                }
                else {
                    return wrapPromise(pluginObj, methodName, args, opts);
                }
            };
        };
        /**
         * @private
         */
        function wrapInstance(pluginObj, methodName, opts) {
            if (opts === void 0) { opts = {}; }
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (opts.sync) {
                    return callInstance(pluginObj, methodName, args, opts);
                }
                else if (opts.observable) {
                    return new rxjs_Observable.Observable(function (observer) {
                        var pluginResult;
                        if (opts.destruct) {
                            pluginResult = callInstance(pluginObj, methodName, args, opts, function () {
                                var args = [];
                                for (var _i = 0; _i < arguments.length; _i++) {
                                    args[_i] = arguments[_i];
                                }
                                return observer.next(args);
                            }, function () {
                                var args = [];
                                for (var _i = 0; _i < arguments.length; _i++) {
                                    args[_i] = arguments[_i];
                                }
                                return observer.error(args);
                            });
                        }
                        else {
                            pluginResult = callInstance(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
                        }
                        if (pluginResult && pluginResult.error) {
                            observer.error(pluginResult.error);
                            observer.complete();
                        }
                        return function () {
                            try {
                                if (opts.clearWithArgs) {
                                    return callInstance(pluginObj, opts.clearFunction, args, opts, observer.next.bind(observer), observer.error.bind(observer));
                                }
                                return callInstance(pluginObj, opts.clearFunction, []);
                            }
                            catch (e) {
                                console.warn('Unable to clear the previous observable watch for', pluginObj.constructor.getPluginName(), methodName);
                                console.warn(e);
                            }
                        };
                    });
                }
                else if (opts.otherPromise) {
                    return ionic_native_util.getPromise(function (resolve, reject) {
                        var result;
                        if (opts.destruct) {
                            result = callInstance(pluginObj, methodName, args, opts, function () {
                                var args = [];
                                for (var _i = 0; _i < arguments.length; _i++) {
                                    args[_i] = arguments[_i];
                                }
                                return resolve(args);
                            }, function () {
                                var args = [];
                                for (var _i = 0; _i < arguments.length; _i++) {
                                    args[_i] = arguments[_i];
                                }
                                return reject(args);
                            });
                        }
                        else {
                            result = callInstance(pluginObj, methodName, args, opts, resolve, reject);
                        }
                        if (result && !!result.then) {
                            result.then(resolve, reject);
                        }
                        else {
                            reject();
                        }
                    });
                }
                else {
                    var pluginResult_1, rej_1;
                    var p = ionic_native_util.getPromise(function (resolve, reject) {
                        if (opts.destruct) {
                            pluginResult_1 = callInstance(pluginObj, methodName, args, opts, function () {
                                var args = [];
                                for (var _i = 0; _i < arguments.length; _i++) {
                                    args[_i] = arguments[_i];
                                }
                                return resolve(args);
                            }, function () {
                                var args = [];
                                for (var _i = 0; _i < arguments.length; _i++) {
                                    args[_i] = arguments[_i];
                                }
                                return reject(args);
                            });
                        }
                        else {
                            pluginResult_1 = callInstance(pluginObj, methodName, args, opts, resolve, reject);
                        }
                        rej_1 = reject;
                    });
                    // Angular throws an error on unhandled rejection, but in this case we have already printed
                    // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
                    // to error
                    if (pluginResult_1 && pluginResult_1.error) {
                        p.catch(function () { });
                        typeof rej_1 === 'function' && rej_1(pluginResult_1.error);
                    }
                    return p;
                }
            };
        }

        exports.ERR_CORDOVA_NOT_AVAILABLE = ERR_CORDOVA_NOT_AVAILABLE;
        exports.ERR_PLUGIN_NOT_INSTALLED = ERR_PLUGIN_NOT_INSTALLED;
        exports.checkAvailability = checkAvailability;
        exports.instanceAvailability = instanceAvailability;
        exports.wrapEventObservable = wrapEventObservable;
        exports.overrideFunction = overrideFunction;
        exports.wrap = wrap;
        exports.wrapInstance = wrapInstance;

    });
