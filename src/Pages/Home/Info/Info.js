import React from 'react';

const Info = ({img,cardTitle,bgClass}) => {
    return (
        <div className={`card card-side bg-base-100 shadow-xl text-white ${bgClass}`}>
            <figure className='pl-5'>
                <img src={img} alt="Movie"/>
                </figure>
            <div className="card-body">
                <h2 className="card-title">{cardTitle}</h2>
                <p>Click the button to watch on Jetflix app.</p>
            </div>
        </div>
    );
};

export default Info;