import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { AddCategoryDialogComponent } from "./add-category-dialog";
import { tap } from "rxjs";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Category } from "./dashboard";

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  categories: Category[] = [];
  userId?: string;

  constructor(private _auth: AngularFireAuth,
              private _store: AngularFirestore,
              private _router: Router,
              private _changeDetectorRef: ChangeDetectorRef,
              private _dialog: MatDialog) {
    this._auth.user.pipe(
      tap((user) => {
        if (user) {
          this.userId = user.uid;

          this._store.collection<Category>(`users/${this.userId}/categories`).valueChanges({ idField: 'id' }).subscribe((data) => {
            this.categories = data;
            console.log(data);
            this._changeDetectorRef.markForCheck();
          });
        } else {
          this.userId = undefined;
        }
      })
    ).subscribe();
  }

  addCategory() {
    this._dialog.open(AddCategoryDialogComponent).afterClosed()
      .pipe(tap((value?: string) => {
        if (value) {
          this._store.collection(`users/${this.userId}/categories`).add({
            name: value,
          }).catch();
        }
      }))
      .subscribe();
  }

  toggle(id: string): void {
    this._store.collection(`users/${this.userId}/categories/${id}/times`).add({
      start: +new Date()
    }).catch();
  }

  signOut(): void {
    this._auth.signOut().then(() => {
      this._router.navigate(['sign-in']).catch();
    }).catch();
  }
}
