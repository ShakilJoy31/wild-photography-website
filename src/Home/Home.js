import React, { useEffect, useState } from 'react';
import Footer from '../SheredComponents/Footer';
import ShowSample from './ShowSample';

const Home = () => {
    const [animals, setAnimals] = useState([]); 
    useEffect(()=>{
        fetch('samplePhotography.json')
        .then(res => res.json())
        .then(data => setAnimals(data))
    },[]); 
    console.log(animals); 
    return (
        <div>
            <h1 className='d-flex justify-content-center text-info container'>The Pictures that have made me to be Called to Take Wild Picture. </h1>
            <div className='mt-5 container'>
            <div className='row g-4'>
            {
                animals.map(animal => <ShowSample animal={animal} key={animal.id}></ShowSample>)
            }
            </div>
            </div>
            
        </div>
    );
};

export default Home;