import { Button, Card } from 'flowbite-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SinglePost = ({ title, body, id }) => {
    const navigate = useNavigate();
    const readMoreBtn = () => {
        navigate(`/allpost/${id}`);
    }
    return (
        <Card>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {body}
            </p>
            <Button className='block w-max' onClick={() => readMoreBtn()}>Read More</Button>
        </Card>
    );
};

export default SinglePost;