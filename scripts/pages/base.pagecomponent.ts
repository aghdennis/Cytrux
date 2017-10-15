
import { Component, EventEmitter, Output, Input } from 'core';

@Component({
    templateUrl: `scripts/pages/base.pagecomponent.html`,
})
export class ThribeAppBasePage {

    @Output() onActionSheetToggle : EventEmitter<any> = new EventEmitter();

    constructor() { }

  
}