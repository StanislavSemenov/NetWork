import React from 'react';

import classes from './Post.module.css';

const Post = (props) => {

    return (
        <div className={classes.item}>
            <img src="http://archilab.online/images/1/123.jpg" />{props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    )


}
export default Post;