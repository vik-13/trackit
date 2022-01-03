import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-activity-dialog',
  templateUrl: './activity-dialog.component.html',
  styleUrls: ['./activity-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivityDialogComponent {
  constructor(private _dialogRef: MatDialogRef<ActivityDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: {name: string}) {}

  submit(form: NgForm): void {
    if (form.valid) {
      this._dialogRef.close(form.value.name);
    }
  }
}
