import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addMessageActionCreator } from '../../../Redux/dialogsReducer';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import Message from './Message'

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {

    return {
        addMessage: (message) => {
            dispatch(addMessageActionCreator(message))
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Message);


