import "./LogIn.css";
import {reduxForm,Field} from "redux-form";
import {required,minLengthCreator} from "./../../validators/validators.js";
import {Input} from "./../common/FormsControls/FormsControls.js";
import {logInFull} from "./../../redux/authReducer.js"
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';
import React from 'react';

let minLength4 = minLengthCreator(4);

const LogInForm = ({handleSubmit,error}) => {
    return (
            <form onSubmit={handleSubmit}>
            <div><Field placeholder={"email"} name={"email"} component={Input} validate={[required]} /></div>
            <div><Field type={"password"} name={"password"} placeholder={"Password"} component={Input} validate={[required,minLength4]} /></div>
            <div>remember me<Field type={"checkbox"} name={"rememberMe"} component={"input"}/></div>
            {error ? <div className="generalError">{error}</div> : ""}
            <div><button>Log in</button></div>
            </form>
    )
}

const ReduxLogInForm = reduxForm({form: 'login'})(LogInForm)

const LogIn = (param) => {

const onSubmit = (formData) => {
    param.logInFull(formData.email,formData.password,formData.rememberMe)
}

    if(param.isAuth){
    return <Redirect to="/profile"/>
    }
    return (
        <div className="loginMain">
            <h3>Log In</h3>
            <ReduxLogInForm onSubmit={onSubmit} />
        </div>
    )
}

let mapStateToParam = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToParam,{logInFull}) (LogIn);
