var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "core", "rxjs/Subject"], function (require, exports, core_1, Subject_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventEmitterService = (function () {
        function EventEmitterService() {
            this.ActionSheetEvent = new Subject_1.Subject();
        }
        EventEmitterService.prototype.ToggleActionSheet = function () {
            this.ActionSheetEvent.next(); //fire off to any listener
        };
        EventEmitterService = __decorate([
            core_1.Injectable()
        ], EventEmitterService);
        return EventEmitterService;
    }());
    exports.EventEmitterService = EventEmitterService;
});
//# sourceMappingURL=EventEmitterService.js.map