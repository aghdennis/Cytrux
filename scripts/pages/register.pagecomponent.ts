



/*My Register Page*/

import { Component } from 'core';
import { ThribeAppBasePage } from './base.pagecomponent';

@Component({
    selector: 'thribe-register',
    templateUrl: `scripts/pages/register.pagecomponent.html`,
    styleUrls: ['scripts/pages/register.pagecomponent.css']
})
export class Register extends ThribeAppBasePage {
    constructor() {
        super();
    }
}