import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
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
                    <NavLink to='/' className='nav-link text-white'>
                        News-manager
                    </NavLink>
                </NavbarBrand>
                <NavbarToggle aria-controls="responsive-navbar-nav" />
                <NavbarCollapse id="responsive-navbar-nav">
                    <Nav className='ml-auto'>
                        <Nav.Link>
                            <NavLink to='/login' className='nav-link'>
                                Loggin
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to='/register' className='nav-link' >
                                Register
                            </NavLink>
                        </Nav.Link>
                    </Nav>
                </NavbarCollapse>
            </Navbar>
        )
    }
}

export default Header;