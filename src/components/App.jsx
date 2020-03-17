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
                    <Content state={this.props.state.mainContent} chAuthEvent={this.props.chAuthEvent} />
                    <Footer />
                </BrowserRouter>
            </div>
        )
    }
}

export default App;