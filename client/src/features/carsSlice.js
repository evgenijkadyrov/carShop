import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carsService} from "./services/carsService.js";

export const getCars = createAsyncThunk('GET_CARS', async (_, thunkAPI) => {
    try {
        return await carsService.getCars()
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})
const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        cars: null,
        isLoading: false,
        isError: false,
        message: ''
    },
    extraReducers: (builder) => {
        builder.addCase(getCars.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(getCars.fulfilled, (state, action) => {
            state.isLoading = false
            state.cars = action.payload
        })
        builder.addCase(getCars.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload.message
            state.cars = null
        })
    }


})
export const carsReducer = carsSlice.reducer