import { TypedUseSelectorHook, useSelector } from 'react-redux';
import {AppRootState} from '@/public/assets/types';
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector;
