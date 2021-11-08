import {
  END_LOADING_RANKING,
  GET_RANKING, GET_RANKING_CHARACTER,
  LOGOUT,
  START_LOADING_RANKING,
} from '../constants/actionTypes.js';

const ranking = (state = {
  isLoading: true, currentPage: 0, numberOfPages: 0, list: [], rankingCharacter: {},
}, action) => {
  switch (action.type) {
    case START_LOADING_RANKING:
      return { ...state, isLoading: true };
    case END_LOADING_RANKING:
      return { ...state, isLoading: false };
    case GET_RANKING:
      return {
        ...state, list: action?.payload?.data, currentPage: action?.payload?.currentPage, numberOfPages: action?.payload?.numberOfPages,
      };
    case GET_RANKING_CHARACTER:
      return { ...state, rankingCharacter: action?.data };
    case LOGOUT:
      return state = null;
    default:
      return state;
  }
};

export default ranking;
