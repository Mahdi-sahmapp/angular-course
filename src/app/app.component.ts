import { Component, ViewChild } from '@angular/core';
import {COURSES} from '../db-data';
import { CourseCardComponent } from './course-card/course-card.component';
import { CommonModule } from '@angular/common';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports:[CommonModule,AppComponent,CourseCardComponent]
})
export class AppComponent {

  courses = COURSES;

  @ViewChild(CourseCardComponent)
  card: CourseCardComponent  

  startDate  = new Date(2000,0,1)
  
  title = COURSES[1].description

  onCourseSelected(course: Course){
    console.log(this.card)
  }

  }


