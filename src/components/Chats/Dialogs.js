import "./Dialogs.css";
import {NavLink,Redirect} from 'react-router-dom';
import Dialog from "./Dialog.js";
import Message from "./Message.js";
import React from 'react';
import {reduxForm,Field} from "redux-form";

const SendMessageForm = (param) => {
    return (
            <form onSubmit={param.handleSubmit}>
            <div><Field placeholder={"Enter your message"} name={"message"} component={"textarea"} /></div>
            <div><button>Send</button></div>
            </form>
    )
}

const ReduxSendMessageForm = reduxForm({form: 'sendMessage'})(SendMessageForm)

const Dialogs = (param) => {

let messages = param.messagesData.map(el =>(<Message name = {el.name} text = {el.text} key  = {el.id} id = {el.id} />))

let dialogs = param.dialogsData.map(el =>(<Dialog name={el.name} id = {el.id}  key  = {el.id} />))

const onSendMessage = (values) => {
    param.addMessage(values.message);
}

    return (
            <div className="chats">
            <div className='dialogs'>
                <span className="dialogHead">Dialogs</span>
                {dialogs}
            </div>
            <div className="messages">
                 <span className="dialogName">{param.name}</span>
                 {messages}
                 <div className="sendMessage">
                    <ReduxSendMessageForm onSubmit={onSendMessage} />
                 </div>
           </div>
           </div>
    )
}



export default Dialogs;








