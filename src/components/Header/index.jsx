import React, { Component } from 'react';
import style from './Header.module.css';

class Header extends Component {

    render() {
        return (
            <div className={style.header}>
                <div className={style.title}>
                    <h2>News-manager</h2>
                </div>
            </div>
        )
    }
}

export default Header;