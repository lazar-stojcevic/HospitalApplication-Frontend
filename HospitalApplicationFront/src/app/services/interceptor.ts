import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class CustomInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (localStorage.getItem('token')){
            const authReq = req.clone({
                headers: req.headers.set("Authorization",
                "Bearer " + localStorage.getItem('token'))
            });
    
            console.log('Intercepted HTTP call', authReq);
    
            return next.handle(authReq);   
        }else{
            const authReq = req.clone({
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                })
            });

            return next.handle(authReq); 
        }
    }
}