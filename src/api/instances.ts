import axios from 'axios';
import * as process from 'process';

export const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
});
