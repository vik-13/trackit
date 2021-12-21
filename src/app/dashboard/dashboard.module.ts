import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { AddCategoryDialogModule } from "./add-category-dialog";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,

    AddCategoryDialogModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule {}
