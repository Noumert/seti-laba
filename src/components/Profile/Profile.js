import "./Profile.css";
import Comment from "./Comment.js";
import ProfileTop from "./ProfileTop.js";
import React from 'react';
import {Redirect} from 'react-router-dom';
import {reduxForm,Field} from "redux-form";

const AddPostForm = (param) => {
    return (
            <form onSubmit={param.handleSubmit}>
            <div><Field placeholder={"Enter your message"} name={"postText"} component={"textarea"} /></div>
            <div><button>Send</button></div>
            </form>
    )
}

const ReduxAddPostForm = reduxForm({form: 'addPost'})(AddPostForm)

const Profile = (param) => {

    let comments = param.profile.commentsData.map(el =>(<Comment avatar={el.avatar} text={el.text} name={el.name} likes={el.likes} id={el.id} addLike={param.addLike} key = {el.id}/>))

    let onAddPost = (values) => {
        param.addPost(values.postText)
    }
    return (
            <div className='profile'>
                    <ProfileTop {...param}/>
                <div className="comments">
                    {comments}
                </div>
                <div className="post">
                     <ReduxAddPostForm onSubmit={onAddPost}/>
                </div>
            </div>
    )
}

export default Profile;