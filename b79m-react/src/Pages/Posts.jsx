import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SinglePost from '../Components/SinglePost';
import { Helmet } from 'react-helmet';

const Posts = () => {
    const [allPost, setAllPost] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
            setAllPost(res.data);
        })
    }, [])


    return (
        <div className='container mx-auto grid md:grid-cols-3 gap-4 py-24'>
            <Helmet>
                <title>All Post</title>
            </Helmet>
            {allPost.slice(0, 10).map(data => (
                <SinglePost key={data.id} title={data.title} body={data.body} id={data.id} />
            ))}
        </div>
    );
};

export default Posts;