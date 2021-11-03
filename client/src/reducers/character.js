import {
  CREATE_CHARACTER,
  END_LOADING,
  GET_CHARACTER,
  LOGOUT_CHARACTER,
  START_LOADING, UPDATE_CHARACTER,
} from '../constants/actionTypes.js';

const character = (state = { userCharacter: {}, isLoading: true }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case CREATE_CHARACTER:
      return { ...state, userCharacter: action?.payload };
    case GET_CHARACTER:
      return { ...state, userCharacter: action?.payload };
    case UPDATE_CHARACTER:
      return { ...state, userCharacter: action?.payload };
    case LOGOUT_CHARACTER:
      return state = null;
    default:
      return state;
  }
};

export default character;
