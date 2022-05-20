import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const AvaillableAppoinment = ({date}) => {
    const [services,setServices] = useState();

    useEffect(() => {
        fetch('service.json')
        .then(res => res.json())
        .then(data => setServices(data))
    })
    return (
        <div>
            <div className='text-center'>
            <h2 className='text-xl text-secondary mt-5'>Available Services on  {format(date, 'PP')}</h2>
            <h4 className='text-xl mt-3'>Please select a service.</h4>
            </div>
        </div>
    );
};

export default AvaillableAppoinment;