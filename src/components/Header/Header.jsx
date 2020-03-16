import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/NavbarToggle';


class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navbar bg='dark' variant='dark'>
                <NavbarBrand className='nav-link'>
                    <Link to='/' className='nav-link text-white'>
                        News-manager
                    </Link>
                </NavbarBrand>
                <NavbarToggle aria-controls="responsive-navbar-nav" />
                <NavbarCollapse id="responsive-navbar-nav">
                    <Nav className='ml-auto'>
                        <Link to='/login' className='nav-link'>
                            Loggin
                        </Link>
                        <Link to='/register' className='nav-link' >
                            Register
                        </Link>
                    </Nav>
                </NavbarCollapse>
            </Navbar>
        )
    }
}

export default Header;