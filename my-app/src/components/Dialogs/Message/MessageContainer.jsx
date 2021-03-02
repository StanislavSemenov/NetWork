import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../Redux/dialogsReducer';
import Message from './Message'



const MessageContainer = (props) => {

    let state = props.store.getState().dialogsPage
    let newMessageElement = React.createRef()

    let addMessage = () => { props.store.dispatch(addMessageActionCreator()) }

    let onMessageChange = (text) => {
        let action = updateNewMessageTextActionCreator(text)
        props.store.dispatch(action);
    }

    return (
        <Message
            addMessage={addMessage}
            updateNewMessageText={onMessageChange}
            state={state}
            newMessageText={state.updateNewMessageText}
        />
    );
}

export default MessageContainer;

