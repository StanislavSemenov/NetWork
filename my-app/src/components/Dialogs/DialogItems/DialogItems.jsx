import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogUser from '../Dialog/DialogUser';
import classes from './DialogItems.module.css'

const DialogItems = (props) => {
    let path = '/dialogs' + props.id;
    return (
        <div className={classes.dialogsItems}>
            <NavLink to={path} activeClassName={classes.activeLink}>
                {props.name}
            </NavLink>
        </div>
    )
}
export default DialogItems;