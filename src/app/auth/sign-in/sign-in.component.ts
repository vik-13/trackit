import { ChangeDetectionStrategy, Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent {
  constructor(private _auth: AngularFireAuth) {}

  submit(form: NgForm): void {
    if (form.valid) {
      this._auth.signInWithEmailAndPassword(form.value.email, form.value.password).then((user) => {
        console.log(user);
      }).catch((err: Error) => {
        console.log(err);
      });
    }
  }
}
