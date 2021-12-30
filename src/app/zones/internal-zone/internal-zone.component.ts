import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";

@Component({
  selector: 'app-internal-zone',
  templateUrl: './internal-zone.component.html',
  styleUrls: ['./internal-zone.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InternalZoneComponent {
  constructor(private _auth: AngularFireAuth, private _router: Router) {
  }
  signOut(): void {
    this._auth.signOut().then(() => {
      this._router.navigate(['sign-in']).catch();
    }).catch();
  }
}
