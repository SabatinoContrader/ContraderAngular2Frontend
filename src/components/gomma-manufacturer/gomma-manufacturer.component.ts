import { Component } from '@angular/core';
import { Gomma } from '../../models';
import { RestService } from '../../services/rest.service';

@Component({
    selector: 'gomma-manufacturer',
    template: require('./gomma-manufacturer.component.html'),
    styles: []
})
export class GommaManufacturerComponent {
    gomme: Gomma[] = [];

    constructor(private restService: RestService) {
        restService.getGommaManufacturer().subscribe((data: any) => {
            this.gomme = data;
        });
    }
}