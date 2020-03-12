import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'


class Header extends Component {

    render() {
        return (
            <Navbar bg='dark' variant='dark'>
                <NavbarBrand>News-manager</NavbarBrand>
            </Navbar>
        )
    }
}

export default Header;