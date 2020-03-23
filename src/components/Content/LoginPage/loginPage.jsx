import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Container } from 'react-bootstrap';
import style from './LoginPage.module.css';

class LoginPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form className={style.login}>
                <div className="text-center mb-4">
                    <h1 className="h3 mb-3 font-weight-normal">Sign In</h1>
                    <p>Enter your login and password.</p>
                </div>

                <div className="form-label-group mt-1">
                    <label for="inputLogin">Login:</label>
                    <input type="text" id="inputLogin" className="form-control" placeholder="Login" required="" autofocus="" />
                </div>

                <div class="form-label-group mt-1">
                    <label for="inputPassword">Password:</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
                </div>
                <button className="btn btn-lg btn-primary btn-block mt-2" type="submit">Sign in</button>
            </form>
        )
    }
}

export default LoginPage;