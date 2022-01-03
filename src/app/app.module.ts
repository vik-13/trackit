import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { DashboardModule } from './dashboard';
import { EditModule } from './edit';
import { InternalZoneModule } from './zones/internal-zone';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,

    AppRoutingModule,

    InternalZoneModule,
    AuthModule,
    DashboardModule,
    EditModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
