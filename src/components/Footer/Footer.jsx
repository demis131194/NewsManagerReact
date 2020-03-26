import React, { Component } from 'react';
import style from './Footer.module.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'


class Footer extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className={style.footer}>
                <Container>
                    <span>News-manager FOOOTER</span>
                </Container>
            </footer>
        )
    }
}

export default Footer;