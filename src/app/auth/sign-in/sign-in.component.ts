import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent {
  constructor(private _auth: AngularFireAuth, private _router: Router) {}

  submit(form: NgForm): void {
    if (form.valid) {
      this._auth.signInWithEmailAndPassword(form.value.email, form.value.password).then((user) => {
        this._router.navigate(['dashboard']).catch();
      }).catch((err: Error) => {
        console.log(err);
      });
    }
  }
}
