import Profile from "./Profile.js";
import {connect} from "react-redux";
import {setProfile,addPost,addLike,toggleLoading,getProfileInfoFull,getUserStatusFull,updateStatusFull,savePhotoFull} from "./../../redux/profileReducer.js";
import Loading from "./../common/Loading/Loading.js";
import * as axios from "axios";
import React,{PureComponent} from 'react';
import {withRouter} from "react-router-dom";
import {Redirect} from 'react-router-dom';
import {withAuthRedirect} from "./../../hoc/withAuthRedirect.js";
import {compose} from "redux";
import {getProfileFromState,getIsLoadingFromStateProfile,getProfileDataFromStateProfile,getStatusFromState,getAuthorizedUserIdFromState} from "./../../redux/usersSelectors.js";

class ProfileAPI extends PureComponent{

    refreshProfile(){
            let userId = this.props.match.params.userId;
            if(!userId){
                userId = this.props.authorizedUserId;
            }
            this.props.getProfileInfoFull(userId);
            this.props.getUserStatusFull(userId);
    }

    componentDidMount(){
        this.refreshProfile();
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        if(this.props.match.params.userId != prevProps.match.params.userId)
        this.refreshProfile()
    }

//    shouldComponentUpdate(nextProps,nextState){
//        return (nextProps!==this.props) || (nextState!==this.state);
//    }

    render(){
        console.log("profileRender");
        return (
            <div>
            <Loading isLoading = {this.props.isLoading} />
            <Profile isOwner={!this.props.match.params.userId} {...this.props} />
            </div>
        )
    }

}

let mapStateToProps = (state) => (
    {
        profile: getProfileFromState(state),
        isLoading : getIsLoadingFromStateProfile(state),
        profileData : getProfileDataFromStateProfile(state),
        status : getStatusFromState(state),
        authorizedUserId : getAuthorizedUserIdFromState(state)
    }
)

export default compose(connect (mapStateToProps,{addPost,addLike,toggleLoading,setProfile,getProfileInfoFull,getUserStatusFull,updateStatusFull,savePhotoFull}),
                       withRouter,
                       withAuthRedirect
                       )(ProfileAPI)