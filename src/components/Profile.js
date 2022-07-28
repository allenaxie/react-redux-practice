import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {

    // state.nameOfSlice.value
    const user = useSelector((state) => state.user.value);
    console.log(user)

    return (
        <>
            <div>Profile</div>
            <p>Name: {user.name} </p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
        </>
    )
}

export default Profile