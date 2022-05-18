import React from 'react';
import quote from '../assets/icons/quote.svg'

const PatientReview = () => {
    return (
        <div className='my-24 px-14'>
            <div className='flex justify-between'>
                <div>
                    <h6 className='text-xl text-primary'>Testimonial</h6>
                    <h3 className='text-3xl mt-5'>What Our Patients Says</h3>
                </div>
                <div>
                    <img src={quote} alt="" />
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default PatientReview;