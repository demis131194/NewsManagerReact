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
                <SearchNewsContainer store={this.props.store} />
                <hr/>
                <hr/>
                <hr/>
                <NewsListContainer store={this.props.store}/>
            </div>
        );
    }
}

export default NewsListPage;