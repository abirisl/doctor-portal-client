import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import location from '../../../assets/icons/marker.svg';
import call from '../../../assets/icons/phone.svg';
import Info from './Info';

const InfoCard = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            <Info cardTitle='Opening Hours' img={clock}></Info>
            <Info cardTitle='Our Locations' img={location}></Info>
            <Info cardTitle='Contact Us' img={call}></Info>
        </div>
    );
};

export default InfoCard;