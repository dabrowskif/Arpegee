import {
  ADD_MONSTER,
  END_LOADING_ARENA, END_LOADING_MONSTER,
  GET_ARENA,
  LOGOUT_CHARACTER,
  REMOVE_MONSTER, REPLACE_MONSTER, SET_FIGHT_LOG,
  START_LOADING_ARENA, START_LOADING_MONSTER,
} from '../constants/actionTypes.js';

const arena = (state = {
  monsters: [], isMonsterLoading: [], isLoading: true, lastFightLog: {},
}, action) => {
  switch (action.type) {
    case START_LOADING_ARENA:
      return { ...state, isLoading: true };
    case END_LOADING_ARENA:
      return { ...state, isLoading: false };
    case START_LOADING_MONSTER:
      return { ...state, isMonsterLoading: state.isMonsterLoading.map((boolean, index) => (index === action.index ? true : boolean)) };
    case END_LOADING_MONSTER:
      return { ...state, isMonsterLoading: state.isMonsterLoading.map((boolean, index) => (index === action.index ? false : boolean)) };
    case GET_ARENA:
      return { ...state, monsters: action.payload.data.result, isMonsterLoading: action.payload.isMonsterLoading };
    case ADD_MONSTER:
      return { ...state, monsters: [...state.monsters, action.data] };
    case REMOVE_MONSTER:
      return { ...state, monsters: state.monsters.filter((monster) => monster._id !== action.monsterId) };
    case REPLACE_MONSTER:
      const cloneMonsters = state.monsters;
      cloneMonsters.splice(action.payload.index, 1, action.payload.monster);
      return { ...state, monsters: cloneMonsters };
    case SET_FIGHT_LOG:
      return { ...state, lastFightLog: action.payload };
    case LOGOUT_CHARACTER:
      // eslint-disable-next-line no-return-assign,no-param-reassign
      return state = null;
    default:
      return state;
  }
};

export default arena;
