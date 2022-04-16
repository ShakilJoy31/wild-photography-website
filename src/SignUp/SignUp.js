import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Loading from '../SheredComponents/Loading';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    const handleEmailButton = event => {
        setEmail(event.target.value);;
    }

    const handlePasswordButton = event => {
        setPassword(event.target.value);
    }
    const handleNameButton = event => {
        setName(event.target.value);
    }
    const handleAddressButton = event => {
        setAddress(event.target.value);
    }

    const handleOnSubmitButton = event => {
        event.preventDefault();
        createUserWithEmailAndPassword(email, password); 
    }
    const navigate = useNavigate(); 
    if(user){
        navigate('/home'); 
    }

    return (
        <div className='w-50 mx-auto mt-5'>
            <form onSubmit={handleOnSubmitButton}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input onBlur={handleNameButton} type="type" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input onBlur={handleEmailButton} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input onBlur={handlePasswordButton} type="password" class="form-control" id="exampleInputPassword1" />
                </div>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Address</label>
                    <input onBlur={handleAddressButton} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <div>
                    {
                        loading && <Loading></Loading>
                    }

                    {
                        error && <p className='text-danger text-center'>{error.message}</p>
                    }
                </div>
                <div>
                    <p className='fs-5'>Already have an Account? <span><Link className='text-decoration-none' to='/login'>Log In</Link></span></p>
                </div>
                <button type="submit" class="btn w-50 d-block mx-auto btn-primary">Log In</button>
            </form>
        </div>
    );
};

export default SignUp;