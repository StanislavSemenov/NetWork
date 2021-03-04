import React from 'react';
import store from '../../Redux/ReduxStore';
import DialogItems from './DialogItems/DialogItems';
import classes from './Dialogs.module.css'
import MessageContainer from './Message/MessageContainer';

const Dialogs = () => {
    debugger
    let state = store.getState().dialogsPage //не правильно вызов Store напрямую (временно)
    let dialogsArray = [state.dialogs.map((dialog) => <DialogItems name={dialog.name} id={dialog.id} />)]

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog}>
                {dialogsArray}
            </div>
            <div className={classes.messages} >
                < MessageContainer />

            </div>
        </div>
    );
}
export default Dialogs;