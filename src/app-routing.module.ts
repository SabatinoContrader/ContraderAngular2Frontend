import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';

import { GommaListComponent } from './components/gomma-list/gomma-list.component';
import { InsertGommaComponent } from './components/insert-gomma/insert-gomma.component';

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
