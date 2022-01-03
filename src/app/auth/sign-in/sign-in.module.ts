import { NgModule } from '@angular/core';
import { SignInComponent } from './sign-in.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    AngularFireAuthModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule
  ],
  exports: [
    SignInComponent
  ]
})
export class SignInModule {}
