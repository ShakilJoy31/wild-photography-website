import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 

    const handleEmailButton = event =>{
        setEmail(event.target.value);; 
    }

    const handlePasswordButton = event =>{
        setPassword(event.target.value); 
    }

    const handleOnSubmitButton = event =>{
        event.preventDefault(); 
        signInWithEmailAndPassword(email, password); 
    }


    return (
        <div className='w-50 mx-auto mt-5'>
            <form onSubmit={handleOnSubmitButton}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input onBlur={handleEmailButton} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input onBlur={handlePasswordButton}type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <div>
                    <p className='fs-5'>New to Wild Photography World? <span><Link className='text-decoration-none' to='/signup'>Sign Up</Link></span></p>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Login;