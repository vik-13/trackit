import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { TimeModule } from '../shared/time/time.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    TimeModule,
    RouterModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule {}
