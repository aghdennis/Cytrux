/*My Reviews Page*/

import { Component } from 'core';
import { ThribeAppBasePage } from './base.pagecomponent';
import { EventEmitterService } from '../services/EventEmitterService';
import { Router } from 'router';

@Component({
    selector: 'thribe-reviews',
    templateUrl: `scripts/pages/reviews.pagecomponent.html`,
    styleUrls: ['scripts/pages/reviews.pagecomponent.css']
})
export class Reviews extends ThribeAppBasePage {
    constructor(router: Router, eventEmitter: EventEmitterService) {
        super(router, eventEmitter)
    }
}