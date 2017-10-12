



/*My Categories List Page*/

import { Component } from 'core';
import { ThribeAppBasePage } from './base.pagecomponent';


@Component({
    selector: 'thribe-categorieslist',
    templateUrl: `scripts/pages/categorieslist.pagecomponent.html`,
    styleUrls: ['scripts/pages/categorieslist.pagecomponent.css']

})
export class CategoriesList extends ThribeAppBasePage {
    constructor() {
        super();
    }
}