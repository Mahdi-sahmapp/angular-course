import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})


export class CourseCardComponent {

  @Input({
    required: true // باعث میشه هنگام استفاده از این کامپوننت حتما مقدار کورس وارد بشه
  })
  course:Course;

  onCourseViewed() {
    console.log("button click from card component")  
  } 

}
