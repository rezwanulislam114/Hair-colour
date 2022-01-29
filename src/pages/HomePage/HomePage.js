import React from 'react';
import AboutHeader from '../../components/About-Header/AboutHeader';
import HomeHeader from '../../components/Home-Header/HomeHeader';
import WhyUs from '../../components/WhyUS/WhyUs';

const HomePage = () => {
    return (
        <div>
            <HomeHeader></HomeHeader>
            <AboutHeader></AboutHeader>
            <WhyUs></WhyUs>
        </div>
    );
};

export default HomePage;