import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "./course";

@Injectable({
    providedIn: 'root'
})
// Classes de serviços são criadas para poder criar métodos com variáveis estáticas, ou seja, que não serão alteradas.
export class CourseService {

    private coursesUrl: string = "http://localhost:3100/api/courses";

    constructor(private httpClient: HttpClient) {  }

    retrieveAll(): Observable<Course[]> {
        return this.httpClient.get<Course[]>(this.coursesUrl);
    }

    retrieveById(id: number): Observable<Course> {
        return this.httpClient.get<Course>(`${this.coursesUrl}/${id}`);
    }

    save(course: Course): Observable<Course> {
        if(course.id) {
            return this.httpClient.put<Course>(`${this.coursesUrl}/${course.id}`, course);
        }
        else {
            return this.httpClient.post<Course>(`${this.coursesUrl}`, course);
        }
    }

    deleteById (id: number): Observable<any> {
        return this.httpClient.delete<any>(`${this.coursesUrl}/${id}`);
    }

}

var COURSES: Course[] = [
    {
        id: 1,
        name: 'Angular Forms',
        releaseDate: 'December, 2, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.',
        duration: 120,
        code: 'XPS-8796',
        rating: 4.5, 
        price: 99.99,
        imageUrl: '/assets/images/forms.png'
    },
    {
        id: 2,
        name: 'Angular HTTP',
        releaseDate: 'November, 4, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de HTTP.',
        duration: 80,
        code: 'LKL-1094',
        rating:4,
        price: 45.99,
        imageUrl: '/assets/images/http.png'
    },
    {
        id: 3,
        name: 'Angular CLI',
        releaseDate: 'December, 2, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Angular CLI.',
        duration: 120,
        code: 'MKL-5030',
        rating: 4.8, 
        price: 99.99,
        imageUrl: '/assets/images/cli.png'
    },
    {
        id: 4,
        name: 'Angular Router',
        releaseDate: 'November, 4, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Router.',
        duration: 80,
        code: 'RTP-4405',
        rating: 3.5,
        price: 45.99,
        imageUrl: '/assets/images/router.png'
    },
    {
        id: 5,
        name: 'Angular Animations',
        releaseDate: 'December, 2, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Animations.',
        duration: 50,
        code: 'QFT-5522',
        rating: 3, 
        price: 49.99,
        imageUrl: '/assets/images/animations.png'
    }
]