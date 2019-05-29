import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CRUDComponent } from './crud.component';

const routes: Routes = [
    {
        path: '', component: CRUDComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CRUDRoutingModule { }
