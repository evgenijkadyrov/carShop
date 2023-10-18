import React from 'react';
import styles from './styles.module.css'
import {ContentWrapper} from "../content-wrapper";
import wave from '../../assets/wave.svg'

const Header = () => {
    return (
        <div className={styles.header}>
            <ContentWrapper className={styles.content}>
                <h1 className={styles.title}>Rent cars</h1>
                <p className={styles.desc}>Only electrical car</p>

            </ContentWrapper>
            <img src={wave} alt={'wave'} className={styles.wave}/>
        </div>
    );
};

export default Header;