import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  constructor(private _auth: AngularFireAuth, private _router: Router) {}

  signOut(): void {
    this._auth.signOut().then(() => {
      this._router.navigate(['sign-in']).catch();
    }).catch();
  }
}
