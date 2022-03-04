import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const PostsDetails = () => {
    const [post, setPost] = useState({});
    const {postId} = useParams();
    
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data) )
    } , []);
    
    
    return (
        <div>
            <h1>Post details: {postId}</h1>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            
        </div>
    );
};

export default PostsDetails;