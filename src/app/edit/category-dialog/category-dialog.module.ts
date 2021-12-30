import { NgModule } from "@angular/core";
import { CategoryDialogComponent } from "./category-dialog.component";
import { MatDialogModule } from "@angular/material/dialog";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    CategoryDialogComponent
  ],
  imports: [
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule
  ],
  exports: [
    CategoryDialogComponent
  ]
})
export class CategoryDialogModule {}
