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

            <div className='bg-danger container mt-5' style={{height: '2px'}}></div>

            <div>

            </div>
        </div>
    );
};

export default Blog;