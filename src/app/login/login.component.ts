import { Component, OnInit } from '@angular/core';

import { LoginCred } from '../login-cred';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model= new LoginCred("something@example.com","abcd1234");
  match = "null";


  get diagnostic(){
    return JSON.stringify(this.model);
  }

  login(){
    this.loginService.match(this.model.username,this.model.password).subscribe(match => this.match=match);
  }

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

}
