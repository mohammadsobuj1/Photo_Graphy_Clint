import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Feedback = () => {
    const feedback = useLoaderData()
    console.log(feedback)
    return (
        <div>
hello feed
        </div>
    );
};

export default Feedback;