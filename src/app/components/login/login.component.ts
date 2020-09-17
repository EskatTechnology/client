import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";
import { LoginService } from '../../services/login.service'
import { Login, Empresa } from '../../models/login.model';
import { Router } from '@angular/router';
import { TranslateService} from '@ngx-translate/core';
import { Alert } from '../../lib/alerts';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private service: LoginService,
    private router: Router,
    private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
  }

  
  public userEmpty = false;
  public passEmpty = false;
  //public isError = false;
  public Error: string;

  User: Login = new Login();
  Empresa : Empresa = new Empresa();

  reset(form?: NgForm){
    if(form != null){
      form.reset();
      this.User = new Login();
    }    
  }  
  
  onLogin(form: NgForm){     
    this.removeDatos();      
    if(form.value.User == null){
      this.userEmpty=true;
      setTimeout(() => {this.userEmpty=false;}, 1000);
    }
    else if(form.value.Pass == null){
      this.passEmpty=true;
      setTimeout(() => {this.passEmpty=false;}, 1000);
    }
    else{     
      if(form.valid){         
        this.spinner.show();
        this.service.getLogin(form.value).subscribe(res => {    
          if(res.status == 200){
            if(res.body[0].IdUsuario == ""){
              localStorage.setItem('Empresa', (res.body[0].NombreEmpresa));
              localStorage.setItem('IdEmpresa', (res.body[0].IdEmpresa));
              localStorage.setItem('IdUsuario', "0");
              localStorage.setItem('IdArea', "0");
              localStorage.setItem('Acceso', "0");
              localStorage.setItem('NombreUsuario', "Admin");
              localStorage.setItem('NombreBase', (res.body[0].NombreBase));
              localStorage.setItem('Token', res.headers.get('Token'));
              localStorage.setItem('Refresh', res.headers.get('Refresh')); 
            }
            else {
              localStorage.setItem('Empresa', (res.body[0].NombreEmpresa));
              localStorage.setItem('IdEmpresa', (res.body[0].IdEmpresa));
              localStorage.setItem('IdUsuario', (res.body[0].IdUsuario));
              localStorage.setItem('IdArea', "");
              localStorage.setItem('Acceso', "1");
              localStorage.setItem('NombreUsuario', (res.body[0].Nombres + " " + res.body[0].Apellidos));
              localStorage.setItem('NombreBase', (res.body[0].NombreBase));
              localStorage.setItem('Token', res.headers.get('Token'));
              localStorage.setItem('Refresh', res.headers.get('Refresh')); 
            }
            this.router.navigate(['/home']);
            //this.Empresa = res.body[0];
            //this.router.navigate(['/home', this.Empresa]);
            this.spinner.hide(); 
          }
          else if(res.status == 205){
            this.translate.get('data-incorrect').subscribe((res: string) => {
              new Alert().error("icon-user-times",res);
            });
            this.spinner.hide(); 
          }          
        }, err =>{
          if(err.status == 404){
            this.translate.get('noRecurso').subscribe((res: string) => {
              new Alert().error("icon-cancel-circle",res);
            });
            this.spinner.hide(); 
          }
          else if(err.status == 0){
            this.translate.get('noConexion').subscribe((res: string) => {
              new Alert().info("icon-cloud_off", res);
            });   
            this.spinner.hide(); 
          }                          
        });              
      }
    }
  }

  removeDatos(){
    localStorage.removeItem('Empresa');
    localStorage.removeItem('IdEmpresa');
    localStorage.removeItem('IdUsuario');
    localStorage.removeItem('IdArea');
    localStorage.removeItem('Acceso');
    localStorage.removeItem('NombreUsuario');
    localStorage.removeItem('NombreBase');
    localStorage.removeItem('Token');
    localStorage.removeItem('Refresh'); 
  }
}



 /*this.service.getLogin(form.value).subscribe(res=>{
          var x = res;
          if(!x.hasOwnProperty("Error")){         
            this.service.Empresa = {
              IdUsuario: res[0].IdUsuario,
              IdEmpresa: res[0].IdEmpresa,
              Nombres: res[0].Nombres,
              Apellidos: res[0].Apellidos,
              NombreEmpresa: res[0].NombreEmpresa,
              NombreBase: res[0].NombreBase
            }      
            console.log(this.service.Empresa)
            ResHeader.idUser = res.header('Token')
            console.log(ResHeader.idUser)
          }
          else{
            console.log(res)
            this.isError=true;
            this.Error = "User or password incorrect";
            setTimeout(() => {this.isError=false;}, 3000);            
          }
        },
        err => {
          console.log(err) 
          this.isError=true;
          this.Error = "Error of connection";
          setTimeout(() => {this.isError=false;}, 3000);   
          console.log(new Empresa())   
       })*/