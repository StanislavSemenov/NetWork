import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../Redux/profileReducer';
import store from '../../../Redux/ReduxStore';
import MyPosts from './MyPosts';


let mapStateToProps = (state) => {

    return {
        posts: state.profilePage.posts,
    }
}

let mapDispatchToProps = (dispatch) => {

    return {
        addPost: (newPost) => {
            dispatch(addPostActionCreator(newPost))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;