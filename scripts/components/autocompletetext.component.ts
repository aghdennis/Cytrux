
import { Component, trigger, state, style, animate, keyframes, transition  } from 'core';
import { FormsModule } from 'forms';


@Component({    
    selector: 'thribe-autocomplete',
    templateUrl: 'scripts/components/autocompletetext.component.html',
    styleUrls: ['scripts/components/autocompletetext.component.css'],
    animations: [
        trigger('dropDownTrigger', [
            state('show', style({
                opacity: '1', display: 'block'
            })),
            state('hide', style({
                opacity: '0', display: 'none'
            })),
            transition('show => hide', animate('150ms ease-in-out')),
            transition('hide => show', animate('150ms ease-in-out'))
        ])
    ]
})
export class AutoCompleteText
{   
    public inputText: string = "";
    public dropdownState: string = "hide";
    public filteredList: Array<string> = ['BMW', 'Audi', 'Mercedes', 'Porsche', 'Volkswagen', 'Opel', 'Maserati', 'Volkswagen', 'BMW Serie 1', 'BMW Serie 2'];

    /*First on nginit we load the data into the control and perhaps cache the data*/
    /*Next we implement the input control to call the filter function on keyup where we perform the filtering */
    /*Next we write the filtered elements back onto the page */
    /*Where there is no match we display a text of no matches found*/
    /*We utilise animations here to display the drop down div control */
    /*We clear the cache created by this item when the component is destroyed */
    filter() {
        //filters the list and stores the filtered list in the object
        if (this.inputText !== "" && this.inputText.length > 1) {
            //if the number of characters is two and above then we start the search
            //we replace the filteredList list every time this function is called on every key stroke
            //the ng loop will display the array each time
            this.dropdownState = "show";
        }
        else {
            this.dropdownState = "hide";
        }
    }

    selectedItem() {
        //Receives the selected item and updates the input text box with the value.
        //i.e inputText = item.value or inputText = item
        this.dropdownState = "hide";
    }
}