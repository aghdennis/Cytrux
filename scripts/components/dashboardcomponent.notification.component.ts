
/*The dashboard notification component will be on the dashboard page component and will
be responsible for the display of the most recent activities or notifications of the current
user of the system. This will first be directed at customers and maybe clients from then on*/

import { Component } from 'core';

@Component({
    selector: 'dashboard-notifications',
    templateUrl: `scripts/components/dashboardcomponent.notification.component.html`,
    styleUrls: ['scripts/components/dashboardcomponent.notification.component.css']
})
export class DashBoardNotification
{      
    constructor() {
        
    }      

    //When the user logs on get the most recent notifications from the database and 
    //the update this control and display the results according to the design of this
    //control.

    //this control will wait and listen for events that will be fired inorder for it to 
    //appear on the page and display the relevent pieces of notification

    //Notification messages will be around the following
    //recent appointments
    //recent orders or requests
    //new messages or requests unread
    //Easy access and links will be provided to these pages
}