import { combineReducers, configureStore } from "@reduxjs/toolkit";
import horseReducer from './slice';
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";


const RootReducer = combineReducers({
  bookhorse:horseReducer
})


const persistConfig = {
  key:'root',
  storage,
  version: 1,
}


const persistedReducer = persistReducer(persistConfig,RootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export default store

export const persistor = persistStore(store);

export const dispatch = store.dispatch