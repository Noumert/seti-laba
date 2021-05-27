import "./ProfileSettings.css"
import React from 'react';
import {reduxForm,Field} from "redux-form";
import {required} from "./../../validators/validators.js";
import {Input} from "./../common/FormsControls/FormsControls.js";
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';
import {withAuthRedirect} from "./../../hoc/withAuthRedirect.js";
import {compose} from "redux";
import {getAuthorizedUserIdFromState} from "./../../redux/usersSelectors.js";
import {updateProfileFull} from "./../../redux/profileReducer.js"

const ProfileSettingsForm = ({handleSubmit,error}) => {
    return (
            <form onSubmit={handleSubmit}>
            <div><Field placeholder={"fullName"} name={"fullName"} component={Input} validate={[required]} /></div>
            <div><Field placeholder={"aboutMe"} name={"aboutMe"} component={Input} validate={[required]} /></div>
            {error ? <div className="generalError">{error}</div> : ""}
            <div><button>Change</button></div>
            </form>
    )
}

const ReduxProfileSettingsForm = reduxForm({form: 'profile'})(ProfileSettingsForm)

const ProfileSettings = (param) => {

const onSubmit = (formData) => {
    let newData = {
    aboutMe:formData.aboutMe,
    userId: param.authorizedUserId,
    lookingForAJob: false,
    lookingForAJobDescription: "null",
    fullName:formData.fullName,
    contacts:{github: "https://www.youtube.com/channel/UCCQY962PmHabTjaHv2wJzfQ",
    vk: "https://www.youtube.com/channel/UCCQY962PmHabTjaHv2wJzfQ",
    facebook: "https://www.youtube.com/channel/UCCQY962PmHabTjaHv2wJzfQ",
    instagram: "https://www.youtube.com/channel/UCCQY962PmHabTjaHv2wJzfQ",
    twitter: "https://www.youtube.com/channel/UCCQY962PmHabTjaHv2wJzfQ",
    website: "https://www.youtube.com/channel/UCCQY962PmHabTjaHv2wJzfQ",
    youtube: "https://www.youtube.com/channel/UCCQY962PmHabTjaHv2wJzfQ",
    mainLink: "https://www.youtube.com/channel/UCCQY962PmHabTjaHv2wJzfQ"}
    }
    param.updateProfileFull(newData)
}

    return (
        <div className='ProfileSettings'>
           <h3>ProfileSettings</h3>
           <ReduxProfileSettingsForm onSubmit={onSubmit} />
        </div>
    )
}

let mapStateToParam = (state) => ({
    authorizedUserId: getAuthorizedUserIdFromState(state)
})

export default compose(connect (mapStateToParam,{updateProfileFull}),
                                                     withAuthRedirect
                                                     )(ProfileSettings);



