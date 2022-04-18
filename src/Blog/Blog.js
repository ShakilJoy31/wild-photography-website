import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='container'>
                <h1 className='text-center text-primary'>Difference between Authorization and Authentication</h1>
                <div className='d-flex justify-content-between'>
                    <div className='w-50 me-4 border border-3 p-3 rounded-3 mt-4 border-primary'>
                        <h2 className='text-info'>Authentication</h2>
                        <p>The person or user that can be random or anyone else whose act is completely correct or not will be justified. And this justification is called Authentication. It is actually a process of determining a person's activity can be permitted or not. For example we can say, If someone want to log into a website in. He or she will be justified first. That means his/her act becomes justified first. <br />So This is called Authentication. </p>
                    </div>

                    <div className='w-50 me-4 border border-3 p-3 rounded-3 mt-4 border-primary'>
                        <h2 className='text-info'>Authorization</h2>
                        <p>It is a kind of security mechanism to determine access levels. In a website or in a platform someone wants to do something or wants to use some resource.If that person is permitted to use the resource or is permitted to do that particuller action then this is called Authentication. </p>
                    </div>
                </div>
            </div>

            <div className='container mt-5' style={{ height: '2px', backgroundColor: 'palevioletred' }}></div>

            <div className='container border border-3 p-3 rounded-3 mt-4 border-primary'>
                <div>
                    <h2 className='text-info'>Why I am using Firebase: </h2>
                    <p>
                        <span className='fs-3 text-success'>Answer: </span>  Firebase is Authentication system that belongs with Google. Suppose someone makes a website in where people can go, get some information and do something. To let them do what ever they want the developer or creator of that website need to know that person. To know that person we use firebase authentication system made by Google. We use firebase to provide a better user experience. <br /> So to know that person or to verify that person or to provide a better user experience we use firebase.
                    </p>
                    <h2 className='text-info'>What Other options I have to implement authentication. </h2>
                    <p>
                        <span className='fs-3 text-success'>Answer: </span> There is obviously other option to implement authentication. The react-firebase-hooks makes the authentication system easier and fun to use by the developer. <br />
                        <span style={{ color: 'sienna' }} className='fs-4 text-danger'> We can implement authentication by:</span> <br /> <br /><span style={{ color: 'sienna' }} className='fs-5'>Password-based authentication. </span>
                        <br />
                        <span style={{ color: 'sienna' }} className='fs-5'>Biometric authentication</span>
                        <br />
                        <span style={{ color: 'sienna' }} className='fs-5'>Fingerprint authentication</span> <span style={{ color: 'sienna' }} className='fs-5'>Speaker Recognition</span>
                        <br />
                        <span style={{ color: 'sienna' }} className='fs-5'>Eye Scanners</span>
                    </p>
                </div>

            </div>

            <div className='container mt-5' style={{height: '2px', backgroundColor: 'palevioletred'}}></div>

            <div className='container border border-3 p-3 rounded-3 border-primary mt-5'>
                <h1 className='text-info'>The other services provided by firebase are written below: </h1>
                <p> <br /> <br /><span style={{ color: 'sienna' }} className='fs-5'>1. Hosting </span>
                        <br />
                        <span style={{ color: 'sienna' }} className='fs-5'>2. Cloud Firestore</span>
                        
                        <br /> <span style={{ color: 'sienna' }} className='fs-5'>4. Cloud Storage</span>
                        <br />
                        <span style={{ color: 'sienna' }} className='fs-5'>5. Google Analytics</span></p>
            </div>
        </div>
    );
};

export default Blog;