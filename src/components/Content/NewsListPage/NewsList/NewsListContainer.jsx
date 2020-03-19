import React, { Component } from 'react';
import NewsItem from './NewsItem/NewsItem';
import NewsList from './NewsList';

class NewsListContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <NewsList newsContent={this.props.store.getState().mainContent.newsPage.newsContent }/>
        )
    }
}

export default NewsListContainer;