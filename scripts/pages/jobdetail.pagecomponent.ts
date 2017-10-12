



/*My JobDetails Page*/

import { Component } from 'core';
import { ThribeAppBasePage } from './base.pagecomponent';


@Component({
    selector: 'thribe-jobdetail',
    templateUrl: `scripts/pages/jobdetail.pagecomponent.html`,
    styleUrls: ['scripts/pages/jobdetail.pagecomponent.css']

})
export class JobDetail extends ThribeAppBasePage {
    constructor() {
        super();
    }
}