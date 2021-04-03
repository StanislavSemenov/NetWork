import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { useForm } from 'react-hook-form'
const MyPosts = React.memo(props => {

    let postsElements = props.posts
        .map((post) =>
            <Post
                message={post.message}
                key={post.id}
                likesCount={post.likesCount}
            />)

    const PostForm = () => {
        const { register, handleSubmit, errors } = useForm()

        const onSubmit = (data) => {
            props.addPost(data.NewPost)
        }

        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input
                        type='NewPost'
                        placeholder='NewPost'
                        name='NewPost'
                        ref={register({ required: 'true', minLength: 2 })}
                    />
                </div>
                {errors.NewPost && <p>NewPost in invalid</p>}

                <div>
                    <input type='submit' />
                </div>
            </form >
        )
    }

    return (
        <div className={classes.postsBlock}>
            <h1>My Posts</h1>
            <PostForm />
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div >
    );
})
export default MyPosts;