import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { USERS } from './login-db';
import { LoginCred } from './login-cred';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  match(username: string, password: string): Observable<string>{
    if(USERS.find(user => user.username===username)){
      if(USERS.find(user => (user.username===username && user.password===password))){
        return of("TRUE");
      }else{
        // returns WP which indicates Wrong Password 
        return of("WP - Wrong Password");
      }
    }else{
      // returns WU which indicates Wrong Username
      return of("WU - Wrong Username");
    }
  }

  constructor() { }
}
