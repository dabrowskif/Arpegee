import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import auth from './auth.js';
import character from './character.js';
import ranking from './ranking.js';
import arena from './arena.js';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'character'],
};

const rootReducer = combineReducers({
  user: auth,
  characters: character,
  ranking,
  arena,
});

export default persistReducer(persistConfig, rootReducer);
