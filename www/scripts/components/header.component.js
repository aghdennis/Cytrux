/*The header component*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "core", "./dashboardlink.component"], function (require, exports, core_1, dashboardlink_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ThribeAppHeader = (function () {
        function ThribeAppHeader() {
        }
        __decorate([
            core_1.ViewChild(dashboardlink_component_1.DashBoardLink),
            __metadata("design:type", dashboardlink_component_1.DashBoardLink)
        ], ThribeAppHeader.prototype, "dashBoardLink", void 0);
        ThribeAppHeader = __decorate([
            core_1.Component({
                selector: 'thribe-header',
                templateUrl: "scripts/components/header.component.html",
                styleUrls: ['scripts/components/header.component.css']
            }),
            __metadata("design:paramtypes", [])
        ], ThribeAppHeader);
        return ThribeAppHeader;
    }());
    exports.ThribeAppHeader = ThribeAppHeader;
});
//# sourceMappingURL=header.component.js.map