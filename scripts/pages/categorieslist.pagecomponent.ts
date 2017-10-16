/*My Categories List Page*/

import { Component } from 'core';
import { ThribeAppBasePage } from './base.pagecomponent';
import { EventEmitterService } from '../services/EventEmitterService';
import { Router } from 'router';

@Component({
    selector: 'thribe-categorieslist',
    templateUrl: `scripts/pages/categorieslist.pagecomponent.html`,
    styleUrls: ['scripts/pages/categorieslist.pagecomponent.css']

})
export class CategoriesList extends ThribeAppBasePage {
    constructor(public router: Router, public eventEmitter: EventEmitterService) {
        super(router, eventEmitter);
    }
}