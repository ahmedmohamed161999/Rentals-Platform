import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import listingReducer from "./slice/listingSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  user: userReducer,
  listings: listingReducer,
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

// There shouldn't be any issues here, but if you do encounter any, make sure to check the documentation for the libraries you're using and also check the code above for any mistakes.
