import {
  applyMiddleware, combineReducers, compose, createStore,
} from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import auth from './auth.js';
import character from './character.js';
import ranking from './ranking.js';
import arena from './arena.js';

const rootReducer = combineReducers({
  user: auth,
  characters: character,
  ranking,
  arena,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
// line 29 works on all browsers, line 30 doesn't work with firefox
// redux devtools is not for production! Use for testing purposes

// const store = createStore(persistedReducer);
const store = createStore(persistedReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
const persistor = persistStore(store);

export { store, persistor };
