import React from 'react';
import { NavLink, Route, BrowserRouter } from 'react-router-dom';
import DialogUser from './Dialog/DialogUser';
import DialogItems from './DialogItems/DialogItems';
import classes from './Dialogs.module.css'
import Message from './Message/Message';


const Dialogs = (props) => {

    /* обновленние массивов через map*/
    let dialogsArray = [props.state.dialogs.map(dialog => <DialogItems name={dialog.name} id={dialog.id} />)]
    let messageArray = [props.state.messages.map(message => <Message message={message.message} />)]

    return (

        <div className={classes.dialogs}>
            <div className={classes.dialog}>
                {dialogsArray}
            </div>
            <div className={classes.messages} >
                {messageArray}
            </div>

        </div>

    );
}
export default Dialogs;