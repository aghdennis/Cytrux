/*My Login Page*/

import { Component } from 'core';
import { ThribeAppBasePage } from './base.pagecomponent';
import { EventEmitterService } from '../services/EventEmitterService';
import { Router } from 'router';

@Component({
    selector: 'thribe-login',
    templateUrl: `scripts/pages/login.pagecomponent.html`,
    styleUrls: ['scripts/pages/login.pagecomponent.css']

})
export class Login extends ThribeAppBasePage {
    constructor(router: Router, eventEmitter: EventEmitterService) {
        super(router, eventEmitter)
    }
}