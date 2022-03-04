import React from 'react';
import { useParams } from 'react-router-dom';

const Culture = () => {
    const {friendId} = useParams();
    return (
        <div>
            <h3>Our culture is very cool: {friendId}</h3>
           
        </div>
    );
};

export default Culture;