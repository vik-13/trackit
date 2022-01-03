import { NgModule } from '@angular/core';
import { EditComponent } from './edit.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { ActivityDialogModule } from './activity-dialog';
import { CommonModule } from '@angular/common';
import { TimeModule } from '../shared/time/time.module';
import { RemoveDialogModule } from './remove-dialog';

@NgModule({
  declarations: [
    EditComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,

    RemoveDialogModule,
    ActivityDialogModule,
    TimeModule
  ],
  exports: [
    EditComponent
  ]
})
export class EditModule {}
