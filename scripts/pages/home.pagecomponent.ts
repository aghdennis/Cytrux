
/*Our first component fo rthis application*/

import { Component, EventEmitter, Input, Output } from 'core';
import { EventEmitterService } from '../services/EventEmitterService';
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

    constructor(router: Router, private eventEmitter: EventEmitterService) {
        super();
        this._router = router;
    }

    //if a setting is made then the tab can show when the home page loads
    GotoPage() {

    }

    FireActionSheetEvent() {
        console.log("toggle action sheet event fired");
        this.eventEmitter.emit(null);
        //at the click of this button will subscribe to an observable that was created by the service
    }

    //on the click of the button we raise an event
}