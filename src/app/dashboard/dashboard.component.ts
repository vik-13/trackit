import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { map, Observable, of, switchMap, timer } from "rxjs";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Active, Category } from "./dashboard";
import firebase from "firebase/compat";
import User = firebase.User;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  categories$: Observable<Category[]>;
  active$: Observable<Active | null>;
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
      switchMap((active: Active | null) => {
        if (active) {
          return timer(0, 1000).pipe(map(() => active));
        } else {
          return of(active);
        }
      })
    );

    this.categories$ = this._auth.user.pipe(
      switchMap((user: User | null) => {
        if (user) {
          this.userId = user.uid;
          return this._store.collection<Category>(`users/${user.uid}/categories`).valueChanges({ idField: 'id' });
        } else {
          return of([]);
        }
      })
    );
  }

  toggle(categories: Category[] | null, category: Category, active: Active | null): void {
    if (active) {
      if (active.categoryId === category.id) {
        const end = +new Date();
        this._store.doc(`users/${this.userId}`).set({active: null}).catch();
        this._store.doc(`users/${this.userId}/categories/${category.id}`).update({total: category.total + Math.floor((end - active.started) / 1000)});
        this._store.collection(`users/${this.userId}/categories/${category.id}/times`).add({
          start: active.started,
          end
        }).catch();
      } else {
        const end = +new Date();
        const activeCategory = (categories || []).filter((c: Category) => c.id === active.categoryId);
        const total = activeCategory.length ? activeCategory[0].total : 0;
        this._store.doc(`users/${this.userId}`).set({
          active: {
            started: +new Date(),
            categoryId: category.id
          }
        }).catch();
        this._store.doc(`users/${this.userId}/categories/${active.categoryId}`).update({total: total + Math.floor((end - active.started) / 1000)});
        this._store.collection(`users/${this.userId}/categories/${active.categoryId}/times`).add({
          start: active.started,
          end
        }).catch();
      }
    } else {
      this._store.doc(`users/${this.userId}`).set({
        active: {
          started: +new Date(),
          categoryId: category.id
        }
      }).catch();
    }
  }

  showTime(category: Category, active: Active | null): number {
    if (active && active.categoryId === category.id) {
      return (category.total || 0) + Math.floor((+new Date() - active.started) / 1000);
    } else {
      return category.total || 0;
    }
  }
}
