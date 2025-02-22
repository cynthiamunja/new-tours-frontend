import { HttpEvent, HttpHandlerFn, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export function TokenInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
    if(req.url==='http://localhost:3000/auth/login' || req.url==='http://localhost:3000/auth/register'){
        return next(req)
    }else{
     const token = localStorage.getItem('token') as string
    const modifiedRequest= req.clone({headers:new HttpHeaders().append('authorization', `Bearer ${token}`)})
    return next(modifiedRequest);
    }
  }