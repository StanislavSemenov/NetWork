import { Route } from 'react-router-dom';
import './App.css';
import Header from './components//Header/Header';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Navbar/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/Navbar/News/News';
import Settings from './components/Navbar/Settings/Settings';
import Profile from './components/Profile/Profile';
import Friends from './components/Sidebar/Friends/Friends';

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
                <Route exact path='/profile' render={() =>
                    <Profile
                        profilePage={props.state.profilePage}
                        dispatch={props.dispatch}
                    />} />
                <Route exact path='/messages' render={() =>
                    <Dialogs
                        dialogsPage={props.state.dialogsPage}
                        dispatch={props.dispatch}
                    />} />
                <Route exact path='/news' render={News} />
                <Route exact path='/music' render={Music} />
                <Route exact path='/setting' render={Settings} />
                <Route exact path='/friends' render={() => <Friends state={props.state.sideBar} />} />
            </div>
        </div>
    )
}
export default App;