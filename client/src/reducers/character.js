import {CREATE_CHARACTER, END_LOADING, GET_CHARACTER, LOGOUT_CHARACTER, START_LOADING} from '../constants/actionTypes';


const character = (state = { characterData: null, isLoading: true}, action) => {
    switch (action.type) {
        case START_LOADING:
            return {...state, isLoading: true};
        case END_LOADING:
            return {...state, isLoading: false};
        case CREATE_CHARACTER:
            return {...state, characterData: action?.data};
        case GET_CHARACTER:
            return {...state, characterData: action?.data};
        case LOGOUT_CHARACTER:
            return {...state, characterData: null};
        default:
            return state;
    }
}

export default character;
