import "./Dialog.css"
import {NavLink} from 'react-router-dom'
import React from 'react';

const Dialog = (param) => {
let path = "/chats/" + param.id;
    return (
                <div className="dialog" id={param.id}>
                <NavLink to={path} >
                    {param.name}
                </NavLink>
                </div>
    )
}

export default Dialog;