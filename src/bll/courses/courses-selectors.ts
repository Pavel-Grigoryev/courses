import {AppRootState} from '@/public/assets/types';

export const selectCourses = (state: AppRootState) => state.courses.courses;

