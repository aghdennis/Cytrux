/*The dashboard notification component will be on the dashboard page component and will
be responsible for the display of the most recent activities or notifications of the current
user of the system. This will first be directed at customers and maybe clients from then on*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "core"], function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DashBoardNotification = (function () {
        function DashBoardNotification() {
        }
        DashBoardNotification = __decorate([
            core_1.Component({
                selector: 'dashboard-notifications',
                templateUrl: "scripts/components/dashboardcomponent.notification.component.html",
                styleUrls: ['scripts/components/dashboardcomponent.notification.component.css']
            }),
            __metadata("design:paramtypes", [])
        ], DashBoardNotification);
        return DashBoardNotification;
    }());
    exports.DashBoardNotification = DashBoardNotification;
});
//# sourceMappingURL=dashboardcomponent.notification.component.js.map