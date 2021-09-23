import * as api from '../api';
import {UPDATE_CHARACTER, CREATE_CHARACTER, GET_CHARACTER, START_LOADING, END_LOADING} from "../constants/actionTypes";

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
        const { data } = await api.getCharacter({userId});
        dispatch({ type: GET_CHARACTER, data });
    } catch (error) {
        console.log(error);
    }
}

export const updateCharacter = updatedCharacter => async (dispatch) => {
    try {
        const { data } = await api.updateCharacter(updatedCharacter);
        dispatch({ type: UPDATE_CHARACTER, data });
    } catch (error) {
        console.log(error);
    }
}
