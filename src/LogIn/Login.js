import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../firebase.init';
import Loading from '../SheredComponents/Loading';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sendingResetMail, ResetMailError] = useSendPasswordResetEmail(
        auth
    );

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailButton = event => {
        setEmail(event.target.value);;
    }

    const handlePasswordButton = event => {
        setPassword(event.target.value);
    }

    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';


    const handleOnSubmitButton = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
        toast('Loging in');

    }


    console.log(user); 
    const handlePasswordResetButton = async () => {
        if (email) {
            toast('Password reset email is sent');
            await sendPasswordResetEmail(email);
        }
        else {
            toast("Enter your email Address first");
        }
    }



    const handleSignInWithGoogleButton = () => {
        signInWithGoogle();
    }

    const handleSignInWithGithubButton = () => {
        signInWithGithub();
    }

    if (user || googleUser || githubUser) {
        navigate(from, { replace: true });
    }
    return (
        <div className='footer-fallen-down'>
            <div className='w-50 mx-auto mt-3 border p-3 rounded'>
                <h2 className='text-primary text-center'>Please Log In</h2>
            <form onSubmit={handleOnSubmitButton}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input onBlur={handleEmailButton} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input onBlur={handlePasswordButton} type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <div>
                    <p className='fs-5 text-center'>New to Wild Photography World? <span><Link className='text-decoration-none' to='/signup'>Sign Up</Link></span></p>

                    <p className='fs-5 text-center'>Forget password? <span><Link onClick={handlePasswordResetButton} className='text-decoration-none' to='/login'>Click here</Link></span></p>
                </div>
                <div>
                    {
                        loading && <Loading></Loading>
                    }
                    {
                        error && <p className='text-danger text-center'>{error.message}</p>
                    }
                    {
                        ResetMailError && <p className='text-danger text-center'>{ResetMailError.message}</p>
                    }
                    {
                        sendingResetMail && <Loading></Loading>
                    }

                </div>
                <button type="submit" class="btn btn-primary w-50 d-block mx-auto">Log In</button>
            </form>

            <button onClick={handleSignInWithGoogleButton} type="submit" class="btn mt-5 btn-primary w-100 d-block mx-auto">Log In With Google</button>
            {
                googleError && <p className='mt-3 text-danger text-center'>{googleError?.message}</p>
            }
            {
                googleLoading && <p><Loading></Loading></p>
            }

            <button onClick={handleSignInWithGithubButton} type="submit" class="btn mt-5 btn-primary w-100 d-block mx-auto">Log In with Github</button>
            {
                githubError && <p className='mt-3 text-danger text-center'>{githubError?.message}</p>
            }
            {
                githubLoading && <p><Loading></Loading></p>
            }
            <ToastContainer />
        </div>
        </div>
    );
};

export default Login;