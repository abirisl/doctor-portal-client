import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import InfoCard from './Info/InfoCard';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCard></InfoCard>
            <Services></Services>
        </div>
    );
};

export default Home;