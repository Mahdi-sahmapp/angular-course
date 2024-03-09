import { Component, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../model/course';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})


export class CourseCardComponent {


  @Input({
    required: false // باعث میشه هنگام استفاده از این کامپوننت حتما مقدار کورس وارد بشه
  })
  course:Course;

  @Input({required: false})
  index: number;

  @Output()
  courseSelected = new EventEmitter<Course>();

  onCourseViewed() {
    console.log("button click -- Course-card")  

    this.courseSelected.emit(this.course);
  }
  
  cardClass(){

    if(this.course.category == 'BEGINNER'){
        return  'beginner'  //['beginner']
    }

    // another syntax
    // return{
    //   'beginner': this.course.category == 'BEGINNER',
    // }
  }
  
}
