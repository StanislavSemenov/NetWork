import React from 'react';
import { NavLink, Router } from 'react-router-dom';
import classes from './DialogItem.module.css'

const DialogItem = (props) => {
    let path = '/dialogs' + props.id;
    return (
        <div className={classes.dialogsItems}>
            <NavLink to={path} activeClassName={classes.activeLink}>{props.name}</NavLink>

        </div>
    )
}

export default DialogItem;