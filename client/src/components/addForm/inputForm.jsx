import styles from "./styles.module.css";
import React from "react";

export const InputForm = ({
                              label,
                              name,
                              placeholder,
                              register,
                              errors,
                              type = 'text', max=100,min=1

                          }) => (
        <label className={styles.field}> {label}
            <input {...register(name, {required: true, maxLength :max, minLength:min})}
                   placeholder={placeholder}
                   className={styles.input}
                   aria-invalid={errors[name] ? "true" : "false"}
                   type={type}
            />
            {errors[name]?.type === "required" && (
                <p role="alert" style={{color: 'red'}}>{label} is required</p>
            )}
            {errors[name]?.type === "maxLength" && (
                <p role="alert" style={{color: 'red'}}>{label} is too long</p>)}
            {errors[name]?.type === "minLength" && (
                <p role="alert" style={{color: 'red'}}>{label} is too short</p>)}
        </label>)
