import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*ввод диалогов*/
let dialogsData = [
    { id: 1, name: 'Stas' },
    { id: 2, name: 'Slava' },
    { id: 3, name: 'Stason' },
]
/*ввод сообщений диалогов */
let messageData = [
    { id: 1, message: 'Hi', likesCount: '10' },
    { id: 2, message: 'Yo', likesCount: '15' },
    { id: 3, message: 'Yo', likesCount: '15' },
]
/*ввод постов */
let postData = [
    { id: 1, message: 'Hi, Stanislav', likesCount: '10' },
    { id: 2, message: 'Hello, Bro   ', likesCount: '15' },
]

let props = { dialogsArray: dialogsData, messagesArray: messageData, postData }

ReactDOM.render(
    <App appProps={props} />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function to
// log results (for example: reportWebVitals(console.log)) or send to an
// analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
