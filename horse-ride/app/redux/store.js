import { configureStore } from "@reduxjs/toolkit";
import horseReducer from './slice';

const store = configureStore({
  reducer: horseReducer
});

export default store