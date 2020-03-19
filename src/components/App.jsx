import React, { Component } from 'react';
import Header from './Header/Header'
import Content from './Content/Content';
import Footer from './Footer';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <Content />
                <Footer />
            </div>
        )
    }
}

export default App;