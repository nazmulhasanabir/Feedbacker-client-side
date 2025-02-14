import React from 'react';
import Slider from '../Slider/Slider';
import ServiceCard from './ServiceCard';
import ExtraOne from './ExtraOne';
import ExtraTwo from './ExtraTwo';
import Count from '../../Count/CountUp';
import Partner from '../Partner';

const Home = () => {
    return (
        <div className='dark:bg-cyan-900 dark:text-white'>
        <Slider></Slider>
        <Count></Count>
        <ServiceCard></ServiceCard>
            
        <ExtraTwo></ExtraTwo>
        <ExtraOne></ExtraOne>
        <Partner></Partner>
        </div>
    );
};

export default Home;