

import { NgModule, enableProdMode } from 'core';
import { platformBrowserDynamic } from 'platform-browser-dynamic';
import { ThribeAppModule } from './thribeAppModule';

export class ThribeAppStartup {
    
    static BootStrapApplication(): boolean
    {
        //check and switch between prod and dev mode easily from here
        //enableProdMode();
        //removed for now        
        try
        {
            platformBrowserDynamic().bootstrapModule(ThribeAppModule);
            return true;
        }
        catch (e) {
            console.log(e);
        }
        return false;
    }
    
}
   