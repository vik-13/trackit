import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './auth/sign-in';
import { AuthComponent } from './auth/auth.component';
import { NgModule } from '@angular/core';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';
import { redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { DashboardComponent } from './dashboard';
import { SignUpComponent } from './auth/sign-up';
import { EditComponent } from './edit';
import { InternalZoneComponent } from './zones/internal-zone';

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
      {
        path: 'sign-up',
        component: SignUpComponent
      },
    ]
  },
  {
    path: '',
    component: InternalZoneComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorizedToSignIn,
    },
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'edit',
        component: EditComponent,
      },
    ]
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
