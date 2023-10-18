import React from 'react';
import {Link} from "react-router-dom";
import {paths} from '../../paths.js'
import styles from './styles.module.css'

const CarItem = ({
                     name = '',
                     price = 0,
                     description = '',
                     capacity = '',
                     image,
                     _id = ''
                 }) => {
    return (
        <Link to={`${paths.car}/${_id}`} className={styles.carItem}>
            <div className={ styles.capacity}>{ capacity }</div>
            { image && <img className={styles.image} src={image} alt=""/> }
            <div className={styles.info}>
                <h2 className={styles.title}>{ name }</h2>
                <span className={styles.price}>{ price }$</span>
            </div>
        </Link>

    );
};

export default CarItem;