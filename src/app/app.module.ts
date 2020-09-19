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

import { P_MainComponent } from './components/appPersonal/p_main/p_main.component'
import { P_EmployeesComponent } from './components/appPersonal/p_employees/p_employees.component'

//Services
import { TokenInterceptorService } from './lib/token-interceptor.service';
import { LoginService } from '../app/services/login.service'
import { AppMensajeriaService } from './services/appMensajeria.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    A_MainComponent, 
    A_PersonalComponent,
    A_GruposComponent,
    A_EmpresaComponent,
    P_MainComponent,
    P_EmployeesComponent
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
    FormsModule
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
