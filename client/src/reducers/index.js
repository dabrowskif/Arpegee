import { combineReducers } from "redux";
import {persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import auth from "./auth";
import characters from "./characters";
import ranking from "./ranking";

const persistConfig = {
   key: 'root',
   storage,
   whitelist: ['user', 'character']
};

const rootReducer = combineReducers({
   user: auth,
   characters: characters,
   ranking: ranking,
});


export default persistReducer(persistConfig, rootReducer);
