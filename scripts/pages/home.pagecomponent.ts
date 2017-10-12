
/*Our first component fo rthis application*/

import { Component } from 'core';
import { ThribeAppBasePage } from './base.pagecomponent';
import { Router } from 'router';

@Component({   
    selector : 'thribe-home',
    templateUrl: `scripts/pages/home.pagecomponent.html`,
    styleUrls: ['scripts/pages/home.pagecomponent.css']  
})
export class Home extends ThribeAppBasePage
{
    _router: Router;

    constructor(router: Router ) {
        super();
        this._router = router;
    }

    GotoPage() {

    }
}