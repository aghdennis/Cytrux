var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "core", "router", "../pages/content.pagecomponent", "../pages/home.pagecomponent", "../pages/dashboard.pagecomponent", "../pages/categorieslist.pagecomponent", "../pages/jobslist.pagecomponent", "../pages/disputes.pagecomponent", "../pages/appointmentdetail.pagecomponent", "../pages/account.pagecomponent", "../pages/aboutus.pagecomponent", "../pages/login.pagecomponent", "../pages/register.pagecomponent", "../pages/reviews.pagecomponent"], function (require, exports, core_1, router_1, content_pagecomponent_1, home_pagecomponent_1, dashboard_pagecomponent_1, categorieslist_pagecomponent_1, jobslist_pagecomponent_1, disputes_pagecomponent_1, appointmentdetail_pagecomponent_1, account_pagecomponent_1, aboutus_pagecomponent_1, login_pagecomponent_1, register_pagecomponent_1, reviews_pagecomponent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ThribeAppRoutes = [
        { path: '', pathMatch: 'full', redirectTo: 'start' },
        {
            path: 'start', component: content_pagecomponent_1.ThribeAppContentPage,
            children: [
                { path: '', component: home_pagecomponent_1.Home },
                { path: 'dashboard', component: dashboard_pagecomponent_1.Dashboard },
                { path: 'categories', component: categorieslist_pagecomponent_1.CategoriesList },
                { path: 'login', component: login_pagecomponent_1.Login },
                { path: 'joblist', component: jobslist_pagecomponent_1.JobList },
                { path: 'appointments', component: appointmentdetail_pagecomponent_1.AppointmentDetail },
                { path: 'account', component: account_pagecomponent_1.Account },
                { path: 'register', component: register_pagecomponent_1.Register },
                { path: 'review', component: reviews_pagecomponent_1.Reviews },
                { path: 'aboutus', component: aboutus_pagecomponent_1.AboutUs },
                { path: 'disputes', component: disputes_pagecomponent_1.Disputes },
            ]
        }
        //,{ path: '**', component: ErrorPage}
    ];
    var ThribeAppRouter = (function () {
        function ThribeAppRouter() {
        }
        ThribeAppRouter = __decorate([
            core_1.NgModule({
                imports: [router_1.RouterModule.forRoot(ThribeAppRoutes)],
                exports: [router_1.RouterModule]
            })
        ], ThribeAppRouter);
        return ThribeAppRouter;
    }());
    exports.ThribeAppRouter = ThribeAppRouter;
});
//# sourceMappingURL=thribeapp.routing.js.map