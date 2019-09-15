import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'app-assignment7',
  templateUrl: './assignment7.component.html',
  styleUrls: ['./assignment7.component.css']
})
export class Assignment7Component implements OnInit {

  form = new FormGroup({
    oldPassword: new FormControl('', Validators.required ,PasswordValidators.oldPasswordIsValid),
    newPassword: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  });

  submit(){
    if(this.newPassword.value!=this.confirmPassword.value){
      this.form.setErrors({
        passwordsNotMatched: true
      });
    }
    console.log(this.form.errors);
    // console.log(this.form.value);
  }

  get oldPassword(){
    return this.form.get('oldPassword');
  }

  get newPassword(){
    return this.form.get('newPassword');
  }

  get confirmPassword(){
    return this.form.get('confirmPassword');
  }

  constructor() { }

  ngOnInit() {
  }

}