import { combineReducers } from "redux";
import {persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import auth from "./auth";
import character from "./character";

const persistConfig = {
   key: 'root',
   storage,
   whitelist: ['user', 'character']
};

const rootReducer = combineReducers({
   user: auth,
   character: character
});


export default persistReducer(persistConfig, rootReducer);
