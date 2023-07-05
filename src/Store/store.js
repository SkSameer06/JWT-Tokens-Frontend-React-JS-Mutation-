import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userApi } from "../features/userApi";
import authSlice from "../features/authSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducers = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
  auth: authSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export const persistor = persistStore(store);
