



/*Appointments List Page*/

import { Component } from 'core';
import { ThribeAppBasePage } from './base.pagecomponent';


@Component({
    selector: 'thribe-appointmentdetail',
    templateUrl: `scripts/pages/appointmentdetail.pagecomponent.html`,
    styleUrls: ['scripts/pages/appointmentdetail.pagecomponent.css']

})
export class AppointmentDetail extends ThribeAppBasePage {
    constructor() {
        super();
    }
}