import { Injectable } from '@angular/core';
import {
    Http,
    Response
} from '@angular/http';

import 'rxjs/add/operator/map';

import {Gomma, Vehicle} from '../models';

@Injectable()
export class RestService {

    baseUrl : String = "http://localhost:8080/gommastore/";

    constructor(private http: Http) {}

    getListaGomme() {
        return this.http.get( this.baseUrl + 'gomme/allgomme')
                .map((response) => {
                    const json = response.json();
                    if (response.ok) {
                        return json.data as Gomma[];
                    } else {
                        return this.logError(json);
                    }
                });
    }

    insertGomma(gomma: String) {
        return this.http.post( this.baseUrl + 'gomme/insertGomme', gomma)
                .map((response) => {
                    const json = response.json();
                    if (response.ok) {
                        return json.data;
                    } else {
                        return this.logError(json);
                    }
                });
    }


    getGommaManufacturer() {
        return this.http.get( this.baseUrl + 'gomme/allgommeManufacturer?manufacturer')
            .map((response) => {
                const json = response.json();
                if (response.ok) {
                    return json.data as Gomma[];
                }else {
                    return this.logError(json);
                }
            });
    }

    getListaVehicles() {
        return this.http.get( this.baseUrl + 'vehicle/allvehicles')
            .map((response) => {
                const json = response.json();
                if (response.ok) {
                    return json.data as Vehicle[];
                } else {
                    return this.logError(json);
                }
            });
    }
    insertVehicle(vehicle: String) {
        return this.http.post( this.baseUrl + 'vehicle/insertVehicle', vehicle)
            .map((response) => {
                const json = response.json();
                if (response.ok) {
                    return json.data;
                } else {
                    return this.logError(json);
                }
            });
    }


    searchVehicle(vehicle: String){
        return this.http.post(this.baseUrl + 'vehicle/searchVehicle',vehicle)
            .map((response)=>{
                const json=response.json();
                if(response.ok){
                    return json.data as Gomma[];
                }else{
                    return this.logError(json);
                }
            });
    }


    private logError(error: any) {
        console.error(error.error);
        throw error;
    }
}
