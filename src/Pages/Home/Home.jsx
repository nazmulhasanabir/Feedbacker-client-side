import React from 'react';
import Slider from '../Slider/Slider';
import ServiceCard from './ServiceCard';
import ExtraOne from './ExtraOne';

const Home = () => {
    return (
        <div>
        <Slider></Slider>
        <ServiceCard></ServiceCard>
        <ExtraOne></ExtraOne>
        </div>
    );
};

export default Home;