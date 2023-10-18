import { configureStore } from '@reduxjs/toolkit'
import {carsReducer} from "./features/carsSlice.js";

export const store = configureStore({
    reducer: {
        cars: carsReducer
    },
})