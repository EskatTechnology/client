import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor( ) { }

  intercept(req, next){
    const tokenizeReq = req.clone({
      setHeaders:{
        Authorization: `${localStorage.getItem('Token')}`
      }
    })
      
    return next.handle(tokenizeReq);
  }

  
}
