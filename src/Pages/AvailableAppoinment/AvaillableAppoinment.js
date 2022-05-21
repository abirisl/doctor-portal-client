import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import Service from '../Service/Service';

const AvaillableAppoinment = ({date}) => {
    const [services,setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

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
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mt-4 mx-24'>
                {
                    services.map(service => <Service key={service._id} service={service} setTreatment={setTreatment}></Service>)
                }
            </div>
            {treatment && <BookingModal date={date} treatment ={treatment} setTreatment={setTreatment}></BookingModal>}
        </div>
    );
};

export default AvaillableAppoinment;