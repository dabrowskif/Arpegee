import axios from 'axios';

const API = axios.create({ baseURL: process.env.REACT_APP_SERVER_URL });

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
})

export const signin = formData => API.post('/user/signin', formData);
export const signup = formData => API.post('/user/signup', formData);
