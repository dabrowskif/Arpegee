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

export const getCharacter = userId => API.post('/character/get', userId);
export const createCharacter = formData => API.post('/character/create', formData);
export const updateCharacter = updatedCharacter => API.patch('/character/update', updatedCharacter);
export const increaseStatistic = (statistic, value, characterId) => API.patch('/character/statistics/increase', {statistic, value, characterId});

//TODO make page as a prop
export const getRanking = page => API.get(`/ranking/get?page=${page}`);
export const getRankingByFilter = ( filter, page ) => API.get(`/ranking/search?page=${page}&nickname=${filter.nickname}&vocation=${filter.vocation}&minlevel=${filter.minLevel}&maxlevel=${filter.maxLevel}`);

