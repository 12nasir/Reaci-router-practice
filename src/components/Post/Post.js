import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Post = (props) => {
    const {id, title, body} = props.post;
    const history = useHistory();
    const handleClick = () =>
    history.push(`/post/${id}`)
    return (
        <div>
            <h1>{title}</h1>
            <Link to={`/post/${id}`}>See post details</Link>
            <br />
            <button onClick={handleClick}>see details</button>
        </div>
    );
};

export default Post;