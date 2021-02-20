import React from 'react';
import { NavLink, Router } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css'
import Message from './Message/Message';

<div>
    <DialogItem />
    <Message />
</div>


const Dialogs = (props) => {
    /* обновленние массивов через map*/
    let dialogsArray = [props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)]
    let messageArray = [props.state.messages.map(message => <Message message={message.message} />)]
    debugger
    return (
        <div className={classes.dialogs}>
            <div>
                {dialogsArray}
            </div>
            <div>
                {messageArray}

            </div>
        </div >
    );
}
export default Dialogs;