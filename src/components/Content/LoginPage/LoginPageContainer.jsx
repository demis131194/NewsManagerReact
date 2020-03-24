import React, { Component } from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import LoginPage from './LoginPage';

import dataBase from '../../../redux/database.js'
import { setUserData } from '../../../redux/reducers/auth-reducer';

class LoginApiContainer extends Component {

    render() {
        return (
            <LoginPage handleSubmit={this.handleSubmit.bind(this)} />
        )
    }

    handleSubmit(login, password) {
        //AXIOS - LOGIN

        let logedUser = dataBase.users.find(user => (user.login == login) && (user.password == password));

        if(logedUser) {
            localStorage.setItem('user', JSON.stringify(logedUser))
            this.props.setUserData(logedUser);
            this.props.history.push("/")
        }

    }
}

let mapStateToProps = (state, own) => {
    return {
        history: own.history,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setUserData: (userData) => {
            let action = setUserData(userData);
            dispatch(action);
        },
    }
}


const LoginPageContainer = connect(mapStateToProps, mapDispatchToProps)(LoginApiContainer);

export default LoginPageContainer;