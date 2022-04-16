import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../src/images/logo/logo.jpg'

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-light bg-light container">
                <div class="container-fluid">
                    <Link to='/home' class="navbar-brand"><img style={{width: '80px', borderRadius: '10px'}} src={logo} alt="" /></Link>
                    <form class="d-flex">
                        <div>
                        <Link className='btn btn-outline-success me-3' to='/about'>About</Link>
                        <Link className='btn btn-outline-success me-3' to='/login'>Log In</Link>
                        <Link className='btn btn-outline-success me-3' to='/signup'>Sign Up</Link>
                        <Link className='btn btn-outline-success me-3' to='/checkout'>Check Out</Link>
                        </div>
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default Header;