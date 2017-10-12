
import {
    Component, ViewChild, trigger, state,
    style, animate, keyframes, transition
} from 'core';
import { DashBoardLink } from '../components/dashboardlink.component';
import { BrowserAnimationsModule } from 'platform-browser-animations';
import { Home } from './home.pagecomponent';

@Component({
    templateUrl: `scripts/pages/content.pagecomponent.html`,
    styleUrls: ['scripts/pages/content.pagecomponent.css'],
    animations: [
        trigger('menuTrigger', [
            state('in', style({
                transform: 'translate3d(0,0, 0)'
            })),
            state('out', style({
                transform: 'translate3d(80%, 0, 0)'
            })),
            transition('in => out', animate('350ms ease-in-out')),
            transition('out => in', animate('350ms ease-in-out'))
        ])
    ]
})
export class ThribeAppContentPage {

    @ViewChild(DashBoardLink) dashBoardLink: DashBoardLink;
    menuState: string = 'in';

    toggleMenu() {
        this.menuState = this.menuState === 'out' ? 'in' : 'out';
        //fire an event on every toggle
    }

    //the master page and navigator controller of the system
    //we will listen for events to disable the dashboard link here
}

/*This is like the master page. Child pages should be able to call its functions*/
/*Should be able to authenticate the user and display appropriare icons on the header component*/