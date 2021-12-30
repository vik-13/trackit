import { ChangeDetectionStrategy, Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-category-dialog',
  templateUrl: './add-category-dialog.component.html',
  styleUrls: ['./add-category-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCategoryDialogComponent {
  constructor(private _dialogRef: MatDialogRef<AddCategoryDialogComponent>) {
  }

  submit(form: NgForm): void {
    if (form.valid) {
      this._dialogRef.close(form.value.name);
    }
  }
}
