import "./ProfileTop.css";
import React from "react";
//import ProfileStatus from "./ProfileStatus.js";
import ProfileStatus from "./ProfileStatusWithHooks.js";
import userPhoto from "./../../assets/images/avatar.png";


const ProfileTop = (param) => {
    if(!param.profileData){
    return (
            <div className="profileTop">
            </div>
        )
    }
    else{
    return (
                    <div className="profileTop" id={param.profileData.userId}>
                        <img className="avatar" src={param.profileData.photos.large != null ? param.profileData.photos.large : userPhoto} />
                        <div className="username">Full name: {param.profileData.fullName}</div>
                        <div className="aboutMe">about me: {param.profileData.aboutMe}</div>
                        <ProfileStatus {...param} />
                    </div>

    )
    }
}

export default ProfileTop;