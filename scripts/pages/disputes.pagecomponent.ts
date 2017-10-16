/*Disputes Page*/

import { Component } from 'core';
import { ThribeAppBasePage } from './base.pagecomponent';
import { EventEmitterService } from '../services/EventEmitterService';
import { Router } from 'router';


@Component({
    selector: 'thribe-disputes',
    templateUrl: `scripts/pages/disputes.pagecomponent.html`,
    styleUrls: ['scripts/pages/disputes.pagecomponent.css']

})
export class Disputes extends ThribeAppBasePage {
    constructor(public router:Router, public eventEmitter: EventEmitterService) {
        super(router, eventEmitter);
    }
}