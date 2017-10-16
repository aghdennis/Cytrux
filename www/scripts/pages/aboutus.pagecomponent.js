/*About us Page*/
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
define(["require", "exports", "core", "./base.pagecomponent", "../services/EventEmitterService", "router"], function (require, exports, core_1, base_pagecomponent_1, EventEmitterService_1, router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AboutUs = (function (_super) {
        __extends(AboutUs, _super);
        function AboutUs(router, eventEmitter) {
            var _this = _super.call(this, router, eventEmitter) || this;
            _this.router = router;
            _this.eventEmitter = eventEmitter;
            return _this;
        }
        AboutUs = __decorate([
            core_1.Component({
                selector: 'thribe-aboutus',
                templateUrl: "scripts/pages/aboutus.pagecomponent.html",
                styleUrls: ['scripts/pages/aboutus.pagecomponent.css']
            }),
            __metadata("design:paramtypes", [router_1.Router, EventEmitterService_1.EventEmitterService])
        ], AboutUs);
        return AboutUs;
    }(base_pagecomponent_1.ThribeAppBasePage));
    exports.AboutUs = AboutUs;
});
//# sourceMappingURL=aboutus.pagecomponent.js.map