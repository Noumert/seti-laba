import logo from './logo.svg';
import {connect} from "react-redux";
import './App.css';
import React from 'react';
import HeaderContainer from './components/Header/HeaderContainer.js';
import Nav from './components/Nav/Nav.js';
import Loading from './components/common/Loading/Loading.js';
import DialogsContainer from './components/Chats/DialogsContainer.js';
import ProfileContainer from './components/Profile/ProfileContainer.js';
import LogIn from './components/Login/LogIn.js';
import UsersContainer from './components/Users/UsersContainer.js';
import {BrowserRouter,Route} from 'react-router-dom';
import {initializeApp} from "./redux/appReducer.js";

const ProfileSettings = React.lazy(() => import('./components/ProfileSettings/ProfileSettings.js'));

class App extends React.Component {

    componentDidMount(){
        this.props.initializeApp();
    }

    render(){
    if(!this.props.initialized){return <Loading isLoading={true} />}
    return (
        <BrowserRouter>
        <div className='app-main'>
            <HeaderContainer />
            <Nav />
            <div className="content">
            <Route path="/chats" render={ () => <DialogsContainer  />} />
            <Route path="/profile/:userId?" render={ () => <ProfileContainer />} />
            <Route path="/profileSettings" render={ () =>{return <React.Suspense fallback={<Loading isLoading={true} />}><ProfileSettings /></React.Suspense>}} />
            <Route path="/logIn" render={ () => <LogIn />} />
            <Route path="/users" render={ () => <UsersContainer />} />
            </div>
        </div>
        </BrowserRouter>
    )
    }
}

const mapStateToProps = (state) => ({
    initialized : state.app.initialized,
})

export default connect(mapStateToProps,{initializeApp})(App);
