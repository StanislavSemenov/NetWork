import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    debugger
    let postsElements = [props.posts.map((post) => <Post message={post.message} likesCount={post.likesCount} />)]
    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.addPost()
    }
    let onPostChange = () => {
        debugger
        let text = newPostElement.current.value
        props.updateNewPostText(text)

    }
    return (
        <div className={classes.postsBlock}>
            <h23>My Posts</h23>
            <div >
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                        value={props.newPostText} />
                </div>
                <div>
                    <button onClick={onAddPost}>  Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div >
    );
}
export default MyPosts;