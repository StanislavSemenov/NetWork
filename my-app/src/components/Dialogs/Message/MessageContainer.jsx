import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../Redux/dialogsReducer';
import StoreContext from '../../../StoreContext';
import Message from './Message'


const MessageContainer = () => {
    debugger
    return (
        <StoreContext.Consumer>
            { (store) => {
                let state = store.getState().dialogsPage

                let addMessage = () => { store.dispatch(addMessageActionCreator()) }

                let onMessageChange = (text) => {
                    let action = updateNewMessageTextActionCreator(text)
                    store.dispatch(action);
                }

                return <Message
                    addMessage={addMessage}
                    updateNewMessageText={onMessageChange}
                    state={state}
                    newMessageText={state.updateNewMessageText}
                />
            }
            }
        </StoreContext.Consumer>
    );
}

export default MessageContainer;

