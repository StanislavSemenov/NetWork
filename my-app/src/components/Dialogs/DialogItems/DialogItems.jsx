import React from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import DialogUser from '../Dialog/DialogUser';
import classes from './DialogItems.module.css'

const DialogItems = (props) => {

    let path = '/dialogs' + props.id;
    debugger
    return (
        <BrowserRouter>

            <div className={classes.dialogsItems}>
                <NavLink NavLink to={path} activeClassName={classes.activeLink}>
                    {props.name}
                    <Route exact path='/dialogs1' render={() => 'HI'} />
                    <Route exact path='/dialogs2' render={() => 'YO'} />
                    <Route exact path='/dialogs3' render={() => 'YOU'} />
                </NavLink>


            </div >
        </BrowserRouter>
    )
}

export default DialogItems;