import React from 'react';
import banner from '../../../assets/images/chair.png';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-no-repeat bg-left-top bg-[url('/src/assets/images/bg.png')]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img  src={banner} className="max-w-sm rounded-lg shadow-2xl" alt=''/>
                <div className='px-12'>
                    <h1 className="text-4xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-neutral">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;