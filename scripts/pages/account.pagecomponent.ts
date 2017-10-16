
/*My Account Page*/

import { Component } from 'core';
import { ThribeAppBasePage } from './base.pagecomponent';
import { EventEmitterService } from '../services/EventEmitterService';
import { Router } from 'router';

@Component({
    selector: 'thribe-account',
    templateUrl: `scripts/pages/account.pagecomponent.html`,
    styleUrls: ['scripts/pages/account.pagecomponent.css']

})
export class Account extends ThribeAppBasePage {
    constructor(public router: Router, public eventEmitter: EventEmitterService) {
        super(router, eventEmitter);
    }
}