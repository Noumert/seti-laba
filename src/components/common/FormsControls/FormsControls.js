import "./FormsControls.css"
import React from 'react';

export const Textarea = ({input,meta,...param}) => {
    const hasError = meta.error && meta.touched;
        return (
        <div className={hasError ? "formControl error" : "formControl"}>
        <div>
        <textarea {...input} {...param}/>
        </div>
        {hasError ? <span>{meta.error}</span>:<span></span>}
        </div>
        )
}

export const Input = ({input,meta,...param}) => {
    const hasError = meta.error && meta.touched;
    return (
    <div className={hasError ? "formControl error" : "formControl"}>
    <div>
    <input {...input} {...param}/>
    </div>
    {hasError ? <span>{meta.error}</span>:<span></span>}
    </div>
    )
}