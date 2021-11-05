import * as api from '../api';
import {
  END_LOADING,
  END_LOADING_RANKING,
  GET_RANKING, GET_RANKING_CHARACTER, START_LOADING,
  START_LOADING_RANKING,
} from '../constants/actionTypes.js';

export const getRanking = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING_RANKING });
    const { data: { data, currentPage, numberOfPages } } = await api.getRanking(page);
    dispatch({ type: GET_RANKING, payload: { data, currentPage, numberOfPages } });
    dispatch({ type: END_LOADING_RANKING });
  } catch (error) {
    console.log(error);
  }
};

export const getRankingByFilter = (filter, page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING_RANKING });
    const { data: { data, currentPage, numberOfPages } } = await api.getRankingByFilter(filter, page);
    dispatch({ type: GET_RANKING, payload: { data, currentPage, numberOfPages } });
    dispatch({ type: END_LOADING_RANKING });
  } catch (error) {
    console.log(error);
  }
};

export const getRankingCharacter = (characterId, history) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.getRankingCharacter(characterId);
    dispatch({ type: GET_RANKING_CHARACTER, data });
    dispatch({ type: END_LOADING });
    history.push(`/character/${data.result._id}`);
  } catch (error) {
    console.log(error);
  }
};
