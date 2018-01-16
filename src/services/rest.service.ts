import { Injectable } from '@angular/core';
import {
    Http,
    Response
} from '@angular/http';

import 'rxjs/add/operator/map';

import { Gomma } from '../models';

@Injectable()
export class RestService {

    baseUrl : String = "http://localhost:8080/gommastore";

    constructor(private http: Http) {}

    getListaGomme() {
        return this.http.get( baseUrl + 'gomme/all')
                .map((response) => {
                    const json = response.json();
                    if (response.ok) {
                        return json.data.data as Gomma[];
                    } else {
                        return this.logError(json);
                    }
                });
    }

    insertGomma(gomma: Gomma) {
        return this.http.post( baseUrl + 'gomme/new', gomma)
                .map((response) => {
                    const json = response.json();
                    if (response.ok) {
                        return json.data;
                    } else {
                        return this.logError(json);
                    }
                });
    }

    private logError(error: any) {
        console.error(error.error);
        throw error;
    }
}
