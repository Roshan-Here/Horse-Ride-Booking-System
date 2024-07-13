const { configureStore } = require("@reduxjs/toolkit");
import HorseReducer from './slice'

export const store = configureStore({
    reducer:HorseReducer
})