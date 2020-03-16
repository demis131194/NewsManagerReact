import React, { Component } from 'react';
import SearchNewsComponent from './SearchNewsComponent/SearchNewsComponent';
import NewsList from './NewsList/NewsList';

class MainPage extends Component {

    render() {
        return (
            <div>
                <SearchNewsComponent />
                <NewsList />
            </div>
        );
    }
}

export default MainPage;