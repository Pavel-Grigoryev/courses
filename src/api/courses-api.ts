import {AxiosInstance} from 'axios';

export class CoursesApi {
    constructor(private instance: AxiosInstance) {
    }

    public getCourses() {
        return this.instance.get<Course[]>('/courses');
    }

    public getCourse(id: string) {
		debugger
        return this.instance.get<CurrCourse>(`/courses/${id}`);
    }
}

// Types

export type Course =
    {
        id: number,
        img: string,
        icon: string,
        title: string,
        cls_text: string,
        st_text: string,
        start_text: string,
        course_title: string,
        course_link: string,
        course_name: string,
        course_price: string,
    }

export type CurrCourse = {
	id: number;
	img: string;
	author: Author;
	category: string[];
	title: string;
	cls_text: string;
	st_text: string;
	rating: Rating;
	details: Details;
	description: string;
	instructor: Instructor;
	review: Review[];
}
export type Author = {
	ava: string;
	name: string;
	link: string;
	award: string;
}
export type Rating = {
	stars: string;
	numberOfratings: string;
}
export type Details = {
	course_price: string;
	lessons: string;
	quizess: string;
	students: string;
	duration: string;
	skillLevel: string;
	language: string;
	certificate: boolean;
}
export type Instructor = {
	ava: string;
	name: string;
	numberOfstudents: string;
	about: string;
}
export type Review = {
	id: number;
	img: string;
	name: string;
	review_text: string;
	review_time: string;
}
