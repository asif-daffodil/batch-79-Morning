import React from 'react';
import Slider from '../Components/Slider';
import Bangladesh from '../Components/Bangladesh';
import MarketPlace from './MarketPlace';

const Home = () => {
    return (
        <div>
            <Slider />
            <Bangladesh />
            <MarketPlace />
        </div>
    );
};

export default Home;