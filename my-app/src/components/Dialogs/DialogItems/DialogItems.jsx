
import React from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import DialogUser from '../Dialog/DialogUser';
import classes from './DialogItems.module.css'

const DialogItems = (props) => {
    let path = '/dialogs' + props.id;
    return (
        <BrowserRouter>
            <div className={classes.dialogsItems}>

                <NavLink to={path} activeClassName={classes.activeLink}>{props.name}</NavLink>
                <Route exact path={path} render={() => <DialogUser />} />
            </div >
        </BrowserRouter>
    )
}

export default DialogItems;