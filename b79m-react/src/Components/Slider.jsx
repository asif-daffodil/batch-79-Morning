import { Carousel } from 'flowbite-react';
import React from 'react';
import slide2 from '../images/slides/slide2.jpg'
import slide3 from '../images/slides/slide3.jpg'
import slide4 from '../images/slides/slide4.jpg'
import slide5 from '../images/slides/slide5.jpg'

const Slider = () => {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 relative">
            <Carousel className='absolute top-14'>
                <img
                    src={slide2}
                    alt="..."
                />
                <img
                    src={slide3}
                    alt="..."
                />
                <img
                    src={slide4}
                    alt="..."
                />
                <img
                    src={slide5}
                    alt="..."
                />
            </Carousel>
        </div>

    );
};

export default Slider;