import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(
        {
            apiKey: environment.FIREBASE_API_KEY,
            authDomain: "online-footprint.firebaseapp.com",
            databaseURL: "https://online-footprint.firebaseio.com",
            projectId: "online-footprint",
            storageBucket: "online-footprint.appspot.com",
            messagingSenderId: "844518887878"
          }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
