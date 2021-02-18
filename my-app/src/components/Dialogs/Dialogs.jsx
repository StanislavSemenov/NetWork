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

    let dialogsData = [
        { id: 1, name: 'Stas' },
        { id: 2, name: 'Slava' },
        { id: 3, name: 'Stason' },
    ]
    let dialogsArray = [dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)]

    let messageData = [
        { id: 1, message: 'Hi', likesCount: '10' },
        { id: 2, message: 'Yo', likesCount: '15' },
        { id: 3, message: 'Yo', likesCount: '15' },
    ]

    let messageArray = [messageData.map(message => <Message message={message.message} />)
    ]

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