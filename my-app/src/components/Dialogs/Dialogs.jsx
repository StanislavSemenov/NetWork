import React from 'react';
import DialogItems from './DialogItems/DialogItems';
import classes from './Dialogs.module.css'
import Message from './Message/Message';


const Dialogs = (props) => {
    /* обновленние массивов через map*/
    let dialogsArray = [props.state.dialogs.map(dialog => <DialogItems name={dialog.name} id={dialog.id} />)]
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