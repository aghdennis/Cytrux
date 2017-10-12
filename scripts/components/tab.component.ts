
/*The tab component will display the different search tabs*/
/*This component will house other components*/

import { Component, trigger, state, style, animate, keyframes, transition } from 'core'; 
import { NgZone } from 'core';
import { BrowserAnimationsModule } from 'platform-browser-animations';
import { Geolocation } from 'ionic-native-geolocation';

//import { Device } from 'ionic-native-device';

@Component({
    selector: 'thribe-tab',
    templateUrl: `scripts/components/tab.component.html`,
    styleUrls: ['scripts/components/tab.component.css'],
    animations: [
        trigger('menuTabLocation',[
            state('show', style({
                opacity : '1', display:'block'
            })),
            state('hide', style({
                opacity: '0', display:'none'
            })),
            transition('show => hide', animate('200ms ease-in-out')),
            transition('hide=> show', animate('200ms ease-in-out'))
        ]),
        trigger('menuTabCategory', [
            state('show', style({
                opacity: '1', display: 'block'
            })),
            state('hide', style({
                opacity: '0', display : 'none'
            })),
            transition('show => hide', animate('200ms ease-in-out')),
            transition('hide => show', animate('200ms ease-in-out'))
        ])
    ]//,
    //providers : [Geolocation ]
})
export class ThribeTab
{
    private menuTabLocationState: string = "show";
    private menuTabCategoryState: string = "hide"; 
    private lattitude: number;
    private longitude: number;   

    constructor(private geolocation: Geolocation) {
       
    }
   
    OpenTab(name: string) {        
        this.geolocation.getCurrentPosition().then((pos) => {
            console.log("inside the geolocation get current position method");
        }, (err: PositionError) => {
            console.log("error : " + err.message);
        });

        switch (name) {
            case 'Location':
                
                this.menuTabLocationState = 'show';
                this.menuTabCategoryState = 'hide';
                break;
            case 'Category':
                this.menuTabCategoryState = 'show';
                this.menuTabLocationState = 'hide';
                break;
        }
    }  
}

