



/*About us Page*/

import { Component } from 'core';
import { ThribeAppBasePage } from './base.pagecomponent';


@Component({
    selector: 'thribe-aboutus',
    templateUrl: `scripts/pages/aboutus.pagecomponent.html`,
    styleUrls: ['scripts/pages/aboutus.pagecomponent.css']

})
export class AboutUs extends ThribeAppBasePage {
    constructor() {
        super();
    }
}