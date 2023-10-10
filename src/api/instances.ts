import axios from 'axios';

export const instance = axios.create({
    baseURL: process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000/api'
        : 'https://courses-git-main-pavel-grigoryev.vercel.app/api',
});
