import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer mt-5 d-flex justify-content-center align-items-center'>
            <div className='d-flex mt-5'>
                    <div className='me-4 for-color'>
                        <p>About Online Photography</p>
                        <p>Read Our blogs</p>
                        <p>Sign Up to Call</p>
                        <p>Add your Booking</p>
                    </div>

                    <div className='ms-4 for-color'>
                        <p>Get help</p>
                        <p>Read FAQs</p>
                        <p>View All Cities</p>
                        <p>Place near me to Take Photo.</p>
                    </div>

                    <div className='ms-4 for-color'>
                        <p>See more Sample</p>
                        <p>View Ratings</p>
                        <p>Checkout more</p>
                        <p>About My self</p>
                    </div>

                    <div className='ms-4 for-color'>
                        <p>See My Experience</p>
                        <p>My Camera specification</p>
                        <p>My position all over the world</p>
                        <p>View Next planning</p>
                    </div>
                    
                </div>
            <p className='mt-5 text-white'>copyright © 2022 wild photography world. </p>
        </div>
    );
};

export default Footer;