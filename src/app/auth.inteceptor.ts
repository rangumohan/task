import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
//import { AuthService } from './auth/auth.service';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor() { }
        intercept(request: HttpRequest<any>, next: HttpHandler) {
        // alert(localStorage.getItem('token'))
        console.log(localStorage.getItem('token'));
        request = request.clone({
            setHeaders: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });

        return next.handle(request);
    }
}