

import { NgModule} from 'core';
import { RouterModule, Routes } from 'router';
import { ThribeAppContentPage } from '../pages/content.pagecomponent';
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

const ThribeAppRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'start' },
    {
        path: 'start', component: ThribeAppContentPage,
        children: [
            { path: '', component: Home },
            { path: 'dashboard', component: Dashboard },
            { path: 'categories', component: CategoriesList },
            { path: 'login', component: Login },
            { path: 'joblist', component: JobList },
            { path: 'appointments', component: AppointmentDetail },
            { path: 'account', component: Account },
            { path: 'register', component: Register },
            { path: 'review', component: Reviews},
            { path: 'aboutus', component: AboutUs },            
            { path: 'disputes', component: Disputes },
        ]

    }
    //,{ path: '**', component: ErrorPage}
];


@NgModule({
    imports: [RouterModule.forRoot(ThribeAppRoutes)],
    exports: [RouterModule]
})
export class ThribeAppRouter {

}