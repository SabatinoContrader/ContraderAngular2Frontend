import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';

import { GommaListComponent } from './components/gomma-list/gomma-list.component';
import { InsertGommaComponent } from './components/insert-gomma/insert-gomma.component';
import { GommaManufacturerComponent} from './components/gomma-manufacturer/gomma-manufacturer.component';
import {WheelsStoreComponent} from "./components";

const appRoutes: Routes = [
    {
        path: 'wheelsStore',
        component: WheelsStoreComponent
    },

    {
        path: 'gomme',
        component: GommaListComponent
    },
    {
        path: 'newGomma',
        component: InsertGommaComponent
    },
    {
        path: 'gommaManufacturer',
        component: GommaManufacturerComponent
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
