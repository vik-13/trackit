import { NgModule } from '@angular/core';
import { InternalZoneComponent } from './internal-zone.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { TimeModule } from '../../shared/time/time.module';

@NgModule({
  declarations: [
    InternalZoneComponent
  ],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatMenuModule,
    CommonModule,
    TimeModule
  ],
  exports: [
    InternalZoneComponent
  ]
})
export class InternalZoneModule {}
