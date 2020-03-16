import React, { Component } from 'react';
import SearchNewsComponent from './SearchNewsComponent/SearchNewsComponent';
import NewsList from './NewsList/NewsList';

class MainPage extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <SearchNewsComponent />
                <hr/>
                <hr/>
                <hr/>
                <NewsList news={this.props.news}/>
            </div>
        );
    }
}

export default MainPage;