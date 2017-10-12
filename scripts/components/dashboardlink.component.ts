
/*This is a dashboard link sub component sat on the header or tab component*/

import { Component } from 'core';

@Component({
    selector: 'dashboard-link',
    templateUrl: `scripts/components/dashboardlink.component.html`,
    styleUrls: ['scripts/components/dashboardlink.component.css']
})
export class DashBoardLink {

    private enableDashboard: Boolean;
    private enableHome: Boolean;

    constructor() {
        this.enableDashboard = true;
        this.enableHome = true;
    }

    public RemoveDashBoardLink(): void {
        this.enableDashboard = false;            
    }
    
}