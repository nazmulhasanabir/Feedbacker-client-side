import React from 'react';
import Slider from '../Slider/Slider';
import ServiceCard from './ServiceCard';
import ExtraOne from './ExtraOne';
import ExtraTwo from './ExtraTwo';
import Count from '../../Count/CountUp';
import Partner from '../Partner';

const Home = () => {
    return (
        <div>
        <Slider></Slider>
        <ServiceCard></ServiceCard>
        <Count></Count>
        <ExtraTwo></ExtraTwo>
        <ExtraOne></ExtraOne>
        <Partner></Partner>
        </div>
    );
};

export default Home;