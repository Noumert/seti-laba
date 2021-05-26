import Dialogs from "./Dialogs.js";
import React from 'react';
import {addMessage} from "./../../redux/chatsReducer.js";
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';
import {withAuthRedirect} from "./../../hoc/withAuthRedirect.js";
import {compose} from "redux";
import {getDialogsDataFromState,getNameFromState,getMessagesDataFromState} from "./../../redux/usersSelectors.js";

let mapStateToProps = (state) => (
    {
        dialogsData : getDialogsDataFromState(state),
        name: getNameFromState(state),
        messagesData: getMessagesDataFromState(state)
    }
)

export default compose(connect (mapStateToProps,{addMessage}),
                       withAuthRedirect
                      )(Dialogs)
