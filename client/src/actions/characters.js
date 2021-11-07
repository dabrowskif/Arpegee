import * as api from '../api';
import {
  UPDATE_CHARACTER,
  CREATE_CHARACTER,
  GET_CHARACTER,
  START_LOADING_CHARACTER,
  END_LOADING_CHARACTER,
} from '../constants/actionTypes.js';

export const createCharacter = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.createCharacter(formData);
    dispatch({ type: CREATE_CHARACTER, payload: data.result });
    history.push('/character');
  } catch (error) {
    console.log(error);
  }
};

export const getCharacter = (userId) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING_CHARACTER });
    const { data } = await api.getCharacter(userId);
    dispatch({ type: GET_CHARACTER, payload: data.result });
    dispatch({ type: END_LOADING_CHARACTER });
  } catch (error) {
    console.log(error);
  }
};

export const increaseStat = (stat, value, characterId) => async (dispatch) => {
  try {
    const { data } = await api.increaseStatistic(stat, value, characterId);
    dispatch({ type: UPDATE_CHARACTER, payload: data.result });
  } catch (error) {
    console.log(error);
  }
};
