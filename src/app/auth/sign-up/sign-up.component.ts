import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpComponent {
  constructor(private _auth: AngularFireAuth, private _router: Router) {}

  submit(form: NgForm): void {
    if (form.valid) {
      this._auth.createUserWithEmailAndPassword(form.value.email, form.value.password).then(() => {
        this._router.navigate(['dashboard']).catch();
      }).catch((err: Error) => {
        console.log(err);
      });
    }
  }
}
