import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Container } from 'react-bootstrap';
import style from './LoginPage.module.css';

class LoginPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            login: '',
            password: '',
        }
    }

    handleLoginChange(event) {
        this.setState({ login: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    render() {
        return (
            <form className={style.login} onSubmit={(e) => {
                e.preventDefault();
                this.props.handleSubmit(this.state.login, this.state.password)}}>
                    
                <div className="text-center mb-4">
                    <h1 className="h3 mb-3 font-weight-normal">Sign In</h1>
                    <p>Enter your login and password.</p>
                </div>

                <div className="form-label-group mt-1">
                    <label htmlFor="inputLogin">Login:</label>
                    <input type="text" id="inputLogin" className="form-control" placeholder="Login"
                        required={true} autoFocus="" value={this.state.login} onChange={this.handleLoginChange.bind(this)} />
                </div>

                <div className="form-label-group mt-1">
                    <label htmlFor="inputPassword">Password:</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password"
                        required={true} value={this.state.password} onChange={this.handlePasswordChange.bind(this)} />
                </div>
                <button className="btn btn-lg btn-primary btn-block mt-2" type="submit">Sign in</button>
            </form>
        )
    }



}

export default LoginPage;