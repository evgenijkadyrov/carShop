import React, {useEffect} from 'react';
import styles from './styles.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getCars} from "../../features/carsSlice.js";
import {Spinner} from "../spinner";
import {ContentWrapper} from "../content-wrapper";
import CarItem from "../carItem/carItem.jsx";

export const Cars = () => {
    const dispatch= useDispatch()
    const {cars, isLoading}= useSelector(state=>state.cars)

    useEffect(()=>{
        dispatch(getCars())
    },[dispatch])
    if(isLoading){
        return <Spinner/>
    }
    return (
        <div>
            <ContentWrapper className={styles.carsGrid}>
                {cars && cars.map(car=><CarItem key = {car._id }{...car}/>)}
            </ContentWrapper>
        </div>
    );
};

