import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {coursesReducer} from '@/src/bll/courses';

export const rootReducer = combineReducers({
    courses: coursesReducer,
});
export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});


