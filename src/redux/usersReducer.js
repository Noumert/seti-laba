import {getUsers,delUser,addUser} from "./../api/api.js"

const ADD_USER = 'users/ADD-USER';
const DEL_USER = 'users/DEL-USER';
const SET_USERS = 'users/SET-USERS';
const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'users/SET-TOTAL-COUNT';
const TOGGLE_LOADING = 'users/TOGGLE-LOADING';
const TOGGLE_ADDING = 'users/TOGGLE-ADDING';
const CHANGE_PAGES = 'users/CHANGE-PAGES';

let initialState = {
    users : [],
    pageSize : 10,
    totalCount: 0,
    currentPage: 1,
    isLoading : false,
    isAdding : false,
    leftLimit : 1,
    rightLimit : 20
}

const usersReducer = (state = initialState,action) => {

    switch(action.type){
        case ADD_USER :
        return {
            ...state,
            users: state.users.map(u =>{
            if(u.id === parseInt(action.userId)){
                return {...u,followed:true};
            }
            return u;
            })
        }
        case DEL_USER :
        return {
            ...state,
            users: state.users.map(u =>{
            if(u.id === parseInt(action.userId)){
                return {...u,followed:false};
            }
            return u;
            })
        }
        case SET_USERS : {
              return {...state,users: action.users};
        }
        case SET_CURRENT_PAGE : {
              return {...state,currentPage: action.page};
        }
        case SET_TOTAL_COUNT : {
              return {...state,totalCount: action.totalCount};
        }
        case TOGGLE_LOADING : {
              return {...state,isLoading: action.isLoading};
        }
        case TOGGLE_ADDING : {
              return {...state,isAdding: action.isAdding};
        }
        case CHANGE_PAGES : {
              return {...state,leftLimit: (state.leftLimit+action.count),rightLimit: (state.rightLimit+action.count)};
        }
        default: {
            return state;
        }
    }
}

export const addUserB = (userId) =>({type:ADD_USER,userId});
export const delUserB = (userId) => ({type:DEL_USER,userId});
export const setUsers = (users) => ({type:SET_USERS,users});
export const setCurrentPage = (page) => ({type:SET_CURRENT_PAGE,page});
export const setTotalCount = (totalCount) => ({type:SET_TOTAL_COUNT,totalCount});
export const toggleLoading = (isLoading) => ({type:TOGGLE_LOADING,isLoading});
export const toggleAdding = (isAdding) => ({type:TOGGLE_ADDING,isAdding});
export const changePages = (count) => ({type:CHANGE_PAGES,count});

export const getUsersFull = (currentPage,pageSize) => async (dispatch) => {
                dispatch(setCurrentPage(currentPage));
                dispatch(toggleLoading(true));
                let response = await getUsers(currentPage,pageSize)
                    dispatch(toggleLoading(false));
                    dispatch(setUsers(response.data.items));
                    dispatch(setTotalCount(response.data.totalCount));
}


export const addUserFull = (id) => async (dispatch) => {
                console.log("hi");
                dispatch(toggleAdding(true));
                let response = await addUser(id)
                if(response.data.resultCode === 0){
                    dispatch(addUserB(id));
                }
                dispatch(toggleAdding(false));

}


export const delUserFull = (id) =>async (dispatch) => {
                dispatch(toggleAdding(true));
                let response = await delUser(id)
                if(response.data.resultCode === 0){
                   dispatch(delUserB(id));
                }
                dispatch(toggleAdding(false));
}



export default usersReducer
