



/*My Account Page*/

import { Component } from 'core';
import { ThribeAppBasePage } from './base.pagecomponent';


@Component({
    selector: 'thribe-account',
    templateUrl: `scripts/pages/account.pagecomponent.html`,
    styleUrls: ['scripts/pages/account.pagecomponent.css']

})
export class Account extends ThribeAppBasePage {
    constructor() {
        super();
    }
}