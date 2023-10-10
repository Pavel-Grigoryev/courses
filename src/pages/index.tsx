import SEO from '../common/seo';
import Home from '../components/homes/home';
import Wrapper from '../layout/wrapper';
import {coursesApi} from '@/src/api/api';
import {Course} from '@/src/api/courses-api';
import {GetStaticProps, NextPage} from 'next';
import {useEffect} from 'react';
import {useActions} from '@/hooks/useActions';
import {coursesActions} from '@/src/bll/courses';

export const getStaticProps: GetStaticProps = async () => {
    try {
        const res = await coursesApi.getCourses();
        return {
            props: {
                courses: res.data
            }
        };
    } catch (err) {
        console.warn('Error receiving data', err);
        return {
            props: {
                courses: [],
            },
            revalidate: 60
        };
    }
};


type Props = {
    courses: Course[]
}
const index: NextPage<Props> = ({courses}) => {
    const {setCourses} = useActions(coursesActions);
    useEffect(() => {
        setCourses({courses});
    }, []);
    return (
        <Wrapper>
            <SEO pageTitle={'Epora'}/>
            <Home/>
        </Wrapper>
    );
};

export default index;
