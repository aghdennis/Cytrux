/*Our first component fo rthis application*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "core", "../services/EventEmitterService", "./base.pagecomponent", "router"], function (require, exports, core_1, EventEmitterService_1, base_pagecomponent_1, router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Home = (function (_super) {
        __extends(Home, _super);
        function Home(router, eventEmitter) {
            var _this = _super.call(this) || this;
            _this.eventEmitter = eventEmitter;
            _this._router = router;
            return _this;
        }
        //if a setting is made then the tab can show when the home page loads
        Home.prototype.GotoPage = function () {
        };
        Home.prototype.FireActionSheetEvent = function () {
            console.log("toggle action sheet event fired");
            this.eventEmitter.emit(null);
            //at the click of this button will subscribe to an observable that was created by the service
        };
        Home = __decorate([
            core_1.Component({
                selector: 'thribe-home',
                templateUrl: "scripts/pages/home.pagecomponent.html",
                styleUrls: ['scripts/pages/home.pagecomponent.css']
            }),
            __metadata("design:paramtypes", [router_1.Router, EventEmitterService_1.EventEmitterService])
        ], Home);
        return Home;
    }(base_pagecomponent_1.ThribeAppBasePage));
    exports.Home = Home;
});
//# sourceMappingURL=home.pagecomponent.js.map