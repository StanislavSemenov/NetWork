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
    /*данные из index.js через props*/
    let dialogsData = props.dialogsProps.appProps.dialogsArray
    let messageData = props.dialogsProps.appProps.messagesArray
    /* обновленние массивов через map*/
    let dialogsArray = [dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)]
    let messageArray = [messageData.map(message => <Message message={message.message} />)]
    console.log(dialogsArray)
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