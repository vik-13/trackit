import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ActivityDialogComponent } from './activity-dialog';
import { map, Observable, of, switchMap, tap, timer } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat';
import User = firebase.User;
import { RemoveDialogComponent } from './remove-dialog';
import { ActiveState, Activity } from '../shared/activity';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditComponent {
  activities$: Observable<Activity[]>;
  active$: Observable<ActiveState | null>;
  userId?: string;

  constructor(private _auth: AngularFireAuth,
              private _store: AngularFirestore,
              private _router: Router,
              private _changeDetectorRef: ChangeDetectorRef,
              private _dialog: MatDialog) {
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

    this.activities$ = this._auth.user.pipe(
      switchMap((user: User | null) => {
        if (user) {
          this.userId = user.uid;
          return this._store.collection<Activity>(`users/${user.uid}/activities`).valueChanges({ idField: 'id' });
        } else {
          return of([]);
        }
      })
    );
  }

  addActivity() {
    this._dialog.open(ActivityDialogComponent).afterClosed()
      .pipe(tap((value?: string) => {
        if (value) {
          this._store.collection(`users/${this.userId}/activities`).add({
            name: value,
            total: 0
          }).catch();
        }
      }))
      .subscribe();
  }

  editActivity(id: string, name: string): void {
    this._dialog.open(ActivityDialogComponent, {
      data: {
        name
      }
    }).afterClosed()
      .pipe(tap((value?: string) => {
        if (value) {
          this._store.doc(`users/${this.userId}/activities/${id}`).update({
            name: value
          }).catch();
        }
      }))
      .subscribe();
  }

  removeActivity(id: string, name: string): void {
    this._dialog.open(RemoveDialogComponent, {
      data: {
        name
      }
    }).afterClosed()
      .pipe(tap((confirmed: boolean) => {
        if (confirmed) {
          this._store.doc(`users/${this.userId}/activities/${id}`).delete().catch();
        }
      }))
      .subscribe();
  }

  toggle(activities: Activity[] | null, activity: Activity, active: ActiveState | null): void {
    if (active) {
      if (active.activityId === activity.id) {
        const end = +new Date();
        this._store.doc(`users/${this.userId}`).set({active: null}).catch();
        this._store.doc(`users/${this.userId}/activities/${activity.id}`).update({total: activity.total + Math.floor((end - active.started) / 1000)});
        this._store.collection(`users/${this.userId}/activities/${activity.id}/times`).add({
          start: active.started,
          end
        }).catch();
      } else {
        const end = +new Date();
        const currentActivity = (activities || []).filter((c: Activity) => c.id === active.activityId);
        const total = currentActivity.length ? currentActivity[0].total : 0;
        this._store.doc(`users/${this.userId}`).set({
          active: {
            started: +new Date(),
            activityId: activity.id
          } as ActiveState
        }).catch();
        this._store.doc(`users/${this.userId}/activities/${active.activityId}`).update({total: total + Math.floor((end - active.started) / 1000)});
        this._store.collection(`users/${this.userId}/activities/${active.activityId}/times`).add({
          start: active.started,
          end
        }).catch();
      }
    } else {
      this._store.doc(`users/${this.userId}`).set({
        active: {
          started: +new Date(),
          activityId: activity.id
        } as ActiveState
      }).catch();
    }
  }

  showTime(activity: Activity, active: ActiveState | null): number {
    if (active && active.activityId === activity.id) {
      return (activity.total || 0) + Math.floor((+new Date() - active.started) / 1000);
    } else {
      return activity.total || 0;
    }
  }

  signOut(): void {
    this._auth.signOut().then(() => {
      this._router.navigate(['sign-in']).catch();
    }).catch();
  }
}
