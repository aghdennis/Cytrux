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
define(["require", "exports", "core"], function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DrawerMenu = (function () {
        function DrawerMenu() {
            this.actionState = "in";
        }
        DrawerMenu.prototype.DropDownMenu = function () {
            this.actionState = this.actionState === 'out' ? 'in' : 'out';
            //Exposes an event to be consumed by the content page
        };
        DrawerMenu = __decorate([
            core_1.Component({
                selector: 'thribe-drawer-menu',
                templateUrl: "scripts/components/header.component.html",
                styleUrls: ['scripts/components/header.component.css'],
                animations: [
                    core_1.trigger('menuDrawerTrigger', [
                        core_1.state('in', core_1.style({
                            transform: 'translate3d(0,0, 0)'
                        })),
                        core_1.state('out', core_1.style({
                            transform: 'translate3d(0, 90%, 0)'
                        })),
                        core_1.transition('in => out', core_1.animate('150ms ease-in-out')),
                        core_1.transition('out => in', core_1.animate('150ms ease-in-out'))
                    ])
                ]
            }),
            __metadata("design:paramtypes", [])
        ], DrawerMenu);
        return DrawerMenu;
    }());
    exports.DrawerMenu = DrawerMenu;
});
//# sourceMappingURL=drawermenu.component.js.map