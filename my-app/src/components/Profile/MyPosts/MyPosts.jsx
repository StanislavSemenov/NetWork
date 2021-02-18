import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postData = [
        { id: 1, message: 'Hi, Stanislav', likesCount: '10' },
        { id: 2, message: 'Hello, Bro   ', likesCount: '15' },
    ]

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
                <Post message={postData[0].message} likesCount={postData[0].likesCount} />
                <Post message={postData[1].message} likesCount={postData[1].likesCount} />
            </div>
        </div>
    );
}
export default MyPosts;