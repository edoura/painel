import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboar.routing.module';
import { DashboardComponent } from './dashboard.component';
import { InfoCardComponent } from './components/info-card/info-card.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent, InfoCardComponent]
})
export class DashboardModule { }
