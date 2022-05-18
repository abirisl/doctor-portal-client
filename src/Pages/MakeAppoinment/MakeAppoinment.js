import React from 'react';
import doctor from '../../assets/images/doctor-small.png';
import appoinment from '../../assets/images/appointment.png'

const MakeAppoinment = () => {
    return (
        <section style={{
            background: `url(${appoinment})`
        }} className='flex justify-center items-center mt-24 py-12'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 mx-14'>
                <h3 className='text-xl text-primary'>Appoinment</h3>
                <h2 className='text-3xl text-white mt-3'>Make an appointment Today</h2>
                <p className='text-white mt-2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            </div>
        </section>
    );
};

export default MakeAppoinment;