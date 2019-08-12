import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JorgeucanoComponent } from './jorgeucano/jorgeucano.component';
import {HeroLoaderModule} from '@herodevs/hero-loader';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {GenericForm} from './form/generic-form';
import {InputForm} from './form/input-form/input-form';

@NgModule({
  declarations: [
    AppComponent,
    JorgeucanoComponent,
    GenericForm,
    InputForm
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroLoaderModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
