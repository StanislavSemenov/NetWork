import { Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import UsersContainer from './components/Dialogs/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Music from './components/Navbar/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/Navbar/News/News';
import Settings from './components/Navbar/Settings/Settings';
import ProfileContainer from './components/Profile/ProfileContainer';
import Friends from './components/Sidebar/Friends/Friends';

const App = () => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer />
            <Navbar />
            <div className='app-wrapper-content'>
                <Route path='/profile/:UserId?' render={() => <ProfileContainer />} />
                <Route exact path='/messages' render={() => <Dialogs //store={props.store} 
                />} />
                <Route exact path='/news' render={News} />
                <Route exact path='/music' render={Music} />
                <Route exact path='/setting' render={Settings} />
                <Route exact path='/friends' render={() => <Friends //state={props.state.sideBar}                     
                />} />
                <Route exact path='/users' render={() => <UsersContainer />} />
            </div>
        </div>
    )
}
export default App;