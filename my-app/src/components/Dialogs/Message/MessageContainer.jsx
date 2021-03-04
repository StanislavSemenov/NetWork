import React from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../Redux/dialogsReducer';
import store from '../../../Redux/ReduxStore';
import Dialogs from '../Dialogs';
import Message from './Message'

let propsState = () => { return store.getState() }

let mapStateToProps = (state) => {

    return {
        dialogsPage: state.dialogsPage,
        updateNewMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {

    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text))
        }
    }
}
const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message)

export default MessageContainer;


