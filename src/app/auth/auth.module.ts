import { NgModule } from "@angular/core";
import { AuthComponent } from "./auth.component";
import { RouterModule } from "@angular/router";
import { SignInModule } from "./sign-in";

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    RouterModule,
    SignInModule
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule {}
