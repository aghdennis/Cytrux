
import { Component } from 'core';

@Component({
    templateUrl: `scripts/pages/base.pagecomponent.html`,
})
export class ThribeAppBasePage {

    constructor() { }

    //Any thribe app bage should be capable of displaying different types of pop ups to the users
    //taking in a message from the calling page and calling a callback function before or after action from user

    //To contain common functionality accross all pages

    //this will hold the code for adding and removing spinners using rxjs
    //this will also generally add error to all pages
    //this will also be used to handle modal popups to the screen and other notifications

    //Can we loopthrough component collection and call disable method?
    //Can we receive an event global on the page component?
}