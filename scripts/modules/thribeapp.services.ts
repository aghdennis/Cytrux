
/*This will be a module for services*/
import { NgModule, forwardRef } from 'core';

/*Providers*/
import { Geolocation } from 'ionic-native-geolocation';
import { GeolocationMock } from '../services/ThribeAppMocks';

@NgModule({        
    providers: [
        { provide: Geolocation, useClass: GeolocationMock }       
    ]
})
export class ThribeAppServicesModule {

}