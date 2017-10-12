define(["require", "exports", "./thribeappstartup"], function (require, exports, thribeappstartup_1) {
    // For an introduction to the Blank template, see the following documentation:
    // http://go.microsoft.com/fwlink/?LinkID=397705
    // To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
    // and then run "window.location.reload()" in the JavaScript Console.
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function initialize() {
        document.addEventListener('deviceready', onDeviceReady, false);
    }
    exports.initialize = initialize;
    function onDeviceReady() {
        document.addEventListener('pause', onPause, false);
        document.addEventListener('resume', onResume, false);
        var parentElement = document.getElementById('deviceready');
        if (thribeappstartup_1.ThribeAppStartup.BootStrapApplication() === false) {
            var listeningElement = parentElement.querySelector('.listening');
            listeningElement.innerHTML = 'Device Unloaded!!';
        }
    }
    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    }
    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    }
});
//# sourceMappingURL=application.js.map