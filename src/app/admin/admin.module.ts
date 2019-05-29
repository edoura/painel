import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AdminRoutingModule } from './admin.routing.module';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    AdminRoutingModule
  ],
  declarations: [AdminComponent, HeaderComponent, SidebarComponent]
})
export class AdminModule { }
