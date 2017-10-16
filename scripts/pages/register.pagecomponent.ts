/*My Register Page*/

import { Component } from 'core';
import { ThribeAppBasePage } from './base.pagecomponent';
import { EventEmitterService } from '../services/EventEmitterService';
import { Router } from 'router';

@Component({
    selector: 'thribe-register',
    templateUrl: `scripts/pages/register.pagecomponent.html`,
    styleUrls: ['scripts/pages/register.pagecomponent.css']
})
export class Register extends ThribeAppBasePage {
    constructor(router: Router, eventEmitter: EventEmitterService) {
        super(router, eventEmitter)
    }
}