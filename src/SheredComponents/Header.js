import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../src/images/logo/logo.jpg'
import auth from '../firebase.init';
import './Header.css';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    const handleLogOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <div className='container'>
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#"><Link to='/home' class="navbar-brand"><img style={{ width: '80px', borderRadius: '10px' }} src={logo} alt="" /></Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <NavDropdown title="Link" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="https://www.quora.com/Can-you-tell-us-your-sad-life-story">My Story</NavDropdown.Item>
                                    <NavDropdown.Item href="https://www.canon-europe.com/cameras/eos-250d/specifications/">Camera Specification</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="https://medium.com/swlh/10-ways-to-learn-about-yourself-1d694023e0fd">
                                        Learn more
                                    </NavDropdown.Item>
                                </NavDropdown>

                            </Nav>
                            <Form className="d-flex">
                                <form>
                                    <div>
                                        <Link className='btn btn-outline-success me-3' to='/about'>About</Link>

                                        <Link className='btn btn-outline-success me-3' to='/blog'>Blog</Link>

                                        <Link className='btn btn-outline-success me-3' to='/checkout'>Check Out</Link>

                                        {
                                            user ? <Link onClick={handleLogOut} className='btn btn-outline-success me-3' to='/home'>Log Out</Link> : <Link className='btn btn-outline-success me-3' to='/login'>Log In</Link>
                                        }

                                        <Link className='btn btn-outline-success me-3' to='/signup'>Sign Up</Link>
                                    </div>
                                </form>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;