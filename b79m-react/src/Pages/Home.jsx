import React from 'react';
import Slider from '../Components/Slider';
import Bangladesh from '../Components/Bangladesh';
import MarketPlace from './MarketPlace';
import { Helmet } from 'react-helmet';
import Map from '../Components/Map';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Batch 79</title>
            </Helmet>
            <Slider />
            <Bangladesh />
            <MarketPlace />
        </div>
    );
};

export default Home;