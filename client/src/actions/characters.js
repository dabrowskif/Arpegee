import * as api from '../api';
import {
    UPDATE_CHARACTER,
    CREATE_CHARACTER,
    GET_CHARACTER,
    START_LOADING,
    END_LOADING,
} from "../constants/actionTypes";
import {getRankingCharacter} from "../api";

export const createCharacter = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.createCharacter(formData);
        dispatch({ type: CREATE_CHARACTER, data });
        history.push('/character');
    } catch (error) {
        console.log(error);
    }
}

export const getCharacter = userId => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.getCharacter({userId});
        dispatch({ type: GET_CHARACTER, data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
}

export const increaseStat = (stat, value, characterId) => async (dispatch) => {
    try {
        const { data } = await api.increaseStatistic(stat, value, characterId);
        dispatch({ type: UPDATE_CHARACTER, data });
    } catch (error) {
        console.log(error);
    }
}
