



/*My Reviews Page*/

import { Component } from 'core';
import { ThribeAppBasePage } from './base.pagecomponent';


@Component({
    selector: 'thribe-reviews',
    templateUrl: `scripts/pages/reviews.pagecomponent.html`,
    styleUrls: ['scripts/pages/reviews.pagecomponent.css']
})
export class Reviews extends ThribeAppBasePage {
    constructor() {
        super();
    }
}