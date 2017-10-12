/*This is going to be like the page controller component*/
/*and will also host the route*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "core"], function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ThribeAppStartupPage = (function () {
        function ThribeAppStartupPage() {
        }
        ThribeAppStartupPage = __decorate([
            core_1.Component({
                selector: 'thribe-app',
                templateUrl: "scripts/pages/startup.pagecomponent.html",
                styleUrls: ['scripts/pages/startup.pagecomponent.css']
            })
        ], ThribeAppStartupPage);
        return ThribeAppStartupPage;
    }());
    exports.ThribeAppStartupPage = ThribeAppStartupPage;
});
//# sourceMappingURL=startup.pagecomponent.js.map