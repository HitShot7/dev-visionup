import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { LoginPagesComponent } from './pages/login-page/login-page.component'; // importa el componente
import {AccesoLoginComponent} from './pages/acceso-login/acceso-login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'acceso', pathMatch: 'full' },   // redirecciona automáticamente a acceso
  { path: 'login', component: LoginPagesComponent },       // página de login
  { path: 'acceso', component: AccesoLoginComponent },     // página de acceso
  { path: '**', redirectTo: 'acceso' }   
  ];
  
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    
  })

export class AppRoutingModule { }
//export class LoginPageComponent {}
