import * as api from '../api';
import { AUTH } from '../constants/actionTypes.js';
import { getCharacter } from './characters.js';

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signup(formData);
    await dispatch(getCharacter(data?.result?._id, history));
    dispatch({ type: AUTH, data });
  } catch (error) {
    console.log(error);
  }
};

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signin(formData);
    await dispatch(getCharacter(data?.result?._id, history));
    dispatch({ type: AUTH, data });
  } catch (error) {
    console.log(error);
  }
};
