import React from 'react';
import classes from './MyPosts.module.css';

function MyPosts() {
    return (
        <div>
            My posts
            <div>
                New post
            </div>
            <div className={classes.posts}>
                post 1
            </div>
            <div className={classes.item}>
                post 2
            </div>
        </div>
    );
}
export default MyPosts;