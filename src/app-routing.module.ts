import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';

import { Navbar } from './components/navbar/navbar.component';
import { GommaListComponent } from './components/gomma-list/gomma-list.component';
import { InsertGommaComponent } from './components/form-viewer/insert-gomma.component';

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
