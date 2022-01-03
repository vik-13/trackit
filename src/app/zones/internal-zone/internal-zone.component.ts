import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { map, Observable, of, switchMap, timer } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat';
import { ActiveState } from 'src/app/shared/activity';
import User = firebase.User;

@Component({
  selector: 'app-internal-zone',
  templateUrl: './internal-zone.component.html',
  styleUrls: ['./internal-zone.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InternalZoneComponent {
  active$: Observable<ActiveState | null>;

  constructor(private _auth: AngularFireAuth, private _store: AngularFirestore, private _router: Router) {
    this.active$ = this._auth.user.pipe(
      switchMap((user: User | null) => {
        if (user) {
          return this._store.doc(`users/${user.uid}`).valueChanges().pipe(map((data: any) => {
            if (data) {
              return data.active;
            } else {
              return null;
            }
          }));
        } else {
          return of(null);
        }
      }),
      switchMap((active: ActiveState | null) => {
        if (active) {
          return timer(0, 1000).pipe(map(() => active));
        } else {
          return of(active);
        }
      })
    );
  }

  getCurrentTime(started: number): number {
    return (+new Date() - started) / 1000;
  }

  signOut(): void {
    this._auth.signOut().then(() => {
      this._router.navigate(['sign-in']).catch();
    }).catch();
  }
}
