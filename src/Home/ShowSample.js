import React from 'react';
import { Link } from 'react-router-dom';
import './ShowSample.css'; 

const ShowSample = (props) => {
    const {name, img, ratings, capturedPlace, description, price} = props.animal; 
    return (
        <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className='w-100  make-border text-center'>
            <img className='w-100 rounded' src={img} alt="" />
            <h1 className='name-color'>{name}</h1>
            <p>Place: <span className='place-color'>{capturedPlace}</span></p>
            <p>Ratings: <span className='rating-color'>{ratings}</span></p>
            <p>{description}</p>
            <h3>Price: <span className='text-danger'>{price}</span></h3>
            <Link className='btn btn-outline-success w-100' to='/checkout'>Checkout</Link>
            </div>
        </div>
    );
};

export default ShowSample;