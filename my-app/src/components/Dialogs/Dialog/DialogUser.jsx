import React from 'react';
import classes from './DialogUser.module.css'

const DialogUser = (props) => {
    debugger
    return (
        <div className={classes.dialogs}>
            <div> {props.message}</div>
            <div> {props.likesCount}</div>
        </div>
    )
}
export default DialogUser;