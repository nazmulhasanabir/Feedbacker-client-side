import React from 'react';
import Slider from '../Slider/Slider';
import ServiceCard from './ServiceCard';
import ExtraOne from './ExtraOne';
import ExtraTwo from './ExtraTwo';

const Home = () => {
    return (
        <div>
        <Slider></Slider>
        <ServiceCard></ServiceCard>
        <ExtraTwo></ExtraTwo>
        <ExtraOne></ExtraOne>
        </div>
    );
};

export default Home;