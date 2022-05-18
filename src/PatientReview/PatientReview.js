import React from 'react';
import quote from '../assets/icons/quote.svg';
import people1 from '../assets/images/people1.png';
import people2 from '../assets/images/people2.png';
import people3 from '../assets/images/people3.png';
import Review from './Review';

const PatientReview = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Windon Herry',
            reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'california',
            img: people1
        },
        {
            _id: 2,
            name: 'Windon Herry',
            reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'california',
            img: people2
        },
        {
            _id: 3,
            name: 'Windon Herry',
            reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'california',
            img: people3
        }
    ]
    return (
        <div className='my-28 px-7'>
            <div className='flex justify-between'>
                <div>
                    <h6 className='text-xl text-primary'>Testimonial</h6>
                    <h3 className='text-4xl mt-5'>What Our Patients Says</h3>
                </div>
                <div>
                    <img src={quote} className='w-32 lg:w-48' alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default PatientReview;