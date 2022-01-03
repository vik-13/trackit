import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-remove-dialog',
  templateUrl: './remove-dialog.component.html',
  styleUrls: ['./remove-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RemoveDialogComponent {
  constructor(private _dialogRef: MatDialogRef<RemoveDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: {name: string}) {}

  cancel() {
    this._dialogRef.close(false);
  }

  remove() {
    this._dialogRef.close(true);
  }
}
