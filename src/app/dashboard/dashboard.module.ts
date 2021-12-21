import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule {}
