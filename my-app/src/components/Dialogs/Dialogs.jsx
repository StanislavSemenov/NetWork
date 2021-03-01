import React from 'react';
import DialogItems from './DialogItems/DialogItems';
import classes from './Dialogs.module.css'
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogsArray = [props.dialogsPage.dialogs.map((dialog) => <DialogItems name={dialog.name} id={dialog.id} />)]
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog}>
                {dialogsArray}
            </div>
            <div className={classes.messages} >
                < Message
                    dialogsPage={props.dialogsPage}
                    dispatch={props.dispatch}
                />
            </div>
        </div>
    );
}
export default Dialogs;