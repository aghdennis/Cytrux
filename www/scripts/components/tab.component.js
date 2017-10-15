/*The tab component will display the different search tabs*/
/*This component will house other components*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "core", "ionic-native-geolocation"], function (require, exports, core_1, ionic_native_geolocation_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //import { Device } from 'ionic-native-device';
    var ThribeTab = (function () {
        function ThribeTab(geolocation) {
            this.geolocation = geolocation;
            this.menuTabLocationState = "show";
            this.menuTabCategoryState = "hide";
        }
        //we subscribe to an event in order to fire the action sheet animations
        //we create an event emitter here which will fire when a button outside this control is clicked
        ThribeTab.prototype.OpenTab = function (name) {
            this.geolocation.getCurrentPosition().then(function (pos) {
                console.log("inside the geolocation get current position method");
            }, function (err) {
                console.log("error : " + err.message);
            });
            switch (name) {
                case 'Location':
                    this.menuTabLocationState = 'show';
                    this.menuTabCategoryState = 'hide';
                    break;
                case 'Category':
                    this.menuTabCategoryState = 'show';
                    this.menuTabLocationState = 'hide';
                    break;
            }
        };
        ThribeTab = __decorate([
            core_1.Component({
                selector: 'thribe-tab',
                templateUrl: "scripts/components/tab.component.html",
                styleUrls: ['scripts/components/tab.component.css'],
                animations: [
                    core_1.trigger('menuTabLocation', [
                        core_1.state('show', core_1.style({
                            opacity: '1', display: 'block'
                        })),
                        core_1.state('hide', core_1.style({
                            opacity: '0', display: 'none'
                        })),
                        core_1.transition('show => hide', core_1.animate('200ms ease-in-out')),
                        core_1.transition('hide=> show', core_1.animate('200ms ease-in-out'))
                    ]),
                    core_1.trigger('menuTabCategory', [
                        core_1.state('show', core_1.style({
                            opacity: '1', display: 'block'
                        })),
                        core_1.state('hide', core_1.style({
                            opacity: '0', display: 'none'
                        })),
                        core_1.transition('show => hide', core_1.animate('200ms ease-in-out')),
                        core_1.transition('hide => show', core_1.animate('200ms ease-in-out'))
                    ])
                ] //,
                //providers : [Geolocation ]
            }),
            __metadata("design:paramtypes", [ionic_native_geolocation_1.Geolocation])
        ], ThribeTab);
        return ThribeTab;
    }());
    exports.ThribeTab = ThribeTab;
});
//# sourceMappingURL=tab.component.js.map