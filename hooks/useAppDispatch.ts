import { useDispatch } from 'react-redux';
import {AppDispatch} from '@/public/assets/types';

export const useAppDispatch = () => useDispatch<AppDispatch>();
