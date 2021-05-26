import "./Nav.css";
import {NavLink} from 'react-router-dom';
import React from 'react';

const Nav = (param) => {
    return (
            <nav className='common-nav'>
                             <NavLink className="link" to="/users">Find users</NavLink>
                             <NavLink className="link" to="/chats">Chats</NavLink>
                             <NavLink className="link" to="/profile">Profile</NavLink>
                             <NavLink className="link" to="/profileSettings">ProfileSettings</NavLink>
            </nav>
    )
}

export default Nav;