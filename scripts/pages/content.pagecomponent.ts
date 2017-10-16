
import {
    Component, ViewChild, trigger, state,
    style, animate, keyframes, transition
} from 'core';
import { OnInit } from 'core';

//import { DashBoardLink } from '../components/dashboardlink.component';
import { DrawerMenu } from '../components/drawermenu.component';
import { BrowserAnimationsModule } from 'platform-browser-animations';
import { Home } from './home.pagecomponent';
import { EventEmitterService } from '../services/EventEmitterService';

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
export class ThribeAppContentPage implements OnInit
{

    //@ViewChild(DashBoardLink) dashBoardLink: DashBoardLink;
    @ViewChild(DrawerMenu) drawerMenu: DrawerMenu;
    menuState: string = 'in';

    constructor(private eventEmitter : EventEmitterService) { }


    toggleMenu() {
        this.menuState = this.menuState === 'out' ? 'in' : 'out';        
    }

    ngOnInit() {
        if (this.eventEmitter) {
            this.eventEmitter.ActionSheetEvent.subscribe(() => {
                console.log(" The action sheet has been toggled..");
                this.ToggleActionSheet();
            });
        }
    }

    /**
     Toggles the action sheet
     */
    ToggleActionSheet() {
        console.log("on action sheet toggle event received by parent");
         this.drawerMenu.DropDownMenu();
    }

    //the master page and navigator controller of the system
    //we will listen for events to disable the dashboard link here

    //we shall have another animated control on this page which will drop down to display the searches tab component
    //that will be available for use for searching accross all pages of the app

    //when the app first loads we will have to load the page items up. Geolocation, list of states, etc
}

/*This is like the master page. Child pages should be able to call its functions*/
/*Should be able to authenticate the user and display appropriare icons on the header component*/