import React from 'react';
import { useParams } from 'react-router-dom'

function Users() {
    const { UserId } = useParams();
    return <><div>Users</div><div>UserId: {UserId}</div></>;
}

export default Users;
