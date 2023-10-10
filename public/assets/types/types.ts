import {ThunkDispatch} from 'redux-thunk';
import {rootReducer} from '@/src/bll/store';
import {AnyAction} from 'redux';


export type AppRootState = ReturnType<typeof rootReducer>;

export type AppDispatch = ThunkDispatch<AppRootState, unknown, AnyAction>;
