
import { Component} from 'core';


@Component({
    selector: 'thribe-menu',
    templateUrl: `scripts/components/menu.component.html`,
    styleUrls: ['scripts/components/menu.component.css']  
})
export class ThribeAppMenu {

 
    //This class will be augumented as follows
    //1. We will need to disable the dashboard links on out state
    //2. We will need to format the inner menu button as the outside
    //3. The out state can be called from clicking any of the menu links or just outside the menu panel
    //4. Can this component fire an event that will be caught by the containing pafe component?

}