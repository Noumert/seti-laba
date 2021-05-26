import "./User.css"
import React from 'react'
import userPhoto from "./../../assets/images/avatar.png"
import {NavLink} from 'react-router-dom'


const User = (param) => {

    let userElement = React.createRef();

    let onDelUser = () => {
        param.delUserFull(userElement.current.id);
    }

    let onAddUser = () => {
        param.addUserFull(userElement.current.id)
    }
    return (
                    <div className="user" id={param.id} ref={userElement}>
                        <NavLink to={"/profile/" + param.id}>
                        <img className="avatar" alt="avatar" src={param.avatar != null ? param.avatar : userPhoto} />
                        </NavLink>
                        <span className="username">{param.name}</span>
                        <div className="status">{param.status}</div>
                        <div className="city">City</div>
                        <div className="country">Country</div>
                        {param.friend ? <button disabled={param.isAdding} className="delAddUser" onClick={onDelUser}>Delete</button> : <button disabled={param.isAdding} className="delAddUser" onClick={onAddUser}>Add</button>}
                    </div>

    )
}

export default User;
