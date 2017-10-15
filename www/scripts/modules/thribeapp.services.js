var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "core", "ionic-native-geolocation", "../services/ThribeAppMocks", "../services/EventEmitterService"], function (require, exports, core_1, ionic_native_geolocation_1, ThribeAppMocks_1, EventEmitterService_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ThribeAppServicesModule = (function () {
        function ThribeAppServicesModule() {
        }
        ThribeAppServicesModule = __decorate([
            core_1.NgModule({
                providers: [
                    { provide: ionic_native_geolocation_1.Geolocation, useClass: ThribeAppMocks_1.GeolocationMock },
                    EventEmitterService_1.EventEmitterService
                ]
            })
        ], ThribeAppServicesModule);
        return ThribeAppServicesModule;
    }());
    exports.ThribeAppServicesModule = ThribeAppServicesModule;
});
//# sourceMappingURL=thribeapp.services.js.map