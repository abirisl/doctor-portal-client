import React, { useState } from 'react';
import appoinmentChair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';



const AppoinmentBanner = ({date,setDate}) => {
    return (
        <div className="hero min-h-screen bg-[url('/src/assets/images/bg.png')]">
            <div className="hero-content gap-48 flex-col lg:flex-row-reverse">
                <img src={appoinmentChair} className="max-w-sm rounded-lg shadow-2xl" alt=''/>
                <div className='rounded-lg shadow-2xl'>
                   <DayPicker
                     mode="single"
                     styles={{
                        caption: { color: 'red' }
                      }}
                     selected={date}
                     onSelect={setDate}
                   />
                </div>
            </div>
        </div>
    );
};

export default AppoinmentBanner;