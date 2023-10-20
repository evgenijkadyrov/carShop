import React from 'react';
import {Controller, useForm} from "react-hook-form";
import {ContentWrapper} from "../content-wrapper";
import styles from './styles.module.css'
import {useDispatch} from "react-redux";
import {createCar} from "../../features/carSlice.js";
import {useNavigate} from "react-router-dom";
import {paths} from "../../paths.js";

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
                <label className={styles.field}> Car name
                    <input {...register("name", {required: true, maxLength: 15})}
                           placeholder={'name car'} className={styles.input}
                           aria-invalid={errors.name ? "true" : "false"}
                    />
                    {errors.name?.type === "required" && (
                        <p role="alert" style={{color: 'red'}}>Name is required</p>
                    )}
                </label>
                <label>Car price
                    <input {...register("price", {required: true, maxLength: 15})}
                           placeholder={'price'} className={styles.input}
                           aria-invalid={errors.price ? "true" : "false"}/>
                    {errors.price?.type === "required" && (
                        <p role="alert" style={{color: 'red'}}>Price is required</p>)}
                </label>
                <label>Car description

                    <textarea {...register("description", {
                        required: true,
                        minLength: 20
                    })} placeholder={'description'} className={styles.input}
                              aria-invalid={errors.description ? "true" : "false"}/>
                    {errors.description?.type === "required" && (
                        <p role="alert" style={{color: 'red'}}>Description is
                            required</p>)}
                    {errors.description?.type === "minLength" && (
                        <p role="alert" style={{color: 'red'}}>Description is
                            less then 20 symbols</p>)}
                </label>
                <label> Car capacity

                    <input {...register("capacity", {required: true})}
                           placeholder={'capacity'} className={styles.input}
                           aria-invalid={errors.capacity ? "true" : "false"}/>
                    {errors.capacity?.type === "required" && (
                        <p role="alert" style={{color: 'red'}}>Capacity is required</p>)}
                </label>
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
