import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { Assignment7Component } from './assignment7/assignment7.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    LikeComponent,
    ZippyComponent,
    CourseFormComponent,
    ContactFormComponent,
    SignUpComponent,
    FormArrayComponent,
    NewCourseFormComponent,
    Assignment7Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
