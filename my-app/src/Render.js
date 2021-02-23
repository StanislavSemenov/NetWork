import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPost } from './Redux/State';


export let RenderEntireTree = (state) => {
    debugger
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} />
        </BrowserRouter>,
        document.getElementById('root'));
}


