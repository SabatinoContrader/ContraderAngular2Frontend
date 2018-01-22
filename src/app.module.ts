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
    NavbarComponent, WheelsStoreComponent
} from './components';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavbarComponent,
        GommaListComponent,
        GommaManufacturerComponent,
        InsertGommaComponent,
        WheelsStoreComponent
    ],
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
