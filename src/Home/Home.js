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

            <div className='mt-4 container text-center'>
                <h2 className='text-danger'>Lion Photo that made me precious.</h2>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1575550959106-5a7defe28b56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2lsZGxpZmV8ZW58MHx8MHx8&w=1000&q=80"
                            alt="First slide"
                        />
                        
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src="https://i.pinimg.com/736x/c2/bc/03/c2bc0399833bc0485a79854d51140c26.jpg"
                            alt="Second slide"
                        />
                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://c4.wallpaperflare.com/wallpaper/229/797/204/africa-animals-lions-nature-wallpaper-preview.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://media.istockphoto.com/photos/male-lion-staking-prey-picture-id1226843930?k=20&m=1226843930&s=612x612&w=0&h=lLIVPUQA_A4sbBOfdQ1k3ikLio7unEpRu22iDUab3HM="
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.pinimg.com/originals/d8/02/c1/d802c12ab73b23e7e040ec489df009fb.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIfZXC9vw4TWZynbxE_xBmvSU5SRLcKjpcP9gAdyc-8h_qqg3X0nisn5REt-wDZ1vzP0c&usqp=CAU"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://thumbs.dreamstime.com/b/male-lion-standing-grass-full-body-87337074.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>

            </div>
        </div>
    );
};

export default Home;