import React from 'react';
import DialogItems from './DialogItems/DialogItems';
import classes from './Dialogs.module.css'
import MessageContainer from './Message/MessageContainer';

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage
    let dialogsArray = [state.dialogs.map((dialog) => <DialogItems name={dialog.name} id={dialog.id} />)]
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog}>
                {dialogsArray}
            </div>
            <div className={classes.messages} >
                < MessageContainer store={props.store} />

            </div>
        </div>
    );
}
export default Dialogs;