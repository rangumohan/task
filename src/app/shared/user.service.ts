import { HttpClient } from '@angular/common/http';
import { tokenName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  url = "http://localhost:4000/users/register";
  signUpUser(data): Observable<any> {
    return this.http.post(this.url + "/user", data);
  }
  login(data): Observable<any> {
    return this.http.post(this.url + "/authenticate", data)
    .pipe(map(res=>{return res;}))

  }
  getuserdata():Observable<any>
  {
    return this.http.get(this.url+"/userprofile");
  }
  register(data)
  {
    return this.http.post(this.url,data).pipe(map(res=>{return res;}))
  }
}

