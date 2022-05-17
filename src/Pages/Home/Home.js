import React from 'react';
import Service from '../Services/Service';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import InfoCard from './Info/InfoCard';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCard></InfoCard>
            <Service></Service>
        </div>
    );
};

export default Home;