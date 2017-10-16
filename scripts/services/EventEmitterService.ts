
import { EventEmitter, Injectable } from 'core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class EventEmitterService 
{
    public ActionSheetEvent: Subject<any> = new Subject<any>();

    ToggleActionSheet() {
        this.ActionSheetEvent.next(); //fire off to any listener
    }

}