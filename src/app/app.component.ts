import { Component } from '@angular/core';
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

  onCourseSelected(course: Course){
    console.log("Course selected --- app component", course)
  }

  }


