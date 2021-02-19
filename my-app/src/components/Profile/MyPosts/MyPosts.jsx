import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postData = props.myPostProps.profilePostProps.appProps.postData
    let postsArray = [postData.map((post) => <Post message={post.message} likesCount={post.likesCount} />)]

    return (

        <div className={classes.postsBlock}>
            <h23>My Posts</h23>
            <div >
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>

            <div className={classes.posts}>
                {postsArray}
            </div>
        </div>
    );
}
export default MyPosts;