import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';

import { InsertGommaComponent, GommaListComponent, AllgommeManufacturerComponent, GommeForSizeComponent} from "./components";


import {InsertVehicleComponent, SearchVehicleComponent, VehicleListComponent} from "./components";




const appRoutes: Routes = [

    {
        path: 'gomme',
        component: GommaListComponent
    },
    {
        path: 'newGomma',
        component: InsertGommaComponent
    },
    {
        path: 'vehicles',
        component: VehicleListComponent
    },
    {
        path: 'newVehicle',
        component: InsertVehicleComponent
    },
    {
        path: 'allgommeManufacturer',
        component: AllgommeManufacturerComponent

    },
    {
        path: 'gommeForSize',
        component: GommeForSizeComponent

    },
    {
        path: 'searchVehicle',
        component: SearchVehicleComponent

    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/gomme'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
