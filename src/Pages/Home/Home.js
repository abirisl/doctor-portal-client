import React from 'react';
import Contact from '../Contact/Contact';
import Banner2 from '../DentalCareCards/Banner2';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import PatientReview from '../PatientReview/PatientReview';
import Service from '../Services/Service';
import Footer from '../Shared/Footer/Footer';
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
            <Footer></Footer>
        </div>
    );
};

export default Home;