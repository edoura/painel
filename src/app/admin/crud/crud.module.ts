import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { CRUDRoutingModule } from './crud.routing.module';
import { CRUDComponent } from './crud.component';
import { CRUDService } from './crud.service';
import { CrudFormComponent } from './components/crud-form/crud-form.component';
import { CrudListComponent } from './components/crud-list/crud-list.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    CommonModule,
    CRUDRoutingModule,
    AngularFireDatabaseModule,
    ModalModule.forRoot()
  ],
  declarations: [CRUDComponent, CrudFormComponent, CrudListComponent],
  providers: [CRUDService, ModalModule]
})
export class CRUDModule { }
