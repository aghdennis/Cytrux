
/*This will be the top most header of every thribe app page*/
/*Functions*/
/*Display short cuts to either the dashboard or home page depending on user login status*/
/*Contain the ionic menu controller that will be a side menu*/
/*We shall build the menu components from scratch*/
/*This class shall implement the ngoninit*/
/*The dahboard link component shall only appear when the user is logged in*/

import { Component, ViewChild } from 'core';
import { DashBoardLink } from './dashboardlink.component';

@Component({
    selector : 'thribe-header',
    templateUrl: `scripts/components/header.component.html`,
    styleUrls: ['scripts/components/header.component.css']
})
export class ThribeAppHeader
{
    @ViewChild(DashBoardLink)  dashBoardLink: DashBoardLink;
    constructor() { }
}