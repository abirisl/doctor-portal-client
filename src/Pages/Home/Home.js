import React from 'react';
import PatientReview from '../../PatientReview/PatientReview';
import Contact from '../Contact/Contact';
import Banner2 from '../DentalCareCards/Banner2';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Service from '../Services/Service';
import Banner from './Banner/Banner';
import InfoCard from './Info/InfoCard';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCard></InfoCard>
            <Service></Service>
            <Banner2></Banner2>
            <MakeAppoinment></MakeAppoinment>
            <PatientReview></PatientReview>
            <Contact></Contact>
        </div>
    );
};

export default Home;