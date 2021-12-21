import { RouterModule, Routes } from "@angular/router";
import { SignInComponent } from "./auth/sign-in";
import { AuthComponent } from "./auth/auth.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'sign-in',
        component: SignInComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
