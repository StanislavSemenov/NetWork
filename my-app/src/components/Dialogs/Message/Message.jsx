import React from 'react';
import DialogUser from '../Dialog/DialogUser';
import classes from './Message.module.css'
import { useForm } from "react-hook-form";


const Message = (props) => {

    let MessageElements = props.dialogsPage.messages
        .map((message) =>
            <DialogUser message={message.message}
                likesCount={message.likesCount}
                key={message.id}
            />)

    const MessageForm = () => {
        const { register, handleSubmit, errors } = useForm()

        const onSubmit = (data) => {
            props.addMessage(data.Message)
        }

        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input
                        type='Message'
                        placeholder='Message'
                        name='Message'
                        ref={register({ required: 'true', minLength: 3 })}
                    />
                </div>
                {errors.Message && <p>Message in invalid</p>}

                <div>
                    <input type='submit' />
                </div>
            </form >
        )
    }
    return (
        <div className={classes.dialogs}>

            <h1>Message</h1>
            <MessageForm />
            <div className={classes.posts}>
                {MessageElements}
            </div>

        </div >
    );
}

export default Message;

