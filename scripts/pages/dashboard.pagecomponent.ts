/*Dashboard Page*/

import { Component } from 'core';
import { ThribeAppBasePage } from './base.pagecomponent';
import { EventEmitterService } from '../services/EventEmitterService';
import { Router } from 'router';

@Component({
    selector: 'thribe-dashboard',
    templateUrl: `scripts/pages/dashboard.pagecomponent.html`,
    styleUrls: ['scripts/pages/dashboard.pagecomponent.css']
})
export class Dashboard extends ThribeAppBasePage {
    constructor(router: Router, eventEmitter: EventEmitterService) {
        super(router, eventEmitter);
    }

    //users coming up to this page must be authenticated
    //We load the categories list and their respective links, icons
    //we load the recents personals and accounts with their repective links and set their icons
}