/*This will contain all ui related stuff : components, derieved components etc*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "core", "common", "forms", "../components/menu.component", "../components/dashboardlink.component", "../components/autocompletetext.component", "../components/tab.component", "../components/dashboardcomponent.notification.component", "../components/dashboardcomponent.settings.component"], function (require, exports, core_1, common_1, forms_1, menu_component_1, dashboardlink_component_1, autocompletetext_component_1, tab_component_1, dashboardcomponent_notification_component_1, dashboardcomponent_settings_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ThribeAppWidgetsModule = (function () {
        function ThribeAppWidgetsModule() {
        }
        ThribeAppWidgetsModule = __decorate([
            core_1.NgModule({
                imports: [forms_1.FormsModule, common_1.CommonModule],
                declarations: [menu_component_1.ThribeAppMenu, dashboardlink_component_1.DashBoardLink, autocompletetext_component_1.AutoCompleteText, tab_component_1.ThribeTab, dashboardcomponent_notification_component_1.DashBoardNotification, dashboardcomponent_settings_component_1.DashBoardSetting],
                exports: [menu_component_1.ThribeAppMenu, dashboardlink_component_1.DashBoardLink, autocompletetext_component_1.AutoCompleteText, tab_component_1.ThribeTab, dashboardcomponent_notification_component_1.DashBoardNotification, dashboardcomponent_settings_component_1.DashBoardSetting]
            })
        ], ThribeAppWidgetsModule);
        return ThribeAppWidgetsModule;
    }());
    exports.ThribeAppWidgetsModule = ThribeAppWidgetsModule;
});
//# sourceMappingURL=thribeapp.widgets.js.map