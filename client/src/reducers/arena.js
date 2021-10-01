import {
    ADD_MONSTER,
    END_LOADING_ARENA,
    GET_ARENA,
    LOGOUT_CHARACTER,
    REMOVE_MONSTER,
    START_LOADING_ARENA
} from '../constants/actionTypes';



const arena = (state = { monsters: [], isMonsterLoading: [], isLoading: true }, action) => {
    switch (action.type) {
        case START_LOADING_ARENA:
            return {...state, isLoading: true};
        case END_LOADING_ARENA:
            return {...state, isLoading: false};
        case GET_ARENA:
            //TODO isMonsterLoading fill with booleans that matches specific monster
            return {...state, monsters: action?.data?.result}
        case REMOVE_MONSTER:
            return {...state, monsters: state.monsters.filter( monster => monster._id !== action.monsterId )};
        case ADD_MONSTER:
            return {...state, monsters: [...state.monsters, action?.data?.result]};
        case LOGOUT_CHARACTER:
            return state = null;
        default:
            return state;
    }
}

export default arena;
