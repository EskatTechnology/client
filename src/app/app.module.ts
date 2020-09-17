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
import { PrincipalComponent } from './components/appPrincipal/principal/principal.component'
import { PersonalComponent } from './components/appPrincipal/personal/personal.component'
import { GruposComponent } from './components/appPrincipal/grupos/grupos.component'
import { EmpresaComponent } from './components/appPrincipal/empresa/empresa.component'
import { MainComponent } from './components/appPersonal/main/main.component'

import { EmployeesComponent } from '../app/components/appPersonal/employees/employees.component'

//Services
import { TokenInterceptorService } from './lib/token-interceptor.service';
import { LoginService } from '../app/services/login.service'
import { AppMensajeriaService } from './services/appMensajeria.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PrincipalComponent, 
    PersonalComponent,
    GruposComponent,
    EmpresaComponent,
    MainComponent,
    EmployeesComponent
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
