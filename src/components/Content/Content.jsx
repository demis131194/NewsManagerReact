import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import { Route } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import LoginPage from './LoginPage/LoginPage';
import RegisterPage from './RegisterPage/RegisterPage';

class Content extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container fluid='true'>
                    <Route render={ () => <MainPage /> } path='/' exact/>
                    <Route render={ () => <LoginPage /> } path='/login' />
                    <Route render={ () => <RegisterPage /> } path='/register' />
            </Container>
        )
    }
}

export default Content;