import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../src/images/logo/logo.jpg'
import auth from '../firebase.init';
import './Header.css'; 

const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    const handleLogOut = () =>{
        signOut(auth); 
    }
    return (
        <div>
            <nav class="navbar navbar-light bg-light container">
                <div class="container-fluid">
                    <Link to='/home' class="navbar-brand"><img style={{width: '80px', borderRadius: '10px'}} src={logo} alt="" /></Link>
                    <form>
                        <div>
                        <Link className='btn btn-outline-success me-3' to='/about'>About</Link>

                        <Link className='btn btn-outline-success me-3' to='/blog'>Blog</Link>
                        
                        <Link className='btn btn-outline-success me-3' to='/checkout'>Check Out</Link>

                        {
                            user? <Link onClick={handleLogOut}  className='btn btn-outline-success me-3' to='/home'>Log Out</Link> : <Link className='btn btn-outline-success me-3' to='/login'>Log In</Link>
                        }

                        <Link className='btn btn-outline-success me-3' to='/signup'>Sign Up</Link>
                        </div>
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default Header;