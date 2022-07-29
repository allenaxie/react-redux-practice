import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {

    // state.nameOfSlice.value
    const user = useSelector((state) => state.user.value);
    const theme = useSelector((state) => state.theme.value);
    const hidden = useSelector((state) => state.hide.value);

    return (
        <>
            {hidden ||
                <>
                    <div style={{ color: theme }}>Profile</div>
                    <p style={{ color: theme }}>Name: {user.name} </p>
                    <p style={{ color: theme }}>Age: {user.age}</p>
                    <p style={{ color: theme }}>Email: {user.email}</p>
                </>
            }
        </>
    )
}

export default Profile