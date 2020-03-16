import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import { Route } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import LoginPage from './LoginPage/loginPage';
import RegisterPage from './RegisterPage/RegisterPage';

class Content extends Component {

    render() {
        return (
            <Container fluid='true'>
                    <Route component={MainPage} path='/' exact/>
                    <Route component={LoginPage} path='/login' />
                    <Route component={RegisterPage} path='/register' />
            </Container>
        )
    }
}

export default Content;