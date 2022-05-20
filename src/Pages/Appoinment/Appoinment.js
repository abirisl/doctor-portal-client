import React, { useState } from 'react';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner';
import AvaillableAppoinment from '../AvailableAppoinment/AvaillableAppoinment';
import Footer from '../Shared/Footer/Footer';

const Appoinment = () => {
    const [date,setDate] = useState(new Date());
    return (
        <div>
            <AppoinmentBanner date={date} setDate={setDate}></AppoinmentBanner>
            <AvaillableAppoinment date={date}></AvaillableAppoinment>
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;