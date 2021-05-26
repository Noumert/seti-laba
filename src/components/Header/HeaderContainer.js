import {connect} from "react-redux";
import Header from "./Header.js";
import * as axios from "axios";
import Loading from "./../common/Loading/Loading.js"
import {logOutFull} from "./../../redux/authReducer.js"
import {getAuth} from "./../../api/api.js"
import {getLoginFromState} from "./../../redux/usersSelectors.js";
import React,{PureComponent} from 'react';

class HeaderAPI extends PureComponent{

    render(){
        return (
        <div>
            <Header {...this.props}/>
        </div>
        )
    }

}

let mapStateToProps = (state) => (
    {
        login : getLoginFromState(state),
    }
)



const UsersContainer = connect (mapStateToProps,{logOutFull})(HeaderAPI);

export default UsersContainer;