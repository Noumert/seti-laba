import "./ProfileTop.css";
import React from "react";

import ProfileStatus from "./ProfileStatusWithHooks.js";
import userPhoto from "./../../assets/images/avatar.png";


const ProfileTop = (param) => {

const onPhotoSelected = (e) =>{
    if(e.target.files.length){
        param.savePhotoFull(e.target.files[0])
    }
    }

    if(!param.profileData){
    return (
        <div className="profileTop">
        </div>
    )
    }
    else{
    return (
    <div className="profileTop" id={param.profileData.userId}>
        <div className="avatar"><img src={param.profileData.photos.large != null ? param.profileData.photos.large : userPhoto} />
        {param.isOwner ? <input  type={"file"} onChange={onPhotoSelected}/> : ""}
        </div>
        <div className="aboutMe">About me: {param.profileData.aboutMe}</div>
        <div className="username">Full name: {param.profileData.fullName}</div>
        <ProfileStatus {...param} />
    </div>

    )
    }
}

export default ProfileTop;