
/*Modules*/
import { NgModule } from 'core';
import { BrowserModule } from 'platform-browser';
import { BrowserAnimationsModule } from 'platform-browser-animations';
import { FormsModule } from 'forms';
import { ThribeAppRouter } from '../modules/thribeapp.routing';
import { ThribeAppWidgetsModule } from '../modules/thribeapp.widgets';
import { ThribeAppServicesModule } from '../modules/thribeapp.services';

/*Components*/
import { ThribeAppBasePage } from '../pages/base.pagecomponent';
import { ThribeAppStartupPage } from '../pages/startup.pagecomponent';
import { Home } from '../pages/home.pagecomponent';
import { Dashboard } from '../pages/dashboard.pagecomponent';
import { CategoriesList } from '../pages/categorieslist.pagecomponent';
import { JobList } from '../pages/jobslist.pagecomponent';
import { Disputes } from '../pages/disputes.pagecomponent';
import { AppointmentDetail } from '../pages/appointmentdetail.pagecomponent';
import { Account } from '../pages/account.pagecomponent';
import { AboutUs } from '../pages/aboutus.pagecomponent';
import { Login } from '../pages/login.pagecomponent';
import { Register } from '../pages/register.pagecomponent';
import { Reviews } from '../pages/reviews.pagecomponent';
import { ThribeAppContentPage } from '../pages/content.pagecomponent';


@NgModule({
    imports: [
        BrowserModule,
        ThribeAppRouter,
        ThribeAppWidgetsModule,
        ThribeAppServicesModule,
        BrowserAnimationsModule,
        FormsModule      
    ],
    declarations: [
        ThribeAppBasePage,
        ThribeAppStartupPage, 
        ThribeAppContentPage,
        Home,
        Dashboard,
        CategoriesList,
        JobList,
        Disputes,
        AppointmentDetail,
        Account,
        AboutUs,
        Login,
        Register,
        Reviews 
    ], 
    bootstrap: [ThribeAppStartupPage ]   
})
export class ThribeAppModule { }