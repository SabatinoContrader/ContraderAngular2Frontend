import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { RestService } from './services/rest.service';

import {
    AppComponent,
    InsertGommaComponent,
    GommaListComponent,

    GommaManufacturerComponent,
    NavbarComponent,
        WheelsStoreComponent,
    VehicleListComponent,
    InsertVehicleComponent,
    SearchVehicleComponent

} from './components';



@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavbarComponent,
        GommaListComponent,
        GommaManufacturerComponent,
        InsertGommaComponent,
        WheelsStoreComponent,
        InsertGommaComponent,
        VehicleListComponent,
        InsertVehicleComponent,
        SearchVehicleComponent],
    imports: [
        AppRoutingModule,
        BrowserModule,
        HttpModule,
        ReactiveFormsModule
    ],
    providers: [
        RestService
    ]
})
export class AppModule {}
