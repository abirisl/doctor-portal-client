import React from 'react';
import banner from '../../../assets/images/chair.png';

const Banner = () => {
    return (
        <div class="hero min-h-screen px-8 bg-no-repeat bg-left-top bg-[url('/src/assets/images/bg.png')]">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img  src={banner} class="max-w-sm rounded-lg shadow-2xl" alt=''/>
                <div>
                    <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-neutral">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;