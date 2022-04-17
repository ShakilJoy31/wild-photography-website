import React from 'react';
import myPicture from '../images/my-picture/IMG_6967.jpg'; 
import './About.css'; 

const About = () => {
    return (
        <div>
            <div>
                <div className='d-flex justify-content-center'>
                <img className='w-25 make-round' src={myPicture} alt="" />
                </div>
                    <div className='border border-3 mx-auto p-3 w-75 rounded-3 mt-4 border-primary'>
                    <h2 className='d-flex justify-content-center'>My Goal.</h2>
                    <p className='d-flex justify-content-center w-100 mx-auto'>
                        Good Day Sir, <br /> This is Shakil. Today I'm going to share with you about my goal. Or what I'm going to do in next 3 or 4 months. What exactly I want to achieve. So let's start. Before joining Programming hero team I couldn't decide what I should do in my future. I just was like a ship without a rudder. Then one day one of my friend showed me P hero website. I entered there with curiosity. Then the more I read or know the more I satisfied. I knew their course curriculum and teaching style. I just was impressed. Then I enrolled to 5th batch. From the beginning of entering to this course I studied hard and follow Our instructor Jhanker Mahbub sir and their team member. I know if I make myself qualified I can be haired if my luck favour. And I want that so much. My next plan is to get chance to SCIC and then to go a certain position so that I can be haired. And then my plan is to complete ACC course. For the rest of my life I want to be a student of P hero. And I feel proud to be a student of Jhanker Mahbub. 
                    </p>
                    </div>
                </div>
            </div>
    );
};

export default About;