import React, { Component } from 'react';
import Header from './Header/Header'
import Content from './Content/Content';
import Footer from './Footer'
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header />
                    <Content store={this.props.store} />
                    <Footer />
                </BrowserRouter>
            </div>
        )
    }
}

export default App;