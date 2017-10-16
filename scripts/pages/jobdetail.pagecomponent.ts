/*My JobDetails Page*/

import { Component } from 'core';
import { ThribeAppBasePage } from './base.pagecomponent';
import { EventEmitterService } from '../services/EventEmitterService';
import { Router } from 'router';

@Component({
    selector: 'thribe-jobdetail',
    templateUrl: `scripts/pages/jobdetail.pagecomponent.html`,
    styleUrls: ['scripts/pages/jobdetail.pagecomponent.css']

})
export class JobDetail extends ThribeAppBasePage {
    constructor(public router: Router, public eventEmitter: EventEmitterService) {
        super(router, eventEmitter);
    }
}