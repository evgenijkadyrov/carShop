import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {getCar} from "../../features/carSlice.js";
import {ContentWrapper} from "../../components/content-wrapper/index.js";
import {Button} from "../../components/Button/index.js";
import styles from './styless.module.css'
import {Spinner} from "../../components/spinner";


export const Car = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {car, isLoading} = useSelector(state => state.car)
    const {id} = useParams()

    useEffect(() => {
        dispatch(getCar(id))
    }, [dispatch, id])
    if (isLoading) return <Spinner/>
    return (
        car && (
            <ContentWrapper className={styles.car} >
                <div className={styles.descContent}>
                    <Button onClick={() => navigate(-1)} isBackButton={true} className={styles.backTitleBtn}>
                        Back
                    </Button>
                    <h1 className={styles.title}>{car.name}</h1>
                    <div className={styles.price}>{car.price}$</div>
                    <Button
                        containerClassName={styles.buyBtnContainer}
                        onClick={() => navigate('/order')}
                    >
                        Add to cart
                    </Button>
                    <p className={styles.desc}>{car.description}</p>
                </div>
                <div className={styles.imageContent}>
                    <img className={styles.image} src={car.image} alt=""/>
                </div>
            </ContentWrapper>
        )
    );
};

