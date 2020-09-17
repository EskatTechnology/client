import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/components/login/login.component';
import { HomeComponent } from '../app/components/home/home.component';
import { PrincipalComponent } from '../app/components/appPrincipal/principal/principal.component'
import { MainComponent } from '../app/components/appPersonal/main/main.component'
import { AuthGuard } from './lib/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    //canActivate:[AuthGuard]
  },
  {
    path: 'config',
    component: PrincipalComponent,
    //canActivate:[AuthGuard]
  },
  {
    path: 'personal',
    component: MainComponent,
    //canActivate:[AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
