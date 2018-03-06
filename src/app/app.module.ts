import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { FormsModule } from '@angular/forms';

var firebaseConfig = {
  apiKey: "AIzaSyC9_qf0lnP_OR7SIMUhE6YRax97J6lnaP4",
  authDomain: "content-list-c3d42.firebaseapp.com",
  databaseURL: "https://content-list-c3d42.firebaseio.com",
  projectId: "content-list-c3d42",
  storageBucket: "content-list-c3d42.appspot.com",
  messagingSenderId: "698234967607"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig), 
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
