
import { EventEmitter, Injectable } from 'core';

@Injectable()
export class EventEmitterService extends EventEmitter<any>
{
    constructor() { super(); }

    publish() {
        //will publish an event to a global constant
    }

    subscribe() {

        //after subscibing the event it is unpublished o
    }
}