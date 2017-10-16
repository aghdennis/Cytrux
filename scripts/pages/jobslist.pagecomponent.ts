/*My JobList Page*/

import { Component } from 'core';
import { ThribeAppBasePage } from './base.pagecomponent';
import { EventEmitterService } from '../services/EventEmitterService';
import { Router } from 'router';

@Component({
    selector: 'thribe-joblist',
    templateUrl: `scripts/pages/joblist.pagecomponent.html`,
    styleUrls: ['scripts/pages/joblist.pagecomponent.css']

})
export class JobList extends ThribeAppBasePage {
    constructor(public router: Router, public eventEmitter: EventEmitterService) {
        super(router, eventEmitter);
    }
}