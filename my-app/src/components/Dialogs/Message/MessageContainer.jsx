import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../Redux/dialogsReducer';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import Message from './Message'

let mapStateToProps = (state) => {

    return {
        dialogsPage: state.dialogsPage,
        updateNewMessageText: state.dialogsPage.newMessageText,

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


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Message);


