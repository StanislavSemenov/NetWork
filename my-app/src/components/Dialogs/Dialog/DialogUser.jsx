import React from 'react';
import classes from './DialogUser.module.css'

const DialogUser = (props) => {

    return (
        <div className={classes.dialogs}>
            <div>Message: {props.message}</div>
            <div>Like: {props.likesCount}</div>
        </div>
    )
}
export default DialogUser;