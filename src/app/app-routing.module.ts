import { RouterModule, Routes } from "@angular/router";
import { SignInComponent } from "./auth/sign-in";
import { AuthComponent } from "./auth/auth.component";
import { NgModule } from "@angular/core";
import { AngularFireAuthGuard } from "@angular/fire/compat/auth-guard";
import { redirectLoggedInTo, redirectUnauthorizedTo } from "@angular/fire/auth-guard";
import { DashboardComponent } from "./dashboard";

const redirectUnauthorizedToSignIn = () => redirectUnauthorizedTo(['sign-in']);
const redirectAuthorizedToDashboard = () => redirectLoggedInTo(['dashboard']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AuthComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectAuthorizedToDashboard,
    },
    children: [
      {
        path: 'sign-in',
        component: SignInComponent
      },
    ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorizedToSignIn,
    }
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
