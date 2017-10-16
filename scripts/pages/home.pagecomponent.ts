
/*Our first component fo rthis application*/

import { Component, EventEmitter, Input, Output } from 'core';
import { ThribeAppBasePage } from './base.pagecomponent';
import { EventEmitterService } from '../services/EventEmitterService';
import { Router } from 'router';

@Component({   
    selector : 'thribe-home',
    templateUrl: `scripts/pages/home.pagecomponent.html`,
    styleUrls: ['scripts/pages/home.pagecomponent.css']  
})
export class Home extends ThribeAppBasePage
{  
    constructor(public router: Router, public eventEmitter: EventEmitterService) {
        super(router, eventEmitter);
        
    }
    
    //on the click of the button we raise an event
}