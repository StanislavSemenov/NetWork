import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Header from './components//Header/Header';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Navbar/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/Navbar/News/News';
import Settings from './components/Navbar/Settings/Settings';
import Profile from './components/Profile/Profile';

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />

                <div className='app-wrapper-content'>
                    <Route exact path='/profile' render={() => <Profile posts={props.posts} />} />
                    <Route exact path='/messages' render={() => <Dialogs dialogs={props.dialogs} messages={props.messages} />} />
                    <Route exact path='/news' render={News} />
                    <Route exact path='/music' render={Music} />
                    <Route exact path='/setting' render={Settings} />


                </div>
            </div>
        </BrowserRouter >
    )
}
export default App;