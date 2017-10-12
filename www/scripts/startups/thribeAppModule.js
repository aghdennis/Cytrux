var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "core", "platform-browser", "platform-browser-animations", "forms", "../modules/thribeapp.routing", "../modules/thribeapp.widgets", "../modules/thribeapp.services", "../pages/base.pagecomponent", "../pages/startup.pagecomponent", "../pages/home.pagecomponent", "../pages/dashboard.pagecomponent", "../pages/categorieslist.pagecomponent", "../pages/jobslist.pagecomponent", "../pages/disputes.pagecomponent", "../pages/appointmentdetail.pagecomponent", "../pages/account.pagecomponent", "../pages/aboutus.pagecomponent", "../pages/login.pagecomponent", "../pages/register.pagecomponent", "../pages/reviews.pagecomponent", "../pages/content.pagecomponent"], function (require, exports, core_1, platform_browser_1, platform_browser_animations_1, forms_1, thribeapp_routing_1, thribeapp_widgets_1, thribeapp_services_1, base_pagecomponent_1, startup_pagecomponent_1, home_pagecomponent_1, dashboard_pagecomponent_1, categorieslist_pagecomponent_1, jobslist_pagecomponent_1, disputes_pagecomponent_1, appointmentdetail_pagecomponent_1, account_pagecomponent_1, aboutus_pagecomponent_1, login_pagecomponent_1, register_pagecomponent_1, reviews_pagecomponent_1, content_pagecomponent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ThribeAppModule = (function () {
        function ThribeAppModule() {
        }
        ThribeAppModule = __decorate([
            core_1.NgModule({
                imports: [
                    platform_browser_1.BrowserModule,
                    thribeapp_routing_1.ThribeAppRouter,
                    thribeapp_widgets_1.ThribeAppWidgetsModule,
                    thribeapp_services_1.ThribeAppServicesModule,
                    platform_browser_animations_1.BrowserAnimationsModule,
                    forms_1.FormsModule
                ],
                declarations: [
                    base_pagecomponent_1.ThribeAppBasePage,
                    startup_pagecomponent_1.ThribeAppStartupPage,
                    content_pagecomponent_1.ThribeAppContentPage,
                    home_pagecomponent_1.Home,
                    dashboard_pagecomponent_1.Dashboard,
                    categorieslist_pagecomponent_1.CategoriesList,
                    jobslist_pagecomponent_1.JobList,
                    disputes_pagecomponent_1.Disputes,
                    appointmentdetail_pagecomponent_1.AppointmentDetail,
                    account_pagecomponent_1.Account,
                    aboutus_pagecomponent_1.AboutUs,
                    login_pagecomponent_1.Login,
                    register_pagecomponent_1.Register,
                    reviews_pagecomponent_1.Reviews
                ],
                bootstrap: [startup_pagecomponent_1.ThribeAppStartupPage]
            })
        ], ThribeAppModule);
        return ThribeAppModule;
    }());
    exports.ThribeAppModule = ThribeAppModule;
});
//# sourceMappingURL=thribeAppModule.js.map