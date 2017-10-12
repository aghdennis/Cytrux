define(["require", "exports", "platform-browser-dynamic", "./thribeAppModule"], function (require, exports, platform_browser_dynamic_1, thribeAppModule_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ThribeAppStartup = (function () {
        function ThribeAppStartup() {
        }
        ThribeAppStartup.BootStrapApplication = function () {
            //check and switch between prod and dev mode easily from here
            //enableProdMode();
            //removed for now        
            try {
                platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(thribeAppModule_1.ThribeAppModule);
                return true;
            }
            catch (e) {
                console.log(e);
            }
            return false;
        };
        return ThribeAppStartup;
    }());
    exports.ThribeAppStartup = ThribeAppStartup;
});
//# sourceMappingURL=thribeappstartup.js.map