import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './authservice.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    status: boolean;
    constructor(private router:Router,private authService: AuthService) { }
    canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      //  this.status = this.authService.isAuthenticated();
        if (localStorage.getItem('token')) {
            return true;
        }
        else {
            this.router.navigate(['/signup']);
            return false
        }
    }
}