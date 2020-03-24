import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/NavbarToggle';



let Header = (props) => {
    // Refactor (this is testing)
    let auth;
    let welcome = 'Hi, Guest!'

    if (props.userData.isAuth) {
        auth = <Link to='/login' className='nav-link' onClick={props.resetData}>Logout</Link>
        welcome = `Hi, ${props.userData.name} ${props.userData.surname}`
    } else {
        auth = [<Link to='/login' className='nav-link'>Sign in</Link>, <Link to='/register' className='nav-link' >Register</Link>]
    }
    return (
        <Navbar bg='dark' variant='dark'>
            <NavbarBrand className='nav-link'>
                <Link to='/' className='nav-link text-white'>News-manager</Link>
            </NavbarBrand>
            <NavbarToggle aria-controls="responsive-navbar-nav" />
            <span className='navbar-text pl-5 text-white'>{welcome}</span>
            <NavbarCollapse id="responsive-navbar-nav">
                <Nav className='ml-auto'>
                    {auth}
                </Nav>
            </NavbarCollapse>
        </Navbar>
    )
}

export default Header;