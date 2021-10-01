import { combineReducers } from "redux";
import {persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import auth from "./auth";
import character from "./character";
import ranking from "./ranking";
import arena from "./arena";

const persistConfig = {
   key: 'root',
   storage,
   whitelist: ['user', 'character']
};

const rootReducer = combineReducers({
   user: auth,
   characters: character,
   ranking: ranking,
   arena: arena,
});


export default persistReducer(persistConfig, rootReducer);
