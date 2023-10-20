import React, {useEffect} from 'react';
import styles from './styles.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getCars} from "../../features/carsSlice.js";
import {Spinner} from "../spinner";
import {ContentWrapper} from "../content-wrapper";
import CarItem from "../carItem/carItem.jsx";
import {Link} from "react-router-dom";
import {paths} from "../../paths.js";
import {Button} from "../Button";
import {useSortCars} from "../../features/hook/useSortCars.js";

export const Cars = () => {
    const dispatch = useDispatch()
    const {cars, isLoading} = useSelector(state => state.cars)
    const {descSort, setDescSort, sortedCars} = useSortCars(cars || [])
    useEffect(() => {
        dispatch(getCars())
    }, [dispatch])
    if (isLoading) {
        return <Spinner/>
    }
    return (
        <div>
            <div className={styles.sort}>
                <ContentWrapper className={styles.carsHeader}>
                    <Button className={styles.sortBtn}
                            onClick={() => setDescSort(!descSort)}>Sort by price {`${descSort?  '▼' : '▲' }`}</Button>

                    <Link to={paths.createCar} className={styles.createCarBtn}>Add new
                        car </Link>
                </ContentWrapper>
            </div>
            <ContentWrapper className={styles.carsGrid}>
                {sortedCars && sortedCars.map(car => <CarItem key={car._id}{...car}/>)}
            </ContentWrapper>
        </div>
    );
};

