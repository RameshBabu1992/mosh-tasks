import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  flag=true;
  viewMode:string = "map";
  title = 'ProjectorApp';
  courses = ["Course 1", "Course 2"];
  dbData = {
    didLike:false,
    counter:112
  }
  counter(didLike){
    this.dbData.counter += didLike?1:-1;
  }
  isCoursesPresent(){
    return (this.courses.length)?true:false;
  }
}
