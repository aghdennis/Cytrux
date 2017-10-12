var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "core", "../components/dashboardlink.component"], function (require, exports, core_1, dashboardlink_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ThribeAppContentPage = (function () {
        function ThribeAppContentPage() {
            this.menuState = 'in';
            //the master page and navigator controller of the system
            //we will listen for events to disable the dashboard link here
        }
        ThribeAppContentPage.prototype.toggleMenu = function () {
            this.menuState = this.menuState === 'out' ? 'in' : 'out';
            //fire an event on every toggle
        };
        __decorate([
            core_1.ViewChild(dashboardlink_component_1.DashBoardLink),
            __metadata("design:type", dashboardlink_component_1.DashBoardLink)
        ], ThribeAppContentPage.prototype, "dashBoardLink", void 0);
        ThribeAppContentPage = __decorate([
            core_1.Component({
                templateUrl: "scripts/pages/content.pagecomponent.html",
                styleUrls: ['scripts/pages/content.pagecomponent.css'],
                animations: [
                    core_1.trigger('menuTrigger', [
                        core_1.state('in', core_1.style({
                            transform: 'translate3d(0,0, 0)'
                        })),
                        core_1.state('out', core_1.style({
                            transform: 'translate3d(80%, 0, 0)'
                        })),
                        core_1.transition('in => out', core_1.animate('350ms ease-in-out')),
                        core_1.transition('out => in', core_1.animate('350ms ease-in-out'))
                    ])
                ]
            })
        ], ThribeAppContentPage);
        return ThribeAppContentPage;
    }());
    exports.ThribeAppContentPage = ThribeAppContentPage;
});
/*This is like the master page. Child pages should be able to call its functions*/
/*Should be able to authenticate the user and display appropriare icons on the header component*/ 
//# sourceMappingURL=content.pagecomponent.js.map