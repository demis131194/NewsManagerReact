import React, { Component } from 'react';
import style from './Contents.module.css';

class Content extends Component {

    render() {
        return (
            <div className={style.content}>
                <h1>Content!!!!</h1>
                <h1>Content!!!!</h1>
            </div>
        )
    }
}

export default Content;