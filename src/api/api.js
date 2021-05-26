import * as axios from "axios";


const baseUrl = "https://social-network.samuraijs.com/api/1.0/"
const API = "47c1c277-a323-4dc6-9ac6-d95a5b0c0e6c"

export const getUsers = (currentPage,pageSize) => {
    return axios.get(baseUrl + `users?page=${currentPage}&count=${pageSize}`,
        {
            withCredentials:true
        })
}

export const delUser = (id) => {
    return axios.delete(baseUrl + `follow/${id}`,
           {withCredentials:true,
             headers : {
                "API-KEY": API
             }
           })
}

export const addUser = (id) => {
    return axios.post(baseUrl + `follow/${id}`,{},
           {withCredentials:true,
               headers:{
                  "API-KEY": API
              }
           })
}

export const getProfileInfo = (id) => {
    return axios.get(baseUrl + `profile/${id}`,
    {
    withCredentials:true
    })
}

export const getStatus = (id) => {
    return axios.get(baseUrl + `profile/status/${id}`,
        {
            withCredentials:true
        })
}

export const updateStatus = (status) => {
    return axios.put(baseUrl + `profile/status/`,
        {
        status
        },
        {
            withCredentials:true,
            headers:{
                              "API-KEY": API
                    }
        })
}

export const getAuth = () => {
    return axios.get(baseUrl + `auth/me`,
    {
    withCredentials:true
    })
}

export const logIn = (email,password,rememberMe) => {
    return axios.post(baseUrl + `auth/login`,
    {
        email,
        password,
        rememberMe
    },
    {
        withCredentials:true,
        headers:{
            "API-KEY": API
        }
    })
}

export const logOut = () => {
    return axios.delete(baseUrl + `auth/login`,
    {
    withCredentials:true
    })
}
