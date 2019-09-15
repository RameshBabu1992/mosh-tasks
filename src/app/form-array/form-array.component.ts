import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {

  form = new FormGroup({
    topics : new FormArray([])
  });

  add(topic: HTMLInputElement){
    this.topics.push(new FormControl(topic.value));
    topic.value = "";
    // console.log(this.topics.controls);
  }

  remove(topic){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics(){
    return this.form.get('topics') as FormArray;
  }

  constructor() { }

  ngOnInit() {
  }

}