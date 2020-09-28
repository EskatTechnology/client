import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from '../../models/login.model';
import { LoginService } from '../../services/login.service';
import Swal from 'sweetalert2'
import { AppMensajeriaService } from 'src/app/services/appMensajeria.service';

@Component({
  selector: 'app-menu',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(
    public translate: TranslateService,    
    //private activeRoute: ActivatedRoute,
    private router: Router,
    private service: LoginService,
    private mensajes: AppMensajeriaService
  ) {}

  public activeLang: string;
  Empresa = new Empresa();

  user = "";
  ngOnInit(): void {
    
    /*this.mensajes.getValidarMensajes(localStorage.getItem('IdUsuario')).subscribe((res) => { 
      console.log(res)
    });*/
  }

  onChange(flag: string){
    if(flag == "us") {
      localStorage.setItem('Idioma', 'en');
      this.activeLang = localStorage.getItem('Idioma');
      this.translate.use(this.activeLang);
    } else {
      localStorage.setItem('Idioma', 'es');
      this.activeLang = localStorage.getItem('Idioma');
      this.translate.use(this.activeLang);
    }
  }

  logout(){       
    Swal.fire({
			title: this.translate.instant('estaSeguro'),
			text: this.translate.instant('cerrarSesion'),
		  showCancelButton: true,
			confirmButtonText: this.translate.instant('btnSI'),
			cancelButtonText: this.translate.instant('btnNO'),
			position:'top'
    }).then((result) => {			 
      if (result.isConfirmed) {
        this.service.getLogout().subscribe((res) => { 
          if(res == "OK"){
            localStorage.removeItem('IdUser');
            localStorage.removeItem('Token');
            localStorage.removeItem('Refresh');
            this.router.navigate(['/login']);
          }      
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        //console.log("false")
      }			 
    })	
  }

  Config(){
    this.router.navigate(['/config']);
  }

  Personal(){
    this.router.navigate(['/personal']);
  }

  Vehicular(){
    this.router.navigate(['/vehicular']);
  }
}
