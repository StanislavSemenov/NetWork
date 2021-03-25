import React from 'react';
import store from '../../Redux/ReduxStore';
import DialogItems from './DialogItems/DialogItems';
import classes from './Dialogs.module.css'
import MessageContainer from './Message/MessageContainer';


//ВНИАНИЕ! Временно не правильно вызов Store напрямую (временно)
const Dialogs = () => {

    let state = store.getState().dialogsPage
    let dialogsArray = state.dialogs.
        map((dialog) =>
            <DialogItems
                name={dialog.name}
                id={dialog.id}
                key={dialog.id}
            />)

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