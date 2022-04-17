import React from 'react';
import './ShowSample.css'; 

const ShowSample = (props) => {
    const {name, img, ratings, capturedPlace} = props.animal; 
    return (
        <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className='w-100  make-border text-center'>
            <img className='w-100 rounded' src={img} alt="" />
            <h1>{name}</h1>
            <h2>{capturedPlace}</h2>
            <p>Ratings: {ratings}</p>
            </div>
        </div>
    );
};

export default ShowSample;