import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
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
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
   
    // console.log(this.cards.last)
    this.cards.changes.subscribe( cards=>console.log(cards))
  }

  courses = COURSES;

  @ViewChild('cardRef')
  card: CourseCardComponent  

  @ViewChild('container')
  containerDiv: ElementRef

  @ViewChildren(CourseCardComponent)
  cards: QueryList<CourseCardComponent>;

  startDate  = new Date(2000,0,1)
  
  title = COURSES[1].description

  onCourseSelected(course: Course){
    // console.log("card",this.card)
    // console.log("containerDiv",this.containerDiv)

  }

  onEdited(){
    this.courses.push(
      {
        id: 3,
        description: 'NgRx In Depth',
        longDescription: "Learn the modern Ngrx Ecosystem, including Store, Effects, Router Store, Ngrx Entity, Dev Tools and Schematics.",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-ngrx-course.png',
        category: 'ADVANCED'
      }
    )
  }

  }


