import React, { Component } from 'react';
import style from './Contents.module.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'

class Content extends Component {

    render() {
        return (
            <Container fluid='true' className={style.main}>
                <h1>Content!!!!1</h1>
                <h1>Content!!!!</h1>
                <h1>Content!!!!</h1>
                <h1>Content!!!!</h1>
                <h1>Content!!!!</h1>
            </Container>
        )
    }
}

export default Content;