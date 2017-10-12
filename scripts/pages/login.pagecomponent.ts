



/*My Login Page*/

import { Component } from 'core';
import { ThribeAppBasePage } from './base.pagecomponent';


@Component({
    selector: 'thribe-login',
    templateUrl: `scripts/pages/login.pagecomponent.html`,
    styleUrls: ['scripts/pages/login.pagecomponent.css']

})
export class Login extends ThribeAppBasePage {
    constructor() {
        super();
    }
}