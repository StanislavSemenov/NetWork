import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../Redux/dialogsReducer';
import DialogUser from '../Dialog/DialogUser';
import classes from './Message.module.css'

const Message = (props) => {

    let MessageElements = [props.dialogsPage.messages.map((message) => <DialogUser message={message.message} likesCount={message.likesCount} />)]
    let newMessageElement = React.createRef()
    let addMessage = () => { props.dispatch(addMessageActionCreator()) }
    let onMessageChange = () => {
        let text = newMessageElement.current.value
        let action = updateNewMessageTextActionCreator(text)
        props.dispatch(action);
    }
    return (
        <div className={classes.dialogs}>
            <h23>Messages</h23>
            <div >
                <div>
                    <textarea onChange={onMessageChange} ref={newMessageElement}
                        value={props.dialogsPage.newMessageText} />
                </div>
                <div>
                    <button onClick={addMessage}>  Add message</button>
                </div>
            </div>
            <div className={classes.posts}>
                {MessageElements}
            </div>
        </div >
    );
}

export default Message;

