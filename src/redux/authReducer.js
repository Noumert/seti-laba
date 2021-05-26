import {getAuth,logIn,logOut} from "./../api/api.js";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET-USER-DATA';

let initialState = {
    id : null,
    login : null,
    email : null,
    isAuth : false
}

const authReducer = (state = initialState,action) => {
    switch(action.type){
        case SET_USER_DATA : {
            return {...state,...action.userData}
        }
        default:{
            return state;
        }
    }
}

export const setUserData = (id,login,email,isAuth) => ({type:SET_USER_DATA,userData: {id,login,email,isAuth} });

export const getAuthFull = () => async (dispatch) => {
        let response = await getAuth()
        if(response.data.resultCode===0){
            let {id,login,email} = response.data.data
            dispatch(setUserData(id,login,email,true));
        }
    }


export const logInFull = (email,password,rememberMe) => async (dispatch) => {
        let response = await logIn(email,password,rememberMe);

            if(response.data.resultCode===0){
                dispatch(getAuthFull());
            }
            else
            {
               let message = (response.data.messages.length > 0) ? response.data.messages[0] : "Some error";
               dispatch(stopSubmit("login",{_error: message}));
            }
    }


export const logOutFull = (email,password,rememberMe) => async (dispatch) => {
        let response = await logOut();
            if(response.data.resultCode===0){
                dispatch(setUserData(null,null,null,false));
            }
    }


export default authReducer