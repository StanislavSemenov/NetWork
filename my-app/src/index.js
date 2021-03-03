import { BrowserRouter } from 'react-router-dom';
import store from './Redux/ReduxStore';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StoreContext from './StoreContext';


export let renderEntireTree = (state) => {
    debugger
    ReactDOM.render(

        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App //dispatch={store.dispatch.bind(store)} store={store}
                />

            </StoreContext.Provider>

        </BrowserRouter>,
        document.getElementById('root'));
}
renderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState()
    renderEntireTree(state)
});

reportWebVitals();

// If you want to start measuring performance in your app, pass a function to
// log results (for example: reportWebVitals(console.log)) or send to an
// analytics endpoint. Learn more: https://bit.ly/CRA-vitals