import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../models/login.model';
import { ApiRout } from '../lib/keys'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }
  
  getLogin(formData : Login) {
    return  this.http.post(ApiRout.api + "/login", formData, { observe: 'response'});
  }

  getLogout() {
    let headers = new HttpHeaders({'Refresh': localStorage.getItem('Refresh')});
    return  this.http.post(ApiRout.api + "/logout", { observe: 'response'}, { headers });
  }

  getProfile(){
    return  this.http.get(ApiRout.api + "/home");
  }
}

