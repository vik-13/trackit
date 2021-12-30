import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";
import { MatCardModule } from "@angular/material/card";
import { CommonModule } from "@angular/common";
import { TimeModule } from "../shared/time/time.module";

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    TimeModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule {}
