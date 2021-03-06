var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "core", "../services/EventEmitterService", "router"], function (require, exports, core_1, EventEmitterService_1, router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ThribeAppBasePage = (function () {
        function ThribeAppBasePage(_router, eventEmitterService) {
            this._router = _router;
            this.eventEmitterService = eventEmitterService;
        }
        ThribeAppBasePage.prototype.FireActionSheetEvent = function () {
            this.eventEmitterService.ToggleActionSheet();
        };
        ThribeAppBasePage.prototype.GotoPage = function () {
        };
        ThribeAppBasePage = __decorate([
            core_1.Component({
                templateUrl: "scripts/pages/base.pagecomponent.html",
            }),
            __metadata("design:paramtypes", [router_1.Router, EventEmitterService_1.EventEmitterService])
        ], ThribeAppBasePage);
        return ThribeAppBasePage;
    }());
    exports.ThribeAppBasePage = ThribeAppBasePage;
});
//# sourceMappingURL=base.pagecomponent.js.map