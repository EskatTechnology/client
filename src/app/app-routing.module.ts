import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './lib/auth.guard';
import { LoginComponent } from '../app/components/login/login.component';
import { HomeComponent } from '../app/components/home/home.component';
import { A_MainComponent } from '../app/components/appAdmin/a_main/a_main.component'
import { P_MainComponent } from '../app/components/appPersonal/p_main/p_main.component'
import { V_MainComponent } from './components/applVehicular/v_main/v_main.component';
import { I_MainComponent } from './components/appInventarios/i_main/i_main.component'


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
    component: A_MainComponent,
    //canActivate:[AuthGuard]
  },
  {
    path: 'personal',
    component: P_MainComponent,
    //canActivate:[AuthGuard]
  },
  {
    path: 'inventario',
    component: I_MainComponent,
    //canActivate:[AuthGuard]
  },
  {
    path: 'vehicular',
    component: V_MainComponent,
    //canActivate:[AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
