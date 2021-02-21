import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Header from './components//Header/Header';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Navbar/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/Navbar/News/News';
import Settings from './components/Navbar/Settings/Settings';
import Profile from './components/Profile/Profile';
import Friends from './components/Sitebar/Friends/Friends';


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />

                <div className='app-wrapper-content'>
                    <Route exact path='/profile' render={() => <Profile state={props.state.profilePage} />} />
                    <Route exact path='/messages' render={() => <Dialogs state={props.state.dialogsPage} />} />
                    <Route exact path='/news' render={News} />
                    <Route exact path='/music' render={Music} />
                    <Route exact path='/setting' render={Settings} />
                    <Route exact path='/friends' render={() => <Friends state={props.state.siteBar} />} />


                </div>
            </div>
        </BrowserRouter >
    )
}
export default App;