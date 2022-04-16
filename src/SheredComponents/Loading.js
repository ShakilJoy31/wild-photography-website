import React from 'react';

const Loading = () => {
    return (
        <div className='d-flex justify-content-center mt-2'>
            <div class="spinner-border text-danger" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;