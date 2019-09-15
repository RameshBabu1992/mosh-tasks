import { Validators, AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators{
  static oldPasswordIsValid(control: AbstractControl): Promise<ValidationErrors | null>{
    return new Promise((resolve,reject) => {
      setTimeout(()=>{
        if(control.value != "anas1234"){
          resolve({
            oldPasswordIsValid: true
          });
        }else{
          resolve(null);
        }
      },4000);
    });
  }
}