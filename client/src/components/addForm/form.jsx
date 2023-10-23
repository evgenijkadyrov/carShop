import React from 'react';
import {Controller, useForm} from "react-hook-form";
import {ContentWrapper} from "../content-wrapper";
import styles from './styles.module.css'
import {useDispatch} from "react-redux";
import {createCar} from "../../features/carSlice.js";
import {useNavigate} from "react-router-dom";
import {paths} from "../../paths.js";
import {InputForm} from "./inputForm.jsx";


export const Form = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {register, handleSubmit, control, formState: {errors}} = useForm()
    const onSubmit = (data) => {
        const formData = new FormData()
        formData.append('name', data.name)
        formData.append('price', data.price)
        formData.append('description', data.description)
        formData.append('capacity', data.capacity)
        formData.append('image', data.image[0])


        dispatch(createCar(formData)).then(res => {
            if (!res.error) {
                navigate(`${paths.car}/${res.payload._id}`, {replace: true})
            }
        })
    }


    return (
        <ContentWrapper>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <InputForm label={'Car name'} placeholder={'name car'} name={'name'}
                           register={register} errors={errors} max={12} min={3}/>
                <InputForm label={'Car price'} placeholder={'car price'} name={'price'}
                           register={register} errors={errors} max={7}/>

                <InputForm label={'Car description'} placeholder={'Car description'}
                           name={'description'} register={register} errors={errors}
                           min={20} type={'textarea'}/>

                <InputForm label={'Car capacity'} placeholder={'Car capacity'}
                           name={'capacity'} register={register} errors={errors}/>

                <label> Car image
                    <Controller name={"image"} control={control}
                                render={({field: {value, onChange, ...field}}) => {
                                    return (<>
                                            <input id={'image'} {...field}
                                                   value={value?.fileName}
                                                   type={'file'} {...register("image", {required: true})}
                                                   onChange={(e) => {
                                                       onChange(e.target.files[0])
                                                   }}
                                                   placeholder={'image'}
                                                   className={styles.input}
                                                   aria-invalid={errors.image ? "true" : "false"}/>
                                            {errors.image?.type === "required" && (
                                                <p role="alert"
                                                   style={{color: 'red'}}>Image is
                                                    required</p>)}
                                        </>
                                    )
                                }}>

                    </Controller>

                </label>

                <button type="submit">Add car</button>
            </form>
        </ContentWrapper>

    )
};
