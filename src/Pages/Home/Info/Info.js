import React from 'react';

const Info = ({img,cardTitle,bgClass}) => {
    return (
        <div class={`card card-side bg-base-100 shadow-xl text-white ${bgClass}`}>
            <figure className='pl-5'>
                <img src={img} alt="Movie"/>
                </figure>
            <div class="card-body">
                <h2 class="card-title">{cardTitle}</h2>
                <p>Click the button to watch on Jetflix app.</p>
            </div>
        </div>
    );
};

export default Info;