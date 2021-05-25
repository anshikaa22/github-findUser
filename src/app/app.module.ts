import {environment} from "./../environments/environment"
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ReposComponent } from './components/repos/repos.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNoFoundComponent } from './pages/page-no-found/page-no-found.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';


import {FormsModule} from "@angular/forms"
import {HttpClientModule} from "@angular/common/http"

import { AngularFireAuthModule } from "@angular/fire/auth"
import {AngularFireModule} from "@angular/fire"

import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import {ToastrModule} from "ngx-toastr"

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ReposComponent,
    UserCardComponent,
    HomeComponent,
    PageNoFoundComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
