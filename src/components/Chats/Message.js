import "./Message.css";
import {NavLink} from 'react-router-dom';
import React from 'react';

const Message = (param) => {
    return (
                <div className="message" id={param.id}>
                    {param.name} : {param.text}
                </div>
    )
}

export default Message;