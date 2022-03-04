import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const {id, name,  email, website, address} = props.friend;
    const history = useHistory();
    const friendStyle = {
        backgroundColor: 'burlywood',
        border: '2px solid goldenRod',
        padding: '10px',
        borderRadius: '7px',
    };
   const url = `/friend/${id}`;
   const handleFriendClick = () =>{
    history.push(`/friend/${id}`);
   }
    return (
        <div style={friendStyle}>
            <h2>My name is: {name} {id}</h2>
            <h3>email: {email}</h3>
            <p>visite me: {website}</p>
            <p><small>I live in: {address.city}</small></p>
            <Link to={url}>Visit me</Link>
            <br />
           <Link to={url}>
           <button>Visit me</button>
           </Link>
           <br />
           <button onClick={handleFriendClick}>Visit me2</button>

        </div>
    );
};

export default Friend;