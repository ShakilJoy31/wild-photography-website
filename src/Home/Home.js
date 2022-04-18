import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Footer from '../SheredComponents/Footer';
import ShowSample from './ShowSample';
import './Home.css'; 

const Home = () => {
    const [animals, setAnimals] = useState([]);
    useEffect(() => {
        fetch('samplePhotography.json')
            .then(res => res.json())
            .then(data => setAnimals(data))
    }, []);
    console.log(animals);
    return (
        <div>
            <div className='container fixed-image'>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Birds On the Flower</h3>
                            <p>Birds was sitting on the flower and searching for its life partner</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/2674052/pexels-photo-2674052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Angry Lion</h3>
                            <p>King Lion was angry because it's hungry and was searching for food. </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Dolphin Under the Sea</h3>
                            <p>It's a pleasure to meet with a Dolphin who is second clever animal. </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div>
                <div>
                    <h1 className='d-flex justify-content-center text-info container mt-4'>The Service I provide Right now. </h1>
                    <div className=' container'>
                        <div className='row g-4'>
                            {
                                animals.map(animal => <ShowSample animal={animal} key={animal.id}></ShowSample>)
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;