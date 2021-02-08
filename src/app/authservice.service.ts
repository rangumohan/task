import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    status: boolean;
    login(status) {
        this.status = status;
    }
    logOut(status) {
        this.status = status;
    }
    isAuthenticated() {
        return localStorage.getItem('token');
        // if (this.status) {

        //     return true;
        // }
        // else {
        //     return false;
        // }
    }
}