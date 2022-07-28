import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/user';

const Login = () => {

    // useDispatch is used to modify state
    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(login({
            // passing payload to reducer function
            name: "Allen",
            age: 27,
            email: "a@a.com",
        }))}>Login</button>
    )
}

export default Login