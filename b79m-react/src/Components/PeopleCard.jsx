import { Card } from 'flowbite-react';
import React from 'react';
import Map from './Map';

const PeopleCard = ({picture, name, about, latitude, longitude}) => {
    return (
        <div className="max-w-sm">
            <Card imgSrc={picture} className='h-full'>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {about}
                </p>
                <Map latitude={latitude} longitude={longitude} />
            </Card>
        </div>
    );
};

export default PeopleCard;