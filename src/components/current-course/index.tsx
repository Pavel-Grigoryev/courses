
import React, {FC} from 'react';
import Breadcrumb from "../bredcrumb/breadcrumb";
import CounterArea from "../homes/home-3/counter-area";
import CourseArea from "./course-area";
import CurrentCourseArea from "src/components/current-course/current-course-area";
import {CurrCourse} from '@/src/api/courses-api';


type Props = {
    course: CurrCourse
}
const CurrentCourse:FC<Props> = ({course}) => {
  return (
    <>
      <Breadcrumb title="Course Details" subtitle="Course Details" isDbbl="Course" />
      <CurrentCourseArea currentCourse={course} />
      <CourseArea />
      <CounterArea />
    </>
  );
};

export default CurrentCourse;
