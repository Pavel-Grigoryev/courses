import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Course} from '@/src/api/courses-api';

export const slice = createSlice({
    name: 'courses',
    initialState: {
        courses: [] as Course[]
    },
    reducers: {
        setCourses(state, action: PayloadAction<{courses:  Course[]}>) {
            state.courses = action.payload.courses;
        },
    },
});

// Types
export type InitialCoursesState = ReturnType<typeof slice.getInitialState>;
