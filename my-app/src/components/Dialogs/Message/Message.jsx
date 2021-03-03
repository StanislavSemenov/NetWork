import React from 'react';
import DialogUser from '../Dialog/DialogUser';
import classes from './Message.module.css'


const Message = (props) => {
    debugger

    let MessageElements = [props.state.messages.map((message) => <DialogUser message={message.message} likesCount={message.likesCount} />)]
    let newMessageElement = React.createRef()

    let AddMessage = () => {
        props.addMessage()
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value
        props.updateNewMessageText(text)
    }
    debugger
    return (
        <div className={classes.dialogs}>

            <h23>Messages</h23>
            <div >
                <div>
                    <textarea onChange={onMessageChange} ref={newMessageElement}
                        value={props.state.newMessageText} />
                </div>
                <div>
                    <button onClick={AddMessage}>  Add message</button>
                </div>
            </div>
            <div className={classes.posts}>
                {MessageElements}

            </div>
        </div >
    );
}

export default Message;

