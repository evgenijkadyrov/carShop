import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "./services/carService.js";


export const getCar = createAsyncThunk('GET_CAR', async(id, thunkAPI)=>{
    try{
        return await carService.getCar(id)
    }
    catch (error){
        return thunkAPI.rejectWithValue(error.response.message)
    }
})
export const createCar = createAsyncThunk('CREATE_CAR', async(carData, thunkAPI)=>{
    try{
        return await carService.createCar(carData)
    }
    catch (error){
        return thunkAPI.rejectWithValue(error.response.message)
    }
})

const carSlice = createSlice({
    name: 'car',
    initialState: {
        car: null,
        isLoading: false,
        isError: false,
        message: ''
    },
    extraReducers: (builder) => {
        builder.addCase(getCar.pending, (state, action) => {
            state.isLoading = true

        })
        builder.addCase(getCar.fulfilled, (state, action) => {
            state.isLoading = false
            state.car = action.payload
        })
        builder.addCase(getCar.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload.message
            state.car = null
        })
        builder.addCase(createCar.pending, (state, action)=>{
            state.isLoading =true

        })
        builder.addCase(createCar.fulfilled, (state, action)=>{
            state.isLoading= false
            state.isError= false
        })
        builder.addCase(createCar.rejected, (state, action)=>{
            state.isLoading= false
            state.isError= true
        })
    }


})
export const carReducer = carSlice.reducer