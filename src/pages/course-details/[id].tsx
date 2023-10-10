import React from 'react';
import WrapperFour from '@/src/layout/wrapper-4';
import SEO from '@/src/common/seo';
import {GetStaticPaths, GetStaticProps, NextPage} from 'next';
import {coursesApi} from '@/src/api/api';
import {CurrCourse} from '@/src/api/courses-api';
import CurrentCourse from '@/src/components/current-course';

export const getStaticPaths: GetStaticPaths = async () => {
    const  res= await coursesApi.getCourses();
    const courses = res.data
    const paths = courses.map(cour => ({
        params: {id: String(cour.id)}
    }))
    return {
        paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const {id} = params || {}
    const course = await coursesApi.getCourse(id as string)
    console.log(course.data);
    if (!course.data) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            course: course.data
        },
        revalidate: 10
    }
}

type Props = {
    course: CurrCourse
}

const index:NextPage<Props> = ({course}) => {
    return (
        <WrapperFour>
            <SEO pageTitle={course?.title} />
            <CurrentCourse course={course} />
        </WrapperFour>
    );
};

export default index;
