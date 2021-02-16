import React from 'react';
import classes from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}> Stas </div>
                <div className={classes.dialog}> Slava </div>
                <div className={classes.dialog}> Stepa </div>

            </div>
            <div className={classes.dialogsItems}>
                <div className={classes.messages}>Hi</div>
                <div className={classes.messages}>How are You?</div>
                <div className={classes.messages}>Thanks You!</div>
            </div>
        </div >
    );
}
export default Dialogs;