import { NgModule } from "@angular/core";
import { InternalZoneComponent } from "./internal-zone.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";
import { MatMenuModule } from "@angular/material/menu";

@NgModule({
  declarations: [
    InternalZoneComponent
  ],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatMenuModule
  ],
  exports: [
    InternalZoneComponent
  ]
})
export class InternalZoneModule {}
