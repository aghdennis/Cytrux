
/*The header component*/

import {
    Component, ViewChild, trigger, state,
    style, animate, keyframes, transition
} from 'core';

@Component({
    selector: 'thribe-drawer-menu',
    templateUrl: `scripts/components/header.component.html`,
    styleUrls: ['scripts/components/header.component.css'],
    animations: [
        trigger('menuDrawerTrigger', [
            state('in', style({
                transform: 'translate3d(0,0, 0)'
            })),
            state('out', style({
                transform: 'translate3d(0, 90%, 0)'
            })),
            transition('in => out', animate('150ms ease-in-out')),
            transition('out => in', animate('150ms ease-in-out'))
        ])
    ]
})
export class DrawerMenu {
    private actionState: string = "in";

    constructor() { }

    DropDownMenu() {
        this.actionState = this.actionState === 'out' ? 'in' : 'out';
        //Exposes an event to be consumed by the content page
    }
}