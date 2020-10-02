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

//Inventarios
import { I_MainComponent } from './components/appInventarios/i_main/i_main.component'
import { I_StockComponent } from './components/appInventarios/i_stock/i_stock.component'
import { I_PedidosComponent } from './components/appInventarios/i_pedidos/i_pedidos.component'
import { I_EmpresasComponent } from './components/appInventarios/i_empresas/i_empresas.component'
import { I_AlmacenesComponent } from './components/appInventarios/i_almacenes/i_almacenes.component'
import { I_DespachosComponent } from './components/appInventarios/i_despachos/i_despachos.component'
import { I_TrazabilidadComponent } from './components/appInventarios/i_trazabilidad/i_trazabilidad.component'

//Vehicular
import { V_MainComponent } from './components/applVehicular/v_main/v_main.component'
import { V_PersonalComponent } from './components/applVehicular/v_personal/v_personal.component'
import { V_RutasComponent } from './components/applVehicular/v_rutas/v_rutas/v_rutas.component'
import { V_Rutas1Component } from './components/applVehicular/v_rutas/v_rutas1/v_rutas1.component'
import { V_Rutas2Component } from './components/applVehicular/v_rutas/v_rutas2/v_rutas2.component'
import { V_CheckComponent } from './components/applVehicular/v_check/v_check/v_check.component'
import { V_Check1Component } from './components/applVehicular/v_check/v_check1/v_check1.component'
import { V_Check2Component } from './components/applVehicular/v_check/v_check2/v_check2.component'
import { V_Check3Component } from './components/applVehicular/v_check/v_check3/v_check3.component'
import { V_PermisosComponent } from './components/applVehicular/v_permisos/v_permisos/v_permisos.component'
import { V_Permisos1Component } from './components/applVehicular/v_permisos/v_permisos1/v_permisos1.component'
import { V_Permisos2Component } from './components/applVehicular/v_permisos/v_permisos2/v_permisos2.component'

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
    //Inventarios
    I_MainComponent,
    I_StockComponent,
    I_PedidosComponent,
    I_EmpresasComponent,
    I_AlmacenesComponent,
    I_DespachosComponent,
    I_TrazabilidadComponent,
    //Vehicular
    V_MainComponent,
    V_PersonalComponent,
    V_RutasComponent,
    V_Rutas1Component,
    V_Rutas2Component,
    V_CheckComponent,
    V_Check1Component,
    V_Check2Component,
    V_Check3Component,
    V_PermisosComponent,
    V_Permisos1Component,
    V_Permisos2Component
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
