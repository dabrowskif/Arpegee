import * as api from '../api';
import {
    ADD_MONSTER,
    END_LOADING_ARENA,
    GET_ARENA, REMOVE_MONSTER,
    START_LOADING_ARENA,
} from "../constants/actionTypes";

export const generateMonster = (characterLevel, characterId) => async (dispatch) => {
    try {
        console.log("generateMonster");
        const { data } = await api.generateMonster(characterLevel, characterId);
    } catch (error) {
        console.log(error);
    }
}

export const getMonsters = (characterId, characterLevel) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING_ARENA });
        const { data } = await api.getMonsters(characterId, characterLevel);
        dispatch({ type: GET_ARENA, data})
        dispatch({ type: END_LOADING_ARENA });
    } catch (error) {
        console.log(error);
    }
}

export const killMonster = monsterId => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING_ARENA });
        const { data } = await api.killMonster({monsterId});
        if (data) {
            dispatch({ type: REMOVE_MONSTER, monsterId});
            dispatch({ type: ADD_MONSTER, data})
        }
        dispatch({ type: END_LOADING_ARENA });
    } catch (error) {
        console.log(error);
    }
}
