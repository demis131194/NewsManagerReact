import React, { Component } from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import Header from './Header';


import dataBase from '../../redux/database.js'
import { setUserData } from '../../redux/reducers/auth-reducer';

class HeaderApiContainer extends Component {

    render() {
        return (
            <Header userData={this.props.authUser} resetData={this.handleLogoutClick.bind(this)} />
        )
    }

    handleLogoutClick() {
        localStorage.removeItem('user');
        this.props.resetData();
    }
}

let mapStateToProps = (state) => {
    return {
        authUser: state.authUser,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setUserData: (userData) => {
            let action = setUserData(userData);
            dispatch(action);
        },
        resetData: () => {
            let action = setUserData({
                id: null,
                name: null,
                surname: null,
                login: null,
                role: null,
            });
            dispatch(action);
        },
        
    }
}


const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderApiContainer);

export default HeaderContainer;