import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { ApiRout } from '../lib/keys'

@Injectable({providedIn: 'root'})

export class AppMensajeriaService {
    constructor(private http: HttpClient) { }
    
    getValidarMensajes(idUsuario: string) {
        return  this.http.get(ApiRout.api + "/validarMensajes/" + idUsuario);
    }
}