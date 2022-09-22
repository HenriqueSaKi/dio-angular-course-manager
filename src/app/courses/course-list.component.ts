import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {  // export porque será visível para os demais componentes

    filteredCourses: Course[] = [];

    //O underline serve para identificar que essa variávei vai ficar apenas nesse componente
    _courses: Course[] = [];
    _filterBy!: string; 

    constructor(private courseService: CourseService) { }

    ngOnInit(): void {
        this.retrieveAll();
    }

    retrieveAll(): void {
        this.courseService.retrieveAll().subscribe({
            next: courses => {
                this._courses = courses;
                this.filteredCourses = this._courses;
            },
            error: err => console.log('Error', err)
        });
    }

    deleteById(courseId: number): void {
        this.courseService.deleteById(courseId).subscribe({
            next: () => {
                console.log('Deleted with success');
                this.retrieveAll();
            },
            error: err => console.log('Error', err)
        });
    }

    set filter(value: string) {
        this._filterBy = value;


        // Iguala os dois valores, para serem filtrados, mantendo os dois lowerCase.
        // O indexOf > -1 é para realizar a busca para qualquer sequência equivalente 
        this.filteredCourses = this._courses.filter(
            (course: Course) => 
            course.name.toLowerCase().indexOf(this._filterBy.toLowerCase()) > -1);
    }

    get filter() {
        return this._filterBy;
    }

}