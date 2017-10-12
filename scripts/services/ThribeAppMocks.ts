
/*This file will contain Mocks for the thribe app services*/
import { Injectable } from 'core';
import { Geolocation, Geoposition, GeolocationOptions } from 'ionic-native-geolocation';

@Injectable()
export class GeolocationMock extends Geolocation {

    constructor() {
        super();
    }    
    getCurrentPosition(options?: GeolocationOptions): Promise<Geoposition> {
        return new Promise<Geoposition>((resolve, reject) => {            
            console.log("Geolocation plugin just fired in mocking mode");
        })
    }

}