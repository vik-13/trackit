import { NgModule } from "@angular/core";
import { AddCategoryDialogComponent } from "./add-category-dialog.component";
import { MatDialogModule } from "@angular/material/dialog";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations: [
    AddCategoryDialogComponent
  ],
  imports: [
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    AddCategoryDialogComponent
  ]
})
export class AddCategoryDialogModule {}
