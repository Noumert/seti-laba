import "./Header.css";
import icon from "./../../assets/images/icon.png";
import {NavLink} from 'react-router-dom';
import React from 'react';

const Header = (param) => {
          return (
              <header className='common-header'>
                          <img src={icon} />
                          <span className="siteName">Hello</span>
                          <span className="loginBlock">
                          {param.login ? <span><button className="link" id="logOut" onClick={param.logOutFull}>Log out </button> {param.login}</span> :<NavLink className="link" id="login" to="/logIn">Log in</NavLink>}
                          </span>
              </header>
          )
      }
export default Header;