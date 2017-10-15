var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "core", "../components/drawermenu.component", "../services/EventEmitterService"], function (require, exports, core_1, drawermenu_component_1, EventEmitterService_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ThribeAppContentPage = (function () {
        function ThribeAppContentPage(eventEmitter) {
            this.eventEmitter = eventEmitter;
            this.menuState = 'in';
        }
        ThribeAppContentPage.prototype.toggleMenu = function () {
            this.menuState = this.menuState === 'out' ? 'in' : 'out';
        };
        ThribeAppContentPage.prototype.ngOnInit = function () {
            if (this.eventEmitter) {
                //this.eventEmitter.      
            }
        };
        /**
         Toggles the action sheet
         */
        ThribeAppContentPage.prototype.ToggleActionSheet = function () {
            console.log("on action sheet toggle event received by parent");
            this.drawerMenu.DropDownMenu();
        };
        __decorate([
            core_1.ViewChild(drawermenu_component_1.DrawerMenu),
            __metadata("design:type", drawermenu_component_1.DrawerMenu)
        ], ThribeAppContentPage.prototype, "drawerMenu", void 0);
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
            }),
            __metadata("design:paramtypes", [EventEmitterService_1.EventEmitterService])
        ], ThribeAppContentPage);
        return ThribeAppContentPage;
    }());
    exports.ThribeAppContentPage = ThribeAppContentPage;
});
/*This is like the master page. Child pages should be able to call its functions*/
/*Should be able to authenticate the user and display appropriare icons on the header component*/ 
//# sourceMappingURL=content.pagecomponent.js.map