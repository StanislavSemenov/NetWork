import React from "react";
import { useForm } from "react-hook-form";



const LoginForm = () => {
    const { register, handleSubmit, errors } = useForm()

    const onSubmit = data => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input type='text' placeholder='email' name='email' ref={register} />
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
            <div>
                <input type={'checkbox'} /> remember me
            </div>
            <div>
                <input type='submit' />
            </div>
        </form >
    )
}
const Login = (props) => {
    return <div>
        <h1>Login</h1>
        <LoginForm />
    </div>
}


export default Login