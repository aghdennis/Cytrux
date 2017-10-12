var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "core"], function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AutoCompleteText = (function () {
        function AutoCompleteText() {
            this.inputText = "";
            this.dropdownState = "hide";
            this.filteredList = ['BMW', 'Audi', 'Mercedes', 'Porsche', 'Volkswagen', 'Opel', 'Maserati', 'Volkswagen', 'BMW Serie 1', 'BMW Serie 2'];
        }
        /*First on nginit we load the data into the control and perhaps cache the data*/
        /*Next we implement the input control to call the filter function on keyup where we perform the filtering */
        /*Next we write the filtered elements back onto the page */
        /*Where there is no match we display a text of no matches found*/
        /*We utilise animations here to display the drop down div control */
        /*We clear the cache created by this item when the component is destroyed */
        AutoCompleteText.prototype.filter = function () {
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
        };
        AutoCompleteText.prototype.selectedItem = function () {
            //Receives the selected item and updates the input text box with the value.
            //i.e inputText = item.value or inputText = item
            this.dropdownState = "hide";
        };
        AutoCompleteText = __decorate([
            core_1.Component({
                selector: 'thribe-autocomplete',
                templateUrl: 'scripts/components/autocompletetext.component.html',
                styleUrls: ['scripts/components/autocompletetext.component.css'],
                animations: [
                    core_1.trigger('dropDownTrigger', [
                        core_1.state('show', core_1.style({
                            opacity: '1', display: 'block'
                        })),
                        core_1.state('hide', core_1.style({
                            opacity: '0', display: 'none'
                        })),
                        core_1.transition('show => hide', core_1.animate('150ms ease-in-out')),
                        core_1.transition('hide => show', core_1.animate('150ms ease-in-out'))
                    ])
                ]
            })
        ], AutoCompleteText);
        return AutoCompleteText;
    }());
    exports.AutoCompleteText = AutoCompleteText;
});
//# sourceMappingURL=autocompletetext.component.js.map