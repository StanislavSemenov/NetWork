import React from 'react';
import { NavLink, Route, BrowserRouter } from 'react-router-dom';
import classes from './DialogUser.module.css'



const DialogUser = (props) => {
    debugger
    let path = '/dialogs' + props.props.id

    return (
        < BrowserRouter >
            <div className={classes.dialogsItems}>
                <NavLink to={path} activeClassName={classes.activeLink}>
                    <Route exact path={path} render={() => ' Hello'} />

                </NavLink>

            </div>
        </BrowserRouter >
    )

}

export default DialogUser;