import {connect} from "react-redux";
import Users from "./Users.js";
import React,{PureComponent} from 'react'
import Loading from "./../common/Loading/Loading.js"
import {getUsersFull,addUserFull,delUserFull,changePages} from "./../../redux/usersReducer.js"
import {getUsersFromState,getPageSizeFromState,getTotalCountFromState,
getCurrentPageState,getIsLoadingFromStateUsers,getIsAddingFromState,getUsersWithPhoto,getLeftLimit,getRightLimit} from "./../../redux/usersSelectors.js";
import {withAuthRedirect} from "./../../hoc/withAuthRedirect.js";
import {compose} from "redux";


class UsersAPI extends PureComponent{

    componentDidMount(){
            this.props.getUsersFull(this.props.currentPage,this.props.pageSize);
    }

    onPageChanged = (page) => {
            this.props.getUsersFull(page,this.props.pageSize);
    }

    render(){
        return (
        <div>
        Users
        <Loading isLoading = {this.props.isLoading} />
        <Users {...this.props} onPageChanged = {this.onPageChanged} />
        </div>
        )
    }

}

let mapStateToProps = (state) => (
    {
        users : getUsersFromState(state),
//        users : getUsersWithPhoto(state),
        pageSize: getPageSizeFromState(state),
        totalCount : getTotalCountFromState(state),
        currentPage: getCurrentPageState(state),
        isLoading : getIsLoadingFromStateUsers(state),
        isAdding : getIsAddingFromState(state),
        leftLimit : getLeftLimit(state),
        rightLimit : getRightLimit(state)
    }
)

export default compose(connect (mapStateToProps,{getUsersFull,addUserFull,delUserFull,changePages}),
                                      withAuthRedirect
                                      )(UsersAPI)