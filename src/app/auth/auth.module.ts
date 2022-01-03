import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { SignInModule } from './sign-in';
import { SignUpModule } from './sign-up';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    RouterModule,
    SignInModule,
    SignUpModule
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule {}
