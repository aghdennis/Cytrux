

/*This will contain all ui related stuff : components, derieved components etc*/

import { NgModule, forwardRef } from 'core';
import { CommonModule } from 'common';
import { FormsModule } from 'forms';

//import { ThribeAppHeader } from '../components/header.component';
import { ThribeAppMenu } from '../components/menu.component';
import { DashBoardLink } from '../components/dashboardlink.component';
import { AutoCompleteText } from '../components/autocompletetext.component';
import { ThribeTab } from '../components/tab.component';
import { DashBoardNotification } from '../components/dashboardcomponent.notification.component';
import { DashBoardSetting } from '../components/dashboardcomponent.settings.component';


@NgModule({
    imports: [FormsModule, CommonModule],
    declarations: [ThribeAppMenu, DashBoardLink, AutoCompleteText, ThribeTab, DashBoardNotification, DashBoardSetting],    
    exports: [ThribeAppMenu, DashBoardLink, AutoCompleteText, ThribeTab, DashBoardNotification, DashBoardSetting]    
})
export class ThribeAppWidgetsModule {

}