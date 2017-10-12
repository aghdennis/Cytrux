



/*Disputes Page*/

import { Component } from 'core';
import { ThribeAppBasePage } from './base.pagecomponent';


@Component({
    selector: 'thribe-disputes',
    templateUrl: `scripts/pages/disputes.pagecomponent.html`,
    styleUrls: ['scripts/pages/disputes.pagecomponent.css']

})
export class Disputes extends ThribeAppBasePage {
    constructor() {
        super();
    }
}