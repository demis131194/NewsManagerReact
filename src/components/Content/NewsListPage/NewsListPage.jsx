import React, { Component } from 'react';
import SearchNewsContainer from './SearchNewsComponent/SearchNewsContainer';
import NewsListContainer from './NewsList/NewsListContainer';

class NewsListPage extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <SearchNewsContainer />
                <NewsListContainer />
            </div>
        );
    }
}

export default NewsListPage;