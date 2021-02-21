import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsArray = [props.posts.map((post) => <Post message={post.message} likesCount={post.likesCount} />)]

    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value;
    }

    return (
        <div className={classes.postsBlock}>
            <h23>My Posts</h23>
            <div >
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button onClick={addPost}>  Add post</button>
                </div>
            </div>

            <div className={classes.posts}>
                {postsArray}
            </div>
        </div>
    );
}
export default MyPosts;