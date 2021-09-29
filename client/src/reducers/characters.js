import {
    CREATE_CHARACTER,
    END_LOADING,
    GET_CHARACTER,
    LOGOUT_CHARACTER,
    START_LOADING, UPDATE_CHARACTER
} from '../constants/actionTypes';



const characters = (state = { userCharacter: {}, isLoading: true }, action) => {
    switch (action.type) {
        case START_LOADING:
            return {...state, isLoading: true};
        case END_LOADING:
            return {...state, isLoading: false};
        case CREATE_CHARACTER:
            return {...state, userCharacter: action?.data};
        case GET_CHARACTER:
            return {...state, userCharacter: action?.data};
        case UPDATE_CHARACTER:
            return {...state, userCharacter: action?.data};
        case LOGOUT_CHARACTER:
            return state = null;
        default:
            return state;
    }
}

export default characters;
