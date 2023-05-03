import React from 'react';
import jsonData from '../profiles.json';
import PeopleCard from '../Components/PeopleCard';
import { Helmet } from 'react-helmet';

const People = () => {
    return (
        <div className='grid md:grid-cols-3 gap-6 py-16 w-max m-auto'>
            <Helmet>
                <title>People</title>
            </Helmet>
            {jsonData.map(data => (
                <PeopleCard key={data._id} picture={data.picture} name={data.name} about={data.about} latitude={data.latitude} longitude={data.longitude} />
            ))}
        </div>
    );
};

export default People;