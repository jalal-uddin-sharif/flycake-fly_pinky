import React from 'react';
import HeroSection from './HeroSection';
import Categories from './categories/Categories';
import TrendingCakes from './trendingnow/TrendingCakes';
import WhyChooseUs from './WhyChooseUs';

const Landing = () => {
    return (
        <div>
            <HeroSection/>
            <Categories/>
            <TrendingCakes/>
            <WhyChooseUs/>
            
        </div>
    );
};

export default Landing;