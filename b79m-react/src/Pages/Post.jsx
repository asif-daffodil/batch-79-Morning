import axios from 'axios';
import { Button, Card } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Post = () => {
    let { postId } = useParams();
    const [getData, setGetData] = useState();
    const navigate = useNavigate();

    const backHandeller = () => {
        navigate("/allpost");
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(res => setGetData(res.data));
    }, [])
    return (
        <div className='py-24'>
            <Card className='container m-auto'>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{getData?.title}</h2>
                <p className="font-normal text-gray-700 dark:text-gray-400">{getData?.body}</p>
                <Button onClick={()=> backHandeller()} className='block w-max'>Back</Button>
            </Card>
        </div>
    );
};

export default Post;