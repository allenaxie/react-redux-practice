import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/user';

const Login = () => {

    // useDispatch is used to modify state
    const dispatch = useDispatch();

    return (
        <>

            <button onClick={() => dispatch(login({
                // passing payload to reducer function
                name: "Allen",
                age: 27,
                email: "a@a.com",
            }))}>Login</button>
            <button onClick={() => dispatch(logout())}>Logout</button>
        </>
    )
}

export default Login