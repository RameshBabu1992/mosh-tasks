import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  log(x){
    console.log(x);
  }
  
  submit(x){
    for(let key in x.value){
      console.log(key+" : "+x.value[key]);
    }
  }

}