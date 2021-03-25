import React from "react";
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';
import { Redirect } from "react-router";
import { login, outMessagesServer } from './../../Redux/authReducer';


const Login = (props) => {
    debugger
    const { register, handleSubmit, errors } = useForm()

    const onSubmit = data => {
        props.login(data.email, data.Password, data.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/Profile'} />
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <h1>Login</h1>
                <input
                    type='text'
                    placeholder='email'
                    name='email'
                    ref={register}
                />
            </div>
            <div>
                <input
                    type='Password'
                    placeholder='Password'
                    name='Password'
                    ref={register({ required: 'true', minLength: 8 })}
                />
            </div>
            {errors.Password && <p>Password in invalid</p>}
            <div>{props.messagesServer}</div>
            <div>
                <input
                    type={'checkbox'}
                    placeholder='rememberMe'
                    name='rememberMe'
                    ref={register}
                />
                remember me
            </div>
            <div>
                <input type='submit' />
            </div>
        </form >
    )
}
const mapStateToProps = (state) => ({

    isAuth: state.auth.isAuth,
    messagesServer: state.auth.messagesServer
})

export default connect(mapStateToProps, { login, outMessagesServer })(Login)