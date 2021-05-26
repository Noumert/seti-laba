import userPhoto from "./../assets/images/avatar.png";
import {getProfileInfo,getStatus,updateStatus} from "./../api/api.js";

const ADD_LIKE = 'profile/ADD-LIKE';
const ADD_POST = 'profile/ADD-POST';
const TOGGLE_LOADING = 'profile/TOGGLE-LOADING';
const SET_PROFILE = 'profile/SET-PROFILE';
const SET_STATUS = 'profile/SET-STATUS';

let initialState = {
    profileData : null,
    commentsData : [{id:1,avatar:userPhoto, text:"Hello", name:"Vasya", likes:23},
            {id:2,avatar: userPhoto, text:"Nice job!!!", name:"Petya", likes:3}],
    isLoading: false,
    status : ""
}

const commentsReducer = (state = initialState,action) => {
    switch(action.type){
        case ADD_POST : {
            let newId=state.commentsData[state.commentsData.length-1].id+1
            let newPost = {
            id:newId,
            avatar: userPhoto,
            text: action.postText,
            name:"Vova",
            likes:0
            };
            let stateCopy = {...state};
            stateCopy.commentsData =[...state.commentsData];
            stateCopy.commentsData.push(newPost);
            return stateCopy;
        }
        case ADD_LIKE : {
            let stateCopy = {...state}
            stateCopy.commentsData =[...state.commentsData]
            let currentPost=stateCopy.commentsData.find(x => x.id === action.postId);
            currentPost.likes+=1;
            return stateCopy;
        }
        case TOGGLE_LOADING : {
            return {...state,isLoading: action.isLoading};
        }
        case SET_PROFILE : {
            return {...state,profileData: action.profileData};
        }
        case SET_STATUS : {
            return {...state,status: action.status};
        }
//        case UPDATE_STATUS : {
//                    return {...state,status: action.data};
//        }
        default: {
            return state;
        }
    }
}

export const addPost = (text) => ({type:ADD_POST,postText:text});
export const addLike = (id) => ({type:ADD_LIKE,postId:parseInt(id)});
export const toggleLoading = (isLoading) => ({type:TOGGLE_LOADING,isLoading});
export const setProfile = (profileData) => ({type:SET_PROFILE,profileData});
export const setStatus = (status) => ({type:SET_STATUS,status});


export const getProfileInfoFull = (id) =>async (dispatch) => {
                dispatch(toggleLoading(true));
                let response = await getProfileInfo(id)
                dispatch(toggleLoading(false));
                dispatch(setProfile(response.data));
}


export const getUserStatusFull = (id) =>async (dispatch) => {
                let response = await getStatus(id)
                dispatch(setStatus(response.data));
}


export const updateStatusFull = (text) => async (dispatch) => {
                    let response = await updateStatus(text)
                    if(response.data.resultCode === 0){
                        dispatch(setStatus(text));
                    }
}


export default commentsReducer
