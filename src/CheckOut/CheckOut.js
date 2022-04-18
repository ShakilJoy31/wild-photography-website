import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Footer from '../SheredComponents/Footer';

const CheckOut = () => {
    return (
        <div>
            <div className='mt-4'>
            <h2 className='text-info'>This is checkout. You can Now see the Full picture of a individual photo.  </h2>
        </div>

        <div className='container fixed-image'>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/459177/pexels-photo-459177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Birds On the Tree</h3>
                            <p>Birds was sitting on the tree and searching for its life partner</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/2883510/pexels-photo-2883510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>My Most Favourite Shy animal</h3>
                            <p>The animal I like mose and I have an animal like this. </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100" src='https://images.pexels.com/photos/905248/pexels-photo-905248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Beautiful Bird</h3>
                            <p>The most beautiful birds photography have I ever take. </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default CheckOut;