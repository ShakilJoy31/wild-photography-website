import React, { useEffect, useState } from 'react';

const Home = () => {
    const [animals, setAnimals] = useState(); 
    useEffect(()=>{
        fetch('samplePhotography.json')
        .then(res => res.json())
        .then(data => setAnimals(data))
    },[]); 

    console.log(animals); 
    return (
        <div>
            
        </div>
    );
};

export default Home;