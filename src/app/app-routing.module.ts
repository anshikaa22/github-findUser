import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNoFoundComponent } from './pages/page-no-found/page-no-found.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';


import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['signin']);
const redirectLoggedInToHome = () => redirectLoggedInTo([''])
const routes: Routes = [
  { path: 'signin', component: SignInComponent,        
      canActivate: [AngularFireAuthGuard], 
      data: { authGuardPipe: redirectLoggedInToHome }},
      {
        path:'signup', component: SignUpComponent,
        },
      {
        path:'', component:HomeComponent,
        canActivate: [AngularFireAuthGuard], 
      data: { authGuardPipe: redirectUnauthorizedToLogin }},
      {
        path:'**', component: PageNoFoundComponent,
        

      }
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
