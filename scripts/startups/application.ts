// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397705
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
"use strict";

import { ThribeAppStartup } from './thribeappstartup';

export function initialize(): void {   
    document.addEventListener('deviceready', onDeviceReady, false);
}

function onDeviceReady(): void {
    document.addEventListener('pause', onPause, false);
    document.addEventListener('resume', onResume, false);

    var parentElement = document.getElementById('deviceready');

    if (ThribeAppStartup.BootStrapApplication() === false) {

        var listeningElement = parentElement.querySelector('.listening');
        listeningElement.innerHTML = 'Device Unloaded!!';
    }
}
    

function onPause(): void {
    // TODO: This application has been suspended. Save application state here.
}

function onResume(): void {
    // TODO: This application has been reactivated. Restore application state here.
}