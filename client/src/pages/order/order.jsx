import React from 'react';
import {ContentWrapper} from "../../components/content-wrapper";
import {Button} from "../../components/Button/index.js";
import {useNavigate} from "react-router-dom";
import styles from './styles.module.css'
export const Order = () => {
    const navigate= useNavigate()
    return (
        <ContentWrapper className={styles.order}>
            <div style={{paddingBottom:'20px', fontSize:'30px'}}> Your order will be arrive soon</div>
            <Button className={styles.button}
            onClick={()=>{navigate('/')}}> On main page</Button>
        </ContentWrapper>
    );
};

