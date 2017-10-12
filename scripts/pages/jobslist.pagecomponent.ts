



/*My JobList Page*/

import { Component } from 'core';
import { ThribeAppBasePage } from './base.pagecomponent';

@Component({
    selector: 'thribe-joblist',
    templateUrl: `scripts/pages/joblist.pagecomponent.html`,
    styleUrls: ['scripts/pages/joblist.pagecomponent.css']

})
export class JobList extends ThribeAppBasePage {
    constructor() {
        super();
    }
}