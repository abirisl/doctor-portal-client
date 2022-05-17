import React from 'react';
import Services from './Services';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';

const Service = () => {
    return (
        <div className='my-24'>
            <h4 className='uppercase text-secondary font-bold text-3xl text-center'>Our Servicees</h4>
            <h3 className='text-4xl text-center mt-3'>Services We Provides</h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 px-5 mt-7'>
            <Services cardTitle='Fluoride Treatment' img={fluoride}></Services>
            <Services cardTitle='Cavity Filling' img={cavity}></Services>
            <Services cardTitle='Teeth Whitening' img={whitening}></Services>
        </div>
        </div>
    );
};

export default Service;