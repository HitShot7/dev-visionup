import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GestionarComponent } from './pages/gestionar/gestionar.component';
import { LoginPagesComponent } from './pages/login-page/login-page.component'; // importa el componente
import {AccesoLoginComponent} from './pages/acceso-login/acceso-login.component';
import { LayoutPrincipalComponent } from './layout-principal/layout-principal.component';
import { LayourtSinHeaderComponent } from './layourt-sin-header/layourt-sin-header.component';


export const routes: Routes = [
  {path:'', component: AppComponent },
  
  {
    path: '',
    component: LayourtSinHeaderComponent, // SIN HEADER
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginPagesComponent }, //pagina de login
    ]
  },

  {
    path: '',
    component: LayoutPrincipalComponent, // CON HEADER
    children: [
      { path: 'gestionar', component: GestionarComponent },
      { path: 'acceso', component: AccesoLoginComponent }// pagina de acceso
    ]
  }

  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    
  })

export class AppRoutingModule { }

