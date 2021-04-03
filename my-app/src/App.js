import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import UsersContainer from './components/Dialogs/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import { withSuspense } from './components/HOC/withSuspense';
import Login from './components/login/login';
import Music from './components/Navbar/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/Navbar/News/News';
import Settings from './components/Navbar/Settings/Settings';
import Preloader from './components/Preloader/Preloader';
//import ProfileContainer from './components/Profile/ProfileContainer';
import Friends from './components/Sidebar/Friends/Friends';
import { initializeApp } from './Redux/appReducer';
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <div className='preloader'><Preloader /></div>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />

                <div className='app-wrapper-content'>

                    <Route path='/profile/:userId?/' render={withSuspense(ProfileContainer)} />
                    <Route path='/messages' render={withSuspense(Dialogs)} />  {/* Временно через getState*/}
                    <Route path='/news' render={News} />
                    <Route path='/music' render={Music} />
                    <Route path='/setting' render={Settings} />
                    <Route exact path='/friends' render={<Friends />} /> {/* Временно через getState*/}

                    <Route path='/users' render={withSuspense(UsersContainer)} />
                    <Route path='/login' render={() => <Login />} />
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }))
    (App);