



/*About us Page*/

import { Component } from 'core';
import { ThribeAppBasePage } from './base.pagecomponent';
import { EventEmitterService } from '../services/EventEmitterService';
import { Router } from 'router';


@Component({
    selector: 'thribe-aboutus',
    templateUrl: `scripts/pages/aboutus.pagecomponent.html`,
    styleUrls: ['scripts/pages/aboutus.pagecomponent.css']

})
export class AboutUs extends ThribeAppBasePage {
    constructor(public router: Router, public eventEmitter: EventEmitterService) {
        super(router, eventEmitter);
    }
}