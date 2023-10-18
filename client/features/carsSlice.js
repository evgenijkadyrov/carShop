import {createSlice} from "@reduxjs/toolkit";

 const carsSlice = createSlice({
    name: 'cars',
    initialState:{
        cars: null,
        isLoading: false,
        isError: false,
        message:''
    }
})
export const carsReducer= carsSlice.reducer