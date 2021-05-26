import {createSelector} from "reselect";

//Users
export const getUsersFromState = (state) => {
    return state.usersPage.users;
}

export const getLeftLimit = (state) => {
    return state.usersPage.leftLimit;
}

export const getRightLimit = (state) => {
    return state.usersPage.rightLimit;
}

export const getPageSizeFromState = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalCountFromState = (state) => {
    return state.usersPage.totalCount;
}

export const getCurrentPageState = (state) => {
    return state.usersPage.currentPage;
}

export const getIsLoadingFromStateUsers = (state) => {
    return state.usersPage.isLoading;
}

export const getIsAddingFromState = (state) => {
    return state.usersPage.isAdding;
}
//Profile
export const getProfileFromState = (state) => {
    return state.profile;
}

export const getIsLoadingFromStateProfile = (state) => {
    return state.profile.isLoading;
}

export const getProfileDataFromStateProfile = (state) => {
    return state.profile.profileData;
}

export const getStatusFromState = (state) => {
    return state.profile.status;
}
//Auth
export const getAuthorizedUserIdFromState = (state) => {
    return state.auth.id;
}

export const getLoginFromState = (state) => {
    return state.auth.login;
}
//Chats
export const getDialogsDataFromState = (state) => {
    return state.chats.dialogsData;
}

export const getNameFromState = (state) => {
    return state.chats.chatName;
}

export const getMessagesDataFromState = (state) => {
    return state.chats.messagesData;
}
//More difficult
export const getUsersWithPhoto = createSelector(getUsersFromState,(users) => {
    return users.filter(el => (el.photos.small));
});