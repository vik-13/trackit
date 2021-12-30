import { ChangeDetectionStrategy, Component, Inject } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-category-dialog',
  templateUrl: './category-dialog.component.html',
  styleUrls: ['./category-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryDialogComponent {
  constructor(private _dialogRef: MatDialogRef<CategoryDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: {name: string}) {}

  submit(form: NgForm): void {
    if (form.valid) {
      this._dialogRef.close(form.value.name);
    }
  }
}
