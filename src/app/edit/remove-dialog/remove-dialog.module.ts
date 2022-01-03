import { NgModule } from '@angular/core';
import { RemoveDialogComponent } from './remove-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    RemoveDialogComponent
  ],
  imports: [
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [
    RemoveDialogComponent
  ]
})
export class RemoveDialogModule {}
