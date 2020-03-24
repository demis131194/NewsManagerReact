import React, { Component } from 'react';
import HeaderContainer from './Header/HeaderContainer'
import Content from './Content/Content';
import Footer from './Footer';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <HeaderContainer />
                <Content />
                <Footer />
            </div>
        )
    }
}

export default App;