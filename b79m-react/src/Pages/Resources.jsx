import React from 'react';
import Bar from '../Components/Bar';
import Pie from '../Components/Pie';


const Resources = () => {
    return (
        <div className='py-24 px-12 grid md:grid-cols-2 gap-3 md:gap-6'>
            <div className="">
                <Bar />
            </div>
            <div className="">
                <Pie />
            </div>
        </div>
    );
};

export default Resources;