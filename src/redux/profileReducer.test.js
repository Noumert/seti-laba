import profileReducer,{addPost} from "./profileReducer.js";
import React from "react";
import userPhoto from "./../assets/images/avatar.png";

it('new post',() => {
    let action = addPost("Hello");
    let state = {
        commentsData : [{id:1,avatar:userPhoto, text:"Hello", name:"Vasya", likes:23},
                {id:2,avatar: userPhoto, text:"Nice job!!!", name:"Petya", likes:3}],
    }
    let newState = profileReducer(state,action);

    expect (newState.commentsData.length).toBe(3);
    expect (newState.commentsData[2].id).toBe(3);
    expect (newState.commentsData[2].text).toBe("Hello");
});