import { configureStore } from '@reduxjs/toolkit'
import {carsReducer} from "./features/carsSlice.js";
import {carReducer} from "./features/carSlice.js";

export const store = configureStore({
    reducer: {
        cars: carsReducer,
        car: carReducer
    },
})