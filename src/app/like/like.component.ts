import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input('didLike') didLike:boolean;
  @Output() counter = new EventEmitter();
  toggle(){
    this.didLike = !this.didLike;
    this.counter.emit(this.didLike);
  }
  constructor() { }

  ngOnInit() {
  }

}