
import { Component } from 'core';
import { EventEmitterService } from '../services/EventEmitterService';
import { Router } from 'router';

@Component({
    templateUrl: `scripts/pages/base.pagecomponent.html`,
})
export class ThribeAppBasePage {
    
    constructor(public _router : Router, public eventEmitterService: EventEmitterService) { }

    FireActionSheetEvent() {
        this.eventEmitterService.ToggleActionSheet();
    }
    
    GotoPage() {

    }
  
}