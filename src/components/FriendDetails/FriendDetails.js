import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const FriendDetails = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});
    const history = useHistory();
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch (url)
        .then(res => res.json())
        .then(data =>setFriend(data));
    },[])
    const handleFriend = () =>{
        history.push('/friends');
    }
    
    return (
        <div>
            <h3>Friend details coming soon: {friendId}</h3>
            <h2>{friend.name}</h2>
            <h3>{friend.website}</h3>
            <h3>{friend.phone}</h3>
            <h4>Works at: {friend.company?.name}</h4>
            <button onClick={handleFriend}>See all friends</button>
        </div>
    );
};

export default FriendDetails;