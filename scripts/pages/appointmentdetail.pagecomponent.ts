/*Appointments List Page*/

import { Component } from 'core';
import { ThribeAppBasePage } from './base.pagecomponent';
import { EventEmitterService } from '../services/EventEmitterService';
import { Router } from 'router';


@Component({
    selector: 'thribe-appointmentdetail',
    templateUrl: `scripts/pages/appointmentdetail.pagecomponent.html`,
    styleUrls: ['scripts/pages/appointmentdetail.pagecomponent.css']

})
export class AppointmentDetail extends ThribeAppBasePage {
    constructor(router: Router, eventEmitter: EventEmitterService) {
        super(router, eventEmitter);
    }
}