import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from '../app/components/login/login.component';
import { HomeComponent } from '../app/components/home/home.component';

import { A_MainComponent } from './components/appAdmin/a_main/a_main.component'
import { A_PersonalComponent } from './components/appAdmin/a_personal/a_personal.component'
import { A_GruposComponent } from './components/appAdmin/a_grupos/a_grupos.component'
import { A_EmpresaComponent } from './components/appAdmin/a_empresa/a_empresa.component'

//Personal
import { P_MainComponent } from './components/appPersonal/p_main/p_main.component'
import { P_EmployeesComponent } from './components/appPersonal/p_employees/p_employees.component'
import { P_TurnosComponent } from './components/appPersonal/p_turnos/p_turnos.component'
import { P_RegistrosComponent } from './components/appPersonal/p_registros/p_registros.component'
import { P_PermisosComponent } from './components/appPersonal/permisos/p_permisos/p_permisos.component'
import { P_Permisos1Component } from './components/appPersonal/permisos/p_permisos1/p_permisos1.component'
import { P_Permisos2Component } from './components/appPersonal/permisos/p_permisos2/p_permisos2.component'
import { P_GpsComponent } from './components/appPersonal/gps/p_gps/p_gps.component'
import { P_Gps1Component } from './components/appPersonal/gps/p_gps1/p_gps1.component'
import { P_Gps2Component } from './components/appPersonal/gps/p_gps2/p_gps2.component'
import { P_TaskComponent } from './components/appPersonal/p_task/p_task.component'

//Vehicular
import { V_MainComponent } from './components/applVehicular/v_main/v_main.component'
import { V_PersonalComponent } from './components/applVehicular/v_personal/v_personal.component'
import { V_RutasComponent } from './components/applVehicular/v_rutas/v_rutas/v_rutas.component'

//Services
import { TokenInterceptorService } from './lib/token-interceptor.service';
import { LoginService } from '../app/services/login.service'
import { AppMensajeriaService } from './services/appMensajeria.service';
import { from } from 'rxjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    A_MainComponent, 
    A_PersonalComponent,
    A_GruposComponent,
    A_EmpresaComponent,
    //Personal
    P_MainComponent,
    P_EmployeesComponent,
    P_TurnosComponent,
    P_RegistrosComponent,
    P_PermisosComponent,
    P_Permisos1Component, 
    P_Permisos2Component,
    P_GpsComponent,
    P_Gps1Component,
    P_Gps2Component,
    P_TaskComponent,
    //Vehicular
    V_MainComponent,
    V_PersonalComponent,
    V_RutasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxSpinnerModule,
    HttpClientModule,  
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [ HttpClient ]
      }
    }), 
    FormsModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCTlgjYXSfzYzUkN7RTr3Ja30r_wB6h-rs'
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    LoginService,
    AppMensajeriaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
