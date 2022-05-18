import React from 'react';

const Contact = () => {
    return (
        <section className='text-center py-28  bg-[url("/src/assets/images/appointment.png")]'>
                <div>
                    <h4 className='text-xl text-secondary'>Contact Us</h4>
                    <h2 className='text-3xl text-white'>Stay connected with us</h2>
                </div>
                    <form className='mt-5'>
                        <input type="text" placeholder="Email Address" class="input input-bordered input-sm w-96" />
                        <br />
                        <input type="text" placeholder="Subject" class="input input-bordered input-sm w-96 mt-3" />
                        <br />
                        <input type="text" placeholder="Your message" class="input input-bordered input-lg w-96 mt-3" />
                    </form>
        </section>
    );
};

export default Contact;