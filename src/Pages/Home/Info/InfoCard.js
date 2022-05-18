import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import location from '../../../assets/icons/marker.svg';
import call from '../../../assets/icons/phone.svg';
import Info from './Info';

const InfoCard = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 px-12 mt-7'>
            <Info cardTitle='Opening Hours' bgclassName='bg-gradient-to-r from-secondary to-neutral' img={clock}></Info>
            <Info cardTitle='Our Locations' bgclassName='bg-accent' img={location}></Info>
            <Info cardTitle='Contact Us' bgclassName='bg-gradient-to-r from-secondary to-neutral' img={call}></Info>
        </div>
    );
};

export default InfoCard;