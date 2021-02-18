import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Header from './components//Header/Header';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Navbar/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/Navbar/News/News';
import Settings from './components/Navbar/Settings/Settings';
import Profile from './components/Profile/Profile';

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />

                <div className='app-wrapper-content'>
                    <Route exact path='/profile' component={Profile} />
                    <Route exact path='/messages' component={Dialogs} />
                    <Route exact path='/news' component={News} />
                    <Route exact path='/music' component={Music} />
                    <Route exact path='/setting' component={Settings} />

                </div>
            </div>
        </BrowserRouter >
    )
}
export default App;