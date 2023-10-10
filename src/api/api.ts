import {CoursesApi} from '@/src/api/courses-api';
import {instance} from '@/src/api/instances';

export const coursesApi = new CoursesApi(instance);
